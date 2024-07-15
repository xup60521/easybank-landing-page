import MockupsImage from "/images/image-mockups.png";
import IntroDesktop from "/images/bg-intro-desktop.svg";
import IntroMobile from "/images/bg-intro-mobile.svg";
import Nav from "./components/Nav";
import Why from "./components/Why";
import Article from "./components/Article";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";

// lg: px-32 other: px-4

export default function App() {
    return (
        <AnimatePresence>
            <div className="h-screen bg-very_light_gray overflow-x-hidden relative">
                <Nav className="bg-white w-full h-16 absolute z-20 left-0 top-0 flex lg:px-32 items-center justify-between px-8" />
                <div className="flex justify-center items-center relative lg:pl-32 lg:mt-16 lg:flex-row flex-col">
                    <div className="lg:hidden block w-full overflow-hidden">
                        <img src={IntroMobile} alt="" className="w-full" />
                        <img
                            src={MockupsImage}
                            alt="mockups images"
                            className="absolute -top-16"
                        />
                    </div>
                    <div className="flex-grow flex items-center lg:px-0 px-4 lg:pb-0 pb-12">
                        <div className="flex flex-col lg:w-[25rem] lg:items-start items-center">
                            <h1 className="lg:text-[3rem] text-3xl lg:text-left text-center font-medium text-dark_blue font-public lg:leading-[3.5rem] leading-10">
                                Next generation digital banking
                            </h1>
                            <p className="font-public text-grayish_blue pt-6 pb-8 text-sm lg:text-left text-center">
                                Take your financial life online. Your Easybank
                                account will be a one-stop-shop for spending,
                                saving, budgeting, investing, and much more.
                            </p>
                            <button className="px-7 py-3 lg:text-sm text-xs rounded-full hover:opacity-80 font-public text-white transition bg-gradient-to-r from-lime_green to-bright_cyan w-fit">
                                Request Invite
                            </button>
                        </div>
                    </div>
                    <div className="relative w-[50vw] h-fit scale-110 lg:block hidden">
                        <div className="w-full h-full relative">
                            <img
                                src={IntroDesktop}
                                alt="intro desktop image"
                                className=" scale-[1.3] left-0 -translate-y-[5%] translate-x-[10vw]"
                            />
                        </div>
                        <img
                            src={MockupsImage}
                            alt="mockups images"
                            className="absolute w-[43vw] -right-[5vw] -top-[2vw]"
                        />
                    </div>
                </div>
                <Why className="w-full pt-24 pb-12 bg-light_grayish_blue mt-6 lg:px-32 px-4 flex flex-col lg:items-start items-center" />
                <Article className="w-full bg-very_light_gray lg:px-32 px-4 py-20 pb-12 flex flex-col" />
                <Footer className="bg-dark_blue text-white w-full flex items-center lg:px-32 px-4 py-12 lg:flex-row flex-col lg:gap-0 gap-6" />
            </div>
        </AnimatePresence>
    );
}
