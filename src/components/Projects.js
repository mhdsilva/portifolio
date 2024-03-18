import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Projects (){
	return (
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
	)
}