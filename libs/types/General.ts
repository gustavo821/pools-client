import { SHORT, LONG, MINT, BURN } from '@libs/constants';
import React from 'react';

/**
 * Can be used when component passes down children
 */
export type Children = {
    children?: React.ReactNode;
};

/**
 * Universal result object
 */
export type Result = {
    status: 'error' | 'success';
    message?: string;
    error?: string;
};

export type APIResult = {
    status: 'error' | 'success';
    message: string;
    data: any;
};
export type SideType = typeof LONG | typeof SHORT;

export type TokenType = typeof MINT | typeof BURN;

// TODO change this to known markets
export type MarketType = 'ETH/USDC' | 'ETH/TUSD' | undefined;

// TODO change this to known currencies
export type CurrencyType = 'DAI' | 'USDC';

export type LeverageType = number;

export type PoolType = {
    name: string;
    address: string;
};
