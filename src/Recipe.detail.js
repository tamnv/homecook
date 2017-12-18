import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class RecipeDetail extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>This is recipe {this.props.match.params.topicId}</div>
		)
	}
}

export default RecipeDetail;
