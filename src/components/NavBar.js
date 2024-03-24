import React from 'react'
import { AppBar, Button, Container, Link, Typography } from '@mui/material'

export default function NavBar (){

	return(
		<AppBar position="sticky" className='bg-secondary flex flex-row h-12 items-center justify-between px-12'>
			<Container>
				<Typography> LOGO </Typography>
			</Container>
			<Container className='flex flex-row justify-end items-center gap-x-4'>
				<Link href="#" underline="hover" className='text-white hover:text-primary'>
						About
				</Link>
				<Link href="#" underline="hover" className='text-white hover:text-primary'>
						Experience
				</Link>
				<Link href="#" underline="hover" className='text-white hover:text-primary'>
						Projects
				</Link>
				<Link href="#" underline="hover" className='text-white hover:text-primary'>
						Contact
				</Link>
				<Button variant="contained" className='hover:bg-primary whitespace-nowrap'>
						Download CV
				</Button>
			</Container>
		</AppBar>
	)
}