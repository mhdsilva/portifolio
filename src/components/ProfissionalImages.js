import React from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'

export default function CurrentCompany() {
	return (
		<Box className='flex justify-center items-center h-fit border-4 border-white border-double rounded'>
			<Image src='/images/Matheus.jpg' alt='Author image' width={300} height={100} />
		</Box>
	)
}