// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Contract__traitDataResult {
  value0: string;
  value1: string;

  constructor(value0: string, value1: string) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    return map;
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  compileAttributes(tokenId: BigInt): string {
    let result = super.call(
      "compileAttributes",
      "compileAttributes(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return result[0].toString();
  }

  try_compileAttributes(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall(
      "compileAttributes",
      "compileAttributes(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  drawSVG(tokenId: BigInt): string {
    let result = super.call("drawSVG", "drawSVG(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_drawSVG(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("drawSVG", "drawSVG(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  traitData(param0: i32, param1: i32): Contract__traitDataResult {
    let result = super.call(
      "traitData",
      "traitData(uint8,uint8):(string,string)",
      [
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0)),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param1))
      ]
    );

    return new Contract__traitDataResult(
      result[0].toString(),
      result[1].toString()
    );
  }

  try_traitData(
    param0: i32,
    param1: i32
  ): ethereum.CallResult<Contract__traitDataResult> {
    let result = super.tryCall(
      "traitData",
      "traitData(uint8,uint8):(string,string)",
      [
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0)),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param1))
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__traitDataResult(value[0].toString(), value[1].toString())
    );
  }

  woolf(): Address {
    let result = super.call("woolf", "woolf():(address)", []);

    return result[0].toAddress();
  }

  try_woolf(): ethereum.CallResult<Address> {
    let result = super.tryCall("woolf", "woolf():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetWoolfCall extends ethereum.Call {
  get inputs(): SetWoolfCall__Inputs {
    return new SetWoolfCall__Inputs(this);
  }

  get outputs(): SetWoolfCall__Outputs {
    return new SetWoolfCall__Outputs(this);
  }
}

export class SetWoolfCall__Inputs {
  _call: SetWoolfCall;

  constructor(call: SetWoolfCall) {
    this._call = call;
  }

  get _woolf(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetWoolfCall__Outputs {
  _call: SetWoolfCall;

  constructor(call: SetWoolfCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UploadTraitsCall extends ethereum.Call {
  get inputs(): UploadTraitsCall__Inputs {
    return new UploadTraitsCall__Inputs(this);
  }

  get outputs(): UploadTraitsCall__Outputs {
    return new UploadTraitsCall__Outputs(this);
  }
}

export class UploadTraitsCall__Inputs {
  _call: UploadTraitsCall;

  constructor(call: UploadTraitsCall) {
    this._call = call;
  }

  get traitType(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get traitIds(): Array<i32> {
    return this._call.inputValues[1].value.toI32Array();
  }

  get traits(): Array<UploadTraitsCallTraitsStruct> {
    return this._call.inputValues[2].value.toTupleArray<
      UploadTraitsCallTraitsStruct
    >();
  }
}

export class UploadTraitsCall__Outputs {
  _call: UploadTraitsCall;

  constructor(call: UploadTraitsCall) {
    this._call = call;
  }
}

export class UploadTraitsCallTraitsStruct extends ethereum.Tuple {
  get name(): string {
    return this[0].toString();
  }

  get png(): string {
    return this[1].toString();
  }
}
