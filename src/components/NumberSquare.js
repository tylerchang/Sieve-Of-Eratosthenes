import React from 'react';

const NumberSquare = (props) => {

    let square = <div></div>

    if (props.prime) {
        square = <div style={{ width: '100px', height: '100px', border: '1px solid black', background: 'green', textAlign: 'center', fontSize: '35px', fontFamily: 'Oswald, sans-serif' }}> {props.number} </div>
    } else {
        square = <div style={{ width: '100px', height: '100px', border: '1px solid black', textAlign: 'center', fontSize: '35px', fontFamily: 'Oswald, sans-serif' }}> {props.number} </div>
    }

    return (
        <div>
            {square}
        </div>
    )

}

export default NumberSquare;