import { useContext, useState } from "react"
import { MdDarkMode } from "react-icons/md"
import type { NavProps } from "../../interfaces"
import { BsList, BsSunFill } from "react-icons/bs"
import { IoMdClose } from "react-icons/io"
import { HashLink as NavLink } from "react-router-hash-link"
import { ModeContext } from "../../pages/Major"
const sections = ['#Home', '#AboutMe', '#Education', '#Projects', '#Contact'];

const NavBar = ({ name, setMode, activeSection, onNavClick }: NavProps) => {
	const mode = useContext(ModeContext)

	const [isOpen, setIsOpen] = useState(false)

	const handleToggle = () => setIsOpen((prev) => !prev)

	return (
		<>
			<nav className="w-screen flex justify-between items-center px-5 pt-10 bg-white dark:bg-dark dark:text-white md:px-[70px]">
				<h1 className="text-2xl font-semibold text-mainText dark:text-white">{name}</h1>
				<button className="md:hidden cursor-pointer" onClick={handleToggle}>{isOpen ? mode ? <IoMdClose className="font-bold text-4xl text-mainText" /> : <IoMdClose className="font-bold text-white text-4xl" /> : mode ? <BsList className="font-bold text-4xl text-mainText" /> : <BsList className="font-bold text-white text-4xl" />}</button>

				<ul className="items-center gap-6 font-medium text-mainText dark:text-white hidden md:flex">
					{sections.map((section) => (
						<li key={section}>
							<NavLink
								to={"/"+section}
								smooth
								onClick={() => onNavClick(section)}
								className={activeSection === section ? "text-[#0C96E2]" : "text-mainText  dark:text-white cursor-pointer hover:text-[#0C96E2]"}
							>
								{section.replace('#', '')}
							</NavLink>
						</li>
					))}
				</ul>
				<button className="hidden md:block cursor-pointer" onClick={() => setMode(prev => !prev)}>{mode ? <MdDarkMode className="text-3xl text-mainText" /> : <BsSunFill className="text-white text-3xl" />}</button>
			</nav>


			<div className={` flex flex-col items-center justify-center gap-10 ${isOpen ? "-translate-x-0 w-full  h-screen px-5" : "-translate-x-[100%] h-0"} duration-250 bg-white  dark:bg-dark dark:text-white md:hidden flex flex-col `}>
				<ul className="w-full flex flex-col gap-10 items-center text-center justify-center font-medium">
					{sections.map((section) => (
						<li key={section} className="group hover:bg-gray-200 hover:text-[#0C96E2] w-full cursor-pointer py-2 px-3">
							<NavLink
								to={"/"+section}
								smooth
								onClick={() => { setIsOpen(false); onNavClick("aboutMe") }}
								className={activeSection === section ? "text-[#0C96E2]" : "text-mainText w-full h-full dark:text-white cursor-pointer group-hover:text-[#0C96E2]"}
							>
								{section.replace('#', '')}
							</NavLink>
						</li>
					))}
					
				</ul>
				<button className=" md:hidden cursor-pointer" onClick={() => { setMode(prev => !prev); setIsOpen(false) }}>
					{mode ? <MdDarkMode className="text-3xl text-mainText" /> : <BsSunFill className="text-white text-3xl" />}
				</button>

			</div>
			{/* )} */}
		</>
	);
}

export default NavBar
