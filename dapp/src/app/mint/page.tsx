"use client";

import { ChangeEvent, useEffect, useState } from "react";

import { login, mint } from "../services/Web3Services";

export default function Home() {
  const [wallet, setWallet] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [message, setMessage] = useState<string>("");

  function onQuantityChange(evt: ChangeEvent<HTMLInputElement>) {
    const quantity = parseInt(evt.target.value);
    if (quantity > 5) {
      setQuantity(5);
    } else {
      setQuantity(quantity);
    }
  }

  function btnLoginClick() {
    setMessage("Logging in...");
    login()
      .then((wallet) => {
        setWallet(wallet);
        localStorage.setItem("wallet", wallet);
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.message);
      });
  }

  function btnLogoutClick() {
    setMessage("Logging out...");
    setWallet("");
    localStorage.removeItem("wallet");
    setMessage("");
  }

  function btnMintClick() {
    setMessage("Minting...");
    mint(quantity)
      .then((tx) => {
        setMessage("Tx Id: " + tx || "error");
        setQuantity(1);
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.message);
      });
  }

  useEffect(() => {
    const wallet = localStorage.getItem("wallet");
    if (wallet) setWallet(wallet);
  }, []);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Mint</h1>
        <p>
          {!wallet ? (
            <button id="btnLogin" onClick={btnLoginClick}>
              Login
            </button>
          ) : (
            <>
              <a href={`${process.env.OPENSEA_URL}/{${wallet}}`}>{wallet}</a>
              <button id="btnLogout" onClick={btnLogoutClick}>
                Logout
              </button>
            </>
          )}
        </p>
        {wallet && (
          <>
            <p>
              <label>
                Quantity:
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={onQuantityChange}
                />
              </label>
            </p>
            <p>
              <button id="btnMint" onClick={btnMintClick}>
                Mint
              </button>
            </p>
          </>
        )}
        <p>{message}</p>
      </main>
    </div>
  );
}
