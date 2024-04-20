import React from 'react'
import { AppBar, Button, Container, Link, Typography } from '@mui/material'

export default function NavBar({ scroll }){

	const handleClick = (section) => {
		scroll(section); 
	};

	return(
		<AppBar position="sticky" className='bg-secondary h-12 w-full flex items-center justify-center'>
			<Container className='max-w-5xl	mx-auto h-max flex items-center justify-center'>
				<Container className='cursor-pointer'	>
					<a onClick={() => handleClick('introduction')}>
						<Typography> LOGO </Typography>
					</a>
				</Container>
				<Container className='flex flex-row justify-end items-center gap-x-4'>
					<Link underline="hover" className='text-white hover:text-primary cursor-pointer' onClick={() => handleClick('about')} >
							About
					</Link>
					<Link underline="hover" className='text-white hover:text-primary cursor-pointer' onClick={() => handleClick('experience')}>
							Experience
					</Link>
					<Link underline="hover" className='text-white hover:text-primary cursor-pointer' onClick={() => handleClick('projects')}>
							Projects
					</Link>
					<Link underline="hover" className='text-white hover:text-primary cursor-pointer' onClick={() => handleClick('contact')}>
							Contact
					</Link>
					<Button variant="contained" className='hover:bg-primary whitespace-nowrap'>
							Download CV
					</Button>
				</Container>
			</Container>
		</AppBar>
	)
}
