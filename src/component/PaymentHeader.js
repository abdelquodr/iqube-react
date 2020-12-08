import React from 'react';

const PaymentHeader = ({ purchase, personal, billing, confirm }) => {
    return (
        <div className="text-center pt-5" style={{ width: "26rem", margin: '0 auto' }}>
            <h6 className="title text-left pt-5 px-3"> {purchase} </h6>
            <p className="d-flex justify-content-between border-bottom px-3 py-2">
                <span className="font-weight-bolder text-sm text-hash">{personal}</span>
                <span className="font-weight-bolder text-sm text-hash">{billing}</span>
                <span className="font-weight-bolder text-sm text-hash">{confirm}</span>
            </p>
        </div>
    );
}

export default PaymentHeader;
