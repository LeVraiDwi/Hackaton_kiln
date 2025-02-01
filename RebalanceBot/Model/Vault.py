class vault:
    """
        Class that store a vault data
    """
    def __init__(self, name: str, nrr: float, tvl: float):
        self.netRate = nrr
        self.name = name
        self.total_value = tvl
        pass

    def Get_Vault_Rate(self):
        return self.netRate