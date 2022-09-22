const Character = (props) => {
	return (
		
		<div className='character'>
			<h2> {props.character.name}</h2>
			<img src={props.character.image}></img>
			<div className='character_info'>
				<p>Status: {props.character.status}</p>
				<p>Species: {props.character.species}</p>
				<p>Type: {props.character.type}</p>
				<p>Gender: {props.character.gender}</p>
				<p>Origin name:{props.character.origin.name}</p>
				<p>Location: {props.character.location.name}</p>
			</div>
		</div>
	);
};

export default Character;