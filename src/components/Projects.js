import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Projects({ refScroll }) {
	return (
		<Box className="flex flex-col items-center justify-center gap-y-8 h-screen" ref={refScroll}>
			<Typography variant="h4">
						Projects
			</Typography>
			<Image src="/images/lesc.png" alt="The Brooklyn Brothers" height={150} width={150} className='rounded-lg'/>
			<Typography variant="h5" className='text-center'>
				Liga de Empreendedorismo de São Carlos
			</Typography>
			<Typography variant="body1" className='text-center'>
				The biggest project I've worked on. I am the General Director of the project that aims to encourage innovation and entrepreneurship. We currently have some projects underway, such as a podcast "Fala Sanca", a TedTalks "LESCTalks", a startup accelerator "Starting UP" and an internal training project "LESChool".
			</Typography>
			<Box className='flex flex-row gap-x-8 justify-center items-center'>
				<InstagramIcon className='cursor-pointer' onClick={() => window.open('https://www.instagram.com/lesc_sanca')}/>
				<LinkedInIcon className='cursor-pointer' onClick={() => window.open('https://www.linkedin.com/company/lescsanca')}/>
				<FacebookIcon className='cursor-pointer' onClick={() => window.open('https://www.facebook.com/ligadeempreendedorismosc?mibextid=ZbWKwL')}/>
			</Box>
		</Box>
	)
}