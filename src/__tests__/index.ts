import * as React from 'react'
import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'

import App from '../App'

afterEach(cleanup)

test('renders a message', () => {
	const { container, getByText } = render(<App />)
	expect(getByText('App') as HTMLElement).toBeInTheDocument()
})
