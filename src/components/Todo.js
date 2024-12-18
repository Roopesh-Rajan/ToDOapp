
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, toggleComplete, deleteTodo,editTodo }) => {
  return (
    <div className="Todo">
      <p 
        onClick={() => toggleComplete(task.id)} 
        className={`${task.completed ? 'completed' : ''}`}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon 
          icon={faPenToSquare} 
          className="icon edit"
          onClick={() => editTodo(task.id)} 
        />
        <FontAwesomeIcon 
          icon={faTrash} 
          className="icon delete" 
          onClick={() => deleteTodo(task.id)} 
        />
      </div>
    </div>
  );
};
