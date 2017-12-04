import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Helmet from "react-helmet";
import { Link } from 'react-router-dom';

import { Home } from './components';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Helmet
					htmlAttributes={{lang: "en", amp: undefined}}
					titleTemplate="%s | React App"
					titleAttributes={{itemprop: "name", lang: "en"}}
					meta={[
						{name: "description", content: "Server side rendering example"},
						{name: "viewport", content: "width=device-width, initial-scale=1"},
					]}
					link={[
						{ type: "text/css", rel: "stylesheet", href: "/static/styles.css" }
					]}
				/>
				<Switch>
					<Route exact path='/' component={ Home } />
				</Switch>
			</div>
		);
	}
}