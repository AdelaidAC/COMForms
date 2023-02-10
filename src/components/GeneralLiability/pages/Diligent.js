import React, {useState} from 'react';
import moment from 'moment/moment'
import Input from '../../Input'

export default function Diligent({name, sn, city, state, zipcode/*address*/, date}) {

    const [organization, setOrganization] = useState("Adriana's Insurance Svcs, Inc.");

    // const [city, setCity] = useState('');
    // const [state, setState] = useState('');
    // const [zipCode, setZipCode] = useState('');

    const [newAddress, setNewAddress] = useState('');

    const [newCity, setNewCity] = useState('');
    const [newState, setNewState] = useState('');
    const [newZipCode, setNewZipCode] = useState('');

    const [chkSame, setSame] = useState(false);

    const [l1, setL1] = useState('THE RISK WAS SUBMITTED TO VARIOUS DIFFERENT ADMITTED COMPANIES,');
    const [l2, setL2] = useState('HOWEVER THE RISK WAS DECLINED AND UNACCEPTABLE PER THEIR GUIDELINES.');

    const tDate = moment(date).format('MM / YYYY');

    return (
        <div className='sheet font-11 text-justify'>
            
            <p className='text-center font-12 fw-bold mb-0 mt-5 p-0'>
                DILIGENT SEARCH REPORT:
            </p>
            <p className='text-center font-9 p-0 m-0'>
                (Please Refer to the Instructions on Page 3 of This Form)
            </p>

            <table className='mt-4'>
                <tr>
                    <td>1.</td>
                    <td>
                        <Input 
                            className="text-center fw-bold" 
                            width="350px" 
                            maxlength="40" 
                            placeholder="Full name of the Individual"/> hereby submits that he/she is:
                    </td>
                </tr>
                <tr>
                    <td rowspan="3">
                        <b>OR</b>
                    </td>
                    <td>
                        (A) Duly licensed under California Department of Insurance license number <Input className="text-center fw-bold" width="200px" maxlength="15"/>;
                    </td>
                </tr>

                <tr>
                    <td>
                        (B) Duly licensed and authorized to act as an endorsee on the organizational license of <input 
                            className="text-center fw-bold input-default" 
                            style={{width:"250px"}}
                            placeholder="Name of Organization"
                            onChange = {e => setOrganization(e.target.value)}
                            value={organization}
                        />,
                    </td>
                </tr>

                <tr>
                    <td>
                        California Department of Insurance license number <input value="0D36821" className="input-default text-center fw-bold" style={{width:"200px"}} maxlength="15"/>;
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
                        <Input className="text-center fw-bold w-100" width="200px" /*value={name}*//>
                    </td>
                </tr>
                <tr className="tr-h">
                    <td></td>
                    <td className='col-3'>
                        (B) <b>Address of Insured</b>
                    </td>
                    <td className='col-9'>
                        <Input className='text-center w-100' /*value={address}*/ value={sn}/>
                        <p className='text-center fw-bold m-0'>(Street and Number)</p>
                    </td>
                </tr>
                <tr className="tr-h">
                    <td></td>
                    <td className='col-3'>
                        <input type="checkbox" 
                        checked={chkSame} 
                        onChange={e => setSame(e.target.checked)}
                        /> <span className='ms-1 fw-bold text-danger'>Address & Location are the same</span>
                    </td>
                    <td className='col-9'>
                        <div className='d-flex justify-content-between text-center'>
                            <div className='col-5 pe-3'>
                                <input className='text-center w-100 input-default' maxlength="30" value={city} /*onChange = {e => setCity(e.target.value)}*//>
                                <p className='fw-bold m-0'>City</p>
                            </div>
                            <div className='col-5 pe-3'>
                                <input className='text-center w-100 input-default' maxlength="30" value={state} /*onChange = {e => setState(e.target.value)}*//>
                                <p className='fw-bold m-0'>State</p>
                            </div>
                            <div className='col-2'>
                                <input className='text-center w-100 input-default'maxlength="12" value={zipcode} /*onChange = {e => setZipCode(e.target.value)}*//>
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
                        <Input className='text-center w-100' maxlength="70"/>
                        <p className='text-center m-0'>(e.g. Laundromat, liquor store, <b>NOT TYPE OF COVERAGE</b>)</p>
                    </td>
                </tr>
                <tr className="tr-h">
                    <td></td>
                    <td className='col-3'>
                        (D) <b>Location of Risk</b>
                    </td>
                    <td className='col-9'>
                        <input 
                            className='text-center w-100 input-default' 
                            maxlength="70"
                            onChange={e => setNewAddress(e.target.value)}
                            //{...(chkSame ? {value: address} : {value: newAddress})}
                            {...(chkSame ? {value: sn} : {value: newAddress})}
                        />
                        <p className='text-center fw-bold m-0'>(Street and Number)</p>
                        <br/>
                        <div className='d-flex justify-content-between text-center'>
                            <div className='col-5 pe-3'>
                                <input 
                                    className='text-center w-100 input-default' 
                                    maxlength="30"
                                    onChange={e => setNewCity(e.target.value)}
                                    //{...(chkSame ? {value: city} : {value: newCity})}
                                    {...(chkSame ? {value: city} : {value: newCity})}
                                />
                                <p className='fw-bold m-0'>City</p>
                            </div>
                            <div className='col-5 pe-3'>
                                <input 
                                    className='text-center w-100 input-default' 
                                    maxlength="30"
                                    onChange={e => setNewState(e.target.value)}
                                    //{...(chkSame ? {value: state} : {value: newState})}
                                    {...(chkSame ? {value: state} : {value: newState})}
                                />
                                <p className='fw-bold m-0'>State</p>
                            </div>
                            <div className='col-2'>
                                <input 
                                    className='text-center w-100 input-default'
                                    maxlength="12"
                                    onChange={e => setNewZipCode(e.target.value)}
                                    //{...(chkSame ? {value: zipCode} : {value: newZipCode})}    
                                    {...(chkSame ? {value: zipcode} : {value: newZipCode})}
                                />
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
                        <input className='text-center input-default w-100 fw-bold' maxlength="70" defaultValue="500"/>
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
                        <b className='ms-5'>YES</b> <input type="checkbox"/>
                        <b className='ms-3'>NO</b> <input type="checkbox"/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        (B) Does the coverage that you have placed include, in whole or in part, the limits of coverage provided under
                        the California Automobile Assigned Risk Plan (CAARP)?
                        <br/>
                        <span className='ms-4 fw-bold'>(CHECK ONE)</span>
                        <b className='ms-5'>YES</b> <input type="checkbox"/>
                        <b className='ms-3'>NO</b> <input type="checkbox"/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        (C) If YES, has this risk been submitted to and found to be ineligible by CAARP?
                        <br/>
                        <span className='ms-4 fw-bold'>(CHECK ONE)</span>
                        <b className='ms-5'>YES</b> <input type="checkbox"/>
                        <b className='ms-3'>NO</b> <input type="checkbox"/>
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
                    <td class="d-flex align-items-start">
                       4. 
                    </td>
                    <td>
                        If <b>Health Insurance</b> is identified on line 2(E), does the insured qualify as a "Small Employer" under Section
                        10700(x) of the California Insurance Code?
                        <br/>
                        <span className='ms-4 fw-bold'>(CHECK ONE)</span>
                        <b className='ms-5'>YES</b> <input type="checkbox"/>
                        <b className='ms-3'>NO</b> <input type="checkbox"/>
                    </td>
                </tr>
            </table>

            <div className="border border-1 border-dark my-2"></div>

            <table>
                <tr>
                    <td class="d-flex align-items-start">
                       5. 
                    </td>
                    <td>
                        If this insurance was placed pursuant to Section 125 <u>et seq.</u> of the California Insurance Code governing transactions with <b>risk purchasing groups</b> authorized by the Federal Liability Risk Retention Act of 1986, complete the following:
                        <br/>
                        <span className='ms-4 fw-bold'>(CHECK ONE)</span>
                        <b className='ms-5'>YES</b> <input type="checkbox"/>
                        <b className='ms-3'>NO</b> <input type="checkbox"/>
                    </td>
                </tr>
            </table>

            <div className="border border-1 border-dark my-2 tb"></div>

            <table>
                <tr>
                    <td class="d-flex align-items-start">
                        6.
                    </td> 
                    <td className='col-12'>
                        (A) <b><u>Describe</u> the diligent efforts made to place this coverage with admitted insurers and describe how the search
                        was performed (please add additional pages if necessary):</b>

                        <br/>

                        <input className="text-center fw-bold w-100 input-default" maxlength="80" onChange = {e => setL1(e.target.value)} value={l1}/>
                        <br/>
                        <input className="text-center fw-bold w-100 input-default" maxlength="80" onChange = {e => setL2(e.target.value)} value={l2}/>
                        <br/>
                        <Input className="text-center fw-bold w-100" maxlength="80"/>

                        <br/>
                        (B) If search was performed by someone <b><u>other</u></b> than the person named on line 1, please provide full name of
                        that individual:
                        <br/>
                        <Input className="text-center fw-bold w-100" maxlength="80"/>
                    </td>
                </tr>
            </table>

            <div className="border border-1 border-dark my-2"></div>

            <table>
                <tr>
                    <td class="d-flex align-items-start">7.</td>
                    <td>
                        (A) Was the risk described in Section 2 submitted by you or by someone under your supervision to at least
                        (3) insurers that are admitted in California and who actually write the type of insurance described on
                        lines 2(C) and 2(E)?
                        <br/>
                        <span className='ms-4 fw-bold'>(CHECK ONE)</span>
                        <b className='ms-5'>YES</b> <input type="checkbox" defaultChecked={true}/>
                        <b className='ms-3'>NO</b> <input type="checkbox"/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        (B) Was the risk described in Section 2 submitted by you or by someone under your supervision to at least
                        (3) If <b>YES</b>, please complete <b><u>ALL</u></b> sections of the following table; if <b>NO</b>, skip to Section 8:
                    </td>
                </tr>
            </table>

            <table className='table table-bordered border-dark mt-2'>
                <tr className='fw-bold text-center'>
                    <td className=''>
                        Full Name of Admitted Company
                    </td>
                    <td>
                        First & Last Name of Company Representative AND Telephone Number
                    </td>
                    <td>
                        Check if Employee (E) or Agent (A)
                    </td>
                    <td>
                        Month, Year of Declination
                    </td>
                    <td>
                        Declination Code*
                    </td>
                </tr>
                <tr className='text-center'>
                    <td className='fw-bold'>
                        1.
                        <br/>
                        Safeco Ins Co of Amer
                        <br/>
                        NAIC # 24740
                    </td>
                    <td>
                        <b><u>Patty Nordhoff</u></b>
                        <br/>
                        <b>(888) 374 - 2970</b>
                        <br/>
                        or <b>Online Declination</b> Website
                    </td>
                    <td>
                        <b>E</b> <input type="checkbox" defaultChecked={true}/>
                        <br/>
                        <b>A</b> <input type="checkbox"/>
                    </td>
                    <td>
                        <Input className="fw-bold text-center" value={tDate} width="70px"/>
                    </td>
                    <td>
                        <b>2</b>
                    </td>
                </tr>
                <tr className='text-center'>
                    <td className='fw-bold'>
                        2.
                        <br/>
                        Zurich Amer Ins Co
                        <br/>
                        NAIC # 16535
                    </td>
                    <td>
                        <b><u>Jeanette Wilson</u></b>
                        <br/>
                        <b>(800) 291 - 4484</b>
                        <br/>
                        or <b>Online Declination</b> Website
                    </td>
                    <td>
                        <b>E</b> <input type="checkbox" defaultChecked={true}/>
                        <br/>
                        <b>A</b> <input type="checkbox"/>
                    </td>
                    <td>
                        <Input className="fw-bold text-center" value={tDate} width="70px"/>
                    </td>
                    <td>
                        <b>2</b>
                    </td>
                </tr>
                <tr className='text-center'>
                    <td className='fw-bold'>
                        3.
                        <br/>
                        Hartford Cas Ins Co
                        <br/>
                        NAIC # 29424
                    </td>
                    <td>
                        <b><u>Ruben Pacheco</u></b>
                        <br/>
                        <b>(800) 427 - 7777</b>
                        <br/>
                        or <b>Online Declination</b> Website
                    </td>
                    <td>
                        <b>E</b> <input type="checkbox" defaultChecked={true}/>
                        <br/>
                        <b>A</b> <input type="checkbox"/>
                    </td>
                    <td>
                        <Input className="fw-bold text-center" value={tDate} width="70px"/>
                    </td>
                    <td>
                        <b>2</b>
                    </td>
                </tr>
            </table>

            <p className='text-center'>
                <b>*Declination Codes: 1 -</b> Company’s capacity reached <b>2 -</b>Underwriting reason <b>3 -</b> Refused to state <b>4 -</b> Other
            </p>

            <div className="border border-1 border-dark my-2"></div>

            <table>
                <tr>
                    <td class="d-flex align-items-start">8.</td>
                    <td>
                        <b>If 7(A) was answered NO, complete the following:</b>
                        <br/>
                        (A) Did you determine that fewer than 3 admitted insurers actually write the type of insurance described on lines
                        2(C) and 2(E)?
                        <br/>
                        <span className='ms-4 fw-bold'>(CHECK ONE)</span>
                        <b className='ms-5'>YES</b> <input type="checkbox"/>
                        <b className='ms-3'>NO</b> <input type="checkbox"/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        (B) If <b>NO</b>, please explain in detail why the risk was submitted to <u>less than three</u> admitted insurers in California that
                        write this type of insurance.
                        <br/>
                        <input className="text-center fw-bold w-100 input-default" maxlength="80"/>
                        <br/>
                        <input className="text-center fw-bold w-100 input-default" maxlength="80"/>
                        <br/>
                        <input className="text-center fw-bold w-100 input-default" maxlength="80"/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        (C) If <b>YES</b>, please describe how you made this determination:
                        <br/>
                        <input className="text-center fw-bold w-100 input-default" maxlength="80"/>
                        <br/>
                        <input className="text-center fw-bold w-100 input-default" maxlength="80"/>
                        <br/>
                        <input className="text-center fw-bold w-100 input-default" maxlength="80"/>
                    </td>
                </tr>
            </table>

            <p className='my-4'>
                The undersigned licensee hereby certifies that this report is true and correct, and that this risk is not being placed with a
                non- admitted insurer for the sole purpose of securing a rate or premium lower than the lowest rate or premium available
                from an admitted insurer.
            </p>

            <div className='d-flex justify-content-between mx-5 pt-3 text-center fw-bold'>
                <div>
                    <Input width="300px" className="text-center" disabled bColor="yellow"/>
                    <p>(Signature of Licensee Named on Line 1)</p>
                </div>
                <div>
                    <Input value = {date} width = "80px" className = "text-center fw-bold"/>
                    <p>Date</p>
                </div>
            </div>

        </div>
    )
}