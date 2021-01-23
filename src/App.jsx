import React, { useState } from 'react';
import ColorDisplay from '@components/ColorDisplay';
import ColorButtons from '@components/ColorButtons';
import getColors from '@utils/getColors';
import uuid from 'uuid/v4';

const RandomColorSlelctor = () => {
  const [ colors, setColors, ] = useState([ {
    id: uuid(),
    hex: getColors(),
  }, ]);

  return (
    <>
      <div id='color-display'>
        {colors.map((color) => (
          <ColorDisplay key={color.id} color={color} />
        ))}
      </div>
      <ColorButtons colors={colors} setColors={setColors} />
    </>
  );
};

export default RandomColorSlelctor;