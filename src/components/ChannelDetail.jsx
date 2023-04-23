import React from 'react'
import { Videos, ChennelCard } from './'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
	const [channelDetail, setChannelDetail] = React.useState(null)
	const [videos, setVideos] = React.useState([])


	const { id } = useParams();
	React.useEffect(() => {

		fetchFromAPI(`channels?part=snippet&id=${id}`)
			.then((data) => setChannelDetail(data?.items[0]))

		fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
			.then((data) => setVideos(data?.items))
	}, [id])

	return (
		<Box
			minHeight='95vh'
		>
			<Box>
				<div
					style={{ background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(198,45,253,1) 100%)', zIndex: 10, height: '300px' }}
				/>
				<ChennelCard channelDetail={channelDetail} marginTop={'-110px'} />
			</Box>
			<Box display='flex' p='2'>
				<Box sx={{ mr: { sm: '100px' } }} />
				<Videos videos={videos} />

			</Box>
		</Box >
	)
}

export default ChannelDetail