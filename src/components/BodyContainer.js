import React, { Component } from 'react'
import MainPanel from './MainPanel'
import Profile from './Profile'
import config from '../config'
import {fetchTweets, fetchProfile, fetchFollowStatus, follow, unfollow } from '../helper'

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
		  	enableTweet: false,
		  	isOwnProfile: false,
		}

		this.addToTweetList = this.addToTweetList.bind(this)
	}

	// เป็น Mothod ของ React ทำที่งานด้วยตัวเองไม่จำเป็นต้องเรียกใ้ที่ไหน
	componentDidMount() {
		const ownerUsername = this.props.match.params.ownerUsername || this.state.username

		this.fetchDate(ownerUsername)
	}

	fetchDate(ownerUsername) {
		const uri = `http://${config.api.host}:${config.api.port}/api/tweets`
		const filter = `{ "where": { "username": "${ownerUsername}" } }`
		const username = this.state.username

		let fetchedData = {}
		fetchTweets(ownerUsername)
			.then(tweets => { fetchedData.tweets = tweets })
			.then(() => fetchProfile(ownerUsername))
			.then(profile => { fetchedData.numFollowers = profile.numFollowers })
			.then(() => fetchFollowStatus(username, ownerUsername))
			.then(status => {
				fetchedData.isFollowing = status
				this.setState(fetchedData)
			})
	}

	componentWillReceiveProps(nextProps) {
		const ownerUsername = nextProps.match.params.ownerUsername || this.state.username

		this.fetchData(ownerUsername)
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
		const { name, username, numberTweets, numberFollower, numberFollowing, tweets} = this.state
		const ownerUsername = this.props.match.params.ownerUsername
		const isOwnProfile = this.state.username === ownerUsername

		return (
			<div className="container body">
				<Profile name={name} username={ username } numberTweets={ 100 } numberFollower={ 200 } numberFollowing={ 300 } isOwnProfile={ isOwnProfile }/>
				<MainPanel enableTweet={this.props.enableTweet} tweets={ tweets }  name={name} username={ username } addToTweetList={ this.addToTweetList }/>
			</div>
		)
	}
}

export default BodyContainer

