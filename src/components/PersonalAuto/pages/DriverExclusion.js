import React, { useEffect, useState} from 'react';
import Input from "../../Input";
import Logo from "../../Logo";

export default function DriverExclusion({name}) {

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      return (
        <div className="sheet font-12 text-justify">
            
            <Logo />

            <p className='fw-bold font-14 text-center my-4'>
                DRIVER EXCLUSION DISCLOSURE
            </p>
            
            <p>
                Named below are all the persons, except those listed as a driver, who reside with <Input width="400px" className="text-center fw-bold" value={name}/>, Including all minor
                children away at school or in the armed forces will be excluded from coverage unless listed as a driver. The named insured agrees to reimburse the
                Company for the payment made by the Company to a loss payee, because of loss arising from the operations or use of a motor vehicle by any
                persons listed below.
            </p>

            <table className='w-100 border border-dark'>
                <tr className='fw-bold text-center'>
                    <td>Name</td>
                    <td>Sex</td>
                    <td>Status</td>
                    <td>Relationship</td>
                </tr>
                <tr className='text-center'>
                    <td><Input width="400px" className="text-center fw-bold" maxlength="40"/></td>
                    <td>
                        <select className='text-center'>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </td>
                    <td>
                        <select className='text-center'>
                            <option>Single</option>
                            <option>Married</option>
                            <option>Separated</option>
                            <option>Divorced</option>
                            <option>Widowed</option>
                            <option>RDP</option>
                            <option>UDP</option>
                        </select>
                    </td>
                    <td>
                        <select className='text-center'>
                            <option>Spouse</option>
                            <option>Child</option>
                            <option>Sibling</option>
                            <option>Parent</option>
                            <option>Relative-Other</option>
                            <option>Significant Other</option>
                            <option>Domestic Partner</option>
                            <option>Employee</option>
                            <option>Non-Relative-Other</option>
                        </select>
                    </td>
                </tr>
                <tr className='text-center'>
                    <td><Input width="400px" className="text-center fw-bold" maxlength="40"/></td>
                    <td>
                        <select className='text-center'>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </td>
                    <td>
                        <select className='text-center'>
                            <option>Single</option>
                            <option>Married</option>
                            <option>Separated</option>
                            <option>Divorced</option>
                            <option>Widowed</option>
                            <option>RDP</option>
                            <option>UDP</option>
                        </select>
                    </td>
                    <td>
                        <select className='text-center'>
                            <option>Spouse</option>
                            <option>Child</option>
                            <option>Sibling</option>
                            <option>Parent</option>
                            <option>Relative-Other</option>
                            <option>Significant Other</option>
                            <option>Domestic Partner</option>
                            <option>Employee</option>
                            <option>Non-Relative-Other</option>
                        </select>
                    </td>
                </tr>
                <tr className='text-center'>
                    <td><Input width="400px" className="text-center fw-bold" maxlength="40"/></td>
                    <td>
                        <select className='text-center'>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </td>
                    <td>
                        <select className='text-center'>
                            <option>Single</option>
                            <option>Married</option>
                            <option>Separated</option>
                            <option>Divorced</option>
                            <option>Widowed</option>
                            <option>RDP</option>
                            <option>UDP</option>
                        </select>
                    </td>
                    <td>
                        <select className='text-center'>
                            <option>Spouse</option>
                            <option>Child</option>
                            <option>Sibling</option>
                            <option>Parent</option>
                            <option>Relative-Other</option>
                            <option>Significant Other</option>
                            <option>Domestic Partner</option>
                            <option>Employee</option>
                            <option>Non-Relative-Other</option>
                        </select>
                    </td>
                </tr>
                <tr className='text-center'>
                    <td><Input width="400px" className="text-center fw-bold" maxlength="40"/></td>
                    <td>
                        <select className='text-center'>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </td>
                    <td>
                        <select className='text-center'>
                            <option>Single</option>
                            <option>Married</option>
                            <option>Separated</option>
                            <option>Divorced</option>
                            <option>Widowed</option>
                            <option>RDP</option>
                            <option>UDP</option>
                        </select>
                    </td>
                    <td>
                        <select className='text-center'>
                            <option>Spouse</option>
                            <option>Child</option>
                            <option>Sibling</option>
                            <option>Parent</option>
                            <option>Relative-Other</option>
                            <option>Significant Other</option>
                            <option>Domestic Partner</option>
                            <option>Employee</option>
                            <option>Non-Relative-Other</option>
                        </select>
                    </td>
                </tr>
                <tr className='text-center'>
                    <td><Input width="400px" className="text-center fw-bold" maxlength="40"/></td>
                    <td>
                        <select className='text-center'>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </td>
                    <td>
                        <select className='text-center'>
                            <option>Single</option>
                            <option>Married</option>
                            <option>Separated</option>
                            <option>Divorced</option>
                            <option>Widowed</option>
                            <option>RDP</option>
                            <option>UDP</option>
                        </select>
                    </td>
                    <td>
                        <select className='text-center'>
                            <option>Spouse</option>
                            <option>Child</option>
                            <option>Sibling</option>
                            <option>Parent</option>
                            <option>Relative-Other</option>
                            <option>Significant Other</option>
                            <option>Domestic Partner</option>
                            <option>Employee</option>
                            <option>Non-Relative-Other</option>
                        </select>
                    </td>
                </tr>
            </table>

            <p className='mt-3'>
                I have listed all operators of the vehicles on this application. This includes anyone that may operate my vehicle(s) on a regular or frequent basis,
                children away from home and/or away at school, and all persons age 14 or older who live in the household, licensed and/or unlicensed. I also agree
                to notify Adriana's Insurance Services Inc. of any changes in operators or licensing of household residents.
                <br/><br/>
                I understand that anybody age 14 and over living in my household regardless of relationship (including all children, resident relatives, friend,
                employees or roommates) are excluded from coverage.
            </p>
            
            <p className='fw-bold mt-0 mb-1'>
                Please have insured handwrite the words "I HAVE READ AND UNDERSTAND THIS EXCLUSION" on the line below.
            </p>

            <Input className="w-100" disabled bColor="yellow"/>

            <div className='d-flex justify-content-between mt-3 mx-5 pt-3 text-center fw-bold'>
                <div>
                    <Input width="300px" className="text-center" disabled bColor="yellow"/>
                    <p>Insured's Signature</p>
                </div>
                <div>
                    <Input width="300px" className="text-center" disabled/>
                    <p>Broker's Signature</p>
                </div>
            </div>

            <p className='fw-bold font-14 text-center my-2'>
                COMMERCIAL, PROFESSIONAL & BUSINESS USE EXCLUSION
            </p>
            
            <p>
                I <Input width="400px" className="text-center fw-bold" value={name}/> hereby understand and agree that my insured vehicle(s) is/are NOT used professionally, commercial use, or in a
                business. It is understood and agreed that the insurance afforded by the policy shall not benefit any business (Self-Owned or as an employee)
                professional or commercially is also understood that this policy does NOT apply while any motor vehicle listed in the policy is used in the course of
                the insured's business or occupation. All other terms and conditions remain unchanged.
            </p>

            <div className='d-flex justify-content-between mt-3 mx-5 pt-3 text-center fw-bold'>
                <div>
                    <Input width="300px" className="text-center" disabled bColor="yellow"/>
                    <p>Insured's Signature</p>
                </div>
                <div>
                    <Input width="300px" className="text-center" disabled/>
                    <p>Broker's Signature</p>
                </div>
            </div>

        </div>
    );
}