import { useContext, useRef } from "react"
import type { PersInfo } from "../../interfaces"
import { ModeContext } from "../../pages/Major"

const PersonalInfo = ({ name, job, description, img_url }: PersInfo) => {
	const mode = useContext(ModeContext)
	const color: string = mode ? "#1D2130" : "white"

	const linkRef = useRef<HTMLAnchorElement | null>(null);

	const handleDownload = () => {
		if (linkRef.current) {
			linkRef.current.click();
		}
	};
	return (
		<>
			<div className="relative w-full h-full dark:bg-dark text-mainText dark:text-white pt-18 ">
				{/* lines */}
				<img src="/Portfolio/img/Lines.png" alt="" className="absolute top-14 z-[90] lg:block hidden" />
				{/* blue */}
				<div className="absolute z-[200] left-[70px] w-[80%] lg:w-[40%] h-[350px] rounded-full bg-radial custom-radial"></div>
				{/* all */}
				<div className="absolute z-[201] w-full min-h-[444px] gap-12 lg:flex-row justify-between lg:px-[70px] px-[20px] py-10 flex flex-col">
					{/* left */}
					<div className="lg:w-[70%] w-full h-full flex flex-col gap-[30px] lg:text-start text-center justify-center pt-8 lg:items-start items-center">
						<div className="w-full fex flex-col gap-2 justify-between items-center">
							<h1 className="text-mainText text-[40px]  lg:text-[35px] font-bold dark:text-white"><span className="font-normal">HEY! </span>I’m  <br /><span className="text-[#0C96E2] lg:text-[40px]">{name},</span><br />{job} <br /></h1>
							<p className="text-secText dark:text-white lg:w-[80%] lg:text-[18px]">{description}</p>
						</div>
						<a href="/Portfolio/files/Eng.Amal_Al-Khalaf.pdf" download="Eng.Amal_Al-Khalaf_CV.pdf" ref={linkRef} className="hidden">download</a>
						<button title="downloadCV" onClick={handleDownload} className="bg-[#FFFFFF99] dark:bg-[#0C96E299] w-[155px] h-[50px] rounded border-[1px] border-[#0C96E2] cursor-pointer hover:bg-[#DFE1FA] hover:text-[#0C96E2]">Download Cv</button>
					</div>
					{/* right */}
					<div className="relative h-full lg:w-[600px] w-full flex justify-center items-center text-center">
						<img src="/Portfolio/img/squers.png" alt="" className=" z-[205] w-full " />
						<div className="absolute bottom-0 w-[75%] h-[90%] z-[202] bg-[#DFE1FA] left-1/8 rounded-[100%]"></div>
						<img src={img_url} alt="" className="absolute top-0 h-full z-[210] left-1/6" />
					</div>
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
		</>
	)
}

export default PersonalInfo
