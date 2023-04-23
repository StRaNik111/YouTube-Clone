import { Search } from '@mui/icons-material'
import { Paper, IconButton } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const SearchBar = () => {
	const [searchTerm, setSearchTerm] = React.useState('')
	const navigate = useNavigate()
	const handleSubmit = (e) => {
		e.preventDefault();
		if (searchTerm) {
			navigate(`/search/${searchTerm}`)
			setSearchTerm('')
		}
	}
	return (
		<Paper
			component='form'
			onSubmit={handleSubmit}
			sx={{
				borderRadius: 20,
				pl: 2,
				boxShadow: 'none',
				mr: { sm: 5 },
				border: '1px solid #e3e3e3'
			}}
		>
			<input className='search-bar'
				placeholder='Search...'
				value={searchTerm}
				onChange={(e) => { setSearchTerm(e.target.value) }}

			/>
			<IconButton type='submit' sx={{ p: '10px', color: 'red' }}>
				<Search />
			</IconButton>
		</Paper>
	)
}

export default SearchBar