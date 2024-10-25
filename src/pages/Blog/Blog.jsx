import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <h1>What is cryptocurrency? </h1> <br />
      <p>
        Cryptocurrency is a digital currency that uses cryptography to secure
        transactions and manage the issuance of new units without a central
        authority like a bank or government. Most cryptocurrencies exist on
        decentralized networks using blockchain technology—a distributed ledger
        enforced by a disparate network of computers.
      </p>{" "}
      <br />
      <h1>What is cryptography? </h1> <br />
      <p>
        Cryptography is a technique of securing information and communications
        through the use of codes so that only those persons for whom the
        information is intended can understand and process it. Thus preventing
        unauthorized access to information. The prefix “crypt” means “hidden”
        and the suffix “graphy” means “writing”. In Cryptography, the techniques
        that are used to protect information are obtained from mathematical
        concepts and a set of rule-based calculations known as algorithms to
        convert messages in ways that make it hard to decode them.
      </p>
      <br />
      <h1>How Cryptocurrency works? </h1> <br />
      <p>
        Cryptocurrencies use public and private keys to encrypt and decrypt
        transactions. The public key is a unique way to send money to someone,
        while the private key is used to access your own crypto.
      </p>
      <br />
      <h1>How it's different from traditional currency? </h1> <br />
      <p>
        Cryptocurrencies are not backed by real assets or tangible securities,
        and they don't have legal tender status. This means there is no legal
        obligation for them to be accepted.
      </p>
    </div>
  );
};

export default Blog;
