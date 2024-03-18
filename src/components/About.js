import React from 'react'
import { Box, Typography } from '@mui/material'

export default function About() {
	return (
		<Box className="flex flex-col items-center justify-center gap-y-8">
			<Typography variant="h4">
						About me
			</Typography>
			<img src="https://via.placeholder.com/150" alt="Picture of the author"/>
			<Typography variant="subtitle1" className='text-center w-1/2'>
						I am a person passionate about technology and entrepreneurship, so I follow my goals to solve the problems of the people around me in the most efficient way possible.
			</Typography>
			<Typography variant="subtitle1" className='text-center w-1/2'>
						Currently I am studying Bachalor's degree in Information Systems at Universidade de São Paulo.
			</Typography>
		</Box>
	)
}