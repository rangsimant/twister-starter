import React, { Component } from 'react'

class ProfileHeader extends Component {
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
		   <div className="header">
            <div className="name">{ name }</div>
            <div className="screen-name">@{ username }</div>
          </div>
		)
	}
}

export default ProfileHeader
