import {
  Account,
  ERC721Contract
} from "@openzeppelin/subgraphs/generated/schema";

import { constants } from "@amxx/graphprotocol-utils";

import { ERC721Balance } from "../../generated/schema";

export function fetchERC721Balance(
  contract: ERC721Contract,
  account: Account | null
): ERC721Balance {
  let id = contract.id
    .toHex()
    .concat("/")
    .concat(account ? account.id.toHex() : "totalSupply");
  let balance = ERC721Balance.load(id);

  if (balance == null) {
    balance = new ERC721Balance(id);
    balance.contract = contract.id;
    balance.account = account ? account.id : null;
    balance.value = constants.BIGDECIMAL_ZERO;
    balance.valueExact = constants.BIGINT_ZERO;
    balance.save();
  }

  return balance as ERC721Balance;
}
