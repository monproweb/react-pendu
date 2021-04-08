import React from 'react';
import PropTypes from 'prop-types'
import './LetterButton.css';

const LetterButton = ({ letter, letterBlur, letterBlock, lettersHidden, index, onClick }) => (
    <div className={`letter-block ${letterBlock} ${lettersHidden}`} key={index} onClick={() => onClick(index)}>
        <span className={`letters ${letterBlur}`}>{letter}</span>
    </div>
)

LetterButton.propTypes = {
    letter: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}

export default LetterButton;