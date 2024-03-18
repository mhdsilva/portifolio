import React from 'react'
import {
	Container
} from '@mui/material'
import NavBar from '../components/NavBar'
import Introduction from '../components/Introduction'
import About from '../components/About'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Projects from '../components/Projects'

export default function Home () {
	return (
		<>
			<NavBar />
			<Introduction />
			<Container className='flex flex-col gap-y-12'>
				<About />
				<Experience />
				<Projects />
				<Contact />
			</Container>
		</>
	)
}