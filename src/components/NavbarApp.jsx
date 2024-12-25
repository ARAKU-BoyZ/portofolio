import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"


const NavbarApp = () => {
    return (
        <Navbar isBlurred={false}
        className="bg-white">
            <NavbarBrand>
                <p className="font-bold text-inherit">AdeeeRK</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                <NavbarItem>
                    <Link color="foregrounde">Home</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground">About Me</Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default NavbarApp