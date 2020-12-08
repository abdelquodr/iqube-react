import React from 'react';

const Card = ({ header, paragraph, button }) => {
    return (

        <div className="card shadow-sm border-0 px-5 py-4" style={{ width: '25rem', top: '-22rem', position: 'abolute' }}>
            <div className="rounded-circle p-2 shadow-sm text-center">
                <div className="mark__success text-center"></div>
            </div>
            <div className="card-body text-left pt-2">
                <h5 className="card-title title">{header}d</h5>
                <p className="card-text pt-2">{paragraph}</p>
                <button className="btn p-0">{button}</button>
            </div>

        </div>

    );
}

export default Card;
