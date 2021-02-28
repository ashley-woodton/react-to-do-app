import React from 'react';
import './App.css';
import List from './components/List'

class App extends React.Component {
//tracking user input: using a form or input field
//onChange is probably needed.
//onSubmit is definitely needed!
//i'll probably need a preventDefault
//state just to keep my infomation the same and only change when i need it to change

  constructor(props){
    super(props)

    this.state ={
      noteText: '',
      notes:[]
    }
  }

  onChange = (event) =>{
    this.setState({
      noteText: event.target.value
    })
  }

  onSubmit = (event) =>{
    event.preventDefault()
    this.setState({
      noteText:'',
      notes:[...this.state.notes,this.state.noteText]
    })
    console.log(this.state.notes)
  }


  render(){
    return (
      <div className="App">
       <div>
<div className="header">
      <div className ="wrapper">
      <img src = "r2h.jpg" />
      <p className="title">Road To Hire</p>
      </div>
    </div>
    <div className="app">
      <div className="app-wrapper">
        <p className="app-title">To-Do List</p>
        <form className ="App" onSubmit = {this.onSubmit}>
          <input value = {this.state.noteText} onChange = {this.onChange} placeholder="Type here to add a task" type="text" id="box" />
          <br />
        </form>
        <br />
        <List notes = {this.state.notes} />
</div>
</div>
</div>
</div>
    );
  }
}

export default App;
