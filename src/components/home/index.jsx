import React, { Component } from 'react';
import Helmet from "react-helmet";
import styles from './styles.scss';

export class Home extends Component {
	render() {
		return (
			<div className={ styles.component }>
				<Helmet title="Page Title" />
				<h1>Hello World</h1>
			</div>
		);
	}
}