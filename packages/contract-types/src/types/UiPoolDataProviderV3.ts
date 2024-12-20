/* Autogenerated file. Do not edit manually. */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
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

export declare namespace DataTypes {
  export type EModeCategoryStruct = {
    ltv: BigNumberish;
    liquidationThreshold: BigNumberish;
    liquidationBonus: BigNumberish;
    collateralBitmap: BigNumberish;
    label: string;
    borrowableBitmap: BigNumberish;
  };

  export type EModeCategoryStructOutput = [
    number,
    number,
    number,
    BigNumber,
    string,
    BigNumber,
  ] & {
    ltv: number;
    liquidationThreshold: number;
    liquidationBonus: number;
    collateralBitmap: BigNumber;
    label: string;
    borrowableBitmap: BigNumber;
  };
}

export declare namespace IUiPoolDataProviderV3 {
  export type EmodeStruct = {
    id: BigNumberish;
    eMode: DataTypes.EModeCategoryStruct;
  };

  export type EmodeStructOutput = [
    number,
    DataTypes.EModeCategoryStructOutput,
  ] & { id: number; eMode: DataTypes.EModeCategoryStructOutput };

  export type AggregatedReserveDataStruct = {
    underlyingAsset: string;
    name: string;
    symbol: string;
    decimals: BigNumberish;
    baseLTVasCollateral: BigNumberish;
    reserveLiquidationThreshold: BigNumberish;
    reserveLiquidationBonus: BigNumberish;
    reserveFactor: BigNumberish;
    usageAsCollateralEnabled: boolean;
    borrowingEnabled: boolean;
    isActive: boolean;
    isFrozen: boolean;
    liquidityIndex: BigNumberish;
    variableBorrowIndex: BigNumberish;
    liquidityRate: BigNumberish;
    variableBorrowRate: BigNumberish;
    lastUpdateTimestamp: BigNumberish;
    aTokenAddress: string;
    variableDebtTokenAddress: string;
    interestRateStrategyAddress: string;
    availableLiquidity: BigNumberish;
    totalScaledVariableDebt: BigNumberish;
    priceInMarketReferenceCurrency: BigNumberish;
    priceOracle: string;
    variableRateSlope1: BigNumberish;
    variableRateSlope2: BigNumberish;
    baseVariableBorrowRate: BigNumberish;
    optimalUsageRatio: BigNumberish;
    isPaused: boolean;
    isSiloedBorrowing: boolean;
    accruedToTreasury: BigNumberish;
    unbacked: BigNumberish;
    isolationModeTotalDebt: BigNumberish;
    flashLoanEnabled: boolean;
    debtCeiling: BigNumberish;
    debtCeilingDecimals: BigNumberish;
    borrowCap: BigNumberish;
    supplyCap: BigNumberish;
    borrowableInIsolation: boolean;
    virtualAccActive: boolean;
    virtualUnderlyingBalance: BigNumberish;
  };

  export type AggregatedReserveDataStructOutput = [
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    boolean,
    boolean,
    boolean,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    boolean,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    boolean,
    BigNumber,
  ] & {
    underlyingAsset: string;
    name: string;
    symbol: string;
    decimals: BigNumber;
    baseLTVasCollateral: BigNumber;
    reserveLiquidationThreshold: BigNumber;
    reserveLiquidationBonus: BigNumber;
    reserveFactor: BigNumber;
    usageAsCollateralEnabled: boolean;
    borrowingEnabled: boolean;
    isActive: boolean;
    isFrozen: boolean;
    liquidityIndex: BigNumber;
    variableBorrowIndex: BigNumber;
    liquidityRate: BigNumber;
    variableBorrowRate: BigNumber;
    lastUpdateTimestamp: number;
    aTokenAddress: string;
    variableDebtTokenAddress: string;
    interestRateStrategyAddress: string;
    availableLiquidity: BigNumber;
    totalScaledVariableDebt: BigNumber;
    priceInMarketReferenceCurrency: BigNumber;
    priceOracle: string;
    variableRateSlope1: BigNumber;
    variableRateSlope2: BigNumber;
    baseVariableBorrowRate: BigNumber;
    optimalUsageRatio: BigNumber;
    isPaused: boolean;
    isSiloedBorrowing: boolean;
    accruedToTreasury: BigNumber;
    unbacked: BigNumber;
    isolationModeTotalDebt: BigNumber;
    flashLoanEnabled: boolean;
    debtCeiling: BigNumber;
    debtCeilingDecimals: BigNumber;
    borrowCap: BigNumber;
    supplyCap: BigNumber;
    borrowableInIsolation: boolean;
    virtualAccActive: boolean;
    virtualUnderlyingBalance: BigNumber;
  };

  export type BaseCurrencyInfoStruct = {
    marketReferenceCurrencyUnit: BigNumberish;
    marketReferenceCurrencyPriceInUsd: BigNumberish;
    networkBaseTokenPriceInUsd: BigNumberish;
    networkBaseTokenPriceDecimals: BigNumberish;
  };

  export type BaseCurrencyInfoStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    number,
  ] & {
    marketReferenceCurrencyUnit: BigNumber;
    marketReferenceCurrencyPriceInUsd: BigNumber;
    networkBaseTokenPriceInUsd: BigNumber;
    networkBaseTokenPriceDecimals: number;
  };

  export type UserReserveDataStruct = {
    underlyingAsset: string;
    scaledATokenBalance: BigNumberish;
    usageAsCollateralEnabledOnUser: boolean;
    scaledVariableDebt: BigNumberish;
  };

  export type UserReserveDataStructOutput = [
    string,
    BigNumber,
    boolean,
    BigNumber,
  ] & {
    underlyingAsset: string;
    scaledATokenBalance: BigNumber;
    usageAsCollateralEnabledOnUser: boolean;
    scaledVariableDebt: BigNumber;
  };
}

export interface UiPoolDataProviderV3Interface extends utils.Interface {
  functions: {
    'ETH_CURRENCY_UNIT()': FunctionFragment;
    'MKR_ADDRESS()': FunctionFragment;
    'bytes32ToString(bytes32)': FunctionFragment;
    'getEModes(address)': FunctionFragment;
    'getReservesData(address)': FunctionFragment;
    'getReservesList(address)': FunctionFragment;
    'getUserReservesData(address,address)': FunctionFragment;
    'marketReferenceCurrencyPriceInUsdProxyAggregator()': FunctionFragment;
    'networkBaseTokenPriceInUsdProxyAggregator()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'ETH_CURRENCY_UNIT'
      | 'MKR_ADDRESS'
      | 'bytes32ToString'
      | 'getEModes'
      | 'getReservesData'
      | 'getReservesList'
      | 'getUserReservesData'
      | 'marketReferenceCurrencyPriceInUsdProxyAggregator'
      | 'networkBaseTokenPriceInUsdProxyAggregator',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'ETH_CURRENCY_UNIT',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'MKR_ADDRESS',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'bytes32ToString',
    values: [BytesLike],
  ): string;
  encodeFunctionData(functionFragment: 'getEModes', values: [string]): string;
  encodeFunctionData(
    functionFragment: 'getReservesData',
    values: [string],
  ): string;
  encodeFunctionData(
    functionFragment: 'getReservesList',
    values: [string],
  ): string;
  encodeFunctionData(
    functionFragment: 'getUserReservesData',
    values: [string, string],
  ): string;
  encodeFunctionData(
    functionFragment: 'marketReferenceCurrencyPriceInUsdProxyAggregator',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'networkBaseTokenPriceInUsdProxyAggregator',
    values?: undefined,
  ): string;

  decodeFunctionResult(
    functionFragment: 'ETH_CURRENCY_UNIT',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'MKR_ADDRESS',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'bytes32ToString',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'getEModes', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getReservesData',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getReservesList',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getUserReservesData',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'marketReferenceCurrencyPriceInUsdProxyAggregator',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'networkBaseTokenPriceInUsdProxyAggregator',
    data: BytesLike,
  ): Result;

  events: {};
}

export interface UiPoolDataProviderV3 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UiPoolDataProviderV3Interface;

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
    ETH_CURRENCY_UNIT(overrides?: CallOverrides): Promise<[BigNumber]>;

    MKR_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    bytes32ToString(
      _bytes32: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    getEModes(
      provider: string,
      overrides?: CallOverrides,
    ): Promise<[IUiPoolDataProviderV3.EmodeStructOutput[]]>;

    getReservesData(
      provider: string,
      overrides?: CallOverrides,
    ): Promise<
      [
        IUiPoolDataProviderV3.AggregatedReserveDataStructOutput[],
        IUiPoolDataProviderV3.BaseCurrencyInfoStructOutput,
      ]
    >;

    getReservesList(
      provider: string,
      overrides?: CallOverrides,
    ): Promise<[string[]]>;

    getUserReservesData(
      provider: string,
      user: string,
      overrides?: CallOverrides,
    ): Promise<[IUiPoolDataProviderV3.UserReserveDataStructOutput[], number]>;

    marketReferenceCurrencyPriceInUsdProxyAggregator(
      overrides?: CallOverrides,
    ): Promise<[string]>;

    networkBaseTokenPriceInUsdProxyAggregator(
      overrides?: CallOverrides,
    ): Promise<[string]>;
  };

  ETH_CURRENCY_UNIT(overrides?: CallOverrides): Promise<BigNumber>;

  MKR_ADDRESS(overrides?: CallOverrides): Promise<string>;

  bytes32ToString(
    _bytes32: BytesLike,
    overrides?: CallOverrides,
  ): Promise<string>;

  getEModes(
    provider: string,
    overrides?: CallOverrides,
  ): Promise<IUiPoolDataProviderV3.EmodeStructOutput[]>;

  getReservesData(
    provider: string,
    overrides?: CallOverrides,
  ): Promise<
    [
      IUiPoolDataProviderV3.AggregatedReserveDataStructOutput[],
      IUiPoolDataProviderV3.BaseCurrencyInfoStructOutput,
    ]
  >;

  getReservesList(
    provider: string,
    overrides?: CallOverrides,
  ): Promise<string[]>;

  getUserReservesData(
    provider: string,
    user: string,
    overrides?: CallOverrides,
  ): Promise<[IUiPoolDataProviderV3.UserReserveDataStructOutput[], number]>;

  marketReferenceCurrencyPriceInUsdProxyAggregator(
    overrides?: CallOverrides,
  ): Promise<string>;

  networkBaseTokenPriceInUsdProxyAggregator(
    overrides?: CallOverrides,
  ): Promise<string>;

  callStatic: {
    ETH_CURRENCY_UNIT(overrides?: CallOverrides): Promise<BigNumber>;

    MKR_ADDRESS(overrides?: CallOverrides): Promise<string>;

    bytes32ToString(
      _bytes32: BytesLike,
      overrides?: CallOverrides,
    ): Promise<string>;

    getEModes(
      provider: string,
      overrides?: CallOverrides,
    ): Promise<IUiPoolDataProviderV3.EmodeStructOutput[]>;

    getReservesData(
      provider: string,
      overrides?: CallOverrides,
    ): Promise<
      [
        IUiPoolDataProviderV3.AggregatedReserveDataStructOutput[],
        IUiPoolDataProviderV3.BaseCurrencyInfoStructOutput,
      ]
    >;

    getReservesList(
      provider: string,
      overrides?: CallOverrides,
    ): Promise<string[]>;

    getUserReservesData(
      provider: string,
      user: string,
      overrides?: CallOverrides,
    ): Promise<[IUiPoolDataProviderV3.UserReserveDataStructOutput[], number]>;

    marketReferenceCurrencyPriceInUsdProxyAggregator(
      overrides?: CallOverrides,
    ): Promise<string>;

    networkBaseTokenPriceInUsdProxyAggregator(
      overrides?: CallOverrides,
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    ETH_CURRENCY_UNIT(overrides?: CallOverrides): Promise<BigNumber>;

    MKR_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    bytes32ToString(
      _bytes32: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getEModes(provider: string, overrides?: CallOverrides): Promise<BigNumber>;

    getReservesData(
      provider: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getReservesList(
      provider: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getUserReservesData(
      provider: string,
      user: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    marketReferenceCurrencyPriceInUsdProxyAggregator(
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    networkBaseTokenPriceInUsdProxyAggregator(
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ETH_CURRENCY_UNIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MKR_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bytes32ToString(
      _bytes32: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getEModes(
      provider: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getReservesData(
      provider: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getReservesList(
      provider: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getUserReservesData(
      provider: string,
      user: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    marketReferenceCurrencyPriceInUsdProxyAggregator(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    networkBaseTokenPriceInUsdProxyAggregator(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}