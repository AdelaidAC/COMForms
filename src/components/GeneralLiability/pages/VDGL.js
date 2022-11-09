import React from "react";
import Input from "../../Input";
import Logo from "../../Logo";
import Title from "../../Title";
import CurrencyFormat from 'react-currency-format';

export default function VDGL({name, date, setDateVD, date2}) {
    return (
        <div className="sheet font-11 text-justify">
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

            <p className="mt-4">
                I, <Input width="400px" className="text-center" value={name}/> hereby appoint Adriana’s Insurance Svcs, Inc. as my Broker/Attorney in fact
                to sign papers, applications, documents that are necessary in order to secure the insurance coverage specified below.
            </p>

            <table style={{"margin-left": "auto", "margin-right": "auto"}}>
                <thead>
                    <tr>
                        <td className="fw-bold text-center">COMMERCIAL GENERAL LIABILITY</td>
                        <td colspan="1" className="fst-italic text-center">LIMITS</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="tr-h">
                        <td>
                            Each Occurrence:
                        </td>
                        <td>
                            <b>$</b> <input list="dL1" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="dL1">
                                <option>15,000/30,000</option>
                                <option>25,000/50,000</option>
                                <option>50,000/100,000</option>
                                <option>100,000/300,000</option>
                                <option>100,000</option>
                                <option>300,000</option>
                                <option>500,000</option>
                                <option>750,000</option>
                                <option>1,000,000</option>
                                <option>Not Purchased</option>
                            </datalist>
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            General Aggregate:
                        </td>
                        <td>
                            <b>$</b> <input list="dL3" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="dL3">
                                <option>***CSL***</option>
                                <option>5,000</option>
                                <option>10,000</option>
                                <option>15,000</option>
                                <option>20,000</option>
                                <option>25,000</option>
                                <option>50,000</option>
                                <option>100,000</option>
                                <option>Not Purchased</option>
                            </datalist>
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            Products and Completed Operations:
                        </td>
                        <td>
                            <b>$</b> <input list="dL4" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="dL4">
                                <option>Not Purchased</option>
                                <option>500</option>
                                <option>1,000</option>
                                <option>2,000</option>
                                <option>3,000</option>
                                <option>5,000</option>
                            </datalist>
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            Personal Advertising Injury:
                        </td>
                        <td>
                            <b>$</b> <input list="dL5" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="dL5">
                                <option>Rejected</option>
                                <option>15,000/30,000</option>
                                <option>25,000/50,000</option>
                                <option>30,000/60,000</option>
                                <option>100,000</option>
                                <option>300,000</option>
                                <option>500,000</option>
                                <option>1,000,000</option>
                            </datalist>
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            Damage to Rented Premises:
                        </td>
                        <td>
                            <b>$</b> <input list="dL6" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="dL6">
                                <option>Rejected</option>
                                <option>3,500</option>
                                <option>5,000</option>
                                <option>CDW</option>
                                <option>***CSL***</option>
                            </datalist>
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            Medical Expense Limit:
                        </td>
                        <td>
                            <b>$</b> <input list="dL7" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="dL7">
                                <option>250,000</option>
                                <option>500,000</option>
                                <option>1,000,000</option>
                            </datalist>
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            Deductible:
                        </td>
                        <td>
                            <b>$</b> <input list="dL8" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="dL8">
                                <option>Not Purchased</option>
                                <option>250</option>
                                <option>500</option>
                                <option>1000</option>
                                <option>1500</option>
                                <option>2000</option>
                                <option>2500</option>
                            </datalist>
                        </td> 
                    </tr>
                    <tr className="tr-h">
                        <td>
                            Building:
                        </td>
                        <td>
                            <b>$</b> <input list="dL9" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="dL9">
                                <option>Not Purchased</option>
                                <option>250</option>
                                <option>500</option>
                                <option>1000</option>
                                <option>1500</option>
                                <option>2000</option>
                                <option>2500</option>
                            </datalist>
                        </td>
                        <td className="fw-bold">
                            <b><u>Deductible:</u> $</b> <input list="dL15" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="dL15">
                                <option>Not Purchased</option>
                                <option>250</option>
                                <option>500</option>
                                <option>1,000</option>
                                <option>1,500</option>
                                <option>2,000</option>
                                <option>2,500</option>
                            </datalist>
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            Contents:
                        </td>
                        <td>
                            <b>$</b> <input list="dL10" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="dL10">
                                <option>Not Purchased</option>
                                <option>250</option>
                                <option>500</option>
                                <option>1000</option>
                                <option>1500</option>
                                <option>2000</option>
                                <option>2500</option>
                            </datalist>
                        </td>
                        <td className="fw-bold">
                            <b><u>Deductible:</u> $</b> <input list="dL15" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="dL15">
                                <option>Not Purchased</option>
                                <option>250</option>
                                <option>500</option>
                                <option>1,000</option>
                                <option>1,500</option>
                                <option>2,000</option>
                                <option>2,500</option>
                            </datalist>
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            Theft Sublimit:
                        </td>
                        <td>
                            <b>$</b> <input list="dL11" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="dL11">
                                <option>Excluded</option>
                                <option>Included</option>
                            </datalist>
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            Additional Insured:
                        </td>
                        <td>
                            <b>$</b> <input list="dL12" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="dL12">
                                <option>Not Purchased</option>
                                <option>30,000</option>
                                <option>50,000</option>
                                <option>100,000</option>
                                <option>300,000</option>
                                <option>500,000</option>
                                <option>1,000,000</option>
                            </datalist>
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            Terrorism Coverage:
                        </td>
                        <td>
                            <b>$</b> <input list="dL13" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="dL13">
                                <option>Excluded</option>
                                <option>Included</option>
                            </datalist>
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            Motor Truck Cargo:
                        </td>
                        <td>
                            <b>$</b> <input list="dL14" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="dL14">
                                <option>Not Purchased</option>
                                <option>1 Purchased</option>
                                <option>2 Purchased</option>
                                <option>3 Purchased</option>
                                <option>4 Purchased</option>
                            </datalist>
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            Reefer Breakdown:
                        </td>
                        <td>
                            <b>$</b> <input list="dL16" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="dL16">
                                <option>Not Purchased</option>
                                <option>1 Purchased</option>
                                <option>2 Purchased</option>
                                <option>3 Purchased</option>
                                <option>4 Purchased</option>
                            </datalist>
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            GL Coverage:
                        </td>
                        <td>
                            <b>$</b> <input list="dL18" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="dL18">
                                <option>Not Purchased</option>
                            </datalist>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="d-flex mt-3">
                <label><b>Description of Operations:</b></label>
                <b className="flex-fill">
                    <Input className="w-100 ms-1 text-center" maxlength="70"/>
                </b>
            </div>

            <div className="d-flex">
                <b>Restrictions:</b>
                <span className="flex-fill">
                    <Input className="w-100 ms-1 text-center" maxlength="83"/>
                </span>
            </div>

            <div>
                <div className="flex-fill">
                    <Input className="w-100 text-center" maxlength="93"/>
                </div>
                <div className="flex-fill">
                    <Input className="w-100 text-center" maxlength="93"/>
                </div>
            </div>

            <p className='my-3 text-center font-10'>
                <i>
                    BY SIGNING THIS YOU ARE ACCEPTING ALL EXCLUSIONS AND AGREE TO THE LIMITS PROVIDED
                </i>
            </p>
            
            <div className='d-flex justify-content-between text-center'>
                <div>
                    <p className='mb-0'><b>Gross Annual Sales:</b></p>
                    <CurrencyFormat 
                        thousandSeparator={true} 
                        prefix={'$'}
                        maxlength="13"
                        style = {{width:"170px"}}
                        className='fw-bold text-center input-default'
                    />
                </div>
                <div>
                    <p className='mb-0'><b>Employee Payroll:</b></p>
                    <CurrencyFormat 
                        thousandSeparator={true} 
                        prefix={'$'}
                        maxlength="13"
                        style = {{width:"170px"}}
                        className='fw-bold text-center input-default'
                    />
                </div>
                <div>
                    <p className='mb-0'><b>P.T. Employees:</b></p>
                    <Input className="text-center fw-bold" width = "170px" maxlength="20"/>
                </div>
                <div>
                    <p className='mb-0'><b>F.T. Employees:</b></p>
                    <Input className="text-center fw-bold" width = "170px" maxlength="20"/>
                </div>
                <div>
                    <p className='mb-0'><b>Square Feet:</b></p>
                    <Input className="text-center fw-bold" width = "100px" maxlength="20"/>
                </div>
            </div>

            <div className="mx-5 mt-3">
                <div className="border border-1 border-dark mt-4 mb-2"></div>
                <div className='d-flex justify-content-between text-center'>
                    <div >
                        <label><b>TOTAL:</b></label>
                        <CurrencyFormat 
                            thousandSeparator={true} 
                            prefix={'$'}
                            maxlength="13"
                            style = {{width:"125px"}}
                            className='fw-bold text-center input-default'
                        />
                    </div>
                    <div>
                        <label><b>Down Payment:</b></label>
                        <CurrencyFormat 
                            thousandSeparator={true} 
                            prefix={'$'}
                            maxlength="13"
                            style = {{width:"125px"}}
                            className='fw-bold text-center input-default'
                        />
                    </div>
                    <div>
                        <label><b>Payments of:</b></label>
                        <CurrencyFormat 
                            thousandSeparator={true} 
                            prefix={'$'}
                            maxlength="13"
                            style = {{width:"125px"}}
                            className='fw-bold text-center input-default'
                        />
                    </div>
                </div>
                <div className="border border-1 border-dark mt-2 mb-4"></div>
            </div>

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