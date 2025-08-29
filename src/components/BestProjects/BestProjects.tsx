
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import type { ProjBaseProps } from "../../interfaces"
import Card from "../Card/Card"
import { useEffect, useState } from "react";



const BestProjects = ({ cards }: ProjBaseProps) => {


	const [cardsToShow, setCardsToShow] = useState<number>(3)
	const len: number = cards.length
	const [startIndex, setStartIndex] = useState<number>(0)
	const [endIndex, setEndIndex] = useState<number>(startIndex + cardsToShow)

	const updateCardsToShow = () => {
		if (window.innerWidth < 1024) {
			setCardsToShow(1)
			setEndIndex(startIndex + cardsToShow)
		} else {
			setCardsToShow(3)
			if((startIndex + cardsToShow)>len){
				setStartIndex(endIndex-cardsToShow)
			}else{
				setEndIndex(startIndex + cardsToShow)
			}
		}
	};
	useEffect(() => {
		updateCardsToShow()
		window.addEventListener("resize", updateCardsToShow)
		return () => window.removeEventListener("resize", updateCardsToShow)
	}, [cardsToShow, startIndex])


	const toRight = () => {
		if (((startIndex + 1) <= len - 1) && ((endIndex + 1) <= len)) {
			setStartIndex(startIndex + 1)
			setEndIndex(endIndex + 1)
		} else {
			setStartIndex(0)
			setEndIndex(0+cardsToShow)
		}
	}

	const toLeft = () => {
		if (((startIndex - 1) >= 0) && ((endIndex - 1) >= 1)) {
			setStartIndex(startIndex - 1)
			setEndIndex(endIndex - 1)
		} else {
			setStartIndex(len - cardsToShow)
			setEndIndex(len)
		}
	}

	return (
		<div className="w-full mt-16 px-[20px] md:px-[70px] flex flex-col gap-5 items-center">
			{/* header */}
			<div className="w-full flex flex-col text-center justify-center lg:text-start">
				<p className="text-[#0C96E2] text-[20px] font-medium ">Portfolio</p>
				<div className="w-full flex flex-col lg:flex-row gap-8 lg:justify-between items-center">
					<h1 className="text-mainTex text-[40px] font-semibold dark:text-white">The Best <span className="text-[#0C96E2]">Projects</span></h1>
					<div className="flex lg:w-[79px] lg:gap-2 w-full justify-between">
						<button className="w-[35px]  h-[35px] hover:bg-[#0C96E2] hover:text-white text-[#0C96E2] border-[1px] border-[#0C96E2] flex items-center justify-center rounded-[100%] cursor-pointer " title="toLeft"
							onClick={toLeft}><IoIosArrowBack /></button>
						<button className="w-[35px] h-[35px] hover:bg-[#0C96E2] hover:text-white text-[#0C96E2] border-[1px] border-[#0C96E2] flex items-center justify-center rounded-[100%] cursor-pointer " title="toRight"
							onClick={toRight}><IoIosArrowForward /></button>
					</div>
				</div>
			</div>
			{/* Cards */}
			<div className="flex  w-full gap-[20px] justify-between">
				{cards?.slice(startIndex, endIndex).map((card, index) => (
					<div key={index} >
						<Card imgUrl={card.imgUrl} title={card.title} skills={card.skills} demoUrl={card.demoUrl} githubUrl={card.githubUrl}
							time={card.time} details={card.details} languages={card.languages} libraries={card.libraries} frameworks={card.frameworks} />
					</div>
				))}
			</div>

		</div>
	)
}

export default BestProjects
