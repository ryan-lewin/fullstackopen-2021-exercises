import Part from "./Part"

const Content = props => {
	return (
		<section>
			<Part part={props.part1} />
			<Part part={props.part2} />
			<Part part={props.part3} />
		</section>
	)
}

export default Content