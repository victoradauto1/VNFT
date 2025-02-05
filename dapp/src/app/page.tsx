"use client"
import Layout from '../components/Layout';
import Image from "next/image";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">

    <Hero />
    <Services/>
    <Featured/>
    <Team/>
    <Finisher/>
   
  </Layout>
)

export default IndexPage

/// Page Sections
const Hero = () => (<div className="relative pt-16 pb-32 flex content-center items-center justify-center"
  style={{
    minHeight: "75vh"
  }}>
  <div className="absolute top-0 w-full h-full bg-center bg-cover"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"
    }}>
    <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
  </div>
  <div className="container relative mx-auto">
    <div className="items-center flex flex-wrap">
      <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
        <div className="pr-12">
          <h1 className="text-white font-semibold text-5xl">
            Your story starts with us.
              </h1>
          <p className="mt-4 text-lg text-gray-300">
            This is a simple example of a Landing Page you can build
            using Tailwind Starter Kit. It features multiple CSS
            components based on the Tailwindcss design system.
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
</div>)

const Services = () => <section className="pb-20 bg-gray-300 -mt-24">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap">
      <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
              <i className="fas fa-award"></i>
            </div>
            <h6 className="text-xl font-semibold">Awarded Agency</h6>
            <p className="mt-2 mb-4 text-gray-600">
              Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.
              </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
              <i className="fas fa-retweet"></i>
            </div>
            <h6 className="text-xl font-semibold">
              Free Revisions
              </h6>
            <p className="mt-2 mb-4 text-gray-600">
              Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.
              </p>
          </div>
        </div>
      </div>

      <div className="pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
              <i className="fas fa-fingerprint"></i>
            </div>
            <h6 className="text-xl font-semibold">
              Verified Company
              </h6>
            <p className="mt-2 mb-4 text-gray-600">
              Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!
              </p>
          </div>
        </div>
      </div>
    </div>


    <div className="flex flex-wrap items-center mt-32">
      <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
        <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
          <i className="fas fa-user-friends text-xl"></i>
        </div>
        <h3 className="text-3xl mb-2 font-semibold leading-normal">
          Working with us is a pleasure
          </h3>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
          Don't let your uses guess by attaching tooltips and popoves
          to any element. Just make sure you enable them first via
          JavaScript.
          </p>
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
          The kit comes with three pre-built pages to help you get
          started faster. You can change the text and images and
          you're good to go. Just make sure you enable them first via
          JavaScript.
          </p>
        <a
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
          className="font-bold text-gray-800 mt-8"
        >
          Check Tailwind Starter Kit!
          </a>
      </div>

      <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
        <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-pink-600">
          <img
            alt="..."
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
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
                top: "-94px"
              }}
            >
              <polygon
                points="-30,95 583,95 583,65"
                className="text-pink-600 fill-current"
              ></polygon>
            </svg>
            <h4 className="text-xl font-bold text-white">
              Top Notch Services
              </h4>
            <p className="text-md font-light mt-2 text-white">
              The Arctic Ocean freezes every winter and much of the
              sea-ice then thaws every summer, and that process will
              continue whatever happens.
              </p>
          </blockquote>
        </div>
      </div>

    </div>
  </div>
</section>

const Featured = () =>  <section className="relative py-20">
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
      className="text-white fill-current"
      points="2560 0 2560 100 0 100"
    ></polygon>
  </svg>
</div>

<div className="container mx-auto px-4">
  <div className="items-center flex flex-wrap">
    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
      <img
        alt="..."
        className="max-w-full rounded-lg shadow-lg"
        src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      />
    </div>
    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
      <div className="md:pr-12">
        <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
          <i className="fas fa-rocket text-xl"></i>
        </div>
        <h3 className="text-3xl font-semibold">
          A growing company
            </h3>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          The extension comes with three pre-built pages to help you
          get started faster. You can change the text and images and
          you're good to go.
            </p>
        <ul className="list-none mt-6">
          <li className="py-2">
            <div className="flex items-center">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                  <i className="fas fa-fingerprint"></i>
                </span>
              </div>
              <div>
                <h4 className="text-gray-600">
                  Carefully crafted components
                    </h4>
              </div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                  <i className="fab fa-html5"></i>
                </span>
              </div>
              <div>
                <h4 className="text-gray-600">Amazing page examples</h4>
              </div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                  <i className="far fa-paper-plane"></i>
                </span>
              </div>
              <div>
                <h4 className="text-gray-600">Dynamic components</h4>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</section>

const Team = ()=> <section className="pt-20 pb-48">
<div className="container mx-auto px-4">
  <div className="flex flex-wrap justify-center text-center mb-24">
    <div className="w-full lg:w-6/12 px-4">
      <h2 className="text-4xl font-semibold">
        Here are our heroes
          </h2>
      <p className="text-lg leading-relaxed m-4 text-gray-600">
        According to the National Oceanic and Atmospheric
        Administration, Ted, Scambos, NSIDClead scentist, puts the
        potentially record maximum.
          </p>
    </div>
  </div>
  <div className="flex flex-wrap">
    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
      <div className="px-6">
        <img
          alt="..."
          src="https://media.licdn.com/dms/image/v2/D4D03AQFYIdhGP8lynQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696245672651?e=1744243200&v=beta&t=uEnNSITfUGGmGyGE3xvTuZ8loFxUUQu3xd46WNLn2D8"
          className="shadow-lg rounded-full max-w-full mx-auto"
          style={{ maxWidth: "120px" }}
        />
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">
            Victor Silva
              </h5>
          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
            Web Developer
              </p>
          <div className="mt-6">
            <button
              className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <i className="fab fa-twitter"></i>
            </button>
            <button
              className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <i className="fab fa-facebook-f"></i>
            </button>
            <button
              className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <i className="fab fa-dribbble"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

const Finisher = ()=><section className="pb-20 relative block bg-gray-900">
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
        Build something
          </h2>
      <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
        Put the potentially record low maximum sea ice extent tihs year down to low ice.
        According to the National Oceanic and Atmospheric Administration, Ted, Scambos.
          </p>
    </div>
  </div>
  <div className="flex flex-wrap mt-12 justify-center">
    <div className="w-full lg:w-3/12 px-4 text-center">
      <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
        <i className="fas fa-medal text-xl"></i>
      </div>
      <h6 className="text-xl mt-5 font-semibold text-white">
        Excelent Services
          </h6>
      <p className="mt-2 mb-4 text-gray-500">
        Some quick example text to build on the card title and make up
        the bulk of the card's content.
          </p>
    </div>
    <div className="w-full lg:w-3/12 px-4 text-center">
      <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
        <i className="fas fa-poll text-xl"></i>
      </div>
      <h5 className="text-xl mt-5 font-semibold text-white">
        Grow your market
          </h5>
      <p className="mt-2 mb-4 text-gray-500">
        Some quick example text to build on the card title and make up
        the bulk of the card's content.
          </p>
    </div>
    <div className="w-full lg:w-3/12 px-4 text-center">
      <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
        <i className="fas fa-lightbulb text-xl"></i>
      </div>
      <h5 className="text-xl mt-5 font-semibold text-white">
        Launch time
          </h5>
      <p className="mt-2 mb-4 text-gray-500">
        Some quick example text to build on the card title and make up
        the bulk of the card's content.
          </p>
    </div>
  </div>
</div>
</section>


// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
