import React from 'react';

function Delete({ onChangeHandler, className = '', icon = 'pencil' }) {
  return (
    <span onClick={onChangeHandler ? onChangeHandler : () => {}} className={`edit ${className}`}><i className={`fa fa-${icon}`}></i></span>
  );
}

export default Delete;