import React, { Component } from 'react'
import TweetList from './TweetList'
import NewTweet from './NewTweet'
import config from '../config'

class MainPanel extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: props.name,
			username: props.username
		}
	}


	render() {
		const { name, username } = this.state

		return (
			<div className="main-panel">
				{ this.props.enableTweet
				? <NewTweet
					name={ name }
					username={ username }
					addToTweetList={ this.props.addToTweetList }
				/>
				: null }
				<TweetList tweets={ this.props.tweets } />
			</div>
		)
	}
}

export default MainPanel
