import React, { useEffect, useState } from 'react';

const SetInterval = () => {
  const text = 'test';
  const [colorStyle, setColorStyle] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(`Current blinking text: ${text}`);
      setColorStyle((visible) => !visible);
    }, 1000);
    return () => {
      console.log('Unmount component, deleting interval...')
      clearInterval(intervalId);
    };
  }, [text]);
  return colorStyle ? <h1 style={{color: "green"}}>{text}</h1> : <h1 style={{color: "blue"}}>{text}</h1>;
}

export default SetInterval;
