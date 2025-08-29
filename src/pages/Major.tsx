import { createContext, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import type { ActiveContextType, CardProps } from "../interfaces";
import Footer from "../components/Footer/Footer";

export const ModeContext = createContext<boolean>(false)
export const ActiveContext = createContext<ActiveContextType |undefined >(undefined);
export const CardsContext = createContext<Array<CardProps>>([])

const Major = () => {
	const [activeSection, setActiveSection] = useState<string>('#Projects');
	const [mode, setMode] = useState<boolean>(false)
	const activeNow = (sec: string) => {
		setActiveSection(sec)
	}
	const informations :Array<CardProps> =[{imgUrl:"/Portfolio/img/p7.jpg" , title:"DashStack", skills:"HTML5, Tailwind CSS, React.js, TypeScript, Web Services API.", demoUrl:"https://dash-stack-yrjc.vercel.app",githubUrl:"https://github.com/amal-alkhalaf/DashStack",
							details:"DashStack is a dashboard for managing electronic products such as watches and mobile devices, allowing you to add, delete, or edit a product smoothly, in addition to the possibility of searching for products... all after you create an account and log in.",languages:"HTML5, CSS, TypeScript." ,libraries:"React.js, Tailwind.", frameworks:"",time:"03-08-2025"   },
						{imgUrl:"/Portfolio/img/p6.jpg" , title:"Blogs", skills:"HTML5, CSS, JavaScript, React.js, Responsive Web Design." ,demoUrl:"https://amal-alkhalaf.github.io/Blogs/" ,githubUrl:"https://github.com/amal-alkhalaf/Blogs",
							details:" The Blogs website is a web application that allows you to browse a collection of blogs and articles. It features an organized interface that lets you easily navigate the content and read various articles on different topics. It can be useful for those interested in reading blogs or following specific subjects in a comfortable and organized way.",languages:"HTML5, CSS, JS." ,libraries:"React.js.", frameworks:"",time:"04-06-2025"  },
						{imgUrl:"/Portfolio/img/p5.jpg" , title:"ManagePosts", skills:"HTML5, CSS, JS, Responsive Web Design, Web Services API." ,demoUrl:"https://amal-alkhalaf.github.io/ManagePosts/",githubUrl:"https://github.com/amal-alkhalaf/ManagePosts",
							details:"The ManagePosts website is a web application designed to simplify the management of posts. It provides you with a simple interface that allows you to create, edit, delete, and view posts in an organized and easy way. This type of application is very useful for content management whether on a blog, website, or social media platform, as it enables effective and quick content organization.",languages:"HTML5, CSS, JS." ,libraries:"", frameworks:"",time:"21-05-2025"  },
						{imgUrl:"/Portfolio/img/p4.jpg" , title:"Cozy", skills:"HTML5, CSS, JS, Responsive Web Design." ,demoUrl:"https://amal-alkhalaf.github.io/Cozy/" ,githubUrl:"https://github.com/amal-alkhalaf/Cozy",
							details:"Cozy is an web application dedicated to buying shoes. It displays a variety of shoes for online purchase in an easy and organized way. You can browse products, choose the right shoes, and complete the purchase process smoothly",languages:"HTML5, CSS, JS." ,libraries:"", frameworks:"", time:"03-05-2025"},
						{imgUrl:"/Portfolio/img/p3.jpg" , title:"EduPress", skills:"HTML5, CSS, Responsive Web Design.",demoUrl:"https://amal-alkhalaf.github.io/EduPress/",githubUrl:"https://github.com/amal-alkhalaf/EduPress",
							details:"The website supports students and university life by providing study resources like lecture notes, tutorials, and practice exams. It offers tips for time management and exam success, information on programs and campus events, and encourages collaboration through forums and study groups. Designed to aid both online and in-person learning, it helps students organize their studies and succeed academically while enjoying university life.",languages:"HTML5, CSS." ,libraries:"", frameworks:"",time:"23-03-2025" },
						{imgUrl:"/Portfolio/img/p2.jpg" , title:"Flora", skills:"HTML5, CSS, Responsive Web Design.",demoUrl:"https://amal-alkhalaf.github.io/Flora/" ,githubUrl:"https://github.com/amal-alkhalaf/Flora",
							details:" Flora is a platform focused on integrating plants into homes and buildings to improve air quality and create a relaxing atmosphere. It offers sustainable, eco-friendly ideas, advice, products, and services for indoor and outdoor spaces, tailored to different building types and climates. Flora promotes a closer connection between people and nature, aiming to make living and working environments healthier, more beautiful, and vibrant using natural elements. ",languages:"HTML5, CSS." ,libraries:"", frameworks:"",time:"10-01-2025" },
						{imgUrl:"/Portfolio/img/p1.jpg" , title:"K2skiing", skills:"HTML5, CSS.",demoUrl:"https://amal-alkhalaf.github.io/K2skiing/" ,githubUrl:"https://github.com/amal-alkhalaf/K2skiing",
							details:"A clean and interactive web application dedicated to skiing enthusiasts. It provides users with information about ski resorts, weather conditions, and helpful tips to plan their skiing trips effectively. The site features a user-friendly design focused on delivering a smooth and engaging experience.",languages:"HTML5, CSS." ,libraries:"", frameworks:"",time:"19-12-2024" },
	]

	return (
		<ModeContext.Provider value={mode}>
			<ActiveContext.Provider value={{ activeSection, setActiveSection }}>
				<CardsContext.Provider value={informations}>
				<div className={`${mode ? "" : "dark"} flex flex-col items-center bg-whit dark:bg-dark  font-poppins text-mainText dark:text-white`} >
					<div className="fixed top-0 w-full z-[260] overflow-hidden ">
						<NavBar name="Amal" setMode={setMode} activeSection={activeSection} onNavClick={activeNow} />
					</div>
					<Outlet />
					<Footer facebook="https://www.facebook.com/share/1BKJC2A1Cj/" telegram="https://t.me/EmI_404E" whatsapp="https://wa.me/963960620027" linkedin="https://www.linkedin.com/in/amal-al-khalaf-272b04239" instagram="https://www.instagram.com/amal.alkhalaf.96?igsh=MTA2dzk0N2Rkc3Br"/>
				</div>
				</CardsContext.Provider>
			</ActiveContext.Provider>
		</ModeContext.Provider >
	);
}

export default Major
