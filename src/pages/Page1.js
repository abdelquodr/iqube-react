import React from 'react';
import Card from '../component/Card'
import '../App.css'
import YourPurchase from '../component/YourPurchase'

const page1 = () => {
    return (
        <div>
            <>
                <div className=" container-fluid card__container">
                    <YourPurchase routerLink='second-page' />
                </div>
                <div className="text-center">
                    <Card
                        header='Purchase Completed'
                        paragraph='Please check your email for details concerning this transaction'
                        button='return Home' />
                </div>
            </>

        </div>
    );
}

export default page1;
