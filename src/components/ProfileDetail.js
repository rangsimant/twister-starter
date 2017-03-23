import React, { Component } from 'react'

class ProfileDetail extends Component {

	constructor(props) {
		super(props)
		this.state = {
			numberTweets: this.props.numberTweets,
			numberFollower: this.props.numberFollower,
			numberFollowing: this.props.numberFollowing
		}
	}

	render() {
		const { numberTweets, numberFollower, numberFollowing } = this.state

		return (
          <div className="detail last-section">
            <div className="col">
              <div className="text">Tweets</div>
              <div className="number">{ numberTweets }</div>
            </div>
            <div className="col">
              <div className="text">Followers</div>
              <div className="number">{ numberFollower }</div>
            </div>
            <div className="col">
              <div className="text">Following</div>
              <div className="number">{ numberFollowing }</div>
            </div>
          </div>
		)
	}


}

export default ProfileDetail
