import React from 'react';

const Card2 = ({ headerLeft, headerRight, p0Left, p0Right, p1Left, p1Right, spanLeft, spanRight }) => {
    return (
        <>
            <div className="card shadow-sm border-0" style={{ width: '25rem', top: '11rem' }}>
                <div className=" d-flex justify-content-between card-header bg-primary px-5 ">
                    <h6 className="text-white text-xs m-0">{headerLeft}</h6>
                    <h6 className="text-white text-xs m-0">{headerRight}</h6>
                </div>

                <div className="d-flex justify-content-between card-body text-left pt-4 pb-2 px-5">
                    <p className="text-xs text-purple pt-2">{p0Left}</p>
                    <p className="text-xs text-purple pt-2">{p0Right}</p>
                </div>

                <div className=" d-flex justify-content-between card-body text-left py-0 px-5">
                    <p className="text-xs text-purplet pt-2">{p1Left}</p>
                    <p className="text-xs text-purple pt-2">{p1Right}</p>
                </div>
                <hr className="mx-3 mt-0 mb-4" />
                <div className="d-flex justify-content-between border rounded py-2 px-4 mx-4 mb-4">
                    <span className="text-xs text-purple">{spanLeft}</span>
                    <span className="text-xs text-purple">{spanRight}</span>
                </div>
            </div>


        </>
    );
}

export default Card2;
