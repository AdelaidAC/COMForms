import React from "react";
import Input from "../../Input";
import Logo from "../../Logo";
import Title from "../../Title";
import CurrencyFormat from 'react-currency-format';


export default function VDBond2({name, sn, city, state, zipcode/*address*/, date, setDateVD, date2}) {
    return (
        <div className="sheet font-10 text-justify">
            
            <Logo />
            
            <Title text="VERBAL DISCLOSURE" />

            <div class="row">
                <div class="col d-flex">
                    <b>Named Insured:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1 text-center fw-bold" value={name}/>
                    </span>
                </div>
                <div class="col d-flex">
                    <b>DBA:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1 text-center fw-bold" maxlength="40"/>
                    </span>
                </div>
            </div>

            <div className='d-flex justify-content-between'>
                <div className='d-flex col-8'>
                    <b>Company Name:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1 text-center fw-bold" maxlength="40"/>
                    </span>
                </div>
                <div>
                    <b>Date Coverage Starts: <input 
                    type="date" 
                    style={{width: "100px"}} 
                    onChange = {e => setDateVD(e.target.value)}
                    {... date2 === "Invalid date" ? {className:"y text-center fw-bold"} : {className:"text-center fw-bold"}}
                    /></b>
                </div>
            </div>

            <p className="my-3">
                I, <Input className="text-center fw-bold" width="260px" value={name}/> hereby appoint Adriana’s Insurance Svcs, Inc. as my Broker/Attorney in fact
                to sign papers, applications, documents that are necessary in order to secure the insurance coverage specified below.
            </p>

            
            <table>
                <thead>
                    <tr>
                        <th className="text-center fw-bold text-decoration-underline" colspan="4">
                            Surety Bond Type:
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="4">
                            <Input className="min-w mb-4 text-center fw-bold" placeholder="DMV Defective Title Bond" maxlength="50"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end">
                            Applicant Name:
                        </td>
                        <td colspan="3">
                            <Input className="min-w text-center fw-bold" value={name}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end">
                            Address:
                        </td>
                        <td colspan="3">
                            <Input className="min-w text-center fw-bold" /*value={address}*/ value={sn + ", " + city + ", " + state + ", " + zipcode}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Contractor's License #:
                        </td>
                        <td>
                            <Input width="200px" className="min-w text-center fw-bold" maxlength="20"/>
                        </td>
                        <td>
                            SSN: XXX-XX-
                        </td>
                        <td>
                            <Input width="150px" className="text-center fw-bold" maxlength="4"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end pt-5" colspan="2">
                            Bond Amount:
                        </td>
                        <td className="pt-5" colspan="2">
                            <CurrencyFormat 
                                thousandSeparator={true} 
                                prefix={'$'}
                                maxlength="13"
                                style = {{width:"90px"}}
                                className='fw-bold text-center input-default'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end" colspan="2">
                            Term:
                        </td>
                        <td colspan="2">
                            <input list="termList" style={{width: "90px"}} className="text-center input-default fw-bold" maxlength="10"/>
                            <datalist id="termList">
                                <option>1 Year</option>
                                <option>2 Years</option>
                                <option>3 Years</option>
                            </datalist>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center fw-bold text-decoration-underline pt-5 pb-3" colspan="4">
                            Breakdown of Charges
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end fw-bold" colspan="2">
                            Premium per Term:
                        </td>
                        <td colspan="2">
                            <CurrencyFormat 
                                thousandSeparator={true} 
                                prefix={'$'}
                                maxlength="13"
                                style = {{width:"90px"}}
                                className='fw-bold text-center input-default'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end fw-bold" colspan="2">
                            Fees:
                        </td>
                        <td colspan="2">
                            <CurrencyFormat 
                                thousandSeparator={true} 
                                prefix={'$'}
                                maxlength="13"
                                style = {{width:"90px"}}
                                className='fw-bold text-center input-default'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end fw-bold" colspan="2">
                            Total Due:
                        </td>
                        <td colspan="2">
                            <CurrencyFormat 
                                thousandSeparator={true} 
                                prefix={'$'}
                                maxlength="13"
                                style = {{width:"90px"}}
                                className='fw-bold text-center input-default'
                            />
                        </td>
                    </tr>
                </tbody>
            </table>


            <div className="d-flex justify-content-between mt-5 fw-bold">
                <div>
                    Insured’s Signature: <Input width="300px" bColor="yellow" disabled/>
                </div>
                <div>
                    Date: <Input value = {date} width = "80px" className = "text-center fw-bold"/>
                </div>
            </div>
            
        </div>
    );
}