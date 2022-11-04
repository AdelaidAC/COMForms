import React from 'react'
import Input from '../../Input'
import CDate from '../../CDate';
import Title from '../../Title'

export default function MCLFlood({firstSignature, secondSignature, name, initials, address, phone}) {
    return (
        <div className='sheet font-12 text-justify'>
            
            <div className="d-flex justify-content-between mt-4">
                <label>Agent:
                    <Input width="200px" className="ms-1 text-center"/>
                </label>
                <label>Insured:
                    <Input width="400px" className="ms-1 text-center" value={name}/>
                </label>
                <label>Hwk ID:
                    <Input width="200px" className="ms-1 text-center"/>
                </label>
                <label>Date:
                    <CDate/>
                </label>
            </div>
            
            <Title text="Manager Check List - Flood"/>
            
            <div className="border py-3 px-5">
                <dl>
                    <dt>Left</dt>
                    <dd>
                        <input className="ms-5 me-1" type="checkbox"/><Input className="text-center"/> Summary
                    </dd>
                    <dd>
                        <input className="ms-5 me-1" type="checkbox"/><Input className="text-center"/> Address Form <span className="font-10">(Completely filled out.)</span> <b>1 Signature</b>
                    </dd>
                    <dt>Right</dt>
                    <dd>
                        <input className="ms-5 me-1" type="checkbox"/><Input className="text-center"/> Receipt
                    </dd>
                    <dd>
                        <input className="ms-5 me-1" type="checkbox"/><Input className="text-center"/> 
                        Original Application
                    </dd>
                    <dd>
                        <input className="ms-5 me-1" type="checkbox"/><Input className="text-center"/> 
                        Copy of HO-3 Declarations Page
                    </dd>
                    <dd>
                        <input className="ms-5 me-1" type="checkbox"/><Input className="text-center"/> 
                        Identification of the Applicant
                    </dd>
                </dl>
                
                </div>
                
                <div className="border py-3 px-5">
                <dl>
                    <dt>Internals</dt>
                    <dd>
                        <input className="ms-5 me-1" type="checkbox"/><Input className="text-center"/> Pg 1 <i>Verbal Disclosure</i> <b>- 5 Initials at top and 11 Optional at bottom. 1 Signature</b>
                    </dd>
                    <dd>
                        <input className="ms-5 me-1" type="checkbox"/><Input className="text-center"/> Pg 2 <i>Comparative</i> <span className="font-10">(Completely filled out.)</span> <b>3 Signatures</b>
                    </dd>
                    <dd>
                        <input className="ms-5 me-1" type="checkbox"/><Input className="text-center"/> Pg 3 <i>Disclosure</i> <b>- 5 Initials, 1 Signature</b>
                    </dd>
                    <dd>
                        <input className="ms-5 me-1" type="checkbox"/><Input className="text-center"/> Pg 4 <i>BF Disclosure</i> <b>- 1 Initial</b>
                    </dd>
                    <dd>
                        <input className="ms-5 me-1" type="checkbox"/><Input className="text-center"/> Pg 5 <i>BF Agreement</i> <b>- 1 Initials, Written Statement, 1 Signature</b>
                    </dd>
                    <dd>
                        <input className="ms-5 me-1" type="checkbox"/><Input className="text-center"/> Pg 6 <i>Promise To Provide</i> <b>- 1 Signature</b>
                    </dd>
                    <dd>
                        <input className="ms-5 me-1" type="checkbox"/><Input className="text-center"/> Optional <i>Promissory Note</i> <b>- 2 Signatures, 2 Initials, Address, Balance Amount,
                        Date Due, 1 Manager Signature</b>
                    </dd>
                </dl>
                
                </div>
                
                <div className="border py-3 px-5 container">
                <table>
                    <tr>
                    <td><b>Address</b></td>
                    <td><input className="ms-5 me-1" type="checkbox"/><input type="text" className='text-center'/></td>
                    <td><b>Correct BF</b></td>
                    <td><input className="ms-5 me-1" type="checkbox"/><input type="text" className='text-center'/></td>
                    </tr>
                    <tr>
                    <td>Coverage</td>
                    <td><input className="ms-5 me-1" type="checkbox"/><input type="text" className='text-center'/></td>
                    <td>Immediate Response</td>
                    <td><input className="ms-5 me-1" type="checkbox"/><input type="text" className='text-center'/></td>
                    </tr>
                    <tr>
                    <td><b>Occupancy Type</b></td>
                    <td><input className="ms-5 me-1" type="checkbox"/><input type="text" className='text-center'/></td>
                    <td><b>Birthdates</b></td>
                    <td><input className="ms-5 me-1" type="checkbox"/><input type="text" className='text-center'/></td>
                    </tr>
                    <tr>
                    <td>Copies</td>
                    <td><input className="ms-5 me-1" type="checkbox"/><input type="text" className='text-center'/></td>
                    <td>Names</td>
                    <td><input className="ms-5 me-1" type="checkbox"/><input type="text" className='text-center'/></td>
                    </tr>
                </table>
                </div>
                
                <div className="border py-3 px-5 text-center">
                
                Application was brought to me before customer left: YES/NO (circle one)
                
                </div>
                
                <div className="border py-3 px-5 text-center">
                
                <div className="d-flex my-2">
                    <label className="fw-bold">Comments:</label>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1"/>
                    </span>
                </div>

                <Input className="mb-2 w-100"/>
                <Input className="w-100"/>
                
                </div>

                <div className="d-flex justify-content-center mt-4">
                    <label>Manager Signature:
                        <Input width="400px" className="ms-1 text-center"/>
                    </label>
                    <label>Time:
                        <Input width="100px" className="ms-1 text-center"/>
                    </label>
                </div>

                <div class="font-10 text-center"> 9445 Charles Smith Ave Rancho Cucamonga CA 91730 Ph: 909‐291‐4040 Fax: 909‐373‐4795</div>

        </div>
    )
}