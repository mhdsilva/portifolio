import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'

export default function About({ refScroll }) {
	return (
		<Box className="flex flex-col items-center justify-center gap-y-8 h-screen" ref={refScroll} >
			<Typography variant="h4">
						About me
			</Typography>
			<Image src='/images/Matheus.jpeg' width={150} height={150} />
			<Typography variant="subtitle1" className='text-center w-1/2'>
						I am a person passionate about technology and entrepreneurship, so I follow my goals to solve the problems of the people around me in the most efficient way possible.
			</Typography>
			<Typography variant="subtitle1" className='text-center w-1/2'>
						Currently I am studying Bachalor&rsquo;s degree in Information Systems at Universidade de São Paulo.
			</Typography>
		</Box>
	)
}