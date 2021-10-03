import Part from "./Part"

const Content = props => {
	const {parts} = props
	return (
		<section>
			{/* Uses map to loop over the objects and return a new Part for each */}
			{parts.map(part => <Part key={part.name} part={part} /> )}
		</section>
	)
}

export default Content