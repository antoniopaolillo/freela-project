import React, { useState } from 'react';
import Context from '../context/context';

const Provider = ({ children }) => {
  const [addClass, setAddClass] = useState(false);
 
  const context = {
    addClass,
    setAddClass,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
