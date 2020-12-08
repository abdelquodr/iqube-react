import React, { useState } from 'react';
import YourPurchase from '../component/YourPurchase'
import PaymentHeader from '../component/PaymentHeader'
import PaymentButton from '../component/PaymnetButton'
import Input from '../component/Input'




function Page3() {

    const [collectData, setCollectData] = useState({});

    const stateCollected = (name, value) => {
        setCollectData(() => { return { ...collectData, [name]: value } })
    }
    console.log(collectData)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('>>>>>> WORKING <<<<<<<<')

        // submit whatever you wanted to submit
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className=" container-fluid card__container" style={{ position: 'absolute' }}>
                <YourPurchase routerLink='fourth-page' />

                <PaymentHeader
                    purchase="Complete your Purchase"
                    personal="Personal Info"
                    billing="Billing Info"
                    confirm="Confirm Payment"
                />
            </div>

            <div className="" style={{ margin: '0 auto', }}>
                <div className="card border-0" style={{ width: '25rem', top: '11rem', background: 'transparent' }}>
                    <Input collectstate={stateCollected} name='cardName' label='Name on card' placeholder='Opera Linus Ahmed' />
                    <Input collectstate={stateCollected} name='cardType' label='Card Type' placeholder='Visa' />
                    <div className="row">
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
                            <Input collectstate={stateCollected} name='cardDetails' label='Card Details' />
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                            <Input collectstate={stateCollected} name='expire' label="Expire date" placeholder='04/23' />
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                            <Input collectstate={stateCollected} name='cvv' type='number' label="CVV" placeholder="923" />
                        </div>
                    </div>
                </div>
            </div>
            <PaymentButton button='play' span='cancel payment' />

        </form>
    );
}

export default Page3;
