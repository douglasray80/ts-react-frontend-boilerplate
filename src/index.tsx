import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(
	<App isAString='string' isANum={3} />,
	document.getElementById('root'),
)
