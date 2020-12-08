import React from 'react';
import Card2 from '../component/Card2'
import '../App.css'
import PaymentHeader from '../component/PaymentHeader'
import YourPurchase from '../component/YourPurchase';
import PaymnetButton from '../component/PaymnetButton'

const Page2 = () => {
    return (
        <>
            <div className=" container-fluid card__container" style={{ position: 'absolute' }}>
                <YourPurchase routerLink='third-page' />
                <PaymentHeader
                    purchase="Complete your Purchase"
                    personal="Personal Info"
                    billing="Billing Info"
                    confirm="Confirm Payment"
                />
            </div>
            <div className="" style={{ margin: '0 auto 2em auto', }}>
                <Card2
                    headerLeft='Name Item'
                    headerRight='# Price'
                    p0Left='Data science and usability'
                    p0Right='50,000.00'
                    p1Left='Shippig'
                    p1Right='0.00'
                    spanLeft='Total'
                    spanRight='50,000.00'
                />
            </div>
            <PaymnetButton button='play' span='cancel payment' />

        </>

    )
}

export default Page2;