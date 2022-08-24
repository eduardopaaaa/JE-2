const Location = (props) => {
	return (
		<div className='location'>
			<h2>Dimension: {props.location.dimension}</h2>
			<p>Name: {props.location.name}</p>
			<p>Type: {props.location.type}</p>
		</div>
	);
};

export default Location;