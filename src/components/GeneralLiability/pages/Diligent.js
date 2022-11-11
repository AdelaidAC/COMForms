import React from 'react';
import Input from '../../Input'

export default function Diligent({date}) {

    return (
        <div className='sheet font-11'>
            
            <p className='text-center font-12 fw-bold m-0 p-0'>
                DILIGENT SEARCH REPORT:
            </p>
            <p className='text-center font-9 p-0 m-0'>
                (Please Refer to the Instructions on Page 3 of This Form)
            </p>

            <table>
                <tr>
                    <td rowspan="3">
                        <b>OR</b>
                    </td>
                    <td>
                        (A) Duly licensed under California Department of Insurance license number <Input width="200px"/>;
                    </td>
                </tr>

                <tr>
                    <td>
                        (B) Duly licensed and authorized to act as an endorsee on the organizational license of
                    </td>
                </tr>

                <tr>
                    <td>
                        <Input className="text-center" width="200px" placeholder="Name of Organization"/>, California Department of Insurance license number <Input width="150px"/>;
                    </td>
                </tr>

                <tr>
                    <td className='text-center'>
                        and
                    </td>
                    <td>
                        (C) that he/she or said organizational licensee was engaged by the insured named herein, or the insured’s broker,
                        to obtain insurance as described in this report;
                    </td>
                </tr>

                <tr>
                    <td className='text-center'>
                        and
                    </td>
                    <td>
                        (D) is the licensee who performed or supervised this diligent search.
                    </td>
                </tr>
            </table>

            <div className="border border-1 border-dark my-2"></div>

            <table>
                <tr>
                    <td>
                        2.
                    </td> 
                    <td className='col-3'>
                        (A) <b>Name of Insured</b>
                    </td>
                    <td className='col-9'>
                        <Input className="text-center fw-bold w-100" width="200px"/>
                    </td>
                </tr>
                <tr className="tr-h">
                    <td></td>
                    <td className='col-3'>
                        (B) <b>Address of Insured</b>
                    </td>
                    <td className='col-9'>
                        <Input className='text-center w-100' maxlength="15"/>
                        <p className='text-center fw-bold m-0'>(Street and Number)</p>
                    </td>
                </tr>
                <tr className="tr-h">
                    <td></td>
                    <td className='col-3'>
                        <input type="checkbox"/> <span className='ms-1 fw-bold text-danger'>Address & Location are the same</span>
                    </td>
                    <td className='col-9'>
                        <div className='d-flex justify-content-between text-center'>
                            <div className='col-5 pe-3'>
                                <Input className='text-center w-100' maxlength="15"/>
                                <p className='fw-bold m-0'>City</p>
                            </div>
                            <div className='col-5 pe-3'>
                                <Input className='text-center w-100' maxlength="15"/>
                                <p className='fw-bold m-0'>State</p>
                            </div>
                            <div className='col-2'>
                                <Input className='text-center w-100'maxlength="15"/>
                                <p className='fw-bold m-0'>Zip Code</p>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr className="tr-h">
                    <td></td>
                    <td className='col-3'>
                        (C) <b>Description of Risk</b>
                    </td>
                    <td className='col-9'>
                        <Input className='text-center w-100' maxlength="15"/>
                        <p className='text-center m-0'>(e.g. Laundromat, liquor store, <b>NOT TYPE OF COVERAGE</b>)</p>
                    </td>
                </tr>
                <tr className="tr-h">
                    <td></td>
                    <td className='col-3'>
                        (D) <b>Location of Risk</b>
                    </td>
                    <td className='col-9'>
                        <Input className='text-center w-100' maxlength="15"/>
                        <p className='text-center fw-bold m-0'>(Street and Number)</p>
                        <br/>
                        <div className='d-flex justify-content-between text-center'>
                            <div className='col-5 pe-3'>
                                <Input className='text-center w-100' maxlength="15"/>
                                <p className='fw-bold m-0'>City</p>
                            </div>
                            <div className='col-5 pe-3'>
                                <Input className='text-center w-100' maxlength="15"/>
                                <p className='fw-bold m-0'>State</p>
                            </div>
                            <div className='col-2'>
                                <Input className='text-center w-100'maxlength="15"/>
                                <p className='fw-bold m-0'>Zip Code</p>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr className="tr-h">
                    <td></td>
                    <td className='col-3'>
                        (E) <b>Type of Insurance coverage</b>
                    </td>
                    <td className='col-9'>
                        <Input className='text-center w-100' maxlength="15"/>
                        <p className='text-center m-0'>(Enter Appropriate Code Number from Pg. 3)</p>
                    </td>
                </tr>
            </table>

            <div className="border border-1 border-dark my-2"></div>

            <table>
                <tr>
                    <td>
                        3.
                    </td>
                    <td>
                        If <b>Private Passenger Automobile Liability Insurance</b> is identified on line 2(E), complete the following:
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                       (A) Does the insured qualify as a "Good Driver" under Section 1861.025 of the California Insurance Code?
                       <br/>
                       <span className='ms-4 fw-bold'>(CHECK ONE)</span>
                       <b>YES</b>
                       <input type="checkbox"/>
                       <b>NO</b>
                       <input type="checkbox"/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        (B) Does the coverage that you have placed include, in whole or in part, the limits of coverage provided under
                        the California Automobile Assigned Risk Plan (CAARP)?
                       <br/>
                       <span className='ms-4 fw-bold'>(CHECK ONE)</span>
                       <b>YES</b>
                       <input type="checkbox"/>
                       <b>NO</b>
                       <input type="checkbox"/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        (C) If YES, has this risk been submitted to and found to be ineligible by CAARP?
                       <br/>
                       <span className='ms-4 fw-bold'>(CHECK ONE)</span>
                       <b>YES</b>
                       <input type="checkbox"/>
                       <b>NO</b>
                       <input type="checkbox"/>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        If your answer is NO, then this coverage cannot be placed with a non-admitted insurer. (See Insurance Code section 1763.5)
                    </td>
                </tr>
            </table>

            <div className="border border-1 border-dark my-2"></div>

            <table>
                <tr>
                    <td>
                       4. 
                    </td>
                    <td>
                        If <b>Health Insurance</b> is identified on line 2(E), does the insured qualify as a "Small Employer" under Section
                        10700(x) of the California Insurance Code?
                       <br/>
                       <span className='ms-4 fw-bold'>(CHECK ONE)</span>
                       <b>YES</b>
                       <input type="checkbox"/>
                       <b>NO</b>
                       <input type="checkbox"/>
                    </td>
                </tr>
            </table>

            <div className="border border-1 border-dark my-2"></div>

            <table>
                <tr>
                    <td>
                       5. 
                    </td>
                    <td>
                        If this insurance was placed pursuant to Section 125 <u>et seq.</u> of the California Insurance Code governing transactions with
                        <b>risk purchasing groups</b> authorized by the Federal Liability Risk Retention Act of 1986, complete the following:
                       <br/>
                       <span className='ms-4 fw-bold'>(CHECK ONE)</span>
                       <b>YES</b>
                       <input type="checkbox"/>
                       <b>NO</b>
                       <input type="checkbox"/>
                    </td>
                </tr>
            </table>

            <div className="border border-1 border-dark my-2"></div>

            <table>
                <tr>
                    <td>
                       6. 
                    </td>
                    <td>
                        If this insurance was placed pursuant to Section 125 <u>et seq.</u> of the California Insurance Code governing transactions with
                        <b>risk purchasing groups</b> authorized by the Federal Liability Risk Retention Act of 1986, complete the following:
                       <br/>
                       <span className='ms-4 fw-bold'>(CHECK ONE)</span>
                       <b>YES</b>
                       <input type="checkbox"/>
                       <b>NO</b>
                       <input type="checkbox"/>
                    </td>
                </tr>
            </table>



        </div>
    )
}