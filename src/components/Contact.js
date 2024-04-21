import React from 'react'
import {
	Typography,
	Box
} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact({ refScroll }) {
	return (
		<Box className="flex flex-col items-center justify-center gap-y-8 h-screen" ref={refScroll}>
			<Typography variant="h4">
				Contact
			</Typography>
			<Box className='flex flex-col gap-y-4'>
				<Typography variant="h6">
					<a href="mailto: matheus.job272@gmail.com"  className='flex items-center gap-x-4'>
					<EmailIcon className='text-primary'/>
					matheus.job272@gmail.com
					</a>
				</Typography>
				<Typography variant="h6">
					<a href="https://api.whatsapp.com/send?phone=5534998147021" className='flex items-center gap-x-4'>
					<WhatsAppIcon className='text-primary' />
						+55 34 998147021
					</a>
				</Typography>
				<Typography variant="h6">
					<a href="https://www.linkedin.com/in/matheus-h-silva-in/" className='flex items-center gap-x-4'>
					<LinkedInIcon className='text-primary'/>
						Matheus Silva
					</a>
				</Typography>
			</Box>
		</Box>
	)
}