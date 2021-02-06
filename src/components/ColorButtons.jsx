import React, { useCallback, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import getColors from '@utils/getColors';
import uuid from 'uuid/v4';
import { css } from '@emotion/react';

const ColorButtons = ({ colors, setColors, }) => {
  const addRef = useRef(null);
  const delRef = useRef(null);

  useEffect(() => {
    if (colors.length === 10) {
      addRef.current.disabled = true;
    } else {
      addRef.current.disabled = false;
    }

    if (colors.length === 1) {
      delRef.current.disabled = true;
    } else {
      delRef.current.disabled = false;
    }
  }, [ colors, ]);

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

  const flex = css`
    display: flex;
    flex-direction: row;
    align-content: center;
    width: 100%;
    border-top: 5px solid #ffffff;

    & button:nth-of-type(2) {
      margin-left: 5px;
      margin-right: 5px;
    }
  `;

  const style = css`
    padding: 1rem;
    box-sizing: border-box;
    font-weight: 900;
    border: none;
    outline: none;
    font-size: 1.5em;
    background: #444444;
    color: #ffffff;

    &:disabled {
      background: #666666;
      color: #bbbbbb;

      &:hover {
        background: #666666;
        color: #bbbbbb;
      }
    }

    &:hover {
      background: #222222;
    }
  `;

  const AddDelButton = css`
    ${style}
    flex: 1;
  `;

  const randomButton = css`
    ${style}
    width: 100%;
    background: #333333;
    flex: 3;
  `;

  return (
    <>
      <div css={flex}>
        <button css={AddDelButton} onClick={onDeleteColor} ref={delRef}>-</button>
        <button css={randomButton} onClick={onRandomColor}>랜덤 색상 ({colors.length})</button>
        <button css={AddDelButton} onClick={onAddColor} ref={addRef}>+</button>
      </div>
    </>
  );
};

ColorButtons.propTypes = {
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

export default ColorButtons;