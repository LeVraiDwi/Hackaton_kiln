import fetchApi from "@/api/fetchApi"
import { TESTNET_BASE_URL } from "@/constants/url"

const ACCOUNT_BASE_URL = TESTNET_BASE_URL + "accounts/";

export const getAccounts = async () => {
	return fetchApi(ACCOUNT_BASE_URL, "GET");
}

export const createAccount = async (name, description) => {
	return fetchApi(ACCOUNT_BASE_URL, "POST", {name, description});
}

export const getAccount = async (accountId) => {
	return fetchApi(ACCOUNT_BASE_URL + `${accountId}`, "GET", {accountId});
}

export const updateAccount = async (accountId) => {
	return fetchApi(ACCOUNT_BASE_URL + `${accountId}`, "PUT");
}

export const deleteAccount = async (accountId) => {
	return fetchApi(ACCOUNT_BASE_URL + `${accountId}`, "DELETE");
}

export const getAccountPortfolio = async (accountId) => {
	return fetchApi(ACCOUNT_BASE_URL + `${accountId}/porfolio`, "GET");
}

export const getAccountReport = async (accountId, refresh) => {
	return fetchApi(ACCOUNT_BASE_URL + `${accountId}/reports`, "GET", {refresh}, {'Accept' : 'application/json'});
}