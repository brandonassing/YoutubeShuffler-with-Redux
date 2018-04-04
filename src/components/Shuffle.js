import React, { Component } from 'react';
import { Button } from 'antd';
import './Shuffle.css'
import { connect } from 'react-redux';
import { changeVid } from '../actions/index';

//TODO have this class handle shuffling and have a sep class for displaying the shuffle-btn and the menu buttons
const mapStateToProps = state => {
  return {
    show: state.videoReducer.data.show
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeVid: vidData => dispatch(changeVid(vidData))
  };
};

class Shuffle extends Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e){
		var newSrc;
    var newTitle;
 		if(this.props.show=="The Office"){
  	  newSrc = "https://www.youtube.com/embed/8-UgRXWur_M" + "?autoplay=1";
    	newTitle = "Xmas Cancelled";
    	  // SAMPLE API CALL TO GET A FEW VIDS FROM THE USTHEOFFICE CHANNEL
    	  //https://www.googleapis.com/youtube/v3/search?key=AIzaSyDI3MIMqFmyYbJgpRwW3ZK8rTwlQHJOYnA&part=snippet&channelId=UCa90xqK2odw1KV5wHU9WRhg
  	}
  	else if(this.props.show=="Parks and Recreation"){
      newSrc = "https://www.youtube.com/embed/Ish8NBunrQU";
      newTitle = "Garbage Fight";
    }
    else if(this.props.show=="New Girl"){
      newSrc = "https://www.youtube.com/embed/OmYrezI1L98";
      newTitle = "Intimidating Date";
    }
  	this.props.changeVid({
      src: newSrc,
      title: newTitle
    });
	}

	render(){
		return <Button id="shuffle-btn" size="large" type="primary" onClick={this.handleClick}>Shuffle</Button>;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Shuffle);
