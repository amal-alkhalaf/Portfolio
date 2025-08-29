import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegramPlane, FaWhatsapp } from "react-icons/fa"
import type { FooterProps } from "../../interfaces"


const Footer = ({facebook,telegram,whatsapp,linkedin,instagram}:FooterProps) => {
	const goToFacebook = (facebook:string) => {
		window.open(facebook, "_blank", "noopener,noreferrer");
	}

	const goToTelegram = (telegram:string) => {
		window.open(telegram, "_blank", "noopener,noreferrer");
	}

	const goTowhatsapp = (whatsapp:string) => {
		window.open(whatsapp, "_blank", "noopener,noreferrer");
	}

	const goToLinkedin = (linkedin:string) => {
		window.open(linkedin, "_blank", "noopener,noreferrer");
	}

	const goToInstagram = (instagram:string) => {
		window.open(instagram, "_blank", "noopener,noreferrer");
	}
	return (
		<div className="w-full min-h-[100px] px-[20px] md:px-[70px] flex flex-col lg:flex-row justify-between items-center border-t-[1px] border-t-[#BEC0BF] gap-2 py-6 ">
			<p className="text-mainText dark:text-white">@ 2025. All Rights Reserved</p>
			<p className="text-mainText dark:text-white">Develpoment by <span className="text-[#0C96E2]">Amal Al-Khalaf</span></p>
			<div className="flex gap-[16px]">
				<button onClick={()=>{goToFacebook(facebook)}} title="toFaceBook" className="cursor-pointer bg-[#0C96E2] rounded-[100%] w-[25px] h-[25px] flex justify-center items-center">
					<FaFacebookF className="text-white "/>
				</button>
				<button onClick={()=>{goToTelegram(telegram)}} title="toInstagram" className="cursor-pointer bg-[#0C96E2] rounded-[100%] w-[25px] h-[25px] flex justify-center items-center">
					<FaTelegramPlane className="text-white"/>
				</button>
				<button onClick={()=>{goTowhatsapp(whatsapp)}} title="toWhatsApp" className="cursor-pointer bg-[#0C96E2] rounded-[100%] w-[25px] h-[25px] flex justify-center items-center">
					<FaWhatsapp  className="text-white "/>
				</button>
				<button onClick={()=>{goToLinkedin(linkedin)}} title="toLinkedin" className="cursor-pointer bg-[#0C96E2] rounded-[100%] w-[25px] h-[25px] flex justify-center items-center">
					<FaLinkedinIn className="text-white "/>
				</button>
				<button onClick={()=>{goToInstagram(instagram)}} title="toInstagram" className="cursor-pointer bg-[#0C96E2] rounded-[100%] w-[25px] h-[25px] flex justify-center items-center">
					<FaInstagram className="text-white"/>
				</button>
				
			</div>
		</div>
	)
}

export default Footer
