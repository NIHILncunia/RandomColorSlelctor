import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import ColorDisplay from '@components/ColorDisplay';
import ColorButtons from '@components/ColorButtons';
import getColors from '@utils/getColors';
import uuid from 'uuid/v4';
import { css } from '@emotion/react';

const RandomColorSlelctor = () => {
  const [ colors, setColors, ] = useState([ {
    id: uuid(),
    hex: getColors(),
  }, {
    id: uuid(),
    hex: getColors(),
  }, {
    id: uuid(),
    hex: getColors(),
  }, {
    id: uuid(),
    hex: getColors(),
  }, {
    id: uuid(),
    hex: getColors(),
  }, ]);

  const box = css`
    display: flex;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
    flex: 1;
  `;

  const container = css`
    height: 100%;
    display: flex;
    flex-direction: column;
  `;

  return (
    <div css={container}>
      <div css={box}>
        {colors.map((color) => (
          <ColorDisplay key={color.id} color={color} />
        ))}
      </div>
      <ColorButtons colors={colors} setColors={setColors} />
    </div>
  );
};

// name.propTypes = {
//
// };

// node: PropTypes.node.isRequired,
// string: PropTypes.string.isRequired,
// number: PropTypes.number.isRequired,
// func: PropTypes.func.isRequired,
// object: PropTypes.object.isRequired,
// array: PropTypes.array.isRequired,
// bool: PropTypes.bool.isRequired,
// symbol: PropTypes.symbol.isRequired,
// elementType: PropTypes.elementType.isRequired,

export default RandomColorSlelctor;