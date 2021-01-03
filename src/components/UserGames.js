import React, { Fragment, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

// TODO: Remove this when backend is ready
import mockData from '../mockData';

const UserGames = () => {
	const { username } = useParams();

	const [data, setData] = useState({});

	useEffect(() => {
		/**
		 * Queries the backend for the games pertaining to a specified user.
		 * 
		 * @param {String} username Fetch the games for this username
		 */
		const getData = async username => {
			// TODO: Replace URL with backend URL for fetching a user's games
			const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
			const json = await response.json();

			setData(json);
		}

		getData();
	});

	const games = [];

	// TODO: Replace mockData with data
	mockData.games.map(({ date, mode, position, opponent, result, rating }) => {
		games.push(
			<tr>
				<td>{date}</td>
				<td>{mode}</td>
				<td>{position}</td>
				<td>{opponent}</td>
				<td>{result}</td>
				<td>{rating.total} ({rating.change})</td>
			</tr>
		);
	});

  return (
		<Fragment>
			<h1>{mockData.user} stats</h1>
			<h3>{mockData.total_games} games</h3>

			{/* Currently displays all games by default */}
			<table>
				<thead>
					<tr>
						<th>Date</th>
						<th>Mode</th>
						<th>Position</th>
						<th>Opponent</th>
						<th>Result</th>
						<th>Rating</th>
					</tr>
				</thead>
				<tbody>
					{games}
				</tbody>
			</table>
		</Fragment>
  );
}

export default UserGames;