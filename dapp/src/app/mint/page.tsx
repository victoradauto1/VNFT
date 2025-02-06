"use client";

import { ChangeEvent, useEffect, useState } from "react";

import { login, mint } from "../services/Web3Services";

import Layout from "@/components/Layout";

export default function MintPage() {
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
    <Layout title="Victory NFT Collection">
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "75vh",
        }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url('/assets/nft1.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100vh",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  Mint your token(s)
                </h1>
                {wallet ? (
                  <>
                    <p className="mt-4 text-lg text-gray-300">
                      Choose up 5 mints in a row to save with taxes.
                    </p>
                    <div className="mb-4 mt-8 inline-flex flex-wrap">
                      <input
                        type="number"
                        id="quantity"
                        placeholder="1"
                        value={quantity}
                        onChange={onQuantityChange}
                        className="m-0 block rounded-l border border-r-0 border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-[0.25rem] outline-none"
                      />
                      <button
                        onClick={btnMintClick}
                        type="button"
                        className="relative z-[2] rounded-r text-bold bg-gray-300 hover:bg-gray-400 px-6 py-6  text-sm font-medium uppercase leading-tight shadow-md"
                      ></button>
                    </div>
                    <div className="text-center mt-6">
                      <a
                        href={`${process.env.OPENSEA}/${wallet}`}
                        target="_blank"
                        type="button"
                        className="bg-gren-800 hover:bg-green-900 text-white font-blod px-3 py-3 rounded inline-flex align-center ml-3"
                      >
                        See at Opensea
                      </a>
                      <button
                        onClick={btnLogoutClick}
                        type="button"
                        className="bg-red-800 hover:bg-red-900 text-white font-blod px-3 py-3 rounded inline-flex align-center ml-3"
                      >
                        Logout
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="mt-4 text-lg text-gray-300">
                      Connect your wallet and start minting right now.
                    </p>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                        type="button"
                        onClick={btnLoginClick}
                      >
                        <img
                          src="/metamask.svg"
                          alt="metamask"
                          width={64}
                          className="pr-3"
                        />
                        Connect your wallet
                      </button>
                      {message && (
                        <div className="bg-red-900 text-white font-bold rounded shadow py-3 mt-3">
                          {message}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section className="pb-20 bg-gray-300 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    #1
                  </div>
                  <p className="mt-2 mb-4 text-gray-600">
                    Connect your browser wallet configured to Polygon Mainnet
                    (POL).
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    #2
                  </div>
                  <p className="mt-2 mb-4 text-gray-600">
                    Choose how many tokens you want to mint, keeping in mind
                    that only 5 can be minted at a time.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    #3
                  </div>
                  <p className="mt-2 mb-4 text-gray-600">
                    Confirm your transaction and view your tokens in your
                    wallet, on OpenSea, or similar sites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20 relative block bg-gray-900">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">
                Exclusive collection
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                Minting is restricted to only 1000 spots in our epic journey.
                Don't miss the chance to secure your place and be part of our
                adventure, where each NFT represents a unique symbol of power
                and belonging.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <img src="/gift.svg" alt="gift" />
              </div>
              <h6 className="text-xl mt-5 font-semibold text-white">
                Mint First
              </h6>
              <p className="mt-2 mb-4 text-gray-500">
                The best time to join us is now. Mint and come grow with us..
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <img src="/shopping-cart.svg" alt="shopping-cart.svg" />
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Sell Later
              </h5>
              <p className="mt-2 mb-4 text-gray-500">
                Are you ready to fly solo? Sell your tokens on OpenSea, likely
                at higher prices.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <img src="calendar.svg" alt="calendar" />
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Enjoy Forever
              </h5>
              <p className="mt-2 mb-4 text-gray-500">
                Some benefits will remain forever for the holders of these
                tokens.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
