import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import App from './App'

import QueryProvider from './utils/providers/QueryProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
	<QueryProvider>
		<App />
	</QueryProvider>
)
