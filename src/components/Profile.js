import React, { Component } from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileDetail from './ProfileDetail'
import ProfileFollow from './ProfileFollow'

class Profile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: props.name,
			username: props.username,
			numberTweets: props.numberTweets,
			numberFollower: props.numberFollower,
			numberFollowing: props.numberFollowing,
			isFollowing: props.isFollowing,
			isOwnProfile: props.isOwnProfile
		}

		this.toggleFollow = this.toggleFollow.bind(this)
	}

	toggleFollow() {
		this.setState({
			isFollowing: !this.state.isFollowing
		})
	}

	render() {

		const { name, username, numberTweets, numberFollower, numberFollowing, isFollowing, toggleFollow} = this.state

		return (
			<div className="left-panel">
				<div className="profile">
					<ProfileHeader
						name={ name }
						username={ username }
					/>

					<ProfileDetail
						numberTweets={ numberTweets }
						numberFollower={ numberFollower }
						numberFollowing={ numberFollowing }
					/>

					{
						this.props.isOwnProfile
							? null
							: <ProfileFollow
								isFollowing={ this.state.isFollowing}
								handleToggleFollow={ this.toggleFollow }
							  />
					}
				</div>
			</div>
		)
	}
}

export default Profile
