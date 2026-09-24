import { useState } from "react";
import { Link } from "react-router";

export default function Navbar() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "HOME", path: "/", active: true, hasDropdown: false },
        { name: "PAGES", path: "/pages", active: false, hasDropdown: false },
        { name: "PRACTICE AREA", path: "/practice", active: false, hasDropdown: false },
        { name: "CASE STUDIES", path: "/cases", active: false, hasDropdown: false },
        { name: "SHOP", path: "/shop", active: false, hasDropdown: false },
        { name: "BLOG", path: "/blog", active: false, hasDropdown: false },
        { name: "CONTACT US", path: "/contact", active: false, hasDropdown: false },
    ];

    return (        
        <nav className="bg-[#231824] w-full px-6 py-6 flex justify-center font-sans relative z-50">        
            <div className="container flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 cursor-pointer">                    
                    <span className="text-white text-2xl font-bold tracking-wide">SISPEX</span>
                </Link>
            
                <ul className="hidden lg:flex items-center gap-8 text-[13px] font-semibold tracking-wider text-white">
                    {navItems.map((item) => (
                    <li key={item.name}>
                        <Link 
                        to={item.path}
                        className={`flex items-center gap-1 transition-colors cursor-pointer ${
                            item.active ? "text-[#b8735e]" : "hover:text-[#b8735e]"
                        }`}
                        >
                        {item.name}

                        {item.hasDropdown && (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        )}
                        </Link>
                    </li>
                    ))}
                </ul>
        
                <button 
                    className="lg:hidden text-white focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                    // Ícone de Fechar (X)
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    ) : (
                    // Ícone de Hambúrguer
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    )}
                </button>
        
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-[#231824] border-t border-gray-700 lg:hidden shadow-lg">
                        <ul className="flex flex-col px-6 py-4 gap-4 text-[13px] font-semibold tracking-wider text-white">
                            {navItems.map((item) => (
                            <li key={item.name}>
                                <Link 
                                to={item.path}
                                onClick={() => setIsMobileMenuOpen(false)} // Fecha o menu ao clicar em um link
                                className={`flex items-center justify-between w-full transition-colors cursor-pointer py-2 ${
                                    item.active ? "text-[#b8735e]" : "hover:text-[#b8735e]"
                                }`}
                                >
                                {item.name}

                                {item.hasDropdown && (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                    </svg>
                                )}
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>        
    );
}