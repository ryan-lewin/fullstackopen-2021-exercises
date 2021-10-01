
const Total = props => {
	return (
		<section>
			<p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
		</section>
	)
}

export default Total