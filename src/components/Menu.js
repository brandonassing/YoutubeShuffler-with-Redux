import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { connect } from 'react-redux';
import { changeShow } from '../actions/index';
const { Header, Content, Footer } = Layout;

const mapDispatchToProps = dispatch => {
  return {
    changeShow: showData => dispatch(changeShow(showData))
  }
}

class MenuItems extends Component{

  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(e){
    var newSrc;
    var newTitle;
    if(e.key=="The Office"){
      newSrc = "https://www.youtube.com/embed/9tt6QPhii88";
      newTitle = "Rowboat";
    }
    else if(e.key=="Parks and Recreation"){
      newSrc = "https://www.youtube.com/embed/QGeG98rbyBI";
      newTitle = "Garbage Fight";
    }
    else if(e.key=="New Girl"){
      newSrc = "https://www.youtube.com/embed/oH_Wk5HG0zM";
      newTitle = "Networking Tips";
    }
    this.props.changeShow({
      show: e.key,
      video: {
        src: newSrc,
        title: newTitle
      }
    });
  }

  render(){
    return (
      <Header>
      <div className="logo" />
      <Menu
        onClick={this.handleClick}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="The Office">The Office</Menu.Item>
        <Menu.Item key="Parks and Recreation">Parks and Recreation</Menu.Item>
        <Menu.Item key="New Girl">New Girl</Menu.Item>
      </Menu>
    </Header>

      );
  }
}

export default connect (null, mapDispatchToProps)(MenuItems);
