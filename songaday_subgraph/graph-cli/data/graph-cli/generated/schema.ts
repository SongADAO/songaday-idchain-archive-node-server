// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Account extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Account must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Account", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Account | null {
    return changetype<Account | null>(store.get("Account", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get asERC721(): Bytes | null {
    let value = this.get("asERC721");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set asERC721(value: Bytes | null) {
    if (!value) {
      this.unset("asERC721");
    } else {
      this.set("asERC721", Value.fromBytes(<Bytes>value));
    }
  }

  get ERC721tokens(): Array<string> {
    let value = this.get("ERC721tokens");
    return value!.toStringArray();
  }

  set ERC721tokens(value: Array<string>) {
    this.set("ERC721tokens", Value.fromStringArray(value));
  }

  get ERC721operatorOwner(): Array<string> {
    let value = this.get("ERC721operatorOwner");
    return value!.toStringArray();
  }

  set ERC721operatorOwner(value: Array<string>) {
    this.set("ERC721operatorOwner", Value.fromStringArray(value));
  }

  get ERC721operatorOperator(): Array<string> {
    let value = this.get("ERC721operatorOperator");
    return value!.toStringArray();
  }

  set ERC721operatorOperator(value: Array<string>) {
    this.set("ERC721operatorOperator", Value.fromStringArray(value));
  }

  get ERC721transferFromEvent(): Array<string> {
    let value = this.get("ERC721transferFromEvent");
    return value!.toStringArray();
  }

  set ERC721transferFromEvent(value: Array<string>) {
    this.set("ERC721transferFromEvent", Value.fromStringArray(value));
  }

  get ERC721transferToEvent(): Array<string> {
    let value = this.get("ERC721transferToEvent");
    return value!.toStringArray();
  }

  set ERC721transferToEvent(value: Array<string>) {
    this.set("ERC721transferToEvent", Value.fromStringArray(value));
  }

  get ERC721balances(): Array<string> {
    let value = this.get("ERC721balances");
    return value!.toStringArray();
  }

  set ERC721balances(value: Array<string>) {
    this.set("ERC721balances", Value.fromStringArray(value));
  }

  get events(): Array<string> {
    let value = this.get("events");
    return value!.toStringArray();
  }

  set events(value: Array<string>) {
    this.set("events", Value.fromStringArray(value));
  }
}

export class ERC721Contract extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC721Contract entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type ERC721Contract must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ERC721Contract", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): ERC721Contract | null {
    return changetype<ERC721Contract | null>(
      store.get("ERC721Contract", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get asAccount(): Bytes {
    let value = this.get("asAccount");
    return value!.toBytes();
  }

  set asAccount(value: Bytes) {
    this.set("asAccount", Value.fromBytes(value));
  }

  get supportsMetadata(): boolean {
    let value = this.get("supportsMetadata");
    return value!.toBoolean();
  }

  set supportsMetadata(value: boolean) {
    this.set("supportsMetadata", Value.fromBoolean(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get symbol(): string | null {
    let value = this.get("symbol");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set symbol(value: string | null) {
    if (!value) {
      this.unset("symbol");
    } else {
      this.set("symbol", Value.fromString(<string>value));
    }
  }

  get tokens(): Array<string> {
    let value = this.get("tokens");
    return value!.toStringArray();
  }

  set tokens(value: Array<string>) {
    this.set("tokens", Value.fromStringArray(value));
  }

  get operators(): Array<string> {
    let value = this.get("operators");
    return value!.toStringArray();
  }

  set operators(value: Array<string>) {
    this.set("operators", Value.fromStringArray(value));
  }

  get transfers(): Array<string> {
    let value = this.get("transfers");
    return value!.toStringArray();
  }

  set transfers(value: Array<string>) {
    this.set("transfers", Value.fromStringArray(value));
  }
}

export class ERC721Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC721Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ERC721Token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ERC721Token", id.toString(), this);
    }
  }

  static load(id: string): ERC721Token | null {
    return changetype<ERC721Token | null>(store.get("ERC721Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contract(): Bytes {
    let value = this.get("contract");
    return value!.toBytes();
  }

  set contract(value: Bytes) {
    this.set("contract", Value.fromBytes(value));
  }

  get identifier(): BigInt {
    let value = this.get("identifier");
    return value!.toBigInt();
  }

  set identifier(value: BigInt) {
    this.set("identifier", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get approval(): Bytes {
    let value = this.get("approval");
    return value!.toBytes();
  }

  set approval(value: Bytes) {
    this.set("approval", Value.fromBytes(value));
  }

  get uri(): string | null {
    let value = this.get("uri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uri(value: string | null) {
    if (!value) {
      this.unset("uri");
    } else {
      this.set("uri", Value.fromString(<string>value));
    }
  }

  get transfers(): Array<string> {
    let value = this.get("transfers");
    return value!.toStringArray();
  }

  set transfers(value: Array<string>) {
    this.set("transfers", Value.fromStringArray(value));
  }

  get metadata(): string | null {
    let value = this.get("metadata");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set metadata(value: string | null) {
    if (!value) {
      this.unset("metadata");
    } else {
      this.set("metadata", Value.fromString(<string>value));
    }
  }
}

export class ERC721Operator extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC721Operator entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ERC721Operator must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ERC721Operator", id.toString(), this);
    }
  }

  static load(id: string): ERC721Operator | null {
    return changetype<ERC721Operator | null>(store.get("ERC721Operator", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contract(): Bytes {
    let value = this.get("contract");
    return value!.toBytes();
  }

  set contract(value: Bytes) {
    this.set("contract", Value.fromBytes(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get operator(): Bytes {
    let value = this.get("operator");
    return value!.toBytes();
  }

  set operator(value: Bytes) {
    this.set("operator", Value.fromBytes(value));
  }

  get approved(): boolean {
    let value = this.get("approved");
    return value!.toBoolean();
  }

  set approved(value: boolean) {
    this.set("approved", Value.fromBoolean(value));
  }
}

export class ERC721Transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC721Transfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ERC721Transfer must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ERC721Transfer", id.toString(), this);
    }
  }

  static load(id: string): ERC721Transfer | null {
    return changetype<ERC721Transfer | null>(store.get("ERC721Transfer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get emitter(): Bytes {
    let value = this.get("emitter");
    return value!.toBytes();
  }

  set emitter(value: Bytes) {
    this.set("emitter", Value.fromBytes(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get contract(): Bytes {
    let value = this.get("contract");
    return value!.toBytes();
  }

  set contract(value: Bytes) {
    this.set("contract", Value.fromBytes(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value!.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }
}

export class ERC721TokenAttribute extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC721TokenAttribute entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ERC721TokenAttribute must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ERC721TokenAttribute", id.toString(), this);
    }
  }

  static load(id: string): ERC721TokenAttribute | null {
    return changetype<ERC721TokenAttribute | null>(
      store.get("ERC721TokenAttribute", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get metadata(): string {
    let value = this.get("metadata");
    return value!.toString();
  }

  set metadata(value: string) {
    this.set("metadata", Value.fromString(value));
  }

  get token_trait_value(): string | null {
    let value = this.get("token_trait_value");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set token_trait_value(value: string | null) {
    if (!value) {
      this.unset("token_trait_value");
    } else {
      this.set("token_trait_value", Value.fromString(<string>value));
    }
  }

  get trait_type(): string {
    let value = this.get("trait_type");
    return value!.toString();
  }

  set trait_type(value: string) {
    this.set("trait_type", Value.fromString(value));
  }

  get value(): string {
    let value = this.get("value");
    return value!.toString();
  }

  set value(value: string) {
    this.set("value", Value.fromString(value));
  }

  get max_value(): BigInt | null {
    let value = this.get("max_value");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set max_value(value: BigInt | null) {
    if (!value) {
      this.unset("max_value");
    } else {
      this.set("max_value", Value.fromBigInt(<BigInt>value));
    }
  }

  get display_type(): string | null {
    let value = this.get("display_type");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set display_type(value: string | null) {
    if (!value) {
      this.unset("display_type");
    } else {
      this.set("display_type", Value.fromString(<string>value));
    }
  }
}

export class ERC721TokenMetadata extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC721TokenMetadata entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ERC721TokenMetadata must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ERC721TokenMetadata", id.toString(), this);
    }
  }

  static load(id: string): ERC721TokenMetadata | null {
    return changetype<ERC721TokenMetadata | null>(
      store.get("ERC721TokenMetadata", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get description(): string | null {
    let value = this.get("description");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (!value) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(<string>value));
    }
  }

  get image(): string | null {
    let value = this.get("image");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set image(value: string | null) {
    if (!value) {
      this.unset("image");
    } else {
      this.set("image", Value.fromString(<string>value));
    }
  }

  get created_by(): string | null {
    let value = this.get("created_by");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set created_by(value: string | null) {
    if (!value) {
      this.unset("created_by");
    } else {
      this.set("created_by", Value.fromString(<string>value));
    }
  }

  get animation_url(): string | null {
    let value = this.get("animation_url");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set animation_url(value: string | null) {
    if (!value) {
      this.unset("animation_url");
    } else {
      this.set("animation_url", Value.fromString(<string>value));
    }
  }

  get external_url(): string | null {
    let value = this.get("external_url");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set external_url(value: string | null) {
    if (!value) {
      this.unset("external_url");
    } else {
      this.set("external_url", Value.fromString(<string>value));
    }
  }

  get youtube_url(): string | null {
    let value = this.get("youtube_url");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set youtube_url(value: string | null) {
    if (!value) {
      this.unset("youtube_url");
    } else {
      this.set("youtube_url", Value.fromString(<string>value));
    }
  }

  get attributes(): Array<string> {
    let value = this.get("attributes");
    return value!.toStringArray();
  }

  set attributes(value: Array<string>) {
    this.set("attributes", Value.fromStringArray(value));
  }
}

export class ERC721TokenTrait extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC721TokenTrait entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ERC721TokenTrait must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ERC721TokenTrait", id.toString(), this);
    }
  }

  static load(id: string): ERC721TokenTrait | null {
    return changetype<ERC721TokenTrait | null>(
      store.get("ERC721TokenTrait", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get trait_type(): string {
    let value = this.get("trait_type");
    return value!.toString();
  }

  set trait_type(value: string) {
    this.set("trait_type", Value.fromString(value));
  }

  get value_count(): BigInt {
    let value = this.get("value_count");
    return value!.toBigInt();
  }

  set value_count(value: BigInt) {
    this.set("value_count", Value.fromBigInt(value));
  }

  get values(): Array<string> {
    let value = this.get("values");
    return value!.toStringArray();
  }

  set values(value: Array<string>) {
    this.set("values", Value.fromStringArray(value));
  }

  get contract(): Bytes {
    let value = this.get("contract");
    return value!.toBytes();
  }

  set contract(value: Bytes) {
    this.set("contract", Value.fromBytes(value));
  }
}

export class ERC721TokenTraitValue extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save ERC721TokenTraitValue entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ERC721TokenTraitValue must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ERC721TokenTraitValue", id.toString(), this);
    }
  }

  static load(id: string): ERC721TokenTraitValue | null {
    return changetype<ERC721TokenTraitValue | null>(
      store.get("ERC721TokenTraitValue", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get attributes(): Array<string> {
    let value = this.get("attributes");
    return value!.toStringArray();
  }

  set attributes(value: Array<string>) {
    this.set("attributes", Value.fromStringArray(value));
  }

  get token_trait(): string {
    let value = this.get("token_trait");
    return value!.toString();
  }

  set token_trait(value: string) {
    this.set("token_trait", Value.fromString(value));
  }

  get token_count(): BigInt {
    let value = this.get("token_count");
    return value!.toBigInt();
  }

  set token_count(value: BigInt) {
    this.set("token_count", Value.fromBigInt(value));
  }

  get value(): string {
    let value = this.get("value");
    return value!.toString();
  }

  set value(value: string) {
    this.set("value", Value.fromString(value));
  }

  get max_value(): BigInt | null {
    let value = this.get("max_value");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set max_value(value: BigInt | null) {
    if (!value) {
      this.unset("max_value");
    } else {
      this.set("max_value", Value.fromBigInt(<BigInt>value));
    }
  }

  get display_type(): string | null {
    let value = this.get("display_type");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set display_type(value: string | null) {
    if (!value) {
      this.unset("display_type");
    } else {
      this.set("display_type", Value.fromString(<string>value));
    }
  }

  get contract(): Bytes {
    let value = this.get("contract");
    return value!.toBytes();
  }

  set contract(value: Bytes) {
    this.set("contract", Value.fromBytes(value));
  }
}

export class ERC721Balance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC721Balance entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ERC721Balance must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ERC721Balance", id.toString(), this);
    }
  }

  static load(id: string): ERC721Balance | null {
    return changetype<ERC721Balance | null>(store.get("ERC721Balance", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contract(): Bytes {
    let value = this.get("contract");
    return value!.toBytes();
  }

  set contract(value: Bytes) {
    this.set("contract", Value.fromBytes(value));
  }

  get account(): Bytes | null {
    let value = this.get("account");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set account(value: Bytes | null) {
    if (!value) {
      this.unset("account");
    } else {
      this.set("account", Value.fromBytes(<Bytes>value));
    }
  }

  get value(): BigDecimal {
    let value = this.get("value");
    return value!.toBigDecimal();
  }

  set value(value: BigDecimal) {
    this.set("value", Value.fromBigDecimal(value));
  }

  get valueExact(): BigInt {
    let value = this.get("valueExact");
    return value!.toBigInt();
  }

  set valueExact(value: BigInt) {
    this.set("valueExact", Value.fromBigInt(value));
  }
}

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Transaction entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Transaction must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Transaction", id.toString(), this);
    }
  }

  static load(id: string): Transaction | null {
    return changetype<Transaction | null>(store.get("Transaction", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get events(): Array<string> {
    let value = this.get("events");
    return value!.toStringArray();
  }

  set events(value: Array<string>) {
    this.set("events", Value.fromStringArray(value));
  }
}
