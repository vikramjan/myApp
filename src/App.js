import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import PostList from './posts/PostList';
import PostAnnotations from './posts/PostAnnotations';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render(){
    

      return(
        <div className="container">  
          <h1>Hello World</h1>    
          <PostList />
          <PostAnnotations />
        </div>

    )
  }

}

export default App
