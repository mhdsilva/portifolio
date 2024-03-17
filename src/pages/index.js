import { Typography, AppBar } from '@mui/material'
import Container from '@mui/material/Container'
import React from 'react'

export default function Home () {
	return (
		<>
			<AppBar position="static" className='bg-secondary flex h-12 justify-center'>
				<Container>
					<Typography> Home </Typography>
				</Container>
			</AppBar>
		</>
	)
}