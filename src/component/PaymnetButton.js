import React from 'react';

const PaymnetButton = ({ button, span, submit }) => {
    return (
        <div className="justisfy-content-between mt-2" style={{ margin: '0 auto', width: '25rem', position: 'relative', top: '11rem' }}>
            <button type='submit' className=" text-xs text-white bg__btn mr-4 border-0">{button}</button>
            <span className="text-xs">{span}t</span>
        </div>
    );
}

export default PaymnetButton;
