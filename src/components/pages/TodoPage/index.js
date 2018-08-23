import React, { Component } from 'react';
import { TodoTemplate, Header, Footer, Main } from 'components';

class TodoPage extends Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    visibilityFilter: 'SHOW_ALL',
    todos: [],
  };

  setVisibilityFilter = filter => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ visibilityFilter: filter });
  };

  getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(todo => todo.completed);
      case 'SHOW_ACTIVE':
        return todos.filter(todo => !todo.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  };

  getCompletedTodoCount = todos =>
    todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0);

  getActiveTodoCount = todos =>
    todos.reduce((count, todo) => (!todo.completed ? count + 1 : count), 0);

  addTodo = text => {
    const { todos } = this.state;
    this.setState({
      todos: [
        ...todos,
        {
          id: todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text,
        },
      ],
    });
  };

  deleteTodo = id => {
    const { todos } = this.state;
    this.setState({ todos: todos.filter(todo => todo.id !== id) });
  };

  editTodo = (id, text) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(todo => (todo.id === id ? { ...todo, text } : todo)),
    });
  };

  completeTodo = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(
        todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    });
  };

  completeAll = () => {
    const { todos } = this.state;
    const areAllMarked = todos.every(todo => todo.completed);
    this.setState({
      todos: todos.map(todo => ({
        ...todo,
        completed: !areAllMarked,
      })),
    });
  };

  clearCompleted = () => {
    const { todos } = this.state;
    this.setState({ todos: todos.filter(todo => !todo.completed) });
  };

  render() {
    const { visibilityFilter, todos } = this.state;
    return (
      <TodoTemplate
        title="todos"
        header={
          <Header addTodo={this.addTodo} completeAll={this.completeAll} />
        }
        footer={
          <Footer
            visibilityFilter={visibilityFilter}
            completedCount={this.getCompletedTodoCount(todos)}
            activeCount={this.getActiveTodoCount(todos)}
            setVisibilityFilter={this.setVisibilityFilter}
            onClearCompleted={this.clearCompleted}
          />
        }>
        <Main
          todos={this.getVisibleTodos(todos, visibilityFilter)}
          completeTodo={this.completeTodo}
          deleteTodo={this.deleteTodo}
          editTodo={this.editTodo}
        />
      </TodoTemplate>
    );
  }
}

export default TodoPage;
