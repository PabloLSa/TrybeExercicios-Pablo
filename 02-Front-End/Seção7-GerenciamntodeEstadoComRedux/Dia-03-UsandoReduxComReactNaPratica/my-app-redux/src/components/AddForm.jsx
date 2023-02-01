
import React, { Component } from 'react';
import { connect } from 'react-redux'

 class AddForm extends Component {
  state = {
    todoText:' ',
  }

  handleImput = ({target : {value}}) => {
this.setState({ todoText: value });
  }
  handleTodo = () =>{

  }

  render() {
    const { todoText} = this.state;
    return (
      <div className="addForm">
        <input 
            type='text' 
            name='todoTExt'
            value={todoText}
            onChange={this.handleImput}
        />
          <button onClick={this.handleTodo}>+</button>
      </div>
    
    );
  }
}
export default connect()(AddForm);