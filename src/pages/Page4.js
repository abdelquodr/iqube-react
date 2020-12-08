import React from 'react';
import YourPurchase from '../component/YourPurchase'
import PaymentHeader from '../component/PaymentHeader'
import PaymnetButton from '../component/PaymnetButton';
import Input from '../component/Input'
import { useState } from 'react'

const Page4 = () => {

    const [collectData, setCollectedData] = useState({});

    const stateCollected = (name, value) => {
        setCollectedData(() => { return { ...collectData, [name]: value } })
    }

    // handleSubmit
    const handleSubmit = (e) => {

        // handle submit here
    }

    console.log('FROM PAGE$ >>>>>', collectData)

    return (
        <form onSubmit={handleSubmit}>
            <div className=" container-fluid card__container " style={{ position: 'absolute' }}>
                <YourPurchase routerLink='/' />
                <PaymentHeader
                    purchase="Complete your Purchase"
                    personal="Personal Info"
                    billing="Billing Info"
                    confirm="Confirm Payment"
                />
            </div>
            <div className="" style={{ margin: '0 auto', }}>
                <div className="card border-0" style={{ width: '25rem', top: '11rem', background: 'transparent' }}>
                    <Input collectstate={stateCollected} name='name' label='Name' placeholder='Opera Linus Ahmed' />
                    <Input collectstate={stateCollected} name='email' type='email' label='Email Address' placeholder='Visa' />
                    <Input collectstate={stateCollected} name='address1' label='Address 1' placeholder='Visa' />
                    <Input collectstate={stateCollected} name='address2' label='Address 2' placeholder='Visa' />
                    <div className="row">
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
                            <Input collectstate={stateCollected} name='lga' label='Local Government' placeholder='Surulere' />
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
                            <Input collectstate={stateCollected} name='state' label="State" placeholder='lagos' />
                        </div>
                    </div>
                </div>
            </div>
            <PaymnetButton button='play' span='cancel payment' />

        </form>
    );
}

export default Page4;
