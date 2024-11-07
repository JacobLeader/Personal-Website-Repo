import Navitem from "./navitem";
import Logo from "@/components/logo";

export default function Navbar() {
    return (
        <div className="flex flex-row">
            <div className="relative z-10 pl-2">
                <Logo />
            </div>
            <div className="flex flex-row justify-center w-full pt-4 absolute">
                <Navitem  title="About" page="about" />
                <Navitem title="Projects" page="projects" />
                <Navitem title="Contact" page="/contact" />
            </div>
        </div>
    );
}