import Image from 'next/image';
import { Box, Modal, Typography } from '@mui/material';

export default function ModalBeuni({ openBeuni, setOpenBeuni }) {
    return (
        <Modal open={openBeuni} onClose={() => setOpenBeuni(false)} className='flex items-center justify-center' >
            <Box className='flex flex-col gap-y-5 px-8 items-center justify-center w-1/2 h-5/6 rounded-md border p-3 shadow-sm bg-secondary'>
                <Image src="/images/beuni.png" alt="Beuni" height={150} width={150} className='rounded-lg object-cover object-center'/>
                <Typography className='text-center'>
                    Beuni
                </Typography>
                <Typography>
                    Software Engineer
                </Typography>
                <Typography>
                    ● Responsible for project and product management. <br />
                    ● Business and product analysis and construction of innovations. <br />
                    ● Product development on FullStack and using Docker. <br />
                    ● FrontEnd: NextJS, ReactJS, Javascript, TailwindCSS and Shadcn. <br />
                    ● BackEnd: NestJS, Strapi, MedusaJS, PostreSQL, BULL, NodeJS. <br />
                    ● DEVOps - Docker, Docker Compose, CI/CD.
                </Typography>
                <Typography className='text-center'>
                    SINCE OCT 2022 - PRESENT
                </Typography>
            </Box>
        </Modal>
    )
}