import React, { useEffect, useState} from 'react';
import Input from "../../Input";
import Logo from "../../Logo";
import Title from "../../Title";
import CurrencyFormat from 'react-currency-format';

export default function VDGL({name, date, setDateVD, date2}) {

    const [restrictions, setRestrictions] = useState('');

    const [restrictionsBlank, setRestrictionsBlank] = useState('');
    const [descriptionBlank, setDescriptionBlank] = useState('');

    const [descOP, setDescDOP] = useState("dOP1");

    const [chkBlank, setChkBlank] = useState(false);

    useEffect(() => {
        if(descOP === "dOP1"){
            setRestrictions(
                "NO NEW CONSTRUCTION, NO STRUCTURAL WORK, NO WORK ON MEDICAL FACILITIES, NO FINANCIAL INSTITUTIONS, NO SCHOOLS, AIRPORTS, MUSEUMS OR HOUSES OF WORSHIP. No blasting operations, no hazardous materials, no mold or restoration removal."
            );
        }
        else if(descOP === "dOP2"){
            setRestrictions(
                "NO NEW CONSTRUCTION, NO STRUCTURAL WORK, NO WORK ON MEDICAL FACILITIES, NO FINANCIAL INSTITUTIONS, NO SCHOOLS, AIRPORTS, MUSEUMS OR HOUSES OF WORSHIP. No blasting operations, no hazardous materials, no mold or restoration removal. No work on public roads or highways. Tree trimming from ground only. Incidental sprinkler repair or installation."
            );
        }
        else if(descOP === "dOP3"){
            setRestrictions(
                "NO NEW CONSTRUCTION, NO STRUCTURAL WORK, NO WORK ON MEDICAL FACILITIES, NO FINANCIAL INSTITUTIONS, NO SCHOOLS, AIRPORTS, MUSEUMS OR HOUSES OF WORSHIP. No blasting operations, no hazardous materials, no mold or restoration removal. No work on public roads or highways. No tree trimming above 3 stories in high. Incidental sprinkler repair or installation."
            );
        }
        else if(descOP === "dOP4"){
            setRestrictions(
                "NO NEW CONSTRUCTION, NO STRUCTURAL WORK, NO WORK ON MEDICAL FACILITIES, NO FINANCIAL INSTITUTIONS, NO SCHOOLS, AIRPORTS, MUSEUMS OR HOUSES OF WORSHIP. No mold or restoration removal. No water damage clean up.  No floor waxing, no pressure wash."
            );
        }
        else if(descOP === "dOP5"){
            setRestrictions(
                "FINISHING AND REPAIRING OF FLOORS. NO NEW CONSTRUCTION, NO STRUCTURAL WORK, NO WORK ON MEDICAL FACILITIES, NO FINANCIAL INSTITUTIONS, NO SCHOOLS, AIRPORTS, MUSEUMS OR HOUSES OF WORSHIP. No mold or restoration removal. No water damage clean up.  No floor waxing, no pressure wash."
            );
        }
        else if(descOP === "dOP6"){
            setRestrictions(
                "FINISHING AND REPAIRING OF FLOORS. NO NEW CONSTRUCTION, NO STRUCTURAL WORK, NO WORK ON MEDICAL FACILITIES, NO FINANCIAL INSTITUTIONS, NO SCHOOLS, AIRPORTS, MUSEUMS OR HOUSES OF WORSHIP. No mold or restoration removal. No roofing operations."
            );
        }
        else if(descOP === "dOP7"){
            setRestrictions(
                "Flooring and countertops are acceptable. NO NEW CONSTRUCTION, NO STRUCTURAL WORK, NO WORK ON MEDICAL FACILITIES, NO FINANCIAL INSTITUTIONS, NO SCHOOLS, AIRPORTS, MUSEUMS OR HOUSES OF WORSHIP. No mold or restoration removal. No roofing operations. No electrical work."
            );
        }
        else if(descOP === "dOP8"){
            setRestrictions(
                "NO ALCOHOLIC BEVERAGES, WITH TABLE SERVICE. No inhalation or oxygen gas from tanks or hookah smoking on premises. No past or pending bankruptcy. Functioning and operational smoke and or heat detectors in all public areas. No arm security. NO TERRORISM coverage. Two means of egress (exits) for every floor with public access."
            );
        }
    }, [descOP])


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
                                <option>25,000</option>
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
                            General Aggregate:
                        </td>
                        <td>
                            <b>$</b> <input list="dL3" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="dL3">
                                <option>25,000</option>
                                <option>50,000</option>
                                <option>100,000</option>
                                <option>300,000</option>
                                <option>500,000</option>
                                <option>1,000,000</option>
                                <option>2,000,000</option>
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
                                <option>25,000</option>
                                <option>50,000</option>
                                <option>100,000</option>
                                <option>300,000</option>
                                <option>500,000</option>
                                <option>1,000,000</option>
                                <option>Included</option>
                                <option>Not Purchased</option>
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
                                <option>25,000</option>
                                <option>50,000</option>
                                <option>100,000</option>
                                <option>300,000</option>
                                <option>500,000</option>
                                <option>1,000,000</option>
                                <option>Not Purchased</option>
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
                                <option>25,000</option>
                                <option>50,000</option>
                                <option>100,000</option>
                                <option>300,000</option>
                                <option>Not Purchased</option>
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
                                <option>1,000</option>
                                <option>3,000</option>
                                <option>5,000</option>
                                <option>Not Purchased</option>
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
                                <option>500</option>
                                <option>1,000</option>
                                <option>1,500</option>
                                <option>2,000</option>
                                <option>2,500</option>
                                <option>None</option>
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
                            </datalist>
                        </td>
                        <td className="fw-bold">
                            <b><u>Deductible:</u> $</b> <input list="dL15" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="dL15">
                                <option>500</option>
                                <option>1,000</option>
                                <option>1,500</option>
                                <option>2,000</option>
                                <option>2,500</option>
                                <option>None</option>
                                <option>Not Purchased</option>
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
                                <option>Not Purchased</option>
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
                                <option>Landlord</option>
                                <option>Blanket</option>
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
                            <Input className="text-center" width="220px" maxlength="34"/>
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
                            <Input className="text-center" width="220px" maxlength="34"/>
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
                            <Input className="text-center" width="220px" maxlength="34"/>
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

            <div className="mt-3">
                <b>Description of Operations:</b> <span className='no-print'><input 
                    type="checkbox" 
                    checked={chkBlank} 
                    onChange={e => setChkBlank(e.target.checked)}
                /> BLANK</span>
                <br/>

                {chkBlank
                    ? 
                        <input 
                            className="w-100 input-default" 
                            maxlength="130"
                            onChange={e => setDescriptionBlank(e.target.value)}
                            value={descriptionBlank}    
                        />
                    : 
                        <select className='w-100' value={descOP} onChange={e => setDescDOP(e.target.value)}>
                            <option value="dOP1" default>HANDYMAN – unlicensed contractor, service, maintenance and repair.</option>
                            <option value="dOP2">LANDSCAPER – Lawn care service and maintenance.</option>
                            <option value="dOP3">LANDSCAPER/TREE TRIMMING – Lawn care service and maintenance, three trimming.</option>
                            <option value="dOP4">JANITORIAL – Service and maintenance.</option>
                            <option value="dOP5">FLOOR INSTALLATION – Carpet, tile, wood, vinyl, flooring installation.</option>
                            <option value="dOP6">HVAC – installation or heating, ventilation, or air conditioning systems.</option>
                            <option value="dOP7">TILE AND MARBLE INSTALLATION – installation of tile, marble, granite, travertine or other related materials.</option>
                            <option value="dOP8">RESTAURANT.</option> 
                        </select>
                }
                
            </div>

            <div class="mb-3">
                <b>Restrictions:</b>
                <br/>
                <textarea 
                    class="form-control text-justify font-10 border border-dark" 
                    rows="3"
                    maxlength="360"
                    onChange={e => setRestrictionsBlank(e.target.value)}
                    {...(chkBlank ? {value: restrictionsBlank} : {value: restrictions})}
                >
                </textarea>
            </div>

            <p className='my-3 text-center font-10'>
                <i>
                    BY SIGNING THIS YOU ARE ACCEPTING ALL EXCLUSIONS AND AGREE TO THE LIMITS PROVIDED
                </i>
            </p>
            
            <div className='d-flex fw-bold justify-content-between text-center'>
                <div>
                    <p className='mb-0'>Gross Annual Sales:</p>
                    <CurrencyFormat 
                        thousandSeparator={true} 
                        prefix={'$'}
                        maxlength="13"
                        style = {{width:"170px"}}
                        className='fw-bold text-center input-default'
                    />
                </div>
                <div>
                    <p className='mb-0'>Employee Payroll:</p>
                    <CurrencyFormat 
                        thousandSeparator={true} 
                        prefix={'$'}
                        maxlength="13"
                        style = {{width:"170px"}}
                        className='fw-bold text-center input-default'
                    />
                </div>
                <div>
                    <p className='mb-0'>P.T. Employees:</p>
                    <Input className="text-center fw-bold" width = "170px" maxlength="20"/>
                </div>
                <div>
                    <p className='mb-0'>F.T. Employees:</p>
                    <Input className="text-center fw-bold" width = "170px" maxlength="20"/>
                </div>
                <div>
                    <p className='mb-0'>Square Feet:</p>
                    <input list="sqrList" className="input-default text-center" style={{width: "100px"}} maxLength="10"/>
                    <datalist id="sqrList">
                        <option>N/A</option>
                    </datalist>
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