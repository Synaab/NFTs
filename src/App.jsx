import "./App.css";

function App() {
  return (
    <>
      <header className="container overflow-hidden mt-5 mx-auto pl-4 min-h-[52.5rem]  bg-[url('./assets/svg/header__img.svg')] bg-no-repeat bg-cover bg-center">
        <div className="xl:xlcontainer text-white mx-auto px-4 p-1 ">
          <section className=" flex justify-between items-center gap-10 mt-8">
            <div className=" gap-2 flex">
              <div className="hidden lg:block">
                <a href="">
                  <img src="src\assets\svg\Header-logo.svg" alt="" />
                </a>
              </div>
              <div className="">
                <a href="#" className="font-DMSans text-2xl font-bold ">
                  NFTs
                </a>
              </div>
            </div>

            <div className=" flex basis-[50.4rem] justify-end items-center text-base gap-5 md:justify-between ">
              <ul className="font-OpenSans basis-[29.6rem] justify-between gap-2 hidden md:flex">
                <li className="">
                  <a href="">Home</a>
                </li>
                <li className="">
                  <a href="">Market</a>
                </li>
                <li className="">
                  <a href="">Artists</a>
                </li>
                <li className="">
                  <a href="">Community</a>
                </li>
                <li className="">
                  <a href="">Wallet</a>
                </li>
              </ul>

              <div className="font-DMSans basis-[13rem] justify-between  whitespace-nowrap hidden md:flex ">
                <a
                  href=""
                  className="w-[6.8rem] flex justify-center py-3 login-hovering z-50 "
                >
                  Login
                </a>

                <a
                  href=""
                  className="px-7 py-3 relative z-30 before:primery-bg "
                >
                  Sing Up
                </a>
              </div>
              <div className=" relative pr-5 md:hidden  ">
                <label htmlFor="hamburger" className="w-12">
                  <input
                    type="checkbox"
                    name="hamburger"
                    id="hamburger"
                    className=" hamburgercheck hidden"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="12-8 h-12 hamburger cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 hidden cross cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <ul className="absolute flex -right-[15%] bg-[#110229] bg-opacity-90 rounded-2xl flex-col justify-between items-center space-y-5 px-3 py-4  opacity-0 translate-x-7 transition duration-700 open-menu">
                    <li className="">
                      <a href="">Home</a>
                    </li>
                    <li className="">
                      <a href="">Market</a>
                    </li>
                    <li className="">
                      <a href="">Artists</a>
                    </li>
                    <li className="">
                      <a href="">Community</a>
                    </li>
                    <li className="">
                      <a href="">Wallet</a>
                    </li>
                    <li className="">
                      <a href="">Sing Up</a>
                    </li>
                    <li className="">
                      <a href="">Login</a>
                    </li>
                  </ul>
                </label>
                <div className="absolute open-menu  "></div>
              </div>
            </div>
          </section>
          <section className=" mt-28 ">
            <h1 className="max-w-[28rem] font-Sitka font-bold text-5xl">
              Discover, Collect and Sell Dope NFTs
            </h1>
            <p className=" max-w-[27rem] font-OpenSans text-base mt-6 text-txt lg:max-w-[33rem]">
              Lorem ipsum dolor sit amet, consectetur adipisc elit amet.
              Consectetu at it lrorem ipsum dolor sit amet.
            </p>
            <div className=" mt-10 flex gap-6 font-DMSans font-medium">
              <a href="" className=" px-8 py-4 primery-bg">
                Explore
              </a>
              <a
                href=""
                className="px-8 py-4 border [border-image:linear-gradient(to_right,#6578dd,#b35bc7,#dc1dc4)_1]"
              >
                Create
              </a>
            </div>
            <div className="max-w-[32rem]  pt-8 pb-4 mt-16  flex justify-around gap-2 text-center bg-[#FFFFFF1A] ">
              <div className="">
                <h4 className="font-Ruda font-bold text-4xl">80K+</h4>
                <p className="textt ">Active User</p>
              </div>
              <div className="">
                <h4 className="font-Ruda font-bold text-4xl">27K+</h4>
                <p className="textt ">Artworks</p>
              </div>
              <div className="">
                <h4 className="font-Ruda font-bold text-4xl">3.5K+</h4>
                <p className="textt ">Artists</p>
              </div>
            </div>
          </section>
        </div>
      </header>
      <main className="container mx-auto pl-4 mt-[7.5rem]">
        <div className="xl:xlcontainer mx-auto">
          <section className="flex justify-center flex-wrap gap-8">
            <img
              src="src\assets\svg\Logo1_Amazon.svg"
              alt=""
              className="w-44"
            />
            <img src="src\assets\svg\Logo2_Slack.svg" alt="" className="w-44" />
            <img
              src="src\assets\svg\Logo3_Paradigm.svg"
              alt=""
              className="w-44"
            />
            <img src="src\assets\svg\Logo4_Chase.svg" alt="" className="w-44" />
            <img
              src="src\assets\svg\Logo5_Binance.svg"
              alt=""
              className="w-44"
            />
          </section>
          <section>
            <div className="mt-[8.5rem] flex justify-center items-center gap-4 sm:justify-between">
              <div className=" max-w-[24rem] text-white text-center  sm:text-justify">
                <h3 className="headers">How it Works</h3>
                <p className="textt mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit amet.
                  Lorem ipsum dolor sit amet, consecte adipiscing elit ipsum.
                </p>
                <a
                  href=""
                  className="inline-block font-DMSans font-medium text-base px-8 py-4 mt-8 primery-bg"
                >
                  Learn More
                </a>
              </div>

              <div className="grid-cols-1 gap-6 hidden lg:grid-cols-2 sm:grid ">
                <div className="max-w-[22.5rem] h-[14.5rem] border border-grad p-8 ">
                  <div className="p-3.5 w-fit h-fit bg-[#ffffff1f] backdrop-blur-sm rounded">
                    <img src="src\assets\svg\grid1-logo.svg" alt="gird-logo1" />
                  </div>
                  <h4 className="font-Ruda font-bold text-2xl text-white mt-6">
                    Set up Your Wallet
                  </h4>
                  <p className="font-OpenSans text-sm text-txt mt-4">
                    Lorem ipsum dolor sit amet, consectetur at adipiscing elit
                    amet.
                  </p>
                </div>
                <div className="max-w-[22.5rem] h-[14.5rem] border border-grad p-8 ">
                  <div className="p-3.5 w-fit h-fit bg-[#ffffff1f] backdrop-blur-sm rounded">
                    <img src="src\assets\svg\grid2-logo.svg" alt="gird-logo2" />
                  </div>
                  <h4 className="font-Ruda font-bold text-2xl text-white mt-6">
                    Buy Your Collection
                  </h4>
                  <p className="font-OpenSans text-sm text-txt mt-4">
                    Lorem ipsum dolor sit amet, consectetur at adipiscing elit
                    amet.
                  </p>
                </div>
                <div className="max-w-[22.5rem] h-[14.5rem] border border-grad p-8 hidden lg:block ">
                  <div className="p-3.5 w-fit h-fit bg-[#ffffff1f] backdrop-blur-sm rounded">
                    <img src="src\assets\svg\grid3-logo.svg" alt="gird-logo3" />
                  </div>
                  <h4 className="font-Ruda font-bold text-2xl text-white mt-6">
                    Sell Your NFTs
                  </h4>
                  <p className="font-OpenSans text-sm text-txt mt-4">
                    Lorem ipsum dolor sit amet, consectetur at adipiscing elit
                    amet.
                  </p>
                </div>
                <div className="max-w-[22.5rem] h-[14.5rem] border border-grad p-8 hidden lg:block ">
                  <div className="p-3.5 w-fit h-fit bg-[#ffffff1f]">
                    <img src="src\assets\svg\grid4-logo.svg" alt="gird-logo4" />
                  </div>
                  <h4 className="font-Ruda font-bold text-2xl text-white mt-6">
                    Add Your NFTs
                  </h4>
                  <p className="font-OpenSans text-sm text-txt mt-4">
                    Lorem ipsum dolor sit amet, consectetur at adipiscing elit
                    amet.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-cols-2 gap-11 mt-5 hidden md:grid lg:hidden">
              <div className="max-w-[22.5rem] h-[14.5rem] border border-grad p-8 ">
                <div className="p-3.5 w-fit h-fit bg-[#ffffff1f] backdrop-blur-sm rounded">
                  <img src="src\assets\svg\grid3-logo.svg" alt="gird-logo3" />
                </div>
                <h4 className="font-Ruda font-bold text-2xl text-white mt-6">
                  Sell Your NFTs
                </h4>
                <p className="font-OpenSans text-sm text-txt mt-4">
                  Lorem ipsum dolor sit amet, consectetur at adipiscing elit
                  amet.
                </p>
              </div>
              <div className="max-w-[22.5rem] h-[14.5rem] border border-grad p-8 ">
                <div className="p-3.5 w-fit h-fit bg-[#ffffff1f]">
                  <img src="src\assets\svg\grid4-logo.svg" alt="gird-logo4" />
                </div>
                <h4 className="font-Ruda font-bold text-2xl text-white mt-6">
                  Add Your NFTs
                </h4>
                <p className="font-OpenSans text-sm text-txt mt-4">
                  Lorem ipsum dolor sit amet, consectetur at adipiscing elit
                  amet.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-[8.5rem] grid grid-cols-1 lg:grid-cols-2 ">
            <div className="w-1/2 mx-auto text-center lg:w-full lg:text-left lg:mx-0">
              <h3 className="headers">Trening Auctions</h3>
              <p className="textt mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit amet.
                Lorem ipsum dolor sit amet, consecte adipiscing elit ipsum.
              </p>
            </div>
            {/* <div className="flex justify-end gap-10 items-end">
              <button className="px-2 py-3.5 border border-[#FFFFFF47] text-[#FFFFFF47]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button className="px-2 py-3.5 border border-white text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div> */}
            <div className="col-span-2 mt-12  grid grid-cols-1 justify-between items-end gap-6 lg:grid-cols-2 xl:grid-cols-3 ">
              <div className="h-[35.125rem] w-96 mx-auto border p-6 hover:h-auto border-[#FFFFFF47] hover:border-white hover:-translate-y-16 transition duration-500 hover:border-[2px] delay-75 parent overflow-hidden lg:w-full lg:mx-0 mt-12">
                <div className="flex justify-between items-center  ">
                  <h4 className="font-DMSans font-bold text-white text-lg">
                    VERUALY ART
                  </h4>
                  <p className="font-DMSans text-sm text-[#DEDEDE]">@nftsart</p>
                </div>
                <div className="flex mt-6 justify-center">
                  <div className="">
                    <img
                      src="src\assets\svg\Trening1.svg"
                      alt="Trening1"
                      className="h-96 child_img duration-300 delay-[50]"
                    />
                  </div>
                  <div className="flex flex-col items-center ml-6 space-y-12 w-0 child_div opacity-0 translate-x-24 duration-1000">
                    <div className="">
                      <img
                        src="svg\avatar1.svg"
                        alt="avatar1"
                        className="max-w-[3.75rem]"
                      />
                    </div>
                    <div className="">
                      <img src="src\assets\svg\heart.svg" alt="heart" />
                      <p className="font-DMSans text-[#DEDEDE] text-sm">
                        45.5K
                      </p>
                    </div>
                    <div className="">
                      <img src="src\assets\svg\3circle.svg" alt="network" />
                      <p className="font-DMSans text-[#DEDEDE] text-sm">
                        45.5K
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <div className="">
                    <p className="font-DMSans text-xl text-white text-bold ">
                      15h : 05m : 26s
                    </p>
                    <p className="font-OpenSans text-sm text-[#DEDEDE] mt-2">
                      Remaining Time
                    </p>
                  </div>
                  <div className="">
                    <p className="font-DMSans text-xl text-white text-bold">
                      20.25 ETH
                    </p>
                    <p className="font-OpenSans text-sm text-[#DEDEDE] mt-2">
                      Highest bid
                    </p>
                  </div>
                </div>
                <a href="">
                  <div
                    href=""
                    className="mt-5 py-3   font-OpenSans text-center text-base text[#222] bg-white hidden child_a"
                  >
                    Place a Bid
                  </div>
                </a>
              </div>
              <div className="h-[35.125rem] w-96 mx-auto border p-6 hover:h-auto border-[#FFFFFF47] hover:border-white hover:-translate-y-16 duration-1000 hover:border-[2px] delay-75 parent overflow-hidden lg:w-full lg:mx-0 mt-12">
                <div className="flex justify-between items-center">
                  <h4 className="font-DMSans font-bold text-white text-lg">
                    CAT ICON ART
                  </h4>
                  <p className="font-DMSans text-sm text-[#DEDEDE]">@nftsart</p>
                </div>
                <div className="flex mt-6 justify-center">
                  <div className="">
                    <img
                      src="src\assets\svg\Trening2.svg"
                      alt="Trening2"
                      className="h-96 child_img duration-300 delay-[50]"
                    />
                  </div>
                  <div className="flex flex-col items-center ml-6 space-y-12 w-0 child_div opacity-0 translate-x-24 duration-1000">
                    <div className="">
                      <img
                        src="src\assets\svg\avatar2.svg"
                        alt="avatar2"
                        className="max-w-[3.75rem]"
                      />
                    </div>
                    <div className="">
                      <img src="src\assets\svg\heart.svg" alt="heart" />
                      <p className="font-DMSans text-[#DEDEDE] text-sm">
                        45.5K
                      </p>
                    </div>
                    <div className="">
                      <img src="src\assets\svg\3circle.svg" alt="network" />
                      <p className="font-DMSans text-[#DEDEDE] text-sm">
                        45.5K
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <div className="">
                    <p className="font-DMSans text-xl text-white text-bold ">
                      15h : 05m : 26s
                    </p>
                    <p className="font-OpenSans text-sm text-[#DEDEDE] mt-2">
                      Remaining Time
                    </p>
                  </div>
                  <div className="">
                    <p className="font-DMSans text-xl text-white text-bold">
                      20.25 ETH
                    </p>
                    <p className="font-OpenSans text-sm text-[#DEDEDE] mt-2">
                      Highest bid
                    </p>
                  </div>
                </div>
                <a href="">
                  <div
                    href=""
                    className="mt-5 py-3  font-OpenSans text-center text-base text[#222] bg-white child_a opacity-0 translate-y-24 duration-500 "
                  >
                    Place a Bid
                  </div>
                </a>
              </div>
              <div className="h-[35.125rem] w-96 mx-auto  border p-6 hover:h-auto border-[#FFFFFF47] hover:border-white hover:-translate-y-16 transition duration-500 hover:border-[2px] delay-75 parent overflow-hidden  lg:col-span-2 xl:col-span-1 lg:w-full lg:mx-0 mt-12">
                <div className="flex justify-between items-center">
                  <h4 className="font-DMSans font-bold text-white text-lg">
                    DOG ICON ART
                  </h4>
                  <p className="font-DMSans text-sm text-[#DEDEDE]">@nftsart</p>
                </div>
                <div className="flex mt-6 justify-center">
                  <div className="">
                    <img
                      src="src\assets\svg\Trening3.svg"
                      alt="Trening3"
                      className="h-96 child_img duration-300 delay-[50]"
                    />
                  </div>
                  <div className="flex flex-col items-center ml-6 space-y-12 w-0 child_div opacity-0 translate-x-24 duration-1000">
                    <div className="">
                      <img
                        src="src\assets\svg\avatar3.svg"
                        alt="avatar3"
                        className="max-w-[3.75rem]"
                      />
                    </div>
                    <div className="">
                      <img src="src\assets\svg\heart.svg" alt="heart" />
                      <p className="font-DMSans text-[#DEDEDE] text-sm">
                        45.5K
                      </p>
                    </div>
                    <div className="">
                      <img src="src\assets\svg\3circle.svg" alt="network" />
                      <p className="font-DMSans text-[#DEDEDE] text-sm">
                        45.5K
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <div className="">
                    <p className="font-DMSans text-xl text-white text-bold ">
                      15h : 05m : 26s
                    </p>
                    <p className="font-OpenSans text-sm text-[#DEDEDE] mt-2">
                      Remaining Time
                    </p>
                  </div>
                  <div className="">
                    <p className="font-DMSans text-xl text-white text-bold">
                      20.25 ETH
                    </p>
                    <p className="font-OpenSans text-sm text-[#DEDEDE] mt-2">
                      Highest bid
                    </p>
                  </div>
                </div>
                <a href="">
                  <div
                    href=""
                    className="mt-5 py-3 font-OpenSans text-center text-base text[#222] bg-white hidden child_a"
                  >
                    Place a Bid
                  </div>
                </a>
              </div>
            </div>
          </section>
          <section className="mt-[8.5rem]">
            <div className="flex justify-between">
              <h3 className="headers">Top Seller</h3>
              <a
                href=""
                className="font-OpenSans self-end text-lg text-[#DEDEDE] underline"
              >
                View All
              </a>
            </div>
            <div className="mt-12 overflow-scroll no-scrollbar">
              <div className="flex gap-6">
                <div className="w-[21rem] h-28 md:w-[29rem] md:h-40 flex-shrink-0 primery-bg px-10 py-6 flex items-center gap-6">
                  <img src="src\assets\svg\avatar1.svg" alt="avatar1" className="w-28" />
                  <div>
                    <p className="font-DMSans text-2xl text-white">
                      Alex Maverick
                    </p>
                    <p className="font-OpenSans text-lg text-[#DEDEDE] mt-2.5">
                      400 Artworks
                    </p>
                  </div>
                </div>
                <div className="w-[21rem] h-28 md:w-[29rem] md:h-40 flex-shrink-0 primery-bg px-10 py-6 flex items-center gap-6">
                  <img src="src\assets\svg\avatar2.svg" alt="avatar2" className="w-28" />
                  <div>
                    <p className="font-DMSans text-2xl text-white">
                      Alex Maverick
                    </p>
                    <p className="font-OpenSans text-lg text-[#DEDEDE] mt-2.5">
                      400 Artworks
                    </p>
                  </div>
                </div>
                <div className="w-[21rem] h-28 md:w-[29rem] md:h-40 flex-shrink-0 primery-bg px-10 py-6 flex items-center gap-6">
                  <img src="src\assets\svg\avatar3.svg" alt="avatar3" className="w-28" />
                  <div>
                    <p className="font-DMSans text-2xl text-white">
                      Alex Maverick
                    </p>
                    <p className="font-OpenSans text-lg text-[#DEDEDE] mt-2.5">
                      400 Artworks
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-6 ml-10 mt-6">
                <div className="w-[21rem] h-28 md:w-[29rem] md:h-40 flex-shrink-0 primery-bg px-10 py-6 flex items-center gap-6">
                  <img src="src\assets\svg\avatar1.svg" alt="avatar1"  className="w-28"/>
                  <div>
                    <p className="font-DMSans text-2xl text-white">
                      Alex Maverick
                    </p>
                    <p className="font-OpenSans text-lg text-[#DEDEDE] mt-2.5">
                      400 Artworks
                    </p>
                  </div>
                </div>
                <div className="w-[21rem] h-28 md:w-[29rem] md:h-40 flex-shrink-0 primery-bg px-10 py-6 flex items-center gap-6">
                  <img src="src\assets\svg\avatar2.svg" alt="avatar2"  className="w-28"/>
                  <div>
                    <p className="font-DMSans text-2xl text-white">
                      Alex Maverick
                    </p>
                    <p className="font-OpenSans text-lg text-[#DEDEDE] mt-2.5">
                      400 Artworks
                    </p>
                  </div>
                </div>
                <div className="w-[21rem] h-28 md:w-[29rem] md:h-40 flex-shrink-0 primery-bg px-10 py-6 flex items-center gap-6">
                  <img src="src\assets\svg\avatar3.svg" alt="avatar3"  className="w-28"/>
                  <div>
                    <p className="font-DMSans text-2xl text-white">
                      Alex Maverick
                    </p>
                    <p className="font-OpenSans text-lg text-[#DEDEDE] mt-2.5">
                      400 Artworks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-[8.5rem]">
            <div className="flex justify-between overflow-visible">
              <div className="w-[200px] sm:w-auto">
                <h3 className="font-Ruda text-5xl font-bold text-white sm:5xl whitespace-nowrap">Hot Collections</h3>
                <p className="textt mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit amet.
                </p>
              </div>
              <a
                href=""
                className="font-OpenSans text-lg text-[#DEDEDE] self-end underline whitespace-nowrap"
              >
                View All
              </a>
            </div>

            <div className="flex justify-center items-center gap-6 flex-wrap mt-12 ">
              <div className="max-w-[17.625rem] relative p-5 border border-[#FFFFFF36]">
                <div className="grid grid-cols-3 gap-x-3 gap-y-4">
                  <img
                    src="src\assets\svg\collection1-1.svg"
                    alt=""
                    className="col-span-3"
                  />
                  <img
                    src="src\assets\svg\collection1-2.svg"
                    alt=""
                    className=""
                  />
                  <img
                    src="src\assets\svg\collection1-3.svg"
                    alt=""
                    className=""
                  />
                  <img
                    src="src\assets\svg\collection1-4.svg"
                    alt=""
                    className=""
                  />
                </div>
                <img
                  src="src\assets\svg\collection1-center.svg"
                  alt=""
                  className="absolute top-1/2 left-1/2 -translate-x-1/2"
                />
                <div className="text-white flex justify-between items-center mt-[1.375rem]">
                  <p className="font-OpenSans text-lg font-semibold">
                    Art Item
                  </p>
                  <a href="" className="px-[1.125rem] py-2 primery-bg">
                    35+ item
                  </a>
                </div>
              </div>
              <div className="max-w-[17.625rem] relative p-5 border border-[#FFFFFF36]">
                <div className="grid grid-cols-3 gap-x-3 gap-y-4">
                  <img
                    src="src\assets\svg\collection2-1.svg"
                    alt=""
                    className="col-span-3"
                  />
                  <img
                    src="src\assets\svg\collection2-2.svg"
                    alt=""
                    className=""
                  />
                  <img
                    src="src\assets\svg\collection2-3.svg"
                    alt=""
                    className=""
                  />
                  <img
                    src="src\assets\svg\collection2-4.svg"
                    alt=""
                    className=""
                  />
                </div>
                <img
                  src="src\assets\svg\collection2-center.svg"
                  alt=""
                  className="absolute top-1/2 left-1/2 -translate-x-1/2"
                />
                <div className="text-white flex justify-between items-center mt-[1.375rem]">
                  <p className="font-OpenSans text-lg font-semibold">Cubic</p>
                  <a href="" className="px-[1.125rem] py-2 primery-bg">
                    35+ item
                  </a>
                </div>
              </div>
              <div className="max-w-[17.625rem] relative p-5 border border-[#FFFFFF36]">
                <div className="grid grid-cols-3 gap-x-3 gap-y-4">
                  <img
                    src="src\assets\svg\collection3-1.svg"
                    alt=""
                    className="col-span-3"
                  />
                  <img
                    src="src\assets\svg\collection3-2.svg"
                    alt=""
                    className=""
                  />
                  <img
                    src="src\assets\svg\collection3-3.svg"
                    alt=""
                    className=""
                  />
                  <img
                    src="src\assets\svg\collection3-4.svg"
                    alt=""
                    className=""
                  />
                </div>
                <img
                  src="src\assets\svg\collection3-center.svg"
                  alt=""
                  className="absolute top-1/2 left-1/2 -translate-x-1/2"
                />
                <div className="text-white flex justify-between items-center mt-[1.375rem]">
                  <p className="font-OpenSans text-lg font-semibold">Diamond</p>
                  <a href="" className="px-[1.125rem] py-2 primery-bg">
                    35+ item
                  </a>
                </div>
              </div>
              <div className="max-w-[17.625rem] relative p-5 border border-[#FFFFFF36]">
                <div className="grid grid-cols-3 gap-x-3 gap-y-4">
                  <img
                    src="src\assets\svg\collection4-1.svg"
                    alt=""
                    className="col-span-3"
                  />
                  <img
                    src="src\assets\svg\collection4-2.svg"
                    alt=""
                    className=""
                  />
                  <img
                    src="src\assets\svg\collection4-3.svg"
                    alt=""
                    className=""
                  />
                  <img
                    src="src\assets\svg\collection4-4.svg"
                    alt=""
                    className=""
                  />
                </div>
                <img
                  src="src\assets\svg\collection4-center.svg"
                  alt=""
                  className="absolute top-1/2 left-1/2 -translate-x-1/2"
                />
                <div className="text-white flex justify-between items-center mt-[1.375rem]">
                  <p className="font-OpenSans text-lg font-semibold">
                    Morgan11
                  </p>
                  <a href="" className="px-[1.125rem] py-2 primery-bg">
                    35+ item
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-[66rem] mx-auto mt-40 flex justify-center items-center px-12 py-[4.25] bg-[#FFFFFF1A] md:justify-between">
            <div className="max-w-[37.125rem] text-center sm:text-left my-[4.25rem]">
              <h3 className="font-Ruda font-bold text-4xl text-white">
                Subscribe Our Newsletters
              </h3>
              <p className="textt mt-5 ">
                Lorem ipsum dolor sit amet, consectetur adipisc elit amet ipsum
                dolor sit amet, consectetur adipisc elit. Lorem ipsum dolor sit
                amet.
              </p>
              <form
                action=""
                className="mt-10 flex justify-center items-center  h-14 overflow-hidden md:justify-start "
              >
                <input
                  type="email"
                  className="px-6 py-[1rem] textt outline-none h-14 basis-[34.2rem]  bg-[#FFFFFF33]"
                  placeholder="Enter your email..."
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="px-8 p-4 primery-bg font-OpenSans font-semibold text-lg text-white cursor-pointer "
                />
              </form>
            </div>
            <img
              src="src\assets\svg\subscribe.svg"
              alt="subscribe"
              className="-translate-y-7 translate-x-5 max-w-[21.125rem] hidden sm:block"
            />
          </section>
        </div>
      </main>
      <footer className="xl:xlcontainer mx-auto pl-4 mt-32 grid grid-cols-[10rem_10rem] justify-around gap-x-2 gap-y-10 mb-24 sm:grid-cols-4">
        <div className="w-fit ">
          <h4 className="font-DMSans font-bold text-2xl text-white">
            Marketplace
          </h4>
          <div className="space-y-4 mt-6 flex flex-col">
            <a href="" className="textt">
              All NFTs
            </a>
            <a href="" className="textt">
              Art
            </a>
            <a href="" className="textt">
              Music
            </a>
            <a href="" className="textt">
              Domain Names
            </a>
          </div>
        </div>
        <div className="w-fit ">
          <h4 className="font-DMSans font-bold text-2xl text-white">
            Resources
          </h4>
          <div className="space-y-4 mt-6 flex flex-col">
            <a href="" className="textt">
              Home
            </a>
            <a href="" className="textt">
              Blog
            </a>
            <a href="" className="textt">
              Brand Assets
            </a>
            <a href="" className="textt">
              Documentation
            </a>
          </div>
        </div>
        <div className="w-fit ">
          <h4 className="font-DMSans font-bold text-2xl text-white">
            Community
          </h4>
          <div className="space-y-4 mt-6 flex flex-col">
            <a href="" className="textt">
              About Us
            </a>
            <a href="" className="textt">
              Discord
            </a>
            <a href="" className="textt">
              Suggestions
            </a>
            <a href="" className="textt">
              Partners
            </a>
          </div>
        </div>
        <div className="w-fit ">
          <h4 className="font-DMSans font-bold text-2xl text-white">
            Newsletter
          </h4>
          <p className="textt mt-6 max-w-[19.625rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit amet.
          </p>
          <div className=" flex gap-5 mt-[1.375rem]">
            <a href="">
              <img
                src="src\assets\svg\Instagram.svg"
                alt="Instagram"
                className="p-2.5 rounded primery-bg"
              />
            </a>
            <a href="">
              <img
                src="src\assets\svg\Facebook.svg"
                alt="Facebook"
                className="p-2.5 rounded primery-bg"
              />
            </a>
            <a href="">
              <img
                src="src\assets\svg\Twitter.svg"
                alt="Twitter"
                className="p-2.5 rounded primery-bg"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
