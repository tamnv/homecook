import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import RecipeDetail from './Recipe.detail';

class Recipe extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="recipe-list">
				<ul>
					<li><Link to={`${this.props.match.url}/rendering`} >Rendering</Link></li>
					<li><Link to={`${this.props.match.url}/component`} >Component</Link></li>
					<li><Link to={`${this.props.match.url}/prop-vs-state`} >Prop vs State</Link></li>
				</ul>
				<Route path={`${this.props.match.url}/:topicId`} component={RecipeDetail}/>		
			</div>
		)
	}
}

export default Recipe;
