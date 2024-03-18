import React from 'react'
import {
	Typography,
	Box,
	Container
} from '@mui/material'
import NavBar from '../components/NavBar'
import Introduction from '../components/Introduction'
import About from '../components/About'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

export default function Home () {
	return (
		<>
			<NavBar />
			<Introduction />
			<Container className='flex flex-col gap-y-12'>
				<About />
				<Experience />
				<Box className="flex flex-col items-center justify-center gap-y-8">
					<Typography variant="h4">
						Projects
					</Typography>
					<Box className='flex flex-row gap-x-4'>
						<img src="https://via.placeholder.com/150" alt="Picture of the author"/>
						<img src="https://via.placeholder.com/150" alt="Picture of the author"/>
						<img src="https://via.placeholder.com/150" alt="Picture of the author"/>
					</Box>
				</Box>
				<Contact />
			</Container>
		</>
	)
}