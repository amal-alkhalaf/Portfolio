import { FaEye, FaGithub } from "react-icons/fa";
import type { CardProps } from "../../interfaces"
import { BiSolidCommentDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

const Card = ({ imgUrl, title, skills, demoUrl, githubUrl,time,details,languages,libraries,frameworks }: CardProps) => {
	const goToDemo = (demoUrl: string) => {
		window.open(demoUrl, "_blank", "noopener,noreferrer");
	}
	const goToGitHub = (githubUrl: string) => {
		window.open(githubUrl, "_blank", "noopener,noreferrer");
	}
    const card ={imgUrl, title , demoUrl, githubUrl,time,details,languages,libraries,frameworks }

	return (
		<div className="w-full lg:max-w-[370px] flex flex-col shadow1 rounded-b-lg">
			<img src={imgUrl} alt="" className="w-full h-full lg:h-[220px] border-[1px] dark:border-blue-300 border-gray-200 rounded-t-lg " />
			<div className="h-full flex flex-col gap-4 w-full border-[1px] dark:border-blue-300 border-gray-200 rounded-b-lg px-3 pb-6">
				<div className="flex justify-between items-center pt-8">
					<h2 className="w-[70%] text-[22px] text-mainText dark:text-white font-semibold ">{title}</h2>
					<div className="flex gap-2">
						<Link to="/projects#details" state={{card: card}} title="toDetails" className="cursor-pointer bg-[#0C96E2] rounded-lg w-[35px] h-[35px] flex justify-center items-center">
							<BiSolidCommentDetail className="text-white text-[18px]" />
						</Link>
						<button title="goToGitHub" onClick={() => goToGitHub(githubUrl)} className="cursor-pointer bg-[#0C96E2] rounded-lg w-[35px] h-[35px] flex justify-center items-center">
							<FaGithub className="text-white text-[18px]" />
						</button>
					</div>
				</div>
				<div className="flex justify-between items-center">
					<p className="text-mainText lg:text-[14px] dark:text-white w-[70%] ">{skills}</p>
					<button title="goToGitHub" onClick={() => goToDemo(demoUrl)} className="cursor-pointer bg-[#0C96E2] rounded-lg w-[35px] h-[35px] flex justify-center items-center">
						<FaEye className="text-white text-[18px]" />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Card
