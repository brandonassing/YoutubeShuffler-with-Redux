import React, { Component } from 'react';
import './Frame.css';

export class Frame extends Component{
	render(){
		//var src = this.props.src + "?autoplay=1";
		var src = this.props.src;
		return (
			<div id="frame-container">
			<iframe title={this.props.title} src={src} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
			</div>
		);

	}
} 
