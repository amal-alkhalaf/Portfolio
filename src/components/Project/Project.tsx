import { IoExpand } from "react-icons/io5"
import type { CardProps } from "../../interfaces"
import { useContext, useState } from "react"
import { ModeContext } from "../../pages/Major"
import { FaGithub } from "react-icons/fa"

const Project = ({ imgUrl, title, demoUrl, githubUrl,time,details,languages,libraries,frameworks }: CardProps) => {
	const mode = useContext(ModeContext)
	const color: string = mode ? "#1D2130" : "white"
	const [showImage, setShowImage] = useState(false)

	const goToDemo = (demoUrl: string) => {
		window.open(demoUrl, "_blank", "noopener,noreferrer");
	}
	const goToRepo = (githubUrl: string) => {
		window.open(githubUrl, "_blank", "noopener,noreferrer");
	}
	return (
		<>
			<div className=" w-full min-h-screen flex flex-col lg:flex-row items-center gap-[43px] pt-[80px] pb-[50px]  px-[20px] md:px-[70px] ">
				<div className="relative w-full h-full">
					<img src={imgUrl} alt="" className="h-full w-full block rounded-lg" />
					<div className="absolute top-0 left-0 h-full w-full bg-[#00000080] flex justify-center items-center gap-8 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
						<button title="showPicture" onClick={() => setShowImage(true)} className="cursor-pointer"><IoExpand className="text-[60px] text-white " /></button>
						<button title="toDemo" className="cursor-pointer" onClick={() => { goToDemo(demoUrl) }}><img src="/img/toDemo.png" alt="" className="w-[60px]" /></button>
					</div>
				</div>
				<div className="w-full h-full flex flex-col gap-4">
					<div className="flex flex-col ">
						<div className="flex justify-between items-center">
							<h1 className="text-[28px] text-mainText dark:text-white font-semibold ">{title}</h1>
							<button title="toDemo" className="cursor-pointer" onClick={() => { goToDemo(demoUrl) }}><img src="/img/toDemoBlue.png" alt="" className="w-[40px]" /></button>
						</div>
						<p className="text-[14px] text-[#A6A6A6] font-medium ">{time}</p>
					</div>
					<p className="text-[18px] text-mainText dark:text-white ">{details}</p>
					<div className="flex flex-col gap-3">
						<p className="text-[18px] text-mainText dark:text-white font-medium "><span className="font-medium ">Basic Languages : </span>{languages}</p>
						<p className="text-[18px] text-mainText dark:text-white font-medium "><span className="font-medium ">Frameworks : </span>{frameworks}</p>
						<p className="text-[18px] text-mainText dark:text-white font-medium "><span className="font-medium ">Libraries : </span>{libraries}</p>
					</div>
					<button title="goToRepo"  onClick={() => goToRepo(githubUrl)} className="w-[164px] h-[51px] bg-[#0C96E2] cursor-pointer text-white rounded-lg flex justify-center items-center gap-2">Github Repo <FaGithub className="text-white text-[18px]" /> </button>
				</div>
			</div>
			<div className="relative w-full py-1.5">
				<svg width="100%" height="10" >
					<line x1="0" y1="5" x2="100%" y2="5" stroke={color} strokeWidth="1" strokeDasharray="5 10" />
				</svg>
				<div className="absolute left-1/2 top-0 bg-[#EFF2F7] border-[1px] border-mainText dark:border-white border-solid w-[22px] h-[22px] rounded-[100%] flex justify-center items-center">
					<div className="bg-[#EFF2F7] border-[1px] border-mainText dark:border-white border-solid w-[16px] h-[16px] rounded-[100%] flex justify-center items-center text-mainText font-bold pb-1.5">
						.
					</div>
				</div>
			</div>
			{showImage && (
				<div
					onClick={() => setShowImage(false)} className="fixed inset-0 bg-white dark:bg-dark bg-opacity-80 flex items-center justify-center cursor-pointer z-[300]">
					<img src={imgUrl} alt="" className="max-w-full max-h-full rounded" />
				</div>
			)}
		</>

	)
}

export default Project
