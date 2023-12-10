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

export const sex = [
	"Female",
	"Male",
	"Other"
]

export const months = [
	"January", "February", "March",
	"April", "May", "June",
	"July", "August", "September",
	"October", "November", "December"
]

export const days = [
	"1", "2", "3", "4", "5", "6", "7", "8", "9",
	"10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
	"20", "21", "22", "23", "24", "25", "26", "27", "28", "29",
	"30", "31"
]

export const years = [
	"2023", "2022", "2021", "2020",
	"2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010",
	"2009", "2009", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000",
	"1999", "1998", "1997", "1996", "1995", "1994", "1993", "1992", "1991", "1990",
	"1989", "1988", "1987", "1986", "1985", "1984", "1983", "1982", "1981", "1980",
	"1979", "1978", "1977", "1976", "1975", "1974", "1973", "1972", "1971", "1970",
	"1969", "1968", "1967", "1966", "1965", "1964", "1963", "1962", "1961", "1960",
	"1959", "1958", "1957", "1956", "1955", "1954", "1953", "1952", "1951", "1950"
]
