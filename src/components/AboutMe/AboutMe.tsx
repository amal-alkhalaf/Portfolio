import { GoTriangleDown } from "react-icons/go"
import type { AboutMeProps } from "../../interfaces"

const AboutMe = ({explain,techniq}:AboutMeProps) => {
	return (
		<div className="w-full px-[20px] lg:px-[70px] dark:bg-dark text-mainText dark:text-white flex flex-col-reverse lg:flex-row justify-between">
			{/* left */}
			<div className="relative  w-full h-full lg:w-[500px] flex justify-center items-center">
				<img src="/Portfolio/img/Circles.png" alt="" className="top-2 lg:top-10  absolute z-[200]"/>
				<img src="/Portfolio/img/teq.png" alt="" className="top-2 w-[93%] lg:top-14 absolute z-[200]"/>
			</div>
			{/* right */}
			<div className="flex flex-col w-full lg:w-[55%] h-full gap-4">
				<div className="w-full flex flex-col gap-2">
					<h1 className="text-[40px] font-semibold">About Me</h1>
					<p className="text-[18px]">{explain}</p>
				</div>
				<div className="flex flex-col gap-2.5">
					{techniq.map((tech, index) => (
						<div className="flex flex-col gap-1">
							<div style={{"--my-width" : tech.rate} as React.CSSProperties}  className="w-[var(--my-width)] flex justify-between items-center">
								<h2 className="text-2xl font-[600]">{tech.name}</h2>
								<div className=" flex flex-col items-center justify-center -mr-5">
									<div className=" w-[33px] h-[20px] bg-[#0C96E1] rounded-[4px] text-white text-[10px] flex justify-center items-center mt-2 -mb-2">
										{tech.rate}
									</div>
									<GoTriangleDown className="text-[#0C96E1] text-[22px]" />
								</div>
							</div>
							<div key={index} className="w-full flex items-center h-[11px] bg-[#EDECEC] rounded-r-md rounded-l-md">
								<div style={{"--my-width" : tech.rate} as React.CSSProperties} className="w-[var(--my-width)] bg-[#0C96E1] h-[11px] rounded-l-md"></div>
								<div className="w-[25px] h-[25px] rounded-[100%] bg-[#EDECEC] border-[3px] border-[#0C96E1] shadow1 -ml-2.5"></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default AboutMe


