import Link from "next/link"
import NavItem from "./NavItem"

const navlinks=[
    {
        name:"projects",
        link:"/projects"
    },
    {
        name:"contact",
        link:"/contact"
    }
]

function Navbar() {
  return (
    <div className="sticky top-50 w-full min-h-24 flex justify-between ">
        {/* logo section */}
        <div className="logo w-32 flex justify-center items-center capitalize font-bold text-xl cursor-pointer">
            <Link href={"/"}>
            Chhatra S.
            </Link>
           
        </div>

        {/* nav section */}

        <div className=" flex items-center justify-around gap-2 md:gap-4 md:min-w-[400px] md:mr-8">
            {navlinks.map((item)=><NavItem href={item.link} name={item.name} key={item.name}/>)}
        </div>
    </div>
  )
}

export default Navbar