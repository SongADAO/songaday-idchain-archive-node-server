import { Address, Bytes, ipfs, json, JSONValueKind } from '@graphprotocol/graph-ts';
import { constants } from "@amxx/graphprotocol-utils";
import { IERC721 } from '@openzeppelin/subgraphs/generated/erc721/IERC721';
import { ERC721Contract } from '@openzeppelin/subgraphs/generated/schema';
import { ERC721Token, ERC721TokenAttribute, ERC721TokenMetadata, ERC721TokenTrait, ERC721TokenTraitValue } from '../../generated/schema';

export function fetchERC721TokenIpfsMetadata(
  contractId: string,
  tokenId: string,
  refresh: boolean
): ERC721TokenMetadata {
  let metadata = ERC721TokenMetadata.load(tokenId);
  const contract = ERC721Contract.load(Bytes.fromHexString(contractId));
  const token = ERC721Token.load(tokenId);

  if ((metadata == null || refresh) && contract !== null && contract.supportsMetadata && token != null) {
    metadata = new ERC721TokenMetadata(tokenId);
    token.metadata = metadata.id;
    const erc721 = IERC721.bind(Address.fromString(contract.id.toHex()));
    const try_tokenURI = erc721.try_tokenURI(token.identifier);
    const uri = try_tokenURI.reverted ? '' : try_tokenURI.value;

    if (uri.includes('ipfs://')) {
      const ipfsHash = uri.replace('ipfs://', '');
      const tokenURIBytes = ipfs.cat(ipfsHash);
      if (tokenURIBytes) {
        const tokenURIContent = json.try_fromBytes(tokenURIBytes);
        if (tokenURIContent.isOk && tokenURIContent.value.kind == JSONValueKind.OBJECT) {
          const tokenMetadata = tokenURIContent.value.toObject();

          const name = tokenMetadata.get('name');
          metadata.name = name ? name.toString() : null;

          const description = tokenMetadata.get('description');
          metadata.description = description ? description.toString() : null;

          const image = tokenMetadata.get('image');
          metadata.image = image ? image.toString() : null;

          const created_by = tokenMetadata.get('created_by');
          metadata.created_by = created_by ? created_by.toString() : null;

          const animation_url = tokenMetadata.get('animation_url');
          metadata.animation_url = animation_url ? animation_url.toString() : null;

          const external_url = tokenMetadata.get('external_url');
          metadata.external_url = external_url ? external_url.toString() : null;

          const youtube_url = tokenMetadata.get('youtube_url');
          metadata.youtube_url = youtube_url ? youtube_url.toString() : null;

          const attributes = tokenMetadata.get('attributes');
          if (attributes && attributes.kind == JSONValueKind.ARRAY) {
            const attributesArray = attributes.toArray();
            for (let i = 0; i < attributesArray.length; i++) {
              const attributeId = metadata.id.concat('/').concat(i.toString());

              let attribute = ERC721TokenAttribute.load(attributeId);
              if (attribute == null && attributesArray[i].kind == JSONValueKind.OBJECT) {
                const attributeData = attributesArray[i].toObject();
                attribute = new ERC721TokenAttribute(attributeId);
                attribute.metadata = metadata.id;

                const traitType = attributeData.get('trait_type');
                attribute.trait_type = traitType ? traitType.toString() : '';

                const value = attributeData.get('value');
                if (value && value.kind == JSONValueKind.STRING) {
                  attribute.value = value ? value.toString() : '';
                } else if (value && value.kind == JSONValueKind.NUMBER) {
                  attribute.value = value ? value.toBigInt().toString() : '';
                }

                const maxValue = attributeData.get('max_value');
                attribute.max_value = maxValue ? maxValue.toBigInt() : null;

                const displayType = attributeData.get('display_type');
                attribute.display_type = displayType ? displayType.toString() : null;

                attribute.save();
              }

              if (attribute != null && attribute.trait_type) {
                const traitId = contract.id.toHex().concat('/').concat(attribute.trait_type.toLowerCase());

                let trait = ERC721TokenTrait.load(traitId);
                if (trait == null) {
                  trait = new ERC721TokenTrait(traitId);
                  trait.contract = contract.id;
                  trait.trait_type = attribute.trait_type;
                  trait.value_count = constants.BIGINT_ZERO;
                  trait.save();
                }

                if (trait != null && attribute.value) {
                  const traitValueId = trait.id.concat('/').concat(attribute.value.toLowerCase());

                  let traitValue = ERC721TokenTraitValue.load(traitValueId);
                  if (traitValue == null) {
                    traitValue = new ERC721TokenTraitValue(traitValueId);
                    traitValue.contract = contract.id;
                    traitValue.token_trait = trait.id;
                    traitValue.value = attribute.value;
                    traitValue.max_value = attribute.max_value;
                    traitValue.display_type = attribute.display_type;
                    traitValue.token_count = constants.BIGINT_ZERO;
                    traitValue.save();

                    trait.value_count = trait.value_count.plus(constants.BIGINT_ONE);
                    trait.save();
                  }

                  if (traitValue != null) {
                    traitValue.token_count = traitValue.token_count.plus(constants.BIGINT_ONE);
                    traitValue.save();

                    attribute.token_trait_value = traitValue.id;
                    attribute.save();
                  }
                }
              }
            }
          }
        }
      }
    }
    metadata.save();
    token.save();
  }
  return metadata as ERC721TokenMetadata;
}
