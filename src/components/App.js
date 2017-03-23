import React from 'react'
import MainPanel from './MainPanel'
import Profile from './Profile'

const App = () => (
	<div className="container body">
		<Profile name="sunnysun" username="Fakelow" numberTweets={100} numberFollower={200} numberFollowing={300} isOwnProfile={true}/>
		<MainPanel enableTweet={false} />
	</div>
)

export default App
