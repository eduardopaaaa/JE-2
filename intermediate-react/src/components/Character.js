const Character = (props) => {
    return (
        <div>
            <hr/>
            <p> Question: {props.character.question}</p>
            <p> Value: {props.character.value}</p>
            <p> Category: {props.character.category.title}</p>
        </div>
    )
}

export default Character

