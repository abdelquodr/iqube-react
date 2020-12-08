import React from 'react';
import { Link } from 'react-router-dom'

const YourPurchase = ({ routerLink }) => {
    return (
        <div className="float-right mr-5 mt-5 v__shape" >
            <Link to={routerLink}>
                <div className="anchor mt-2 ml-2"></div>
            </Link>
        </div >
    );
}

export default YourPurchase;
