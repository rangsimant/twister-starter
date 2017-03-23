import React, { Component } from 'react'
import TweetList from './TweetList'
import NewTweet from './NewTweet'
import config from '../config'

class MainPanel extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: "sunnysun",
			username: "Fakelow",
			tweets: [
				// {
				// 	id: 0,
				// 	name: 'Supasate Choochaisri',
				//     username: 'kaizerwing',
				//     tweetText: 'Lorem ipsum ...'
				// }, {
				// 	id: 1,
				// 	name: 'Rangsimant Hanwongsa',
				//     username: 'Fakelow',
				//     tweetText: 'Lorem ipsum ...'
				// }

			],
		}

	    this.addToTweetList = this.addToTweetList.bind(this)
	}

	// เป็น Mothod ของ React ทำที่งานด้วยตัวเองไม่จำเป็นต้องเรียกใ้ที่ไหน
	componentDidMount() {
		const uri = `http://${config.api.host}:${config.api.port}/api/tweets`
		const filter = `{ "where": { "username": "${this.state.username}" } }`

		fetch(`${uri}?filter=${filter}`, {
			mode: 'cors'
		})
		.then(response => response.json())
		.then((tweets) => {
			this.setState({
				tweets: tweets
			})
		})
	}

	addToTweetList(tweet) {
		const tweetWithId = tweet
		tweetWithId.id = this.state.tweets.length

		this.setState({
			tweets: [
				...this.state.tweets,
				tweetWithId
			]
		})
	}

	render() {
		const { name, username, tweets } = this.state

		return (
			<div className="main-panel">
				{ this.props.enableTweet
				? <NewTweet
					name={ name }
					username={ username }
					addToTweetList={ this.addToTweetList }
				/>
				: null }
				<TweetList tweets={ tweets } />
			</div>
		)
	}
}

export default MainPanel
