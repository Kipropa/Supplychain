import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import Header from "../../components/Header";

const Entity =() => {


  const [mode, setEntityMode] = useState("");
  const [entityAddress, setEntityAdress] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [modeValue, setModeValue] = useState("");

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contractAddress1 = "0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1";

  const ABI1 = [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "entityId",
          type: "address",
        },
        {
          indexed: false,
          internalType: "string",
          name: "entityMode",
          type: "string",
        },
      ],
      name: "AddEntity",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "itemsBatchId",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "address",
          name: "manufacturer",
          type: "address",
        },
      ],
      name: "AddItemsBatch",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "issuer",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "prover",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "certificateId",
          type: "uint256",
        },
      ],
      name: "IssueCertificate",
      type: "event",
    },
    {
      inputs: [],
      name: "MAX_CERTIFICATIONS",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_id",
          type: "address",
        },
        {
          internalType: "string",
          name: "_mode",
          type: "string",
        },
      ],
      name: "addEntity",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "brand",
          type: "string",
        },
        {
          internalType: "address",
          name: "manufacturer",
          type: "address",
        },
      ],
      name: "addItemsBatch",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "certificateIds",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "certificates",
      outputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          components: [
            {
              internalType: "address",
              name: "id",
              type: "address",
            },
            {
              internalType: "enum SupplyChain.Mode",
              name: "mode",
              type: "uint8",
            },
            {
              internalType: "uint256[]",
              name: "certificateIds",
              type: "uint256[]",
            },
          ],
          internalType: "struct SupplyChain.Entity",
          name: "issuer",
          type: "tuple",
        },
        {
          components: [
            {
              internalType: "address",
              name: "id",
              type: "address",
            },
            {
              internalType: "enum SupplyChain.Mode",
              name: "mode",
              type: "uint8",
            },
            {
              internalType: "uint256[]",
              name: "certificateIds",
              type: "uint256[]",
            },
          ],
          internalType: "struct SupplyChain.Entity",
          name: "prover",
          type: "tuple",
        },
        {
          internalType: "bytes",
          name: "signature",
          type: "bytes",
        },
        {
          internalType: "enum SupplyChain.Status",
          name: "status",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "entities",
      outputs: [
        {
          internalType: "address",
          name: "id",
          type: "address",
        },
        {
          internalType: "enum SupplyChain.Mode",
          name: "mode",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "message",
          type: "bytes32",
        },
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "issuer",
          type: "address",
        },
      ],
      name: "isMatchingSignature",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_issuer",
          type: "address",
        },
        {
          internalType: "address",
          name: "_prover",
          type: "address",
        },
        {
          internalType: "string",
          name: "_status",
          type: "string",
        },
        {
          internalType: "bytes",
          name: "signature",
          type: "bytes",
        },
      ],
      name: "issueCertificate",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "itemsBatchIds",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "itemsBatches",
      outputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "brand",
          type: "string",
        },
        {
          internalType: "address",
          name: "manufacturer",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

  const contract1 = new ethers.Contract(contractAddress1, ABI1, signer);

  useEffect(() => {
    const connectWallet = async () => {
      await provider.send("eth_requestAccounts", []);
    };

    connectWallet().catch(console.error);
  });


  const handleAddressChange = (e) => {
    setAddressValue(e.target.value);
  };

  const handleModeChange = (e) => {
    setModeValue(e.target.value);
  };


  const handleAddEntitySubmit = async (e) => {
    e.preventDefault();
    const addEntityUpdate = await contract1.addEntity(addressValue, modeValue);
    await addEntityUpdate.wait();
    setAddressValue(addressValue);
    setModeValue(modeValue);
    setEntityAdress(addressValue);
    setEntityMode(modeValue);
    setAddressValue("");
    setModeValue("");
  };

  return (

    <div className="container-fluid">
      <Header title="ENTITY" subtitle="Add Entity" />
      <div className="container">
        <div className="row mt-5">

        </div>
        <div className="col">
          <h3>Address: {entityAddress}</h3>
          <p>Mode: {mode}</p>
        </div>
        <div className="col">
          <form onSubmit={handleAddEntitySubmit}>
            <div className="mb-3 col-md-4">
              <label className="form-label">Entity Address</label>
              <input
                type="address"
                className="form-control"
                onChange={handleAddressChange}
                value={addressValue}
              />
            </div>
            <div className="mb-3 col-md-4">
              <label className="form-label">Mode</label>
              <input
                type="text"
                className="form-control"
                onChange={handleModeChange}
                value={modeValue}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Entity
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Entity;
