const Episode = (props) => {
	return (
		<div className='episode'>
			<div>
				<p>{props.episode.name}</p>
			</div>

			<p>Air: {props.episode.air_date}</p>
			<p>Episode: {props.episode.episode}</p>
			<p>Created: {props.episode.created}</p>
		</div>
	);
};

export default Episode;