import type { Dispatch, SetStateAction } from "react";

export interface NavProps {
	name: string,
	setMode: Dispatch<SetStateAction<boolean>>,
	activeSection: string;
	onNavClick: (section: string) => void;
}

export interface AllProps {
	onSectionChange: React.Dispatch<SetStateAction<string>>
}

export interface PersInfo {
	name: string,
	job: string,
	description: string,
	img_url: string
}

export interface Tech {
	name: string,
	rate: string
}

export interface AboutMeProps {
	explain: string,
	techniq: Array<Tech>,
}


export interface EduExp {
	title: string,
	explain: string
}

export interface EduProps {
	eduExps: Array<EduExp>,
}

export interface ActiveContextType {
	activeSection: string;
	setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

export interface CardProps {
	imgUrl:string,
	title:string,
	skills:string,
	demoUrl:string,
	githubUrl:string,
	time:string,
	details:string,
	languages:string,
	libraries:string,
	frameworks:string
}

export interface ProjBaseProps{
	githubUrl?:string,
	cards:Array<CardProps>,
}

export interface ContactProps{
	number:string,
	email:string,
	user_name:string,
	address:string,
}

export interface FooterProps{
	facebook:string,
	telegram:string,
	whatsapp:string,
	linkedin:string,
	instagram:string,
}
