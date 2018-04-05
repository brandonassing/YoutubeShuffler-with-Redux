import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Frame from './Frame';
import Shuffle  from './Shuffle';
import MenuItems from './Menu';
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';
import { changeShow } from '../actions/index';

const { Header, Content, Footer } = Layout;

const mapDispatchToProps = dispatch => {
  return {
    changeShow: showData => dispatch(changeShow(showData))
  };
};

class App extends Component {
  constructor(props){
    super(props);
  }
  //TODO should I just move this onClick into Menu directly and give menu a dispatch???

  componentDidMount(){
    this.props.changeShow({
      show: "The Office",
      video: {
        src: "https://www.youtube.com/embed/Vmb1tqYqyII",
        title: "First Aid"
      }
    });
  }
  render() {
    return (
      <Layout className="layout">
        <MenuItems/>
        <Content style={{ padding: '0 100px', height:"100vh" }}>
          <div id="card">
            <Frame />
            <Shuffle />
          </div>
        </Content>
      </Layout>

    );
  }
}

export default connect(null, mapDispatchToProps)(App);
