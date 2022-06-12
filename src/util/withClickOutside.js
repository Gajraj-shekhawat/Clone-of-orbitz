import React, { useState, useRef, useEffect } from 'react';

export default function withClickOutside(WrappedComponent) {
  const Component = (props) => {
    //   const [open, setOpen] = useState(false);
      const [showMoreTravel, setShowMoreTravel] = useState(false);
      const [showSignIn, setShowSignIn] = useState(false);

    const ref = useRef();

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (!ref.current.contains(event.target)) {
          setShowSignIn(false)
            setShowMoreTravel(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
    }, [ref]);

    return (
      <WrappedComponent
        showSignIn={showSignIn}
        showMoreTravel={showMoreTravel}
        setShowMoreTravel={setShowMoreTravel}
        ref={ref}
        setShowSignIn={setShowSignIn}
      />
    );
  };

  return Component;
}
