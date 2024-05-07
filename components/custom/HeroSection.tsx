import { TextAnimate } from "@/animations/";



export function HeroSection(){
return(
<div className="min-h-1/2 relative -top-[100] grid-cols-2">
<div className="flex w-full h-screen ">
  {/* introduction */}
  <div className="w-1/2  flex flex-col justify-center  items-center">
    <div className="w-3/5 flex gap-2 text-3xl text-bold">
      <div className="poppins-extralight">Hello I am </div>
     <TextAnimate/>
    </div>

  </div>

  <div className="w-1/2"></div>
</div>
</div>
    )
}
