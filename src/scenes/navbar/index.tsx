import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import Logo from "@/assets/Logo.png";

type Props = {
    page: string;
    selectedPage: string;
    setSelectedPage: (value: string) => void;
};

const Navbar = ({ page, selectedPage, setSelectedPage } : Props) => {
    const flexBetween = "flex items-center justify-between"

    return <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
                    <img alt="logo" src={Logo} />


                    {/* Righ Sight */}
                    <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link 
                                page="Home" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link 
                                page="Benefits" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link 
                                page="Our Classes" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link 
                                page="Contact US" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                        <div>
                            <p>Sign In</p>
                            <button>Become a Member</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
};

export default Navbar;