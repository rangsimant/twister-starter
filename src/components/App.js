import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import BodyContainer from './BodyContainer'
import MainLayout from './MainLayout'

const App = () => (
	<Router>
		<MainLayout>
			<Switch>
				<Route exact path="/" component={BodyContainer} />
				<Route path="/:ownerUsername" component={BodyContainer} />
			</Switch>
		</MainLayout>
	</Router>
)

export default App
