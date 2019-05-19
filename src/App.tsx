import * as React from 'react'

interface IProps {
	isAString: string
	isANum: number
}

const App: React.FC<IProps> = ({ isAString, isANum }) => <div>App</div>

export default App
