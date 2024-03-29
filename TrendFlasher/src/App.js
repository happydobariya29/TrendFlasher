import React, { Component, Fragment } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import './App.css';
import NavBar from './components/NavBar';
import { News } from './components/News';

export default class App extends Component {
  state = {
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Fragment>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
          <Route exact path="/" element={<News setProgress = {this.setProgress} key="general" pageSize={8} country="in" category="general"/>}/>
          <Route exact path="/entertainment" element={<News setProgress = {this.setProgress} key="entertainment" pageSize={8} country="in" category="entertainment"/>}/>
          <Route exact path="/business" element={<News setProgress = {this.setProgress} key="business" pageSize={8} country="in" category="business"/>}/>
          <Route exact path="/general" element={<News setProgress = {this.setProgress} key="general" pageSize={8} country="in" category="general"/>}/>
          <Route exact path="/health" element={<News setProgress = {this.setProgress} key="health" pageSize={8} country="in" category="health"/>}/>
          <Route exact path="/science" element={<News setProgress = {this.setProgress} key="science" pageSize={8} country="in" category="science"/>}/>
          <Route exact path="/sports" element={<News setProgress = {this.setProgress} key="sports" pageSize={8} country="in" category="sports"/>}/>
          <Route exact path="/technology" element={<News setProgress = {this.setProgress} key="technology" pageSize={8} country="in" category="technology"/>}/>
        </Routes>
        </Fragment>
        </Router>
      </div>
    )
  }
}
