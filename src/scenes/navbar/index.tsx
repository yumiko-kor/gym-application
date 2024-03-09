import { useEffect, useState } from "react";
import { Bars3Icon, XmarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/asscet/Logo.png";


const Navbar = (props: Props) => {
    const flextBetween = "flex items-center justify-between"

    return <nav>
        <div className={`${flextBetween} fixed top-0 z-30 w-full`}>
            <div className={`${flextBetween} mx-auto w-5`}>
                <div className={`${flextBetween} w-full gap-0`}>
                    <img alt="logo" src={Logo} />


                    {/* Righ Sight */}
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    </nav>
};

export default Navbar;