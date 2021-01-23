import React, { useCallback } from 'react';
import getColors from '@utils/getColors';
import uuid from 'uuid/v4';

const ColorButtons = ({ colors, setColors, }) => {
  const onAddColor = useCallback(() => {
    setColors((prev) => [ ...prev, {
      id: uuid(),
      hex: getColors(),
    }, ]);
  }, []);

  const onDeleteColor = useCallback(() => {
    setColors(colors.filter((item, index) => index !== colors.length - 1));
  }, [ colors, ]);

  const onRandomColor = useCallback(() => {
    const count = colors.length;
    setColors([]);
    
    for (let i = 0; i < count; i++) {
      setColors((prev) => [ ...prev, {
        id: uuid(),
        hex: getColors(),
      }, ]);
    }
  }, [ colors, ]);

  return (
    <>
      <button className='one-color-delete' onClick={onDeleteColor}>색상 - 1</button>
      <button className='one-color-add' onClick={onAddColor}>색상 + 1</button>
      <button className='random-color' onClick={onRandomColor}>랜덤 색상</button>
    </>
  );
};

export default ColorButtons;