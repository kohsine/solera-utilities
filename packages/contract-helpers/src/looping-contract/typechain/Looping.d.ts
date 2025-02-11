/* Autogenerated file. Do not edit manually. */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from './common';

export interface LoopingInterface extends utils.Interface {
  functions: {
    'aavePool()': FunctionFragment;
    'calculateBorrowAmount(uint256,address,address,uint256,uint256)': FunctionFragment;
    'leveragePosition(address,address,address,bool,uint256,uint256,uint256)': FunctionFragment;
    'oracleDecimals()': FunctionFragment;
    'priceOracle()': FunctionFragment;
    'simulateLeveragePosition(address,address,uint256,uint256,uint256)': FunctionFragment;
    'swapRouter()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'aavePool'
      | 'calculateBorrowAmount'
      | 'leveragePosition'
      | 'oracleDecimals'
      | 'priceOracle'
      | 'simulateLeveragePosition'
      | 'swapRouter',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'aavePool', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'calculateBorrowAmount',
    values: [BigNumberish, string, string, BigNumberish, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'leveragePosition',
    values: [
      string,
      string,
      string,
      boolean,
      BigNumberish,
      BigNumberish,
      BigNumberish,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'oracleDecimals',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'priceOracle',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'simulateLeveragePosition',
    values: [string, string, BigNumberish, BigNumberish, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'swapRouter',
    values?: undefined,
  ): string;

  decodeFunctionResult(functionFragment: 'aavePool', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'calculateBorrowAmount',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'leveragePosition',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'oracleDecimals',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'priceOracle',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'simulateLeveragePosition',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'swapRouter', data: BytesLike): Result;

  events: {};
}

export interface Looping extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LoopingInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    aavePool(overrides?: CallOverrides): Promise<[string]>;

    calculateBorrowAmount(
      supplyAmount: BigNumberish,
      supplyToken: string,
      borrowToken: string,
      ltv: BigNumberish,
      targetHealthFactor: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    leveragePosition(
      supplyToken: string,
      borrowToken: string,
      maverickPool: string,
      isSupplyTokenA: boolean,
      numLoops: BigNumberish,
      initialAmount: BigNumberish,
      targetHealthFactor: BigNumberish,
      overrides?: Overrides & { from?: string },
    ): Promise<ContractTransaction>;

    oracleDecimals(overrides?: CallOverrides): Promise<[BigNumber]>;

    priceOracle(overrides?: CallOverrides): Promise<[string]>;

    simulateLeveragePosition(
      supplyToken: string,
      borrowToken: string,
      numLoops: BigNumberish,
      initialAmount: BigNumberish,
      targetHealthFactor: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        totalSupplied: BigNumber;
        totalBorrowed: BigNumber;
        expectedHealthFactor: BigNumber;
      }
    >;

    swapRouter(overrides?: CallOverrides): Promise<[string]>;
  };

  aavePool(overrides?: CallOverrides): Promise<string>;

  calculateBorrowAmount(
    supplyAmount: BigNumberish,
    supplyToken: string,
    borrowToken: string,
    ltv: BigNumberish,
    targetHealthFactor: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  leveragePosition(
    supplyToken: string,
    borrowToken: string,
    maverickPool: string,
    isSupplyTokenA: boolean,
    numLoops: BigNumberish,
    initialAmount: BigNumberish,
    targetHealthFactor: BigNumberish,
    overrides?: Overrides & { from?: string },
  ): Promise<ContractTransaction>;

  oracleDecimals(overrides?: CallOverrides): Promise<BigNumber>;

  priceOracle(overrides?: CallOverrides): Promise<string>;

  simulateLeveragePosition(
    supplyToken: string,
    borrowToken: string,
    numLoops: BigNumberish,
    initialAmount: BigNumberish,
    targetHealthFactor: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      totalSupplied: BigNumber;
      totalBorrowed: BigNumber;
      expectedHealthFactor: BigNumber;
    }
  >;

  swapRouter(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    aavePool(overrides?: CallOverrides): Promise<string>;

    calculateBorrowAmount(
      supplyAmount: BigNumberish,
      supplyToken: string,
      borrowToken: string,
      ltv: BigNumberish,
      targetHealthFactor: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    leveragePosition(
      supplyToken: string,
      borrowToken: string,
      maverickPool: string,
      isSupplyTokenA: boolean,
      numLoops: BigNumberish,
      initialAmount: BigNumberish,
      targetHealthFactor: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    oracleDecimals(overrides?: CallOverrides): Promise<BigNumber>;

    priceOracle(overrides?: CallOverrides): Promise<string>;

    simulateLeveragePosition(
      supplyToken: string,
      borrowToken: string,
      numLoops: BigNumberish,
      initialAmount: BigNumberish,
      targetHealthFactor: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        totalSupplied: BigNumber;
        totalBorrowed: BigNumber;
        expectedHealthFactor: BigNumber;
      }
    >;

    swapRouter(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    aavePool(overrides?: CallOverrides): Promise<BigNumber>;

    calculateBorrowAmount(
      supplyAmount: BigNumberish,
      supplyToken: string,
      borrowToken: string,
      ltv: BigNumberish,
      targetHealthFactor: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    leveragePosition(
      supplyToken: string,
      borrowToken: string,
      maverickPool: string,
      isSupplyTokenA: boolean,
      numLoops: BigNumberish,
      initialAmount: BigNumberish,
      targetHealthFactor: BigNumberish,
      overrides?: Overrides & { from?: string },
    ): Promise<BigNumber>;

    oracleDecimals(overrides?: CallOverrides): Promise<BigNumber>;

    priceOracle(overrides?: CallOverrides): Promise<BigNumber>;

    simulateLeveragePosition(
      supplyToken: string,
      borrowToken: string,
      numLoops: BigNumberish,
      initialAmount: BigNumberish,
      targetHealthFactor: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    swapRouter(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    aavePool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calculateBorrowAmount(
      supplyAmount: BigNumberish,
      supplyToken: string,
      borrowToken: string,
      ltv: BigNumberish,
      targetHealthFactor: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    leveragePosition(
      supplyToken: string,
      borrowToken: string,
      maverickPool: string,
      isSupplyTokenA: boolean,
      numLoops: BigNumberish,
      initialAmount: BigNumberish,
      targetHealthFactor: BigNumberish,
      overrides?: Overrides & { from?: string },
    ): Promise<PopulatedTransaction>;

    oracleDecimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    simulateLeveragePosition(
      supplyToken: string,
      borrowToken: string,
      numLoops: BigNumberish,
      initialAmount: BigNumberish,
      targetHealthFactor: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    swapRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
