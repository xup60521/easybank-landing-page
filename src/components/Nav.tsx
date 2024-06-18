import { Fragment, useState } from "react";
import Logo from "/images/logo.svg";
import Menu from "/images/icon-hamburger.svg";
import Close from "/images/icon-close.svg";

export default function Nav({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    const [open, setOpen] = useState(false);
    return (
        <Fragment>
            <nav className={className} {...props}>
                <img src={Logo} alt="logo" className="h-4" />
                <div className="lg:flex hidden items-center gap-8 h-full">
                    <button className="text-sm font-public text-grayish_blue transition hover:text-black border-b-2 border-transparent hover:border-b-lime_green h-full">
                        Home
                    </button>
                    <button className="text-sm font-public text-grayish_blue transition hover:text-black border-b-2 border-transparent hover:border-b-lime_green h-full">
                        About
                    </button>
                    <button className="text-sm font-public text-grayish_blue transition hover:text-black border-b-2 border-transparent hover:border-b-lime_green h-full">
                        Contact
                    </button>
                    <button className="text-sm font-public text-grayish_blue transition hover:text-black border-b-2 border-transparent hover:border-b-lime_green h-full">
                        Blog
                    </button>
                    <button className="text-sm font-public text-grayish_blue transition hover:text-black border-b-2 border-transparent hover:border-b-lime_green h-full">
                        Careers
                    </button>
                </div>
                <button className="px-6 py-2 text-sm rounded-full hover:opacity-80 font-public text-white transition bg-gradient-to-r from-lime_green to-bright_cyan w-fit lg:block hidden">
                    Request Invite
                </button>
                <button
                    className="lg:hidden flex items-center justify-center"
                    onMouseDown={() => setOpen(!open)}
                >
                    {open ? (
                        <img src={Close} alt="menu icon" />
                    ) : (
                        <img src={Menu} alt="menu icon" />
                    )}
                </button>
            </nav>
            {open && (
                <div className="absolute w-full h-full bg-gradient-to-b from-dark_blue to-transparent z-10 lg:hidden flex flex-col px-8">
                    <div className="rounded-md flex flex-col items-center justify-center gap-6 bg-white mt-24 py-8">
                        <button className="font-public text-dark_blue">Home</button>
                        <button className="font-public text-dark_blue">About</button>
                        <button className="font-public text-dark_blue">Contact</button>
                        <button className="font-public text-dark_blue">Blog</button>
                        <button className="font-public text-dark_blue">Careers</button>
                    </div>
                </div>
            )}
        </Fragment>
    );
}
