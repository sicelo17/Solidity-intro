require("@nomiclabs/hardhat-ethers")
const {ethers} = require("hardhat")

async function deploy() {
    const MyName = await ethers.getContractFactory("MyName")
    const name = await MyName.deploy()
    await name.deployed()

    return name
} 

async function printName(name) {
    console.log(await name.name())
}

deploy().then(printName)