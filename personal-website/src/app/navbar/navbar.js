import Navitem from "./navitem";

export default function Navbar() {
    return (
        <div className="flex flex-row justify-center w-full pt-4">
            <Navitem  title="About" page="/about" />
            <Navitem title="Projects" page="/projects" />
            <Navitem title="Contact" page="/contact" />
        </div>
    );
}