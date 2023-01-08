import React, { useState } from 'react';

function SingleTask({ taskValue }) {
  return (
    <button className="invisible-button m-2" type="button">
      <li>
        {' '}
        {taskValue}
      </li>
    </button>
  );
}

export default SingleTask;
