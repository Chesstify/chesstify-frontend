import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Games from './Games.js';

const UserGames = props => {
	const URL = 'http://127.0.0.1:5000';

	const { username } = props.match.params;

	const [games, setGames] = useState([]);
	const [currentPage, setCurrentPage] = useState(`${URL}/games/${username}?useCache=false&pageNumber=0&pageSize=10`);
	const [nextPage, setNextPage] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true); // When this component reloads, and before the data is fetched, set loading to true

		let cancelRequest; // Stores the current request which can be invoked to cancel it

		const getGames = async () => {
			const { data } = await axios.get(currentPage, { cancelToken: axios.CancelToken(request => cancelRequest = request) });
			setLoading(false); // Data has been fetched, set loading to false
			setNextPage(data.next_page);
			setGames(oldGames => [...oldGames, ...data.games]); // Append the new fetched games to the current ones
		}

		getGames();

		// Prevent race conditions by cancelling old requests before creating new ones
		return () => cancelRequest();
	}, [currentPage]);

	// Set the current page to be the next page URL when invoked
	const loadNextPage = () => setCurrentPage(`${URL}${nextPage}`);

	if (loading) return (
		<h1>Loading</h1>
	);

	return (
		<>
			<h1>{username}</h1>
			<Games games={games} />
			<button onClick={loadNextPage}>Next</button>
		</>
	);
}

export default UserGames;