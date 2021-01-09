import React from 'react';

const Games = ({ games }) => {
	return (
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
				{games.map((game, index) => (
					<tr key={index}>
						<td>{game.date}</td>
						<td>{game.mode}</td>
						<td>{game.position}</td>
						<td>{game.opponent}</td>
						<td>{game.result}</td>
						<td>{game.rating.total} ({game.rating.change})</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default Games;