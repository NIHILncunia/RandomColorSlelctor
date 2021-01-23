import React from 'react';
import getContrast from '@utils/getContrast';

const ColorDisplay = ({ color, }) => {

  const bgColor = { backgroundColor: `#${color.hex}`, color: getContrast(color.hex), };

  return (
    <div className='color-item' style={bgColor}>#{ color.hex }</div>
  );
};

export default ColorDisplay;