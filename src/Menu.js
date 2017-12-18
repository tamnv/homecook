import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './Home';
import Blog from './Blog';
import Recipe from './Recipe';

class Menu extends React.Component {
	render() {
		return(
			<Router>
				<div className="main-menu">
					<ul>
						<li className="menu-item"><Link to="/">Home</Link></li>
						<li className="menu-item"><Link to="/blog">Blog</Link></li>
						<li className="menu-item"><Link to="/recipe">Cooking Recipe</Link></li>	
					</ul>
					<Route exact path="/" component={Home} />
					<Route path="/blog" component={Blog} />
					<Route path="/recipe" component={Recipe} />
				</div>
			</Router>
		)
	}
}

export default Menu;