import { MdArrowOutward } from "react-icons/md"
import type { ProjBaseProps } from "../../interfaces"
import Card from "../Card/Card"
import { useState } from "react"
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io"

const ProjBase = ({githubUrl, cards }: ProjBaseProps) => {
	const [isClick, setIsClick] = useState(false)
	const goToGitHub = (githubUrl:string|undefined) => {
		window.open(githubUrl, "_blank", "noopener,noreferrer");
	}
	return (
		<div className="w-full mt-16 px-[20px] md:px-[70px] flex flex-col gap-5 items-center">
			{/* header */}
			<div className="w-full flex flex-col text-center justify-center lg:text-start">
				<p className="text-[#0C96E2] text-[20px] font-medium ">Portfolio</p>
				<h1 className="text-mainText dark:text-white text-[40px] font-semibold ">My Creative Works</h1>
				<div className="w-full flex flex-col lg:flex-row gap-8 lg:justify-between items-center">
					<><h1 className="text-mainTex text-[40px] font-semibold dark:text-white">Latest <span className="text-[#0C96E2]">Projects</span></h1></>
					<button title="toGithub" onClick={()=>{goToGitHub(githubUrl)}} className="flex items-center justify-center gap-1 w-[164px] h-[50px] rounded-lg bg-[#0C96E2] text-white text-[14px] font-medium cursor-pointer">View Github <MdArrowOutward className="text-[18px] font-medium text-white  " /></button>
				</div>
			</div>
			{/* Cards */}
			<div className=" grid grid-flow-row grid-cols-1 lg:grid-cols-3 w-full gap-[20px] justify-center">
				{cards.map((card, index) => (
					<div key={index} className={`${index>5 ? !isClick ? "hidden" : "visible" : "visible"}`}>
						<Card imgUrl={card.imgUrl} title={card.title} skills={card.skills} demoUrl={card.demoUrl} githubUrl={card.githubUrl}
						time={card.time}  details={card.details} languages={card.languages} libraries={card.libraries} frameworks={card.frameworks} />
					</div>
				))}
			</div>
			<button title="toGithub" onClick={()=>{setIsClick((prev) => !prev)}} className="flex items-center justify-center gap-1 w-[170px] h-[50px] rounded-lg bg-[#0C96E2] text-white text-[14px] font-medium cursor-pointer">
				{!isClick?<> <p>View All Projects</p> <IoMdArrowRoundDown  className="text-[18px] font-medium text-white  " /> </> : <><p>View Latest Projects</p> <IoMdArrowRoundUp className="text-[18px] font-medium text-white  " /> </> }
			</button>
		</div>
	)
}

export default ProjBase
