import React from "react";
import {Link} from "react-router-dom";
import logo from "../../public/logo.svg";

const Navbar = () => {
    return (
        <div className="w-screen flex items-center justify-between h-16 px-16 ">
            <nav className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                    <Link className="border-[1px] rounded-[24px] p-[3px_12px_2px] flex items-center justify-center h-[32px] text-center  text-[11px] font-semibold">
                        STILLS
                    </Link>
                    <Link className="border-[1px] rounded-[24px] p-[3px_12px_2px] flex items-center justify-center h-[32px] text-center  text-[11px] font-semibold">
                        MOTION
                    </Link>
                    <Link className="border-[1px] rounded-[24px] p-[3px_12px_2px] flex items-center justify-center h-[32px] text-center  text-[11px] font-semibold">
                        ABOUT
                    </Link>
                </div>
                <div className="">
                    <img className="text-white fill-white filter" src={logo} alt="" />
                </div>
                <div className="flex items-center gap-3">
                    <Link className="border-[1px] rounded-[24px] p-[3px_12px_2px] flex items-center justify-center h-[32px] text-center  text-[11px] font-semibold">
                        INSTAGRAM
                    </Link>
                    <Link className="border-[1px] rounded-[24px] p-[3px_12px_2px] flex items-center justify-center h-[32px] text-center  text-[11px] font-semibold">
                        EMAIL
                    </Link>
                    <Link className="border-[1px] rounded-[24px] p-[3px_12px_2px] flex items-center justify-center h-[32px] text-center  text-[11px] font-semibold">
                        F/1.4
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
