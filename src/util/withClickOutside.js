import React, { useState, useRef, useEffect } from 'react';

export default function withClickOutside(WrappedComponent) {
  const Component = (props) => {
    //   const [open, setOpen] = useState(false);
      
      const [showSignIn, setShowSignIn] = useState(false);

    const ref = useRef();

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (!ref.current.contains(event.target)) {
          setShowSignIn(false)
           
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
    }, [ref]);

    return (
      <WrappedComponent
        showSignIn={showSignIn}
        ref={ref}
        setShowSignIn={setShowSignIn}
      />
    );
  };

  return Component;
}
