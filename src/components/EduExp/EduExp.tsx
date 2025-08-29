import { FaArrowUp } from "react-icons/fa"
import type { EduProps } from "../../interfaces"
import { HashLink as NavLink } from "react-router-hash-link"

const EduExp = ({eduExps }:EduProps) => {
	return (
		<div className="relative ">
			<img src="/Portfolio/img/bg.png" alt="" className=" absolute z-[200] -rotate-10 -right-10 -top-10 hidden md:block" />
			<img src="/Portfolio/img/bg.png" alt="" className=" absolute z-[200] rotate-150 -left-10 -bottom-55 md:block" />
			<div className="relative flex flex-col gap-[88px] justify-between  ">
				{/* top */}
				<div className="flex flex-col items-start lg:items-center text-start lg:text-center ">
					<p className="font-medium text-[20px] text-[#0C96E2]">Education and Experience</p>
					<h1 className="font-semibold text-[40px] text-[#282938] dark:text-white">Education & Experience</h1>
				</div>
				{/* bottom */}
				<div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 w-full gap-[46px]">
					{eduExps.map((eduExp, index) => (
						<div key={index} className="relative flex px-[48px] w-full border-l-2 border-black dark:border-white border-dashed">
							<div className="absolute top-0.5 -left-3 bg-[#0C96E2] w-[20px] h-[20px] outline-2 outline-dashed rounded-[100%] outline-dark dark:outline-white border-2 border-white dark:border-dark"></div>
							{/* info */}
							<div className="flex w-full flex-col gap-3.5">
								<h2 className="text-[#344054] dark:text-white text-[25px] font-medium ">{eduExp.title}</h2>
								<p className="text-[#98A2B3] w-full">{eduExp.explain}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<NavLink smooth to="#Home" title="toTop" className="fixed z-[300] bottom-8 -right-13 bg-[#0C96E299] w-[50px] h-[50px] rounded-[12px] mr-[70px] flex justify-center items-center cursor-pointer shadow2 ">
				<FaArrowUp className="text-white text-[20px]"/>
			</NavLink>
		</div>
	)
}

export default EduExp
