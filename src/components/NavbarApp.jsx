import { Link, NavbarMenu, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle } from "@nextui-org/react"
import { useState } from "react"


const NavbarApp = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
            <NavbarBrand>
                <p>Adek Rahmat Kurniawan</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex" justify="end">
                <NavbarItem>
                    <Link href="/resume"color="foreground">About</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/blog" color="foreground">Blog</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/contact" color="foreground">Contact</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                <NavbarItem>About</NavbarItem>
                <NavbarItem>Blog</NavbarItem>
                <NavbarItem>Contact</NavbarItem>
            </NavbarMenu>
        </Navbar>
    )
}

export default NavbarApp