import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <div className="flex flex-row m-4 text-5xl cursor-pointer transform transition-transform duration-300 hover:scale-125 hover:rotate-12">
                JL
            </div>
        </Link>
    );
}

