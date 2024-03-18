import React from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

export default function Experience() {
	return (
		<Box className="flex flex-col items-center justify-center gap-y-8">
			<Typography variant="h4">
						Experience
			</Typography>
			<Box className='flex flex-row gap-x-8 justify-center items-center'>
				<Card className='w-80'>
					<CardActionArea className='h-fit'>
						<CardMedia
							component="img"
							alt="Contemplative Reptile"
							height="150"
							image="https://via.placeholder.com/150"
							title="Contemplative Reptile"
						/>
						<CardContent>
							<Typography>
										The Broklyn Brothers
							</Typography>
							<Typography>
										Webmaster
							</Typography>
							<Typography>
										From August 8, 2022, to October 31, 2023
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
				<Card className='w-80'>
					<CardActionArea className='h-fit'>
						<CardMedia
							component="img"
							alt="Contemplative Reptile"
							height="150"
							image="https://via.placeholder.com/150"
							title="Contemplative Reptile"
						/>
						<CardContent>
							<Typography>
										Videomatik
							</Typography>
							<Typography>
										Full Stack Developer
							</Typography>
							<Typography>
										From November 1, 2023, to January 31, 2024
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
				<Card className='w-80'>
					<CardActionArea className='h-fit'>
						<CardMedia
							component="img"
							alt="Contemplative Reptile"
							height="150"
							image="https://via.placeholder.com/150"
							title="Contemplative Reptile"
						/>
						<CardContent>
							<Typography>
										Beuni
							</Typography>
							<Typography>
										Software Analyst
							</Typography>
							<Typography>
										From February 14, 2024, to Present
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</Box>
		</Box>
	)
}
