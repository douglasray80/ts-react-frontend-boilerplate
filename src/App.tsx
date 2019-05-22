import * as React from 'react'

interface Props {
	isAString: string
	isANum: number
}

const App: React.FC<Props> = ({ isAString, isANum }) => {
	const [count, setCount] = React.useState(4)

	React.useEffect(() => {
		console.log(count)
	}, [])

	return <div>App</div>
}

export default App
