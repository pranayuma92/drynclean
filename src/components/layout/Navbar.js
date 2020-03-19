import React from 'react';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light" id="mainNav">
		    <div className="container">
		      <a className="navbar-brand js-scroll-trigger" href="#">Dry & Clean</a>
		      <div className="collapse navbar-collapse" id="navbarResponsive">
		        <ul className="navbar-nav ml-auto">
		          <li className="nav-item">
		            <a className="nav-link js-scroll-trigger" href="#">Home</a>
		          </li>
		          <li className="nav-item">
		            <a className="nav-link js-scroll-trigger" href="#">Services</a>
		          </li>
		          <li className="nav-item">
		            <a className="nav-link js-scroll-trigger" href="#">Contact</a>
		          </li>
		        </ul>
		        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
		      </div>
		    </div>
		</nav>
	)
}

export default Navbar;