import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { BorderRight } from '@mui/icons-material'
import { SideBar, Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
	const { searchTerm } = useParams()
	const [videos, setVideos] = React.useState([])

	React.useEffect(() => {
		fetchFromAPI(`search?part=snippet&maxResults=50&q=${searchTerm}`)
			.then((data) => {
				setVideos(data?.items)
			})

	}, [searchTerm])
	return (
		<Box p={2} sx={{
			overflowY: 'auto',
			height: '90vh', flex: 2
		}}>
			<Typography variant='h4'
				fontWeight='bold'
				mb={2}
				sx={{ color: 'white' }}
			>
				Search Results for: 	<span style={{ color: "#F31503" }}>{searchTerm}</span> videos
			</Typography>
			<Videos videos={videos} />

		</Box>
	)
}

export default SearchFeed