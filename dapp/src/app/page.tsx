"use client";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Victory NFT Collection">
    <Hero />
    <Services />
    <Team />
    <Finisher />
  </Layout>
);

export default IndexPage;

/// Page Sections
const Hero = () => (
  <div
    className="relative pt-16 pb-32 flex content-center items-center justify-center"
    style={{
      minHeight: "75vh",
    }}
  >
    <div
      className="absolute top-0 w-full h-full bg-center bg-cover"
      style={{
        backgroundImage: "url('/assets/ntf2.webp')",
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
              Welcome to Victory Metaverse
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              You’ve just entered a universe where heroes and villains aren’t
              just legends{" "}
              <span className="font-bold"> – they live on the blockchain </span>
              , waiting for their true owners. Each NFT in this collection is
              not just a digital image but a{" "}
              <span className="font-bold">
                symbol of power, identity, and exclusivity.
              </span>{" "}
              Here, the fate of every character is in your hands. You can
              collect, trade, and become part of a community that values the
              extraordinary.
            </p>
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
);

const Services = () => (
  <section className="pb-20 bg-gray-300 -mt-24">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">
        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                <img src="/award.svg" alt="award" />
              </div>
              <h6 className="text-xl font-semibold">
                Power and Exclusive Identity
              </h6>
              <p className="mt-2 mb-4 text-gray-600">
                Each NFT represents a unique character, a symbol of power and
                identity. By owning one, you not only acquire a digital image
                but also connect with the essence of the hero or villain it
                represents.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                <img src="/star.svg" alt="star" />
              </div>
              <h6 className="text-xl font-semibold">
                Collect and Command Fate
              </h6>
              <p className="mt-2 mb-4 text-gray-600">
                The fate of each character is in your hands. Collect, trade, and
                take your favorite heroes or villains on new adventures in the
                blockchain universe.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                <img src="/user.svg" alt="user" />
              </div>
              <h6 className="text-xl font-semibold">
                Community of Value and Exclusivity
              </h6>
              <p className="mt-2 mb-4 text-gray-600">
                Be part of a community that values the extraordinary. Join
                collectors and enthusiasts who share your passion for legendary
                characters and the power of NFTs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center mt-32">
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            And more is coming...
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            Get ready for exclusive perks and exciting features that are on
            their way to our community. We’re constantly working to bring more
            value to our members, and as part of our community, you’ll be the
            first to experience these new privileges. Stay tuned, the best is
            yet to come!
          </p>
          <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
            Becoming a member gives you access to unique perks, early updates,
            and a community that values the extraordinary. Don’t miss out on the
            opportunities ahead!
          </p>
          <a href="/mint" className="font-bold text-gray-800 mt-8">
            Mint now your token!
          </a>
        </div>

        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-blue-600">
            <img
              alt="..."
              src="https://st5.depositphotos.com/22265358/63997/i/450/depositphotos_639975328-stock-photo-february-2023-brazil-photo-illustration.jpg"
              className="w-full align-middle rounded-t-lg"
            />
            <blockquote className="relative p-8 mb-4">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                className="absolute left-0 w-full block"
                style={{
                  height: "95px",
                  top: "-94px",
                }}
              >
                <polygon
                  points="-30,95 583,95 583,65"
                  className="text-blue-600 fill-current"
                ></polygon>
              </svg>
              <h4 className="text-xl font-bold text-white">
                Top Notch Blockchain
              </h4>
              <p className="text-md font-light mt-2 text-white">
                Our platform is powered by Polygon, a layer-2 solution that
                offers fast and low-cost transactions, making your experience
                smoother and more efficient compared to other blockchain
                networks.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Team = () => (
  <section className="pt-20 pb-48">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center text-center mb-24">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-4xl font-semibold">Here is the creator</h2>
          <p className="text-lg leading-relaxed m-4 text-gray-600">
            I’m a Full Stack Developer with some years of experience in
            front-end and full-stack development since mid-2024. I’m passionate
            about diving deeper into the world of Web3 and blockchain, as I
            believe this is the future, and I’m excited to be part of it.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div className="px-6">
            <img
              alt="..."
              src="https://media.licdn.com/dms/image/v2/D4D03AQFYIdhGP8lynQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696245672651?e=1744243200&v=beta&t=uEnNSITfUGGmGyGE3xvTuZ8loFxUUQu3xd46WNLn2D8"
              className="shadow-lg rounded-full max-w-full mx-auto"
              style={{ maxWidth: "120px" }}
            />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Victor Silva</h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                Web Developer
              </p>
              <div className="mt-6">
                <a
                  href="https://www.linkedin.com/in/victor-silva-073b60267/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 inline-flex justify-center items-center"
                >
                  <img src="/linkedin.svg" alt="linkedin" />
                </a>
                <a
                  href="https://github.com/victoradauto1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 inline-flex justify-center items-center"
                >
                  <img src="/github.svg" alt="github" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Finisher = () => (
  <>
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
              adventure, where each NFT represents a unique symbol of power and
              belonging.
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
              Are you ready to fly solo? Sell your tokens on OpenSea, likely at
              higher prices.
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
              Some benefits will remain forever for the holders of these tokens.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="pt-20 pb-48">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold mb-4">Don't wait more</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              The time is running and the collection is limited. Mint one or
              more tokens right now and join us!
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <a href="/mint" className="bg-black text-white font-bold py-3 px-3 rounded inline-flex items-center ml-3">
            Mint Now
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
);
