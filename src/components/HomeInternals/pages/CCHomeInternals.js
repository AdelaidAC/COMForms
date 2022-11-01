import React, { useEffect, useState} from 'react';
import { ToWords } from 'to-words';
import CurrencyFormat from 'react-currency-format';
import Input from '../../Input'
import Logo from '../../Logo'

export default function CCHomeInternals({name, address}) {
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toWords = new ToWords({
      localeCode: 'en-US',
      converterOptions: {
        currency: false,
        ignoreDecimal: false,
        ignoreZeroCurrency: false,
        doNotAddOnly: false,
        doNotAddOnly: true,
        currencyOptions: { // can be used to override defaults for the selected locale
          name: 'Dollar',
          plural: 'Dollars',
          symbol: '$',
          fractionalUnit: {
            name: 'Cent',
            plural: 'Cents',
            symbol: '¢',
          },
        }
      }
    });

    const [address2, setAddress2] = useState('');
    
    const [chkDC, setChkDC] = useState(false);
    const [chkDA, setChkDA] = useState(false);
    const [iCurrency, setCurrency] = useState('');
    let rCurrency, words = "";

    if(iCurrency.length !== 0)
    {
      rCurrency = iCurrency.replace('$','').replaceAll(',','');
      words = toWords.convert(rCurrency, { currency: true });
    }
    else
    {
      words = toWords.convert(0, { currency: true });
    }

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
                        FAX: <CurrencyFormat format="(###) ###-####" className="text-center input-default" placeholder='N/A' style={{width: "25%"}}/> CUSTOMER CODE: <Input width = "25%" placeholder="N/A" className="text-center" maxlength="15"/>
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
                        <input
                            style={{width:"80%"}} 
                            className="text-center input-default" 
                            maxlength="80" 
                            {...(chkDC ? {} : {value: address})}
                            onChange={e => setAddress2(e.target.value)}/>
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
                        <CurrencyFormat format="(###) ###-#### Ext. #####" className="text-center input-default mb-2" placeholder='(###) ###-#### Ext. #####' style={{width: "80%"}}/>
                    </div>
                    <div className="col-6">
                        <CurrencyFormat format="(###) ###-####" className="text-center input-default" placeholder='(###) ###-####' style={{width: "80%"}}/>
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
                        <CurrencyFormat format="#### #### #### ####" mask="_" className="text-center input-default"/>
                        <p className='mb-0 fw-bold'>Credit Card Number</p>
                    </div>
                    <div className="col-3 text-center">
                        Exp Date: <CurrencyFormat format="##/##" placeholder="MM/YY" mask={['M', 'M', 'Y', 'Y']} className="text-center input-default" style={{width: "50px"}}/>
                    </div>
                    <div className="col-3 text-center">
                        * CVV #: 
                        <Input width = "50px" className="ms-1 text-center" maxlength="4"/>
                    </div>
                </div>
                
                <div className="row fw-bold">
                    <div className="col-3">
                        <input className="me-1" type="checkbox"/> Mastercard
                    </div>
                    <div className="col-3 text-center">
                        <CurrencyFormat format="#### #### #### ####" mask="_" className="text-center input-default"/>
                        <p className='mb-0 fw-bold'>Credit Card Number</p>
                    </div>
                    <div className="col-3 text-center">
                        Exp Date: <CurrencyFormat format="##/##" placeholder="MM/YY" mask={['M', 'M', 'Y', 'Y']} className="text-center input-default" style={{width: "50px"}}/>
                    </div>
                    <div className="col-3 text-center">
                        * CVV #: 
                        <Input width = "50px" className="ms-1 text-center" maxlength="4"/>
                    </div>
                </div>
                
                <div className="row fw-bold">
                    <div className="col-3">
                        <input className="me-1" type="checkbox"/> American Express
                    </div>
                    <div className="col-3 text-center">
                        <CurrencyFormat format="#### #### #### ####" mask="_" className="text-center input-default"/>
                        <p className='mb-0 fw-bold'>Credit Card Number</p>
                    </div>
                    <div className="col-3 text-center">
                        Exp Date: <CurrencyFormat format="##/##" placeholder="MM/YY" mask={['M', 'M', 'Y', 'Y']} className="text-center input-default" style={{width: "50px"}}/>
                    </div>
                    <div className="col-3 text-center">
                        * CVV #: 
                        <Input width = "50px" className="ms-1 text-center" maxlength="4"/>
                    </div>
                </div>
                
                <div className="row fw-bold">
                    <div className="col-3">
                        <input className="me-1" type="checkbox"/> Discover
                    </div>
                    <div className="col-3 text-center">
                        <CurrencyFormat format="#### #### #### ####" mask="_" className="text-center input-default"/>
                        <p className='mb-0 fw-bold'>Credit Card Number</p>
                    </div>
                    <div className="col-3 text-center">
                        Exp Date: <CurrencyFormat format="##/##" placeholder="MM/YY" mask={['M', 'M', 'Y', 'Y']} className="text-center input-default" style={{width: "50px"}}/>
                    </div>
                    <div className="col-3 text-center">
                        * CVV #: 
                        <Input width = "50px" className="ms-1 text-center" maxlength="4"/>
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
                            {...(chkDA ? {value: address2} : {})}
                        />
                    </div>
                </div>

                <div className="row justify-content-center text-center fw-bold pb-2">
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
                        On <input type="date" className='text-center'/>, I authorize Adriana's Insurance Services to charge <CurrencyFormat thousandSeparator={true} prefix={'$'} maxlength="13" className='fw-bold text-center input-default' style={{width: "90px"}}/>. However,
                        if a balance is owed, the remaining balance of <CurrencyFormat thousandSeparator={true} prefix={'$'} maxlength="13" className='fw-bold text-center input-default' style={{width: "90px"}}/> will be charged on <input type="date" className='text-center'/>.
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

                    <div className='text-center fw-bold'>
                        <div>
                            Amount for Sweep:
                            <CurrencyFormat 
                                thousandSeparator={true} 
                                prefix={'$'}
                                maxlength="13"
                                className='fw-bold text-center input-default'
                                style={{width: "90px"}}
                                onChange = {e => setCurrency(e.target.value)}
                            />
                            (<Input className="ms-1 text-center font-9" value={words} width="575px"/>)
                        </div>
                    </div>
                </div>

                <div className='text-center mb-2 fw-bold'>
                    Date of Authorization: <input type="date" className='text-center' style={{width: "90px"}}/>
                </div>


                <div className="row text-center pt-4 pb-2"  style={{borderTop: '3px solid black'}}>
                    <div className="col">
                        <Input className="text-center" width="300px" disabled bColor="yellow"/>
                        <p className='mb-0 fw-bold'>Signature of Card Holder</p>
                    </div>
                    <div className="col">
                        <Input className="text-center" width="300px" value={name}/>
                        <p className='mb-0 fw-bold'>Print Name Here</p>
                    </div>
                </div>
                
            </div>

        </div>
    )
}