

// ###########submit form #################
import React from 'react';
// import './App.css'
// import form from './form.js';
function App(){
  return(
    <div className='App'>
      <p> HI from app js</p>
      <form />
    </div>
  );
}

export default App;

//import React, { useEffect } from 'react';
//import logo from'./logo.svg';
//import './App.css';

//function App(){
  //return(
    //<div className='App'>
      //<header className='App-header'>
        //<img src= {logo} className='App-logo' alt='logo'/>
        //<h1>heelo react</h1>

        //<profile text={{name:'peter'}}  data='profile Data'/>
      //</header>    
    //</div>
  //);
  
//}

//export default App;
//import React from "react";
//import profile from './profile'
//function App(){
  //return(
    //<div>
      //<profile />
    //</div>
  //);
//}

//export default App;

//#############################################

//hide and show
//import { render } from "@testing-library/react";
//import React from "react";
//class App extends React.Component{
  //constructor()
  //{
    //super();
    //this.state={
      //show:true

    //}
  //}
  //render(){
    //return(
      //<div>
        //{
        //this.state.show ?
        //<button>hide and show</button>
        //:null}
        //<button onClick={()=>{this.setstate({show:!false.state.show})}}> on click</button>
      //</div>
    //);
  //}
//}
//export default App;

// hide and show
//*********************************** */

//import React from "react";
//class App extends React.Component{
  //constructor()
//{
  //super();
  //this.state={
    //show:true
  //}
//}
//render(){
  //return(
    //<div>
      //<h1>hide and show</h1>
      //<button onClick={()=>{alert("hello Arrrkee")}}> click me</button>
    //</div>
  //);
//}
//}
//export default App;

//##############################################

//Event handling
//import React from "react";
import logo from './logo.svg';
import './App.css';
import Profile from "./profile"
//function App(){
  //return(
    //<div className="App">
      //<header className="App-header">
        //<img src= {logo} className="App-logo" alt="logo" />
        ///<h1>Event Handling in React</h1>
      //</header>
    //</div>
  //);

//}

//export default App;




//life cycle method

//import React from "react";
//class App extends React.Component{
  //constructor()
  //{
    //super();
    //console.warn("constructor")  
  //}
  //componentDidMount()
  //{
    //console.warn("componentDidMount")
  //}
  //render(){
    //console.warn("render")
    //return(
      //<div>
        //<h1>Life cycle  method</h1>
      //</div>
    //);
  //}
//}
//export default App;


//########################################################
// component did mount

//import React from 'react';
//class  App extends React.Component{
  //constructor()
  //{
    //super()
    //this.state={
      //data:null
//}
  //console.warn("constructor")
//}
//componentDidMount(){
  //this.setState({data:"updated"})
//console.warn("componentDidMount")
 //}
 //render(){
  //console.warn("render")
  //return(
    //<div>
      //<h1> life cycle method : componentDidMount</h1>
    //</div>
  //);
// }
//}
//export default App;


//export default App;

//###############################################################
//componentDidUpdate
//import React from 'react';
//class App extends React.Component{
  //constructor()
  //{
    //super();
    //this.state={
      //acive:null,
      //who:null
    //}
  //}
  //componentDidUpdate()
  //{
   // console.warn("componentDidupdate")
    //this.setState({who:"rishi kumar"})
   // if (this.state.who==null){
     // this.setState({who:"rishi kumar"})
    //}
  //}
  //render(){
    //return(
      //<div>
        //<h1>React componentDidUpdate {this.state.who}</h1>
        //<button onClick={()=>{this.setState({active:"yes"})}}> rishi</button>
      //</div>
    //);
  //}
//}
//export default App;


//##########################################################
//componentWillUnmount 
//import React from 'react';
//import user from './user';
//class App extends React.Component{
  //constructor()
  //{
    //super()
    //this.state={
      //toggle:true
    //}
  //}
  //render(){
    //return(
      //<div>

      //<h1>React : component Will Unmount</h1>
      //{
       // this.state.toggle?
        //<user />:null
      //}
      //<button onClick={()=>{this.setState ({toggle:!this.state.toggle})}}>Delete user</button>
      //</div>
    //);
  //}
//}
//export default App;
//#####hooks#################

//import React, { useState } from 'react';
//function App()
//{
  //const[count,setcount]= useState(100)
  //return(<div>
    //<h1>Hooks in fuunctional component{count}</h1>
    //<button onClick={()=>{setcount(count-1)}}>Increment</button>
  //</div>)
//}
// export default App;

