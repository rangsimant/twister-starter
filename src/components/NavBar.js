import React from 'react'

const NavBar = () => {
	return (
		<nav className="navbar navbar-default navbar-fixed-top">
	      <div className="container">
	        <div className="navbar-header">
	          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
	            <span className="sr-only">Toggle navigation</span>
	            <span className="icon-bar"></span>
	            <span className="icon-bar"></span>
	            <span className="icon-bar"></span>
	          </button>
	          <a className="navbar-brand" href="feed.html">Twister</a>
	        </div>

	        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	          <form className="navbar-form navbar-right" role="logout">
	            <a className="btn btn-default" href="login.html">Log in</a>
	            <a className="btn btn-primary" href="signup.html">Sign up</a>
	          </form>
	        </div>
	      </div>
	    </nav>
	)
}

export default NavBar
