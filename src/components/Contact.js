import React from 'react'
import {
	Typography,
	Box
} from '@mui/material'

export default function Contact({ refScroll }) {
	return (
		<Box className="flex flex-col items-center justify-center gap-y-8 h-screen" ref={refScroll}>
			<Typography variant="h4">
				Contact
			</Typography>
			<Box className='flex flex-col gap-y-4'>
				<Typography variant="h6">
					Email: <a href="mailto: matheushenrique2773@gmail.com" className="text-primary">
						matheushenrique2773@gmail.com
					</a>
				</Typography>
				<Typography variant="h6">
					Phone: <a href="tel: +5534998147021" className="text-primary">
						+55 34 998147021
					</a>
				</Typography>
				<Typography variant="h6">
					LinkedIn: <a href="#" className="text-primary">
						LinkedIn
					</a>
				</Typography>
			</Box>
		</Box>
	)
}