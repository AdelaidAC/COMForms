import React from 'react'
import CDate from '../../CDate'
import Input from '../../Input'
import Logo from '../../Logo'
import Signature from '../../Signature'
import Title from '../../Title'

const agreementValues = [
    "PROOF OF PRIOR INSURANCE FOR THE LAST", 
    "PROOF OF NO LOSSES IN THE LAST 5 YEARS", 
    "VALID IDENTIFICATION FOR APPLICANT", 
    "INSPECTION OF THE PROPERTY", 
    "PROOF OF LIVING IN CURRENT ADDRESS", 
    "PROOF OF MARRIAGE", 
    "MORTGAGEE'S CLAUSE AND LOAN NUMBE",
    "OTHER"
]

export default function PTPAFlood({name, initials, address, phone}) {
    return (
        
        <div className='sheet font-14 text-justify'>
            
            <Logo />

            <Title text="PROMISE TO PROVIDE AGREEMENT" />

            {/*<p>
                It is my stated intention to obtain insurance coverage effective <strong>{info.date}</strong>, however I do not have copies of the following information with me:
            </p>*/}

            <p>
                It is my stated intention to obtain insurance coverage effective <strong><CDate/></strong>, however I do not have copies of the following information with me:
            </p>
            
            
            <div>
                {agreementValues.map((elem, i) => {
                if (i === 0) {
                    return (
                    <>
                        <label className='form-check form-check-inline'><input type="checkbox" className='form-check-input' />{elem}</label>
                        <label className='form-check form-check-inline'><input type="checkbox" className='form-check-input' />6 Months</label>
                        <label className='form-check form-check-inline'><input type="checkbox" className='form-check-input' />1 Year</label>
                        <label className='form-check form-check-inline'><input type="checkbox" className='form-check-input' />2 Years</label>
                        <label className='form-check form-check-inline'><input type="checkbox" className='form-check-input' />3 Years</label>
                    </>
                    )
                } else if (i === agreementValues.length-1) {
                    return (
                        <>
                            <label className='form-check mt-2'><input type="checkbox" className='form-check-input' />{elem}: <strong className='flex-fill mx-1'><Input /></strong></label>
                        </>
                    
                    
                    )
                }
                return (
                    <label className='form-check mt-2'><input type="checkbox" className='form-check-input' />{elem}</label>
                )
                })}
            </div>

            <p className="text-center my-4">
                I hereby promise to provide the above-indicated information by <CDate/> to Adriana's Insurance Services, Inc.
            </p>

            <h5 className="text-center mb-0 text-red"><u>URGENT NOTICE!</u></h5>

            <p className="border border-dark border-3 p-2 mt-0 mx-3 lh-1">
                In the event that the information is not provided by the above-mentioned date, I understand that some or all of my coverage may be 
                subject to a premium increase, cancellation, or rejection, with no coverage in effect. I further understand that if a premium increase, 
                cancellation or rejection occurs because I fail to provide the above indicated information, I may lose all or part of my down payment and 
                fully-earned Broker’s Fee, and I may incur a financial loss. 
            </p>

            <div class="container">
                    <div class="row">
                        <div class="col-6 d-flex">
                            <div class="align-self-start">
                                AGREED TO BY:
                            </div>
                            <div className="text-center">
                                <Input name="textinput" width="100%"/>
                                <p className='mb-0'>Named Insured’s Signature Only</p>
                            </div>
                        </div>
                        <div class="col-6">
                            DATE: <Input/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 d-flex">
                            <div class="align-self-start">
                                NAMED INSURED:
                            </div>
                            <div className="text-center">
                                <Input name="textinput" width="100%"/>
                                <p className='mb-0'>Print Name</p>
                            </div>
                        </div>
                        <div class="col-6">
                            D/L #: <Input/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            HOME PHONE: <Input/>
                        </div>
                        <div class="col-6">
                            WORK PHONE: <Input/> Ext. <Input/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            AGENT: <Input/>
                        </div>
                        <div class="col-6">
                            OFFICE: <Input/>
                        </div>
                    </div>
                </div>

            

        </div>

    )
}