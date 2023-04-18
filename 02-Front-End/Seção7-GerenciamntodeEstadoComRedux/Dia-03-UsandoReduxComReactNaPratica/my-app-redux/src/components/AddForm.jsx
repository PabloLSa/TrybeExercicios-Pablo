
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../Redux/actions/actions';

 class AddForm extends Component {
  state = {
    todoText:' ',
  }

  handleImput = ({target : {value}}) => {
this.setState({ todoText: value });
  }

  handleAddTodo = () => {

    const { dispatch } = this.props;
    const { todoText } = this.state
    const todo = {
      id: 0,
      todoText: todoText,
      active: true,
    };

    dispatch(addTodo(todo));

  };

  render() {
    const { todoText} = this.state;
    return (
      <div className="addForm">
        <input 
            type='text' 
            name='todoText'
            value={todoText}
            onChange={this.handleImput}
        />
          <button onClick={this.handleAddTodo}>+</button>
      </div>
    
    );
  }
}
export default connect()(AddForm);