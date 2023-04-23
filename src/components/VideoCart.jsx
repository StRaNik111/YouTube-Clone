import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelTitle, demoChannelUrl } from '../utils/constants'

const VideoCart = ({ video: { id: { videoId }, snippet } }) => {
	return (
		<Card
			sx={{ width: { md: '320px', xs: '100%' }, boxShadow: 'none', borderRadius: 0 }}
		>
			<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
				<CardMedia
					image={snippet?.thumbnails?.high?.url}
					alt={snippet?.title}
					sx={{ width: '100%', height: 180 }}
				/>

			</Link>
			<CardContent
				sx={{ background: '#1e1e1e', height: '106px' }}
			>
				<Link
					to={videoId ? `/video/${videoId}` : demoVideoUrl}
				>
					<Typography variant='subtitle1'
						fontWeight='bold' color='#FFF'
					>
						{snippet?.title.slice(0, 60) ||
							demoVideoTitle.slice(0, 60)
						}
					</Typography>
				</Link>
				<Link
					to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}
				>
					<Typography variant='subtitle1'
						fontWeight='bold' color='grey'
					>
						{snippet?.channelTitle || demoChannelTitle}
						<CheckCircle
							sx={{ fontSize: 12, color: 'grey', ml: '5px' }}
						/>
					</Typography>
				</Link>
			</CardContent>
		</Card>
	)
}

export default VideoCart