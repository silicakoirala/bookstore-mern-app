import React from 'react';

import { ImSpinner } from "react-icons/im";

const Spinner = () => {
  return (
    <div className='animate-ping w-16 h-16 rounded-full bg-sky-600'>
      <ImSpinner />
    </div>
  )
}

export default Spinner