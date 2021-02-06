import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import getContrast from '@utils/getContrast';
import { css } from '@emotion/react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ColorDisplay = ({ color, }) => {
  const [ message, setMessage, ] = useState('');

  const onEnterColor = useCallback(() => {
    setMessage(<p>클릭하면<br />HEX 복사</p>);
  }, []);

  const onLeaveColor = useCallback(() => {
    setMessage(<p></p>);
  }, []);

  const onClickCopy = useCallback(() => {
    setMessage(<p>복사 완료</p>);
  }, []);

  const item = css`
    background-color: #${color.hex};
    color: ${getContrast(color.hex)};
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-weight: 900;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    font-size: 1.5em;
    user-select: none;
  `;

  const flex = css`
    flex: 1;
    display: flex;
    align-items: center;
  `;

  return (
    <CopyToClipboard text={`#${color.hex}`}>
      <div css={item} onMouseEnter={onEnterColor} onMouseLeave={onLeaveColor} onClick={onClickCopy}>
        <p css={flex}>#{ color.hex }</p>
        {message}
      </div>
    </CopyToClipboard>
  );
};

ColorDisplay.propTypes = {
  color: PropTypes.object.isRequired,
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