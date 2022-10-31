import React, { useEffect, useState} from 'react';
import Input from '../../Input'
import Logo from '../../Logo'

export default function CCWorkersComp({name, address}) {
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      const [chkDC, setChkDC] = useState(false);
      const [chkDA, setChkDA] = useState(false);

    return (
        <div className='sheet font-10 lh-1 text-justify'>
            
            <div className="container">
      
                <div className="row text-center fw-bold">
                    <div className="col-5">
                        <Logo width='70%'/>
                    </div>
                    <div className="col-7">
                        <p className='text-center fw-bold font-12 mb-0'>CREDIT CARD AUTHORIZATION FORM</p>
                        {/* <Title text="CREDIT CARD AUTHORIZATION FORM"/>*/}
                        
                        <hr style={{border: '2px solid black'}}/>
                        FAX: <Input width = "30%" placeholder="N/A" className="text-center" maxlength="15"/> CUSTOMER CODE: <Input width = "25%" placeholder="N/A" className="text-center" maxlength="15"/>
                    </div>
                </div>
                
            </div>
            
            <div className="container border border-3 border-dark mt-3">
                
                <div className="row text-center fw-bold" style={{background:'#b3b3b3'}}>
                    <div className="col">
                        CREDIT CARD HOLDER INFORMATION
                    </div>
                </div>
                
                <div className="row pt-2">
                    <div className="col-9">
                        LEGAL NAME OF BUSINESS OR INDIVIDUAL AUTHORIZING CHARGE (If corporation list full corporation name)
                    </div>
                    <div className="col-3">
                    <input 
                            type="checkbox" 
                            checked={chkDC} 
                            onChange={e => setChkDC(e.target.checked)}
                        /><strong style={{color:'red'}} className="ms-1">Different Card Holder</strong>
                    </div>
                </div>
                
                <div className="row text-center pb-2">
                    <div className="col-12">
                        <Input 
                            width="80%" 
                            className="text-center"
                            maxlength="40"
                            {...(chkDC ? {} : {value: name})}
                        />
                    </div>
                </div>
                
                <div className="row pt-2 fw-bold" style={{borderTop: '2px solid black'}}>
                    <div className="col-12">
                        Physical Business Street Address (No. P.O. Boxes)
                    </div>
                </div>
                <div className="row text-center pb-2">
                    <div className="col-12">
                        <Input width="80%" className="text-center" value={address}/>
                    </div>
                </div>
                
                <div className="row fw-bold" style={{borderTop: '2px solid black'}}>
                    <div className="col-6" style={{borderRight: '2px solid black'}}>
                        Business Phone:	
                    </div>
                    <div class="col-6">
                        Fax:
                    </div>
                </div>
                
                <div className="row text-center">
                    <div className="col-6" style={{borderRight: '2px solid black'}}>
                        <Input className="mb-2 text-center" width="80%" maxlength="40"/>
                    </div>
                    <div className="col-6">
                        <Input width="80%" className="text-center" maxlength="40"/>
                    </div>
                </div>
                
            </div>
            
            <div className="container border border-3 border-dark mt-2">
                
                <div className="row text-center fw-bold" style={{background:'#b3b3b3'}}>
                    <div className="col">
                        CREDIT CARD INFORMATION
                    </div>
                </div>
                
                <div className="row pt-2 fw-bold">
                    <div className="col-3">
                        <input className="me-1" type="checkbox"/> Visa
                    </div>
                    <div className="col-3 text-center">
                        <Input width = "100%" className="text-center" maxlength="20"/>
                        <p className='mb-0 fw-bold'>Credit Card Number</p>
                    </div>
                    <div className="col-3 text-center">
                        Exp Date: 
                        <Input width = "20%" placeholder="mm" className="ms-1 text-center" maxlength="2"/> / 
                        <Input width = "30%" placeholder="yyyy" className="text-center" maxlength="4"/>
                    </div>
                    <div className="col-3 text-center">
                        * CVV #: 
                        <Input width = "50%" className="ms-1 text-center" maxlength="4"/>
                    </div>
                </div>
                
                <div className="row fw-bold">
                    <div className="col-3">
                        <input className="me-1" type="checkbox"/> Mastercard
                    </div>
                    <div className="col-3 text-center">
                        <Input width = "100%" className="text-center" maxlength="20"/>
                        <p className='mb-0 fw-bold'>Credit Card Number</p>
                    </div>
                    <div className="col-3 text-center">
                        Exp Date: 
                        <Input width = "20%" placeholder="mm" className="ms-1 text-center" maxlength="2"/> / 
                        <Input width = "30%" placeholder="yyyy" className="text-center" maxlength="4"/>
                    </div>
                    <div className="col-3 text-center">
                        * CVV #: 
                        <Input width = "50%" className="ms-1 text-center" maxlength="4"/>
                    </div>
                </div>
                
                <div className="row fw-bold">
                    <div className="col-3">
                        <input className="me-1" type="checkbox"/> American Express
                    </div>
                    <div className="col-3 text-center">
                        <Input width = "100%" className="text-center" maxlength="20"/>
                        <p className='mb-0 fw-bold'>Credit Card Number</p>
                    </div>
                    <div className="col-3 text-center">
                        Exp Date: 
                        <Input width = "20%" placeholder="mm" className="ms-1 text-center" maxlength="2"/> / 
                        <Input width = "30%" placeholder="yyyy" className="text-center" maxlength="4"/>
                    </div>
                    <div className="col-3 text-center">
                        * CVV #: 
                        <Input width = "50%" className="ms-1 text-center" maxlength="4"/>
                    </div>
                </div>
                
                <div className="row fw-bold">
                    <div className="col-3">
                        <input className="me-1" type="checkbox"/> Discover
                    </div>
                    <div className="col-3 text-center">
                        <Input width = "100%" className="text-center" maxlength="20"/>
                        <p className='mb-0 fw-bold'>Credit Card Number</p>
                    </div>
                    <div className="col-3 text-center">
                        Exp Date: 
                        <Input width = "20%" placeholder="mm" className="ms-1 text-center" maxlength="2"/> / 
                        <Input width = "30%" placeholder="yyyy" className="text-center" maxlength="4"/>
                    </div>
                    <div className="col-3 text-center">
                        * CVV #: 
                        <Input width = "50%" className="ms-1 text-center" maxlength="4"/>
                    </div>
                </div>
                
                <div className="row py-2 font-9">
                    <div className="col-8 fw-bold">
                        Name, exactly as it appears on the card:
                        <Input width = "54%" className="text-center ms-1" value={name}/>
                    </div>
                    <div className="col-4 text-end">
                        * 3 digit # on the back of credit card
                    </div>
                </div>
                
                <div className="row pt-2"  style={{borderTop: '3px solid black'}}>
                    <div className="col-8 font-9">
                        Mailing Address on File with Credit Card Company (If you are unsure please call your Credit Card Company).
                        If this address is not correct; you will run the risk of your insurance policy being cancelled.
                    </div>
                    <div className="col-4">
                        <input type="checkbox" checked={chkDA} onChange={e => setChkDA(e.target.checked)}/><strong style={{color:'red'}} className="ms-1">Address same as Address Above</strong>
                    </div>
                </div>
                
                
                <div className="row text-center pt-2 fw-bold">
                    <div className="col">
                        <Input 
                            width="90%" 
                            className="text-center" 
                            maxlength="80"
                            {...(chkDA ? {value: address} : {})}
                        />
                    </div>
                </div>

                <div className="row justify-content-center text-center fw-bold">
                    <div className="col-2">
                        <p className='mb-0'>Street</p>
                    </div>
                    <div className="col-2">
                        <p className='mb-0'>City</p>
                    </div>
                    <div className="col-2">
                        <p className='mb-0'>State</p>
                    </div>
                    <div className="col-2">
                        <p className='mb-0'>Zip Code</p>
                    </div>
                </div>
                
            </div>
            
            <div className="container border border-3 border-dark mt-2">
                
                <div className="row text-center fw-bold" style={{background:'#b3b3b3'}}>
                    <div className="col-12">
                        DATE OF TRANSACTION
                    </div>
                </div>
                
                <div className="row py-2">
                    <div className="col-12 text-center">
                        On <input type="date" className='text-center'/>, I authorize Adriana's Insurance Services to charge <Input width = "15%" maxlength="15" className="text-center"/>. However,
                        if a balance is owed, the remaining balance of <Input width = "15%" maxlength="15" className="text-center"/> will be charged on <input type="date" className='text-center'/>.
                    </div>
                </div>
                
            </div>
            
            <div className="container border border-3 border-dark mt-2">
                
                <div className="row py-2">
                    <div className="col-12">
                        
                        <p className='text-center fw-bold'>
                        ********************************** IMPORTANT **********************************
                        </p>

                        <p> 
                            If you intend for another individual pay for any policies purchased with Adriana’s Insurance Services, Inc. using your credit card, you must
                            give them authorization on this form. Please list the names of those individuals that are authorized to use your credit cards as payment for
                            policy premium. No other individuals will be allowed to request that these credit cards be used for any other policy payments.
                        </p>

                        <div class="row pb-2 fw-bold">
                            <div class="col d-flex">
                                Authorized User #1:
                                <span className="flex-fill">
                                    <Input className="w-100 ms-1 text-center" maxlength="35" placeholder="N/A"/>
                                </span>
                            </div>
                            <div class="col d-flex">
                                Authorized User #2:
                                <span className="flex-fill">
                                    <Input className="w-100 ms-1 text-center" maxlength="35" placeholder="N/A"/>
                                </span>
                            </div>
                        </div>

                        <p> 
                            The undersigned hereby declares that the credit Information listed above is true, accurate and appears in the name as stated and
                            authorization is hereby given to the above named individuals to use these cards for purchases from Adriana’s Insurance Services, Inc.
                            Further, I authorize my credit card company to accept and to charge to my account for purchases initiated by the above named individuals.
                            This authorization allows Adriana’s Insurance Services, Inc. to continue to use this information and such information shall remain in full
                            force and affect unless I revoke such authorization in writing.
                        </p>

                        <p className='text-center font-9 m-0'>
                            <b>Note:</b> Any fee accrued due to chargeback’s or any other possible fees will be the responsibility of the card holder and/or authorized user.
                        </p>

                    </div>
                </div>
                
                <div className="row py-2"  style={{borderTop: '3px solid black'}}>

                    <div className='d-flex justify-content-between fw-bold'>
                        <div className='d-flex col-8'>
                            Amount for Sweep:
                            <span className="flex-fill">
                                <Input className="w-100 ms-1 text-center" maxlength="45"/>
                            </span>
                        </div>
                        <div>
                            Date of Authorization: <input type="date" className='text-center'/>
                        </div>
                    </div>

                    <div className="d-flex fw-bold">
                        Please fill in the amount:
                        <span className="flex-fill">
                            <Input className="w-100 ms-1 text-center" maxlength="80"/>
                        </span>
                    </div>
                </div>

                
                <div className="row text-center py-3"  style={{borderTop: '3px solid black'}}>
                    <div className="col">
                        <Input className="text-center" width="40%" value={name}/>
                        <p className='mb-0 fw-bold'>Print Name Here</p>
                    </div>
                </div>
                
            </div>

        </div>
    )
}