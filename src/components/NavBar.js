import React from 'react'
import { AppBar, Button, Container, Link, Typography } from '@mui/material'

export default function NavBar (){

	return(
		<AppBar position="static" className='bg-secondary flex flex-row h-12 items-center px-8'>
			<Container>
				<Typography> LOGO </Typography>
			</Container>
			<Container className='flex flex-row-reverse space-x-reverse items-center gap-x-4'>
				<Button variant="contained" className='hover:bg-primary'>
						Download CV
				</Button>
				<Link href="#" underline="hover" className='text-white hover:text-primary'>
						Contact
				</Link>
				<Link href="#" underline="hover" className='text-white hover:text-primary'>
						Projects
				</Link>
				<Link href="#" underline="hover" className='text-white hover:text-primary'>
						Experience
				</Link>
				<Link href="#" underline="hover" className='text-white hover:text-primary'>
						About
				</Link>
			</Container>
		</AppBar>
	)
}