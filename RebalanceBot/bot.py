from web3 import Web3
import http.client
import requests
import json
import pandas
from io import StringIO  
import requests
from Model.Vault import vault

def GetMaxVault(lstVault: list) -> str:
    tmp = {}
    for v in lstVault:
        tmp[v.name] = v.Get_Vault_Rate()
    key = max(tmp, key=tmp.get)
    return key

def main():
    infura_url = "addr"
    web3 = Web3(Web3.HTTPProvider('http://localhost:8545/'))
    print(web3.is_connected())

    contract_address = Web3.to_checksum_address('0x5fbdb2315678afecb367f032d93f642f64180aa3')
    # Load the ABI from the compiled contract JSON
    with open('/home/dwi/Vault_ERC4626/backend/artifacts/contracts/ERC4626Vault.sol/ERC4626Vault.json') as f:
        contract_data = json.load(f)
        abi = contract_data['abi']

    # Create the contract instance
    contract = web3.eth.contract(address=contract_address, abi=abi)

    result = contract.functions.getRatio().call() #re,placer function name par la methode a appeler
    print(result)

    #url = "https://api.testnet.kiln.fi/v1/defi/network-stats?vaults=eth_0xDea01Fc5289aF2c440Ca65582e3C44767C0fcf08,eth_0xf3a9A790f84B2E0301069BE589fc976Cf3eB5661"
#
    #headers = {
    #    "accept": "application/json; charset=utf-8",
    #    "authorization": "Bearer kiln_hnQNjKOhEhFfLOEcOUJrgrtc2LGcgqUj4a6MoyAt"
    #}
#
    #response = requests.get(url, headers=headers)
    #stream = StringIO(response.text)
    #pd = pandas.read_json(stream)
    #print(pd['data'])
    #lst = []
    #for d in pd['data']:
    #    lst.append(vault(d['vault'], d["nrr"], d["tvl"]))
    #
    #print(GetMaxVault(lst))
    return


if __name__ == "__main__":
    main()