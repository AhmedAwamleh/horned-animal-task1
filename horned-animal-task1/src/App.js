
import './App.css';
import Footer from './component/footer';
import Header from './component/header';
import Main from './component/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './component/data.json'
import React , { Component } from 'react';
import SelectedBeast from './component/SelectedBeast';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    allBeast: data,
    selectedBeast:{},
    showModal: false
  }
}
displayModal = (beast) => {
  let result=this.state.allBeast.find(item => item.title === beast.title)
 this.setState({
  showModal:true,
  selectedBeast: result
 })
}
 handleClose= () =>{
  this.setState({
    showModal:false
 })

}
render(){
    return(

      <div className= "App">
         <Footer />
         <Header/>
         <Main allBeast={this.state.allBeast} displayModal={this.displayModal} />
         <SelectedBeast show={this.state.showModal} handleClose={this.handleClose} selectedBeast={this.state.selectedBeast}/>
       </div>

    );
  }
  
}
export default App;
