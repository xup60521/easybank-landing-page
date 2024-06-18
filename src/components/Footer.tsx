import {
    FaFacebook,
    FaInstagram,
    FaPinterest,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import Logo from "/images/logo.svg";

export default function Footer(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <footer {...props}>
            <div className="flex flex-col w-fit lg:gap-12 gap-6 lg:items-start items-center">
                <div className="relative">
                    <img src={Logo} alt="logo" />
                    <span className="absolute -top-2 left-8 tracking-wider font-public text-white font-bold text-lg">
                        easybank
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <FaFacebook className="size-5 transition hover:text-lime_green" />
                    <FaYoutube className="size-5 transition hover:text-lime_green" />
                    <FaTwitter className="size-5 transition hover:text-lime_green" />
                    <FaPinterest className="size-5 transition hover:text-lime_green" />
                    <FaInstagram className="size-5 transition hover:text-lime_green" />
                </div>
            </div>
            <div className="flex-grow flex  lg:pl-24 lg:gap-24 gap-4 lg:flex-row flex-col lg:py-0 py-2">
                <div className="flex flex-col gap-4 lg:items-start items-center">
                    <button className="text-xs text-grayish_blue font-public font-semibold transition hover:text-lime_green">
                        About Us
                    </button>
                    <button className="text-xs text-grayish_blue font-public font-semibold transition hover:text-lime_green">
                        Contact
                    </button>
                    <button className="text-xs text-grayish_blue font-public font-semibold transition hover:text-lime_green">
                        Blog
                    </button>
                </div>
                <div className="flex flex-col gap-4 lg:items-start items-center">
                    <button className="text-xs text-grayish_blue font-public font-semibold transition hover:text-lime_green">
                        Careers
                    </button>
                    <button className="text-xs text-grayish_blue font-public font-semibold transition hover:text-lime_green">
                        Support
                    </button>
                    <button className="text-xs text-grayish_blue font-public font-semibold transition hover:text-lime_green">
                        Privacy Policy
                    </button>
                </div>
            </div>
            <div className="flex flex-col lg:items-end items-center gap-6">
                <button className="px-7 py-3 text-xs rounded-full font-public text-white transition bg-gradient-to-r from-lime_green to-bright_cyan w-fit hover:brightness-125">
                    Request Invite
                </button>
                <span className="font-public text-grayish_blue text-xs">
                    © Easybank. All Rights Reserved
                </span>
            </div>
        </footer>
    );
}
