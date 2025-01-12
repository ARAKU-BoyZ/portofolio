import { NavLink } from "react-router-dom"
import NavlinkApp from "./NavLink"
import { useState } from "react"

const NavbarApp = ({isActive}) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                    <div className="shrink-0">
                        <span className="text-gray-50">Adek Rahmat Kurniawan</span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                        <NavlinkApp isActive to='/about' menu="About" />
                        <NavlinkApp isActive to='/blog' menu="Blog" />
                        <NavlinkApp isActive to='/project' menu="Project" />
                        <NavlinkApp isActive to='/contact' menu="Contact" />
                        </div>
                    </div>
                    </div>
                    <div className="hidden md:block">
                    </div>
                    <div className="-mr-2 flex md:hidden">
                    {/* <!-- Mobile menu button --> */}
                    <button
                     type="button"
                     onClick={toggleMenu}
                     className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                     aria-controls="mobile-menu"
                     aria-expanded={isOpen ? "true" : "false"}>
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Open main menu</span>
                        {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                        <svg className={`block size-6 ${isOpen ? "hidden" : "block"}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                        <svg className={`block size-6 ${isOpen ? "block" : "hidden"}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    </div>
                </div>
            </div>
    
        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <NavlinkApp isActive to='/resume' menu="About" />
            <NavlinkApp isActive to='/blog' menu="Blog" />
            <NavlinkApp isActive to='/about' menu="Project" />
            <NavlinkApp isActive to='/contact' menu="Contact" />
          </div>
        </div>
      </nav>
    )
}

export default NavbarApp