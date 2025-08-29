import { FaArrowRight } from "react-icons/fa"
import { HashLink as NavLink } from "react-router-hash-link"

const ToContact = () => {
	return (
		<div className="relative w-full h-[375px] px-[20px] flex justify-center items-center lg:px-[70px] mt-40">
			<img src="/Portfolio/img/bgContact.png" alt="" className="absolute z-[100] h-[375px]" />
			<div className=" absolute z-[200] w-full h-full flex flex-col lg:flex-row justify-center gap-12 items-center py-[20px] md:py-[30px] lg:py-[111px] px-[20px] lg:px-[100px] ">
				<div className="w-full text-center lg:text-start ">
					<h1 className="text-[35px] lg:text-[40px] font-semibold text-white ">Try me out, risk free!</h1>
					<p className="text-[16px] lg:text-[18px] text-white">If you’re not happy with the design after the first draft,<br />I’ll refund your deposit, no questions asked</p>
				</div>
				<NavLink smooth to="#Contact" title="toContact" className="w-[155px] h-[50px] rounded-[6px] bg-[#0C96E2] text-white text-[14px] flex justify-center items-center gap-[13px] cursor-pointer ">
					Contact
					<FaArrowRight className="text-[20px] text-white " />
				</NavLink>
			</div>
		</div>
	)
}

export default ToContact
