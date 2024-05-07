import Link from "next/link";
import { Button } from "../ui/button";


interface NavItemProps{
    href:string;
    name:string;

}

function NavItem({href,name}:NavItemProps){
    return (
        <Link href={href} className="cursor-pointer">
        <div className="group flex flex-col uppercase justify-center rounded-full py-2 px-8 transition-border ease-in-out duration-300 hover:border-2 border-stone-200">
            <span>
                {name}
            </span>
            {/* <span className="h-1 w-0 transition-width ease-in-out duration-300 group-hover:w-full  bg-red-400">

            </span> */}
        </div>
        </Link>
       
    )
}

export default NavItem;