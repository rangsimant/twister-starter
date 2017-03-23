import React, { Component } from 'react'
import MainPanel from './MainPanel'
import Profile from './Profile'
import config from '../config'

class BodyContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: 'Fakelow',
		  	name: 'sunnysun',
		  	tweets: [],
		  	numFollowers: 0,
		  	numFollowings: 0,
		  	isFollowing: false,
		  	enableTweet: false
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
		const { name, username, numberTweets, numberFollower, numberFollowing, tweets } = this.state

		return (
			<div className="container body">
				<Profile name={name} username={ username } numberTweets={ 100 } numberFollower={ 200 } numberFollowing={ 300 } isOwnProfile={true}/>
				<MainPanel enableTweet={this.props.enableTweet} tweets={ tweets }  name={name} username={ username } addToTweetList={ this.addToTweetList }/>
			</div>
		)
	}
}

export default BodyContainer

