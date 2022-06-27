import {
	Address,
	BigInt,
} from '@graphprotocol/graph-ts'

import {
	Transfer as TransferEvent,
} from '@openzeppelin/subgraphs/generated/erc721/IERC721';

import {
	constants,
	decimals,
} from '@amxx/graphprotocol-utils'

import {
	fetchAccount,
} from '@openzeppelin/subgraphs/src/fetch/account'

import {
	fetchERC721
} from '@openzeppelin/subgraphs/src/fetch/erc721'

import {
	fetchERC721Balance
} from '../fetch/erc721balance'

export function handleTransfer(event: TransferEvent): void {
	let contract = fetchERC721(event.address)
	if (contract != null) {
		if (event.params.from == Address.zero()) {
			let totalSupply        = fetchERC721Balance(contract, null)
			totalSupply.valueExact = totalSupply.valueExact.plus(constants.BIGINT_ONE)
			totalSupply.value      = decimals.toDecimals(totalSupply.valueExact)
			totalSupply.save()
		} else {
			let from               = fetchAccount(event.params.from)
			let balance            = fetchERC721Balance(contract, from)
			balance.valueExact     = balance.valueExact.minus(constants.BIGINT_ONE)
			balance.value          = decimals.toDecimals(balance.valueExact)
			balance.save()
		}

		if (event.params.to == Address.zero()) {
			let totalSupply        = fetchERC721Balance(contract, null)
			totalSupply.valueExact = totalSupply.valueExact.minus(constants.BIGINT_ONE)
			totalSupply.value      = decimals.toDecimals(totalSupply.valueExact)
			totalSupply.save()
		} else {
			let to                 = fetchAccount(event.params.to)
			let balance            = fetchERC721Balance(contract, to)
			balance.valueExact     = balance.valueExact.plus(constants.BIGINT_ONE)
			balance.value          = decimals.toDecimals(balance.valueExact)
			balance.save()
		}
	}
}
