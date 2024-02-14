
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Smoke = () => {
  const smokeRef = useRef(null);

  useEffect(() => {
    const smoke = smokeRef.current;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      gsap.to(smoke, {
        duration: 0.5,
        x: clientX,
        y: clientY,
        ease: 'power2.out'
        
      });
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      ref={smokeRef}
      className="smoke"
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: '#ccc',
        borderRadius: '50%',
        position: 'absolute',
        top: '-25px', 
        left: '-25px', 
        pointerEvents: 'none'
      }}
    ></div>
  );
};

export default Smoke;
