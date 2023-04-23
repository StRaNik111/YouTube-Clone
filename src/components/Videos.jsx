import React from 'react'
import { Stack, Box } from '@mui/material';
import { VideoCart, ChennelCard } from './'

const Videos = ({ videos, direction }) => {
	if (!videos?.length) return 'Loading...'
	return (
		<Stack
			justifyContent='start'
			flexWrap='wrap'
			direction={direction || 'row'}
			gap={2}
		>
			{videos.map((item, idx) => {
				return <Box key={idx}>
					{item.id.videoId && <VideoCart video={item} />}
					{item.id.channelId && <ChennelCard channelDetail={item} />}
				</Box>

			}
			)}
		</Stack>
	)
}

export default Videos