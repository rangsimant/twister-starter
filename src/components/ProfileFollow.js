import React, { Component } from 'react'

class ProfileFollow extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isFollowing: props.isFollowing,
			handleToggleFollow: props.handleToggleFollow
		}
	}

	render() {
		const { isFollowing, handleToggleFollow } = this.state

		return (
			<div className="action last-section">
				{
					isFollowing
					? <input type="button" className="btn btn-danger btn-lg" value="Following" onClick={handleToggleFollow} />
					: <input type="button" className="btn btn-default btn-lg" value="Follow" onClick={handleToggleFollow}/>
				}
	        </div>
		)
	}
}

export default ProfileFollow
