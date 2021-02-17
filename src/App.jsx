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

  const container = css`
    height: 100%;
    display: flex;
    flex-direction: column;

    & > #color-display {
      display: flex;
      flex-direction: row;
      width: 100%;
      box-sizing: border-box;
      flex: 1;

      & > .color-item {
        text-align: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
        font-weight: 900;
        display: flex;
        flex-direction: column;
        flex: 1;
        align-items: center;
        font-size: 1.5rem;
        user-select: none;

        & > .item {
          flex: 1;
          display: flex;
          align-items: center;
        }

        & > button {
          background: #222222;
          border: 2px solid #ffffff;
          padding: 5px;
          font-size: 1rem;
          color: #ffffff;
          cursor: pointer;
          outline: none;
        }

        & > .delete-button {
          margin-bottom: 3px;
        }
      }
    }
  `;

  return (
    <div css={container}>
      <div id='color-display'>
        {colors.map((color) => (
          <ColorDisplay key={color.id} color={color} colors={colors} setColors={setColors} />
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