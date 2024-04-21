import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import ProfissionalImages from './ProfissionalImages'

export default function Introduction({ refScroll }) {
	return (
		<Container className='flex flex-row justify-between items-center h-screen' ref={refScroll}>
			<Box
				className='flex flex-col items-start justify-center w-3/5 h-full'
			>
				<Typography variant="h2">
					Hello, I&apos;m
				</Typography>
				<Typography variant="h1" className='text-primary'>
						Matheus Silva
				</Typography>
				<Typography variant="h2">
						Software Developer
				</Typography>
				<Box className='p-8'>
					<Typography >
						&quot;I never expected a miracle, I will make things happen myself.&quot;
					</Typography>
				</Box>
			</Box>
			<ProfissionalImages />
		</Container>
	)
}

