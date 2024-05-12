
import TiledCheckbox from "../TiledCheckbox/TiledCheckbox"


function ProjectDashboardContainer() {
  return (
    <div className="w-full p-1  flex flex-col justify-start">
      <div className="w-full  text-light text-4xl flex justify-center items-center p-2"> Technologies I've used</div>
      <div className="flex w-full h-fit justify-center items-center">
        <fieldset className="w-3/5 grid grid-cols-4 gap-12 h-[200px] mt-20 bg-white">
        <TiledCheckbox icon={"devicon:react"} name="react" id="#react"/>
        <TiledCheckbox icon={"logos:nextjs"} name="nextjs" id="#nextjs"/>
        <TiledCheckbox icon={"logos:django"} name="django" id="#django"/>
        <TiledCheckbox icon={"logos:pytorch-icon"} name="pytorch" id="#pytorch"/>
        <TiledCheckbox icon={"logos:hugging-face-icon"} name="huggingface" id="#huggingface" />
        <TiledCheckbox icon={"logos:aws"} name="aws" id="#aws" />
        <TiledCheckbox icon={"devicon:docker"} name="docker" id="#docker" />
        <TiledCheckbox icon={"devicon:git"} name="git" id="#git" />
        <TiledCheckbox icon={"devicon:go"} name="go" id="#go" />
        <TiledCheckbox icon={"devicon:mongodb"} name="mongodb" id="#mongodb" />
        <TiledCheckbox icon={"devicon:redis"} name="redis" id="#redis" />
        <TiledCheckbox icon={"devicon:opencv"} name="opencv" id="#opencv" />
        </fieldset>

      </div>
    </div>
  )
}
export default ProjectDashboardContainer
