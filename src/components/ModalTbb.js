import Image from 'next/image'
import { Box, Modal, Typography } from '@mui/material'
import React from 'react'

export default function ModalTbb({ openTBB, setOpenTBB }) {
	return (
		<Modal open={openTBB} onClose={() => setOpenTBB(false)} className='flex items-center justify-center' >
			<Box className='flex flex-col gap-y-5 px-8 items-center justify-center w-1/2 h-5/6 rounded-md border p-3 shadow-sm bg-secondary'>
				<Image src="/images/tbb.jpeg" alt="The Brooklyn Brothers" height={150} width={150} className='rounded-lg object-cover object-center'/>
				<Typography className='text-center'>
                    The Brooklyn Brothers
				</Typography>
				<Typography>
                    Webmaster
				</Typography>
				<Typography>
                    ● Responsible for Recepedia websites (Unilever) for 9 different countries. <br />
                    ● FrontEnd development using Low Code and ReactJS tools <br />
                    ● Project management, requirements analysis, problem solving <br />
                    ● Responsible for innovation with AI within the project
				</Typography>
				<Typography className='text-center'>
                SINCE AUG 2022 - OCT 2023
				</Typography>
			</Box>
		</Modal>
	)
}