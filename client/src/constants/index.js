import { IoPeopleOutline, IoPersonOutline, IoRibbonOutline } from "react-icons/io5"

import chair from '../img/chair.webp'
import doctor from '../img/doctor.webp'
import tooth1 from '../img/tooth1.webp'
import tooth2 from '../img/tooth2.webp'
import tooth3 from '../img/tooth3.webp'
import tooth4 from '../img/tooth4.webp'

export const bottomLinks = [
	{
		link: "/about/",
		text: "About"
	},
	{
		link: "/services/",
		text: "Services"
	},
	{
		link: "/problems-we-treat/",
		text: "Problems We Treat"
	}
]

export const dentalTreatments = [
	{
		alt: "Oral & Maxillofacial Surgery Image",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
		image: tooth1,
		title: "Oral & Maxillofacial Surgery"
	},
	{
		alt: "Prosthodontics Dental Implants Image",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
		image: tooth2,
		title: "Prosthodontics Dental Implants"
	},
	{
		alt: "Orthodontics and The Braces Image",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
		image: tooth3,
		title: "Orthodontics and The Braces"
	},
	{
		alt: "Endodontics Image",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
		image: doctor,
		title: "Endodontics"
	},
	{
		alt: "Minimum Intervention Dentistry Image",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
		image: tooth4,
		title: "Minimum Intervention Dentistry"
	},
	{
		alt: "Pediatric Dentistry Image",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
		image: chair,
		title: "Pediatric Dentistry"
	}
]

export const reminders = [
	{
		description: "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia",
		icon: IoRibbonOutline,
		title: "Dental hygiene never forget!"
	},
	{
		description: "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia",
		icon: IoPersonOutline,
		title: "Don’t rush when you brush!"
	},
	{
		description: "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia",
		icon: IoPeopleOutline,
		title: "Visit your dentist once in 6 months"
	}
]
