import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <nav className="flex border-b-3 justify-between items-center pl-2">
            <Link to={"/"} className="p-3 text-5xl">IDKWCTU</Link>
            <ul className="flex gap-8 text-3xl items-center pr-5">
                <li>
                    <Link to={"#about"}>about</Link>
                </li>
                <li>
                    <Link to={"#info"}>info</Link>
                </li>
                <li>
                    <Link to={"#contact"}>contact us</Link>
                </li>
            </ul>
        </nav>
    );
}