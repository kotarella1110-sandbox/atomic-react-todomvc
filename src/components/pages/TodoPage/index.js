import React from 'react';
import { TodoTemplate, Header, Footer, Main } from 'components';

const TodoPage = () => {
  const visibilityFilter = 'SHOW_ALL';
  const todos = [
    {
      id: 0,
      text: 'foo',
      completed: true,
    },
    {
      id: 1,
      text: 'bar',
      completed: false,
    },
  ];
  return (
    <TodoTemplate
      title="todos"
      header={<Header addTodo={() => null} completeAll={() => null} />}
      footer={
        <Footer
          visibilityFilter={visibilityFilter}
          completedCount={1}
          activeCount={1}
          setVisibilityFilter={() => null}
          onClearCompleted={() => null}
        />
      }>
      <Main
        todos={todos}
        completeTodo={() => null}
        deleteTodo={() => null}
        editTodo={() => null}
      />
    </TodoTemplate>
  );
};

export default TodoPage;
