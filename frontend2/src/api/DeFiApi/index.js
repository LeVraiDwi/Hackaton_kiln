import fetchApi from "@/api/fetchApi"
import { TESTNET_BASE_URL } from "@/constants/url"

const DEFI_BASE_URL = TESTNET_BASE_URL + "defi/";

export const getStakes = async () => {
    return fetchApi(DEFI_BASE_URL + `stakes`, "GET");
}

export const getExtraRewards = async (wallets, chain_ids) => {
    return fetchApi(DEFI_BASE_URL + `extra-rewards/morpho`, "GET", {wallets, chain_ids});
}

export const getMorfoRewards = async (wallets, chain_ids) => {
    return fetchApi(DEFI_BASE_URL + `transaction/claim/extra-rewards/morpho`, "GET", {wallets, chain_ids});
}

export const getOperations = async (wallets, vaults) => {
    return fetchApi(DEFI_BASE_URL + `operations`, "GET", {wallets, vaults});
}

export const getNetworkStats = async (vaults) => {
    return fetchApi(DEFI_BASE_URL + `network-stats`, "GET", {vaults});
}