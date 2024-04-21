import Image from 'next/image'
import { Box, Modal, Typography } from '@mui/material'
import React from 'react'

export default function ModalVideomatik({ openVideo, setOpenVideo }) {
	return (
		<Modal open={openVideo} onClose={() => setOpenVideo(false)} className='flex items-center justify-center' >
			<Box className='flex flex-col gap-y-5 px-8 items-center justify-center w-1/2 h-5/6 rounded-md border p-3 shadow-sm bg-secondary'>
				<Image src="/images/videomatik.jpeg" alt="Videomatik" height={150} width={150} className='rounded-lg object-cover object-center'/>
				<Typography className='text-center'>
                    Videomatik
				</Typography>
				<Typography>
                    Software Developer
				</Typography>
				<Typography>
                    ● Responsible for project and product management <br />
                    ● Business and product analysis, restructuring of development methodologies <br />
                    ● Product development on FullStack and using Docker <br />
                    ● FrontEnd: NextJS, ReactJS, Javascript, Bootstrap and CSS. <br />
                    ● BackEnd: NestJS, Strapi, PostreSQL, BULL, NodeJS. <br />
                    ● DEVOps
				</Typography>
				<Typography className='text-center'>
                    SINCE OCT 2022 - JAN 2024
				</Typography>
			</Box>
		</Modal>
	)
}