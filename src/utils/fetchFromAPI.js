import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'


const options = {

	headers: {
		// 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
		// 'X-RapidAPI-Key': 'f295feb704mshc3f58d3da5ce8c3p115ec2jsn14f230663b4d',
		'X-RapidAPI-Key': 'f295feb704mshc3f58d3da5ce8c3p115ec2jsn14f230663b4d',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};



export const fetchFromAPI = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`,
		options);

	return data
}
