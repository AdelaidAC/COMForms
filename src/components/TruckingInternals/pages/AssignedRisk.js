import React from "react";
import CurrencyFormat from 'react-currency-format';
import Input from "../../Input";
import Logo from "../../Logo";
import Title from "../../Title";

export default function AssignedRisk({name, date, setDateVD, date2}) {

    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
        <div className="sheet font-11">
            <Logo />

            <Title text="VERBAL DISCLOSURE" />

            <div class="row">
                <div class="col d-flex">
                    <b>Name:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1 text-center" maxlength="40" value={name}/>
                    </span>
                </div>
                <div class="col d-flex">
                    <b>DBA:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1 text-center" maxlength="40"/>
                    </span>
                </div>
            </div>

            <p className="mt-4">
                I, <Input width="400px" className="text-center" value={name}/> hereby appoint Adriana’s Insurance Svcs, Inc. as my
                Broker/Attorney in fact to sign papers, applications, documents that are
                necessary in order to secure the insurance coverage specified below. I have also been advised of the importance of the effective date of the policy and have 
                chosen to have coverage start on: 
                <input 
                    type="date" 
                    style={{width: "100px"}} 
                    onChange = {e => setDateVD(e.target.value)}
                    {... date2 === "Invalid date" ? {className:"y text-center fw-bold"} : {className:"text-center fw-bold"}}
                />
            </p>

            <table>
                <thead>
                    <tr>
                        <th className="text-decoration-underline text-center" colspan="5">
                            Coverage Limits
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="fw-bold text-decoration-underline text-center" rowspan="5">
                            Liability Carrier
                            <br/>
                            <input list="e7" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="e7">
                            <option>CAARP</option>
                            </datalist>
                        </td>
                        <td>
                            Liability Bodily Injury:
                        </td>
                        <td>
                            <b>$</b> <input list="e1" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="e1">
                            <option>750,000</option>
                            <option>1,000,000</option>
                            <option>1,500,000</option>
                            </datalist>
                        </td>
                        <td className="fw-bold" rowspan="2">
                            <b><u>Liability Deductible:</u> $</b> <input list="e6" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="e6">
                                <option>None</option>
                                <option>250</option>
                                <option>500</option>
                                <option>1,000</option>
                                <option>1,500</option>
                                <option>2,000</option>
                                <option>2,500</option>
                            </datalist>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Liability Property Damage:
                        </td>
                        <td>
                            <b>$</b> <input list="e2" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="e2">
                            <option>***CSL***</option>
                            </datalist>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Medical Payment:
                        </td>
                        <td>
                            <b>$</b> <input list="e3" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="e3">
                                <option>Not Purchased</option>
                                <option>500</option>
                                <option>1,000</option>
                                <option>2,000</option>
                                <option>3,000</option>
                                <option>5,000</option>
                            </datalist>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Uninsured Motorist BI:
                        </td>
                        <td>
                            <b>$</b> <input list="e4" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="e4">
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
                    <tr>
                        <td>
                            Uninsured Motorist PD:
                        </td>
                        <td>
                            <b>$</b> <input list="e5" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="e5">
                                <option>Rejected</option>
                                <option>3,500</option>
                                <option>5,000</option>
                                <option>CDW</option>
                                <option>***CSL***</option>
                            </datalist>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="mt-3 font-10">
                <tbody>
                    <tr className="text-center tr-h fw-bold">
                        <td>Year</td>
                        <td>Make</td>
                        <td>Model</td>
                        <td>VIN #</td>
                        <td>Stated Value</td>
                        <td>Radius</td>
                    </tr>
                    <tr className="text-center tr-h">
                        <td className="fw-bold">
                            <span className="ms-2">#1 <Input className="text-center" maxlength="4"/></span>
                        </td>
                        <td>
                            <Input width="110px" className="text-center" maxlength="16"/> 
                        </td>
                        <td>
                            <Input width="180px" className="text-center" maxlength="25"/> 
                        </td>
                        <td>
                            <Input width="135px" className="text-center" maxlength="17"/> 
                        </td>
                        <td>
                            <b>$</b> <input list="dLSV1" style={{width: "105px"}} className="text-center fw-bold input-default" maxlength="12"/>
                            <datalist id="dLSV1">
                                <option>None</option>
                            </datalist>
                        </td>
                        <td>
                            <Input className="text-center" width="70px" maxlength="10"/>
                        </td>
                    </tr>
                    <tr className="text-center tr-h">
                        <td className="fw-bold">
                            <span className="ms-2">#2 <Input className="text-center" maxlength="4"/></span>
                        </td>
                        <td>
                            <Input width="110px" className="text-center" maxlength="16"/> 
                        </td>
                        <td>
                            <Input width="180px" className="text-center" maxlength="25"/> 
                        </td>
                        <td>
                            <Input width="135px" className="text-center" maxlength="17"/> 
                        </td>
                        <td>
                            <b>$</b> <input list="dLSV2" style={{width: "105px"}} className="text-center fw-bold input-default" maxlength="12"/>
                            <datalist id="dLSV2">
                                <option>None</option>
                            </datalist>
                        </td>
                        <td>
                            <Input className="text-center" width="70px" maxlength="10"/>
                        </td>
                    </tr>
                    <tr className="text-center tr-h">
                        <td className="fw-bold">
                            <span className="ms-2">#3 <Input className="text-center" maxlength="4"/></span>
                        </td>
                        <td>
                            <Input width="110px" className="text-center" maxlength="16"/> 
                        </td>
                        <td>
                            <Input width="180px" className="text-center" maxlength="25"/> 
                        </td>
                        <td>
                            <Input width="135px" className="text-center" maxlength="17"/> 
                        </td>
                        <td>
                            <b>$</b> <input list="dLSV3" style={{width: "105px"}} className="text-center fw-bold input-default" maxlength="12"/>
                            <datalist id="dLSV3">
                                <option>None</option>
                            </datalist>
                        </td>
                        <td>
                            <Input className="text-center" width="70px" maxlength="10"/>
                        </td>
                    </tr>
                    <tr className="text-center tr-h">
                        <td className="fw-bold">
                            <span className="ms-2">#4 <Input className="text-center" maxlength="4"/></span>
                        </td>
                        <td>
                            <Input width="110px" className="text-center" maxlength="16"/> 
                        </td>
                        <td>
                            <Input width="180px" className="text-center" maxlength="25"/> 
                        </td>
                        <td>
                            <Input width="135px" className="text-center" maxlength="17"/> 
                        </td>
                        <td>
                            <b>$</b> <input list="dLSV4" style={{width: "105px"}} className="text-center fw-bold input-default" maxlength="12"/>
                            <datalist id="dLSV4">
                                <option>None</option>
                            </datalist>
                        </td>
                        <td>
                            <Input className="text-center" width="70px" maxlength="10"/>
                        </td>
                    </tr>
                    <tr className="text-center tr-h">
                        <td className="fw-bold">
                            <span className="ms-2">#5 <Input className="text-center" maxlength="4"/></span>
                        </td>
                        <td>
                            <Input width="110px" className="text-center" maxlength="16"/> 
                        </td>
                        <td>
                            <Input width="180px" className="text-center" maxlength="25"/> 
                        </td>
                        <td>
                            <Input width="135px" className="text-center" maxlength="17"/> 
                        </td>
                        <td>
                            <b>$</b> <input list="dLSV5" style={{width: "105px"}} className="text-center fw-bold input-default" maxlength="12"/>
                            <datalist id="dLSV5">
                                <option>None</option>
                            </datalist>
                        </td>
                        <td>
                            <Input className="text-center" width="70px" maxlength="10"/>
                        </td>
                    </tr>
                    <tr className="text-center tr-h">
                        <td className="fw-bold">
                            <span className="ms-2">#6 <Input className="text-center" maxlength="4"/></span>
                        </td>
                        <td>
                            <Input width="110px" className="text-center" maxlength="16"/> 
                        </td>
                        <td>
                            <Input width="180px" className="text-center" maxlength="25"/> 
                        </td>
                        <td>
                            <Input width="135px" className="text-center" maxlength="17"/> 
                        </td>
                        <td>
                            <b>$</b> <input list="dLSV6" style={{width: "105px"}} className="text-center fw-bold input-default" maxlength="12"/>
                            <datalist id="dLSV6">
                                <option>None</option>
                            </datalist>
                        </td>
                        <td>
                            <Input className="text-center" width="70px" maxlength="10"/>
                        </td>
                    </tr>
                    <tr className="text-center tr-h">
                        <td className="fw-bold">
                            <span className="ms-2">#7 <Input className="text-center" maxlength="4"/></span>
                        </td>
                        <td>
                            <Input width="110px" className="text-center" maxlength="16"/> 
                        </td>
                        <td>
                            <Input width="180px" className="text-center" maxlength="25"/> 
                        </td>
                        <td>
                            <Input width="135px" className="text-center" maxlength="17"/> 
                        </td>
                        <td>
                            <b>$</b> <input list="dLSV7" style={{width: "105px"}} className="text-center fw-bold input-default" maxlength="12"/>
                            <datalist id="dLSV7">
                                <option>None</option>
                            </datalist>
                        </td>
                        <td>
                            <Input className="text-center" width="70px" maxlength="10"/>
                        </td>
                    </tr>
                    <tr className="text-center tr-h">
                        <td className="fw-bold">
                            <span className="ms-2">#8 <Input className="text-center" maxlength="4"/></span>
                        </td>
                        <td>
                            <Input width="110px" className="text-center" maxlength="16"/> 
                        </td>
                        <td>
                            <Input width="180px" className="text-center" maxlength="25"/> 
                        </td>
                        <td>
                            <Input width="135px" className="text-center" maxlength="17"/> 
                        </td>
                        <td>
                            <b>$</b> <input list="dLSV8" style={{width: "105px"}} className="text-center fw-bold input-default" maxlength="12"/>
                            <datalist id="dLSV8">
                                <option>None</option>
                            </datalist>
                        </td>
                        <td>
                            <Input className="text-center" width="70px" maxlength="10"/>
                        </td>
                    </tr>
                    <tr className="text-center tr-h">
                        <td className="fw-bold">
                            <span className="ms-2">#9 <Input className="text-center" maxlength="4"/></span>
                        </td>
                        <td>
                            <Input width="110px" className="text-center" maxlength="16"/> 
                        </td>
                        <td>
                            <Input width="180px" className="text-center" maxlength="25"/> 
                        </td>
                        <td>
                            <Input width="135px" className="text-center" maxlength="17"/> 
                        </td>
                        <td>
                            <b>$</b> <input list="dLSV9" style={{width: "105px"}} className="text-center fw-bold input-default" maxlength="12"/>
                            <datalist id="dLSV9">
                                <option>None</option>
                            </datalist>
                        </td>
                        <td>
                            <Input className="text-center" width="70px" maxlength="10"/>
                        </td>
                    </tr>
                    <tr className="text-center tr-h">
                        <td className="fw-bold">
                            <span className="ms-2">#10 <Input className="text-center" maxlength="4"/></span>
                        </td>
                        <td>
                            <Input width="110px" className="text-center" maxlength="16"/> 
                        </td>
                        <td>
                            <Input width="180px" className="text-center" maxlength="25"/> 
                        </td>
                        <td>
                            <Input width="135px" className="text-center" maxlength="17"/> 
                        </td>
                        <td>
                            <b>$</b> <input list="dLSV10" style={{width: "105px"}} className="text-center fw-bold input-default" maxlength="12"/>
                            <datalist id="dLSV10">
                                <option>None</option>
                            </datalist>
                        </td>
                        <td>
                            <Input className="text-center" width="70px" maxlength="10"/>
                        </td>
                    </tr>
                </tbody>
            </table>

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

            <table className="mt-3">
                <tr className="tr-h">
                    <td colspan="2">
                        Business Type: <Input width = "600px" className="text-center" maxlength="90"/>
                        
                    </td>
                </tr>
                <tr className="tr-h">
                    <td className="d-flex align-items-center">
                        Filings Purchased:
                        <b className="ms-3">MCP</b><input className="ms-2 me-3" type="checkbox"/>
                        <b>ICC</b><input className="ms-2 me-3" type="checkbox"/>
                        <b>DOT</b><input className="ms-2 me-3" type="checkbox"/>
                        <b>PUC</b><input className="ms-2 me-3" type="checkbox"/>
                        <b>NONE</b><input className="ms-2" type="checkbox"/>
                    </td>
                </tr>
                <tr className="tr-h">
                    <td colspan="2">
                        Permit Numbers (If Purchased): <Input width = "500px" className="text-center" maxlength="70"/>
                    </td>
                </tr>
            </table>

            <p className="fw-bold text-center my-4">
                All the above described coverage and conditions have been reviewed and approved by the signer below.
            </p>

            <div className="d-flex justify-content-between fw-bold">
                <div>
                    Insured’s Signature: <Input width="300px" disabled bColor="yellow"/>
                </div>
                <div>
                    Date: <Input value = {date} width = "80px" className = "text-center fw-bold"/>
                </div>
            </div>
            
        </div>
    );
}