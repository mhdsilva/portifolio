import React, { useRef } from 'react'
import {
	Container,
	Divider
} from '@mui/material'
import NavBar from '../components/NavBar'
import Introduction from '../components/Introduction'
import About from '../components/About'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Projects from '../components/Projects'

export default function Home () {

	const introductionRef = useRef(null)		
	const aboutRef = useRef(null)
	const experienceRef = useRef(null)
	const projectsRef = useRef(null)
	const contactRef = useRef(null)

	const scroll = (scroll) => {
		switch (scroll) {
		case 'introduction':
			introductionRef.current.scrollIntoView({ behavior: 'smooth' })
			break
		case 'about':
			aboutRef.current.scrollIntoView({ behavior: 'smooth' })
			break
		case 'experience':
			experienceRef.current.scrollIntoView({ behavior: 'smooth' })
			break
		case 'projects':
			projectsRef.current.scrollIntoView({ behavior: 'smooth' })
			break
		case 'contact':
			contactRef.current.scrollIntoView({ behavior: 'smooth' })
			break
		default:
			break
		}

	}

	return (
		<>
			<NavBar scroll={scroll} />
			<Container className='max-w-5xl	mx-auto'>
				<Introduction refScroll={introductionRef} />
				<Divider className='bg-white' variant='middle' />
				<Container className='flex flex-col gap-y-12'>
					<About refScroll={aboutRef} />
					<Divider className='bg-white' variant='middle' />
					<Experience refScroll={experienceRef} />
					<Divider className='bg-white' variant='middle' />
					<Projects refScroll={projectsRef} />
					<Divider className='bg-white' variant='middle' />
					<Contact refScroll={contactRef} />
				</Container>
			</Container>
		</>
	)
}