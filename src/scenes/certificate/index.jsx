import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

import { ethers } from "ethers";
import Header from "../../components/Header";

const Certification = () => {
  const [issuerValue, setIssuerValue] = useState("");
  const [issuer, setIsuer] = useState("");
  const [proverValue, setProverValue] = useState("");
  const [prover, setProver] = useState("");
  const [brandValue, setBrandValue] = useState("");
  const [brand, setBrand] = useState("");
  const [signatureValue, setSignatureValue] = useState("");
  const [signature, setSignature] = useState("");

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

  const handleIssuerChange = (e) => {
    setIssuerValue(e.target.value);
  };
  const handleProverChange = (e) => {
    setProverValue(e.target.value);
  };
  const handleBrandChange = (e) => {
    setBrandValue(e.target.value);
  };

  const handleSignatureChange = (e) => {
    setSignatureValue(e.target.value);
  };

  const handleAddSignatureSubmit = async (e) => {
    e.preventDefault();
    const addCertificateUpdate = await contract1.issueCertificate(
      issuerValue,
      proverValue,
      brandValue,
      signatureValue
    );
    await addCertificateUpdate.wait();
    setIssuerValue(issuerValue);
    setIsuer(issuerValue);
    setProverValue(proverValue);
    setProver(proverValue);
    setBrandValue(brandValue);
    setBrand(brandValue);
    setSignatureValue(signatureValue);
    setSignature(signatureValue);
    setIssuerValue("");
    setProverValue("");
    setBrandValue("");
    setSignatureValue("");
  };

  return (
    <Box m="20px">
    <div className="container-fluid">
      <Header title="CERTIFICATION" subtitle="Issue Certificate" />
      <div className="container">
        <div className="row mt-5"></div>
        <div className="col">
          <p>Issuer: {issuer}</p>
          <p>Prover: {prover}</p>
          <p>Brand: {brand}</p>
          <p>Signature: {signature}</p>
        </div>
        <div className="col">
          <form onSubmit={handleAddSignatureSubmit}>
            <div className="mb-3 col-md-4">
              <label className="form-label">Issuer:</label>
              <input
                type="address"
                className="form-control"
                onChange={handleIssuerChange}
                value={issuerValue}
              />
            </div>
            <div className="mb-3 col-md-4">
              <label className="form-label">Prover:</label>
              <input
                type="address"
                className="form-control"
                onChange={handleProverChange}
                value={proverValue}
              />
            </div>
            <div className="mb-3 col-md-4">
              <label className="form-label">Brand:</label>
              <input
                type="text"
                className="form-control"
                onChange={handleBrandChange}
                value={brandValue}
              />
            </div>
            <div className="mb-3 col-md-4">
              <label className="form-label">Signature:</label>
              <input
                type="bytes"
                className="form-control"
                onChange={handleSignatureChange}
                value={signatureValue}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Issue Certificate
            </button>
          </form>
        </div>
      </div>
    </div>
    </Box>
  );
};

export default Certification;
