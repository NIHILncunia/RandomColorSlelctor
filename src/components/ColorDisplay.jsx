import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import getContrast from '@utils/getContrast';
import CopyButton from '@components/CopyButton';

const ColorDisplay = ({ color, colors, setColors, }) => {
  const [ isCopy, setIsCopy, ] = useState(false);

  const onEnterColor = useCallback(() => {
    setIsCopy(true);
  }, []);

  const onLeaveColor = useCallback(() => {
    setIsCopy(false);
  }, []);

  const colorStyle = {
    background: `#${color.hex}`,
    color: getContrast(color.hex),
  };

  const onClickDelete = useCallback(() => {
    const id = color.id;

    setColors((prev) => prev.filter(item => id !== item.id));
  }, []);

  return (
    <div className='color-item' style={colorStyle} onMouseEnter={onEnterColor} onMouseLeave={onLeaveColor}>
      <p className='item'>#{ color.hex }</p>
      
      {
        isCopy
        ? (
          <>
            <button className='delete-button' onClick={onClickDelete}>삭제</button>
            <CopyButton color={color} />
          </>
        )
        : ''
      }
    </div>
  );
};

ColorDisplay.propTypes = {
  color: PropTypes.object.isRequired,
  colors: PropTypes.array.isRequired,
  setColors: PropTypes.func.isRequired,
};

// node: PropTypes.node.isRequired,
// string: PropTypes.string.isRequired,
// number: PropTypes.number.isRequired,
// func: PropTypes.func.isRequired,
// object: PropTypes.object.isRequired,
// array: PropTypes.array.isRequired,
// bool: PropTypes.bool.isRequired,
// symbol: PropTypes.symbol.isRequired,
// elementType: PropTypes.elementType.isRequired,

export default ColorDisplay;