import { useContext, useEffect } from "react"
import PersonalInfo from "../components/PersonalInfo/PersonalInfo"
import AboutMe from "../components/AboutMe/AboutMe"
import EduExp from "../components/EduExp/EduExp"
import ToContact from "../components/ToContact/ToContact"
import { ActiveContext, CardsContext, ModeContext } from "./Major"
import ProjBase from "../components/ProjBase/ProjBase"
import Contact from "../components/Contact/Contact"

const sections: string[] = ['#Home', '#AboutMe', '#Education', '#Projects', '#Contact'];
const All = () => {
	const context = useContext(ActiveContext);
	const cards = useContext(CardsContext);
	const mode = useContext(ModeContext)
	const color: string = mode ? "#1D2130" : "white"

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight / 2;
			let currentSection = '';
			sections.forEach((section) => {
				const element = document.querySelector(section) as HTMLElement | null;
				if (element && element.offsetTop <= scrollPosition) {
					currentSection = section;
				}
			});
			context?.setActiveSection(currentSection);
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
	}, [context?.setActiveSection]);

	return (
		<div className=" w-full  pt-16 dark:bg-dark text-white dark:text-mainText" >
			{/* hero */}
			<div id="Home" className="w-full max-sm:h-[170vh] sm:h-[180vh] md:h-[200vh] lg:h-[110vh]">
				<PersonalInfo name="Eng.Amal Al-Khalaf" job="FullStack Web Developer" description="Agency-quality Webflow websites with the personal touch of a freelancer." img_url="/Portfolio/img/AmalProfile.png" />
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

			{/* about me */}
			<div id="AboutMe" className={`w-full sm:h-[210vh] max-sm:h-[195vh] md:h-[250vh] lg:h-[110vh] pt-[80px]`}>
				<AboutMe explain="I am a software engineer and am currently studying for a master's degree in software engineering. I am a FullStack web developer using React js and Next js. I always love to develop my experience and skills and I have the ability to always learn new things and work."
					techniq={[
						{ name: "HTML5", rate: "95%" },
						{ name: "CSS3", rate: "90%" },
						{ name: "JavaScript", rate: "85%" },
						{ name: "React.Js", rate: "90%" },
						{ name: "Git", rate: "90%" },
						{ name: "Next.Js", rate: "75%" },
					]} />
			</div>

			{/* education */}
			<div id="Education" className="w-full min-h-screen px-[20px] md:px-[70px] pt-[100px] flex flex-col gap-[70px] items-center justify-center ">
				<EduExp eduExps={[
					{ title: "Software Engineer", explain: "Experienced in designing and developing efficient software solutions. Skilled in modern programming and problem-solving." },
					{ title: "Experince Designer", explain: "Translated Figma designs into pixel-perfect interfaces. Applied responsive design and maintained UI consistency using Tailwind. " },
					{ title: "FrontEnd Developer", explain: "Built responsive and performant UIs using React, Next.js, and Tailwind. Focused on reusable components, SSR, and clean state management." },
					{ title: "FullStack Developer", explain: "Built scalable full-stack apps with Next.js, API routes, and Supabase. Deployed to Vercel with focus on performance and clean architecture." },
				]} />
				<ToContact />
			</div>
			{/* projects */}
			<div id="Projects" className="text-mainText dark:text-white min-h-screen p-5 transition-colors duration-300">
				<ProjBase githubUrl="https://github.com/amal-alkhalaf" cards={cards} />
			</div>

			{/* contact */}
			<div id="Contact" className="text-mainText dark:text-white min-h-screen  transition-colors duration-300">
				<Contact number="+963960620027" email="amalalkhalaf298@gmail.com" user_name="@Eml_404E" address="Syria, Damascus"/>
			</div>
		</div>
	)
}

export default All
