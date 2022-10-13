/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { PermitRouter } from "../PermitRouter";

export class PermitRouter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _pair: string,
    _token0: string,
    _token1: string,
    _token2: string,
    overrides?: Overrides
  ): Promise<PermitRouter> {
    return super.deploy(
      _pair,
      _token0,
      _token1,
      _token2,
      overrides || {}
    ) as Promise<PermitRouter>;
  }
  getDeployTransaction(
    _pair: string,
    _token0: string,
    _token1: string,
    _token2: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _pair,
      _token0,
      _token1,
      _token2,
      overrides || {}
    );
  }
  attach(address: string): PermitRouter {
    return super.attach(address) as PermitRouter;
  }
  connect(signer: Signer): PermitRouter__factory {
    return super.connect(signer) as PermitRouter__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PermitRouter {
    return new Contract(address, _abi, signerOrProvider) as PermitRouter;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_pair",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token1",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token2",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pair",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "swapExactTokensForTokens",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountInMax",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "swapTokensForExactTokens",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token0",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token1",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token2",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101006040523480156200001257600080fd5b506040516200173f3803806200173f8339810160408190526200003591620000dd565b620000403362000070565b6001600160601b0319606094851b811660805292841b831660a05290831b821660c05290911b1660e0526200013a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b0381168114620000d857600080fd5b919050565b60008060008060808587031215620000f457600080fd5b620000ff85620000c0565b93506200010f60208601620000c0565b92506200011f60408601620000c0565b91506200012f60608601620000c0565b905092959194509250565b60805160601c60a05160601c60c05160601c60e05160601c611573620001cc60003960008181610105015281816102af015261059a0152600081816101810152818161025b015261054601526000818160c6015281816103bf0152818161043301526106ba01526000818161015a0152818161030601528181610455015281816105f10152610b4b01526115736000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063715018a611610066578063715018a61461013a5780638da5cb5b14610144578063a8aa1b3114610155578063d21220a71461017c578063f2fde38b146101a357600080fd5b806304464220146100985780630dfe1681146100c157806325be124e1461010057806354a4595714610127575b600080fd5b6100ab6100a6366004611168565b6101b6565b6040516100b8919061133b565b60405180910390f35b6100e87f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100b8565b6100e87f000000000000000000000000000000000000000000000000000000000000000081565b6100ab610135366004611168565b6104aa565b6101426106f7565b005b6000546001600160a01b03166100e8565b6100e87f000000000000000000000000000000000000000000000000000000000000000081565b6100e87f000000000000000000000000000000000000000000000000000000000000000081565b6101426101b1366004611146565b61072d565b6000546060906001600160a01b031633146101ec5760405162461bcd60e51b81526004016101e3906113c7565b60405180910390fd5b82428110156102385760405162461bcd60e51b8152602060048201526018602482015277155b9a5cddd85c158c949bdd5d195c8e881156141254915160421b60448201526064016101e3565b6040805160028082526060820183526000926020830190803683370190505090507f00000000000000000000000000000000000000000000000000000000000000008160008151811061028d5761028d611511565b60200260200101906001600160a01b031690816001600160a01b0316815250507f0000000000000000000000000000000000000000000000000000000000000000816001815181106102e1576102e1611511565b60200260200101906001600160a01b031690816001600160a01b03168152505061032c7f000000000000000000000000000000000000000000000000000000000000000088836107c8565b9250858360008151811061034257610342611511565b602002602001015111156103a85760405162461bcd60e51b815260206004820152602760248201527f556e69737761705632526f757465723a204558434553534956455f494e50555460448201526617d05353d5539560ca1b60648201526084016101e3565b604051639fd5a6cf60e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690639fd5a6cf906103fc908b9030908b908b908b90600401611301565b600060405180830381600087803b15801561041657600080fd5b505af115801561042a573d6000803e3d6000fd5b505050506104947f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000008660008151811061048757610487611511565b602002602001015161095e565b61049f83828a610a8e565b505095945050505050565b6000546060906001600160a01b031633146104d75760405162461bcd60e51b81526004016101e3906113c7565b82428110156105235760405162461bcd60e51b8152602060048201526018602482015277155b9a5cddd85c158c949bdd5d195c8e881156141254915160421b60448201526064016101e3565b6040805160028082526060820183526000926020830190803683370190505090507f00000000000000000000000000000000000000000000000000000000000000008160008151811061057857610578611511565b60200260200101906001600160a01b031690816001600160a01b0316815250507f0000000000000000000000000000000000000000000000000000000000000000816001815181106105cc576105cc611511565b60200260200101906001600160a01b031690816001600160a01b0316815250506106177f00000000000000000000000000000000000000000000000000000000000000008883610bc2565b92508583600185516106299190611482565b8151811061063957610639611511565b602002602001015110156106a35760405162461bcd60e51b815260206004820152602b60248201527f556e69737761705632526f757465723a20494e53554646494349454e545f4f5560448201526a1514155517d05353d5539560aa1b60648201526084016101e3565b604051639fd5a6cf60e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690639fd5a6cf906103fc908b9030908c908b908b90600401611301565b6000546001600160a01b031633146107215760405162461bcd60e51b81526004016101e3906113c7565b61072b6000610d38565b565b6000546001600160a01b031633146107575760405162461bcd60e51b81526004016101e3906113c7565b6001600160a01b0381166107bc5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016101e3565b6107c581610d38565b50565b606060028251101561081c5760405162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a20494e56414c49445f50415448000060448201526064016101e3565b815167ffffffffffffffff81111561083657610836611527565b60405190808252806020026020018201604052801561085f578160200160208202803683370190505b5090508281600183516108729190611482565b8151811061088257610882611511565b60200260200101818152505060006001835161089e9190611482565b90505b8015610956576000806108f187866108ba600187611482565b815181106108ca576108ca611511565b60200260200101518786815181106108e4576108e4611511565b6020026020010151610d88565b9150915061091984848151811061090a5761090a611511565b60200260200101518383610e57565b84610925600186611482565b8151811061093557610935611511565b6020026020010181815250505050808061094e906114c9565b9150506108a1565b509392505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392908816916109c291906112e5565b6000604051808303816000865af19150503d80600081146109ff576040519150601f19603f3d011682016040523d82523d6000602084013e610a04565b606091505b5091509150818015610a2e575080511580610a2e575080806020019051810190610a2e9190611247565b610a865760405162461bcd60e51b8152602060048201526024808201527f5472616e7366657248656c7065723a205452414e534645525f46524f4d5f46416044820152631253115160e21b60648201526084016101e3565b505050505050565b60008083600081518110610aa457610aa4611511565b602002602001015184600181518110610abf57610abf611511565b6020026020010151915091506000610ad78383610f3c565b509050600086600181518110610aef57610aef611511565b60200260200101519050600080836001600160a01b0316866001600160a01b031614610b1d57826000610b21565b6000835b6040805160008152602081019182905263022c0d9f60e01b90915291935091506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063022c0d9f90610b8590859085908c90602481016113fc565b600060405180830381600087803b158015610b9f57600080fd5b505af1158015610bb3573d6000803e3d6000fd5b50505050505050505050505050565b6060600282511015610c165760405162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a20494e56414c49445f50415448000060448201526064016101e3565b815167ffffffffffffffff811115610c3057610c30611527565b604051908082528060200260200182016040528015610c59578160200160208202803683370190505b5090508281600081518110610c7057610c70611511565b60200260200101818152505060005b60018351610c8d9190611482565b81101561095657600080610cd387868581518110610cad57610cad611511565b602002602001015187866001610cc39190611429565b815181106108e4576108e4611511565b91509150610cfb848481518110610cec57610cec611511565b60200260200101518383611034565b84610d07856001611429565b81518110610d1757610d17611511565b60200260200101818152505050508080610d30906114e0565b915050610c7f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000806000610d978585610f3c565b509050600080876001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b158015610dd657600080fd5b505afa158015610dea573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0e9190611269565b506001600160701b031691506001600160701b03169150826001600160a01b0316876001600160a01b031614610e45578082610e48565b81815b90999098509650505050505050565b6000808411610ebd5760405162461bcd60e51b815260206004820152602c60248201527f556e697377617056324c6962726172793a20494e53554646494349454e545f4f60448201526b155514155517d05353d5539560a21b60648201526084016101e3565b600083118015610ecd5750600082115b610ee95760405162461bcd60e51b81526004016101e39061137f565b6000610ef58585611463565b610f01906103e8611463565b90506000610f0f8685611482565b610f1b906103e5611463565b9050610f278183611441565b610f32906001611429565b9695505050505050565b600080826001600160a01b0316846001600160a01b03161415610faf5760405162461bcd60e51b815260206004820152602560248201527f556e697377617056324c6962726172793a204944454e544943414c5f41444452604482015264455353455360d81b60648201526084016101e3565b826001600160a01b0316846001600160a01b031610610fcf578284610fd2565b83835b90925090506001600160a01b03821661102d5760405162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a205a45524f5f41444452455353000060448201526064016101e3565b9250929050565b60008084116110995760405162461bcd60e51b815260206004820152602b60248201527f556e697377617056324c6962726172793a20494e53554646494349454e545f4960448201526a1394155517d05353d5539560aa1b60648201526084016101e3565b6000831180156110a95750600082115b6110c55760405162461bcd60e51b81526004016101e39061137f565b60006110d3856103e5611463565b905060006110e18483611463565b90506000826110f2876103e8611463565b6110fc9190611429565b90506111088183611441565b979650505050505050565b80356001600160a01b038116811461112a57600080fd5b919050565b80516001600160701b038116811461112a57600080fd5b60006020828403121561115857600080fd5b61116182611113565b9392505050565b600080600080600060a0868803121561118057600080fd5b61118986611113565b9450602086013593506040860135925060608601359150608086013567ffffffffffffffff808211156111bb57600080fd5b818801915088601f8301126111cf57600080fd5b8135818111156111e1576111e1611527565b604051601f8201601f19908116603f0116810190838211818310171561120957611209611527565b816040528281528b602084870101111561122257600080fd5b8260208601602083013760006020848301015280955050505050509295509295909350565b60006020828403121561125957600080fd5b8151801515811461116157600080fd5b60008060006060848603121561127e57600080fd5b6112878461112f565b92506112956020850161112f565b9150604084015163ffffffff811681146112ae57600080fd5b809150509250925092565b600081518084526112d1816020860160208601611499565b601f01601f19169290920160200192915050565b600082516112f7818460208701611499565b9190910192915050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a060808201819052600090611108908301846112b9565b6020808252825182820181905260009190848201906040850190845b8181101561137357835183529284019291840191600101611357565b50909695505050505050565b60208082526028908201527f556e697377617056324c6962726172793a20494e53554646494349454e545f4c604082015267495155494449545960c01b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b84815283602082015260018060a01b0383166040820152608060608201526000610f3260808301846112b9565b6000821982111561143c5761143c6114fb565b500190565b60008261145e57634e487b7160e01b600052601260045260246000fd5b500490565b600081600019048311821515161561147d5761147d6114fb565b500290565b600082821015611494576114946114fb565b500390565b60005b838110156114b457818101518382015260200161149c565b838111156114c3576000848401525b50505050565b6000816114d8576114d86114fb565b506000190190565b60006000198214156114f4576114f46114fb565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212208b5d75f312b327b36ecdb5f0b3c58e50a556e0c4986ab365daab31048f00ecc864736f6c63430008070033";
