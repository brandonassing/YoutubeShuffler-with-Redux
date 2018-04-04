import React, { Component } from 'react';
import './Frame.css';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    video: state.videoReducer.data.video
  }
}

class Frame extends Component{
	render(){
		//var src = this.props.src + "?autoplay=1";
    console.log("render frame");
    console.log(this.props);
		var src = this.props.video.src;
    var title = this.props.video.title;

		return (
			<div id="frame-container">
			<iframe title={title} src={src} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
			</div>
		);

	}
}

export default connect(mapStateToProps)(Frame);
