import abiJSON from "./Web3RSVP.json";
import { ethers } from "ethers";

function connectContract() { 
    const contractAddress = "0xcAB2fe796d642b2c7D9FFD2D6cCB3b948dB276cC";
    const contractABI = abiJSON.abi;
    let rsvpContract;
    try {
        const { ethereum } = window;

        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            rsvpContract = new ethers.Contract(contracAddress, cntractABI, signer);
        } else {
            console.log("Ethereum object doesn't exist!");
        }
    } catch (error) {
        console.log("ERROR:", error);
    }
    return rsvpContract;
}

export default connectContract;