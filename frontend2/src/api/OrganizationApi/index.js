import fetchApi from "@/api/fetchApi"
import { TESTNET_BASE_URL } from "@/constants/url"

const ORGANIZATION_BASE_URL = TESTNET_BASE_URL + "organizations/";

export const getOrganizationPortfolio = async (organizationsId) => {
    return fetchApi(ORGANIZATION_BASE_URL + `${organizationsId}/porfolio`, "GET");
}

export const getOrganizationsReport = async (organizationsId, refresh) => {
    return fetchApi(ORGANIZATION_BASE_URL + `${organizationsId}/reports`, "GET", {refresh}, {'Accept' : 'application/octet-stream'});
}