import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]
                        text-white text-2xl mb-5 items-center py-6 px-10 justify-between flex sticky top-0">
            <div>                    
                <a href="/Home" className="hover:text-gray-400">
                    Monitosh
                </a>
            </div>
            <ul className="flex items-center gap-5 justify-between">
                <li>
                    <a href="/Projects" className="hover:text-gray-400">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="/Contact" className="hover:text-gray-400">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;