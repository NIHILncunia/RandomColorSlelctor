import React, { useCallback, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';

const CopyButton = ({ color, }) => {
  const [ message, setMessage, ] = useState('HEX 복사');

  const onClickButton = useCallback(() => {
    setMessage('복사 완료');
  }, []);

  return (
    <CopyToClipboard text={`#${color.hex}`}>
      <button className='copy-button' onClick={onClickButton}>{message}</button>
    </CopyToClipboard>
  );
};

CopyButton.propTypes = {
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

export default CopyButton;