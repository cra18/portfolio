import Link from "next/link"

interface NavLinkProps {
    href: string;
    title: string;
}

const NavLink = ({ href , title }: NavLinkProps) => {
    return(
        <Link href={href}>
            <a className="block py-2 pl-3 pr-4 text-purple-500 sm:text-xl rounded md:p-0 hover:text-white">
                {title}
            </a>
        </Link>
    );
};

export default NavLink