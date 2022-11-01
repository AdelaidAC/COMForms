import moment from 'moment/moment'
import React, { useEffect, useState} from 'react';
import Signature from '../../Signature'
import Input from '../../Input'
import Logo from '../../Logo'
import Title from '../../Title'

const agreementValues = [
    "Proof of prior for the last", 
    "Proof of no losses in the past 5 years", 
    "Valid identification for applicant", 
    "Inspection of premises and/or operations", 
    "Proof of living in property insured", 
    "Verification of location information", 
    "Proof of marriage", 
    "Mortgagee, mortgagee clause, and loan number", 
    "Balance due", 
    "Other"
]

export default function PAHomeInternals({name, date, date2}) {

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    {/*const [startDate, setStartDate] = useState('');*/}

    let endDate = moment(date2).add(7, 'days').format('MM/DD/YYYY');

    return (
        
        <div className='sheet font-12 text-justify'>
            
            <Logo />

            <Title text="PROMISE TO PROVIDE AGREEMENT" />

            <div className='d-flex justify-content-between'>
                <div className='d-flex col-8'>
                    <b>Named Insured:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1 text-center fw-bold" maxlength="40" value={name}/>
                    </span>
                </div>
                <div>
                    <b>Date: </b>
                    <Input value = {date} width = "80px" className = "text-center fw-bold"/>
                </div>
            </div>

            {/*<p>
                It is my stated intention to obtain insurance coverage effective <strong>{info.date}</strong>, however I do not have copies of the following information with me:
            </p>*/}

            <p className='font-11 my-4'>
                It is my stated intention to obtain insurance coverage effective <Input value = {date2} width = "80px" className = "text-center fw-bold"/>, however I do not have copies of the following information with me:
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
                            <div className="d-flex">
                                <input type="checkbox" className='form-check-input me-2' />{elem}
                                <span className="flex-fill">
                                    <Input className="w-100 ms-1" maxlength="80"/>
                                </span>
                            </div>
                        </>
                    
                        
                    )
                }
                return (
                    <label className='form-check mt-2'><input type="checkbox" className='form-check-input' />{elem}</label>
                )
                })}
            </div>

            <p className="mt-3 mb-2 text-center text-red fw-bold text-decoration-underline">URGENT NOTICE!</p>

            <p className="border border-dark border-3 p-2 mt-0 lh-1 font-10">
                In the event that the information is not provided by the above-mentioned date, I understand that some or all of my coverage may be subject to a premium increase, cancellation, 
                or rejection, with no coverage in effect. An inspection will be conducted either in person or via other means per the sole choice of the insurance carrier placed. <strong>If inspection
                process is not completed, the insurance carrier may opt to change the premium upon their discretion or in most cases even cancel the policy and no refunds will be awarded.</strong> I will 
                not hold my broker (Adriana's Insurance Svcs, Inc.) accountable for any losses incurred in any way from my failure to participate in such inspection. I further understand that if 
                a premium increase, cancellation, or rejection occurs because I fail to provide the above indicated information, I may lose all or part of my down payment and fully-earned Broker’s 
                Fee, and I may incur a financial loss.
            </p>

            <p className="text-center my-4 font-11">
                I hereby promise to provide the above-indicated information by <Input value = {endDate} width = "80px" className = "text-center fw-bold"/> to Adriana's Insurance Services, Inc.
            </p>
            
            <p className="mb-5 lh-2 font-11">
                In the event that the information is not provided by the above-mentioned date, I understand that some or all of my coverage may be subject to a premium increase, cancellation, or rejection, 
                with no coverage in effect. I further understand that if a premium increase, cancellation or rejection occurs because I fail to provide the above indicated information, I may lose all or part 
                of my down payment and fully-earned Broker’s Fee, and I may incur a financial loss.
            </p>

            <Signature firstSignature="Named Insured Signature"/>

        </div>

    )
}