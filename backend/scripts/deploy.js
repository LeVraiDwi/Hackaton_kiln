// Le module 'hardhat' est importé, ce qui vous permet d'interagir avec les fonctionnalités de Hardhat.
const hre = require("hardhat");

//async function main() {
// // Ici, vous utilisez l'objet 'hre.ethers' pour déployer un contrat. 'SimpleStorage' est le nom de votre contrat.
// const erc4626Vault = await hre.ethers.deployContract("ERC4626Vault");
// // Cette ligne attend que le déploiement du contrat soit terminé. Cela garantit que vous ne continuez pas tant que le contrat n'est pas déployé.
// await erc4626Vault.waitForDeployment();
// // Une fois le contrat déployé, cette ligne imprime dans la console l'adresse du contrat déployé.
// console.log(
// `erc4626Vault deployed to ${erc4626Vault.target}`
// );
//}

async function main() {
  // Récupérer le signataire (compte) à utiliser pour déployer le contrat
  const [deployer] = await ethers.getSigners();

  console.log("Déploiement par le compte :", deployer.address);

  // Récupérer la factory du contrat
  const MonContrat = await ethers.getContractFactory("ERC4626Vault");

  // Déployer le contrat en passant un argument pour le constructeur
  const valeurInitiale = 42;  // L'argument que tu veux passer au constructeur
  const contrat = await MonContrat.deploy('0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199', '0xdD2FD4581271e230360230F9337D5c0430Bf44C0', '0xbDA5747bFD65F08deb54cb465eB87D40e51B197E', 1, 0);

  console.log("Contrat déployé à l'adresse :", contrat.address);
}

// Vous appelez la fonction 'main' pour exécuter le déploiement du contrat. 
// Si une erreur se produit, elle est capturée et affichée dans la console.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});