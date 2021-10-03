const Total = props => {
	const {parts} = props

	return (
		<section>
			{/* Uses reduce to loop over and add the values in the array */}
			<p style={{fontWeight: "bold"}}>Number of exercises {parts.reduce((value, part) => value + part.exercises, 0)}</p> 
		</section>
	)
}

export default Total