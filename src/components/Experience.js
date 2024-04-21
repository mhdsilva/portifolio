import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'
import ModalTbb from './ModalTbb'
import ModalVideomatik from './ModalVideomatik'
import ModalBeuni from './ModalBeuni'

export default function Experience({ refScroll }) {

	const [openTBB, setOpenTBB] = useState(false)
	const [openVideo, setOpenVideo] = useState(false)
	const [openBeuni, setOpenBeuni] = useState(false)

	return (
		<Box className="flex flex-col items-center justify-center gap-y-8 h-screen" ref={refScroll}>
			<Typography variant="h4">
				Experience
			</Typography>
			<ModalTbb openTBB={openTBB} setOpenTBB={setOpenTBB} />
			<ModalVideomatik openVideo={openVideo} setOpenVideo={setOpenVideo} />
			<ModalBeuni openBeuni={openBeuni} setOpenBeuni={setOpenBeuni} />
			<Box className='flex flex-row gap-x-8 justify-center items-center'>
				<Box className='flex flex-col gap-y-4 rounded-md border p-3 shadow-sm cursor-pointer' onClick={() => setOpenTBB(true)}>
					<Image src="/images/tbb.jpeg" alt="The Brooklyn Brothers" height={150} width={150} className='h-48 w-full rounded-lg object-cover object-center'/>
					<Typography className='text-center'>
						The Brooklyn Brothers
					</Typography>
					<Typography className='text-center'>
						Webmaster
					</Typography>
					<Typography className='text-center text-primary'>
						See details...
					</Typography>
				</Box>
				<Box className='flex flex-col gap-y-4 rounded-md border p-3 shadow-sm cursor-pointer' onClick={() => setOpenVideo(true)} >
					<Image src="/images/videomatik.jpeg" alt="Videomatik" height={150} width={150} className='h-48 w-full rounded-lg object-cover object-center'/>
					<Typography className='text-center'>
						Videomatik
					</Typography>
					<Typography className='text-center'>
						Software Developer
					</Typography>
					<Typography className='text-center text-primary'>
						See details...
					</Typography>
				</Box>
				<Box className='flex flex-col gap-y-4 rounded-md border p-3 shadow-sm cursor-pointer' onClick={() => setOpenBeuni(true)}>
					<Image src="/images/beuni.png" alt="Videomatik" height={150} width={150} className='h-48 w-full rounded-lg object-cover object-center'/>
					<Typography className='text-center'>
						BeUni
					</Typography>
					<Typography className='text-center'>
						Software Engineer
					</Typography>
					<Typography className='text-center text-primary'>
						See details...
					</Typography>
				</Box>
			</Box>
		</Box>
	)
}
