import React from "react";
import CDate from "../../CDate";
import Input from "../../Input";
import Logo from "../../Logo";
import Title from "../../Title";

export default function VDAutoInternals({name}) {
    return (
        <div className="sheet font-11 text-justify">
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
                chosen to have coverage start on: <input type="date"/>
            </p>

            <table style={{"margin-left": "auto", "margin-right": "auto"}} className="tb">
                <thead>
                    <tr>
                        <td colspan="4" className="fw-bold text-center font-14">Coverage Limits</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Liability Bodily Injury:
                        </td>
                        <td>
                            <label>
                                $ <input list="dL1"/>
                            </label>
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
                        <td className="fw-bold">
                            <label>
                                <span><u>Liability Deductible:</u> $</span> <input list="dL2"/>
                            </label>
                            <datalist id="dL2">
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
                            <label>
                                $ <input list="dL3"/>
                            </label>
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
                    <tr>
                        <td>
                            Medical Payment:
                        </td>
                        <td>
                            <label>
                                $ <input list="dL4"/>
                            </label>
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
                    <tr>
                        <td>
                            Uninsured Motorist BI:
                        </td>
                        <td>
                            <label>
                                $ <input list="dL5"/>
                            </label>
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
                    <tr>
                        <td>
                            Uninsured Motorist PD:
                        </td>
                        <td>
                            <label>
                                $ <input list="dL6"/>
                            </label>
                            <datalist id="dL6">
                                <option>Rejected</option>
                                <option>3,500</option>
                                <option>5,000</option>
                                <option>CDW</option>
                                <option>***CSL***</option>
                            </datalist>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Comprehensive Deductible:
                        </td>
                        <td>
                            <label>
                                $ <input list="dL7"/>
                            </label>
                            <datalist id="dL7">
                                <option>250,000</option>
                                <option>500,000</option>
                                <option>1,000,000</option>
                            </datalist>
                        </td>
                        <td className="fw-bold">
                            On Vehicle #1<input className="me-1" type="checkbox"/>
                            2<input className="me-1" type="checkbox"/>
                            3<input className="me-1" type="checkbox"/>
                            4<input className="me-1" type="checkbox"/>
                            5<input className="me-1" type="checkbox"/>
                            6<input className="me-1" type="checkbox"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Collision Deductible:
                        </td>
                        <td>
                            <label>
                                $ <input list="dL8"/>
                            </label>
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
                        <td className="fw-bold">
                            On Vehicle #1<input className="me-1" type="checkbox"/>
                            2<input className="me-1" type="checkbox"/>
                            3<input className="me-1" type="checkbox"/>
                            4<input className="me-1" type="checkbox"/>
                            5<input className="me-1" type="checkbox"/>
                            6<input className="me-1" type="checkbox"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Theft and Fire Deductible:
                        </td>
                        <td>
                            <label>
                                $ <input list="dL9"/>
                            </label>
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
                            On Vehicle #1<input className="me-1" type="checkbox"/>
                            2<input className="me-1" type="checkbox"/>
                            3<input className="me-1" type="checkbox"/>
                            4<input className="me-1" type="checkbox"/>
                            5<input className="me-1" type="checkbox"/>
                            6<input className="me-1" type="checkbox"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Additional Insured:
                        </td>
                        <td>
                            <label>
                                $ <input list="dL10"/>
                            </label>
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
                    </tr>
                    <tr>
                        <td>
                            Special Equipment:
                        </td>
                        <td>
                            <label>
                                $ <input list="dL11"/>
                            </label>
                            <datalist id="dL11">
                                <option>Excluded</option>
                                <option>Included</option>
                            </datalist>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Tool Coverage:
                        </td>
                        <td>
                            <label>
                                $ <input list="dL12"/>
                            </label>
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
                    <tr>
                        <td>
                            Trailer Interchange:
                        </td>
                        <td>
                            <label>
                                $ <input list="dL13"/>
                            </label>
                            <datalist id="dL13">
                                <option>Excluded</option>
                                <option>Included</option>
                            </datalist>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Motor Truck Cargo:
                        </td>
                        <td>
                            <label>
                                $ <input list="dL14"/>
                            </label>
                            <datalist id="dL14">
                                <option>Not Purchased</option>
                                <option>1 Purchased</option>
                                <option>2 Purchased</option>
                                <option>3 Purchased</option>
                                <option>4 Purchased</option>
                            </datalist>
                        </td>
                        <td className="fw-bold">
                            <label>
                                <span><u>Deductible:</u> $</span> <input list="dL15"/>
                            </label>
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
                    <tr>
                        <td>
                            Reefer Breakdown:
                        </td>
                        <td>
                            <label>
                                $ <input list="dL16"/>
                            </label>
                            <datalist id="dL16">
                                <option>Not Purchased</option>
                                <option>1 Purchased</option>
                                <option>2 Purchased</option>
                                <option>3 Purchased</option>
                                <option>4 Purchased</option>
                            </datalist>
                        </td>
                        <td className="fw-bold">
                            <label>
                                <span><u>Deductible:</u> $</span> <input list="dL17"/>
                            </label>
                            <datalist id="dL17">
                                <option>2,500</option>
                                <option>3,500</option>
                            </datalist>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            GL Coverage:
                        </td>
                        <td>
                            <label>
                                $ <input list="dL18"/>
                            </label>
                            <datalist id="dL18">
                                <option>Not Purchased</option>
                            </datalist>
                        </td>
                    </tr>
                </tbody>
            </table>

        
            <table className="mt-3 font-10">
                <thead>
                    <tr>
                        <td className="text-center border border-dark" colspan="2">Salvage Title</td>
                        <td colspan="5"></td>
                    </tr>
                </thead>
                <tbody>
                <tr className="text-center">
                    <td className="border-start border-dark">Yes</td>
                    <td className="border-end border-dark">No</td>
                    <td>Year</td>
                    <td>Make</td>
                    <td>Model</td>
                    <td>VIN #</td>
                    <td>Stated Value</td>
                </tr>
                <tr className="text-center">
                    <td className="border-start border-dark">
                        <input type="checkbox"/>
                    </td>
                    <td className="border-end border-dark">
                        <input type="checkbox"/>
                    </td>
                    <td className="fw-bold">
                        #1
                        <Input className="text-center" maxlength="4"/>
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
                        <label>
                            $ <input list="dLSV1" style={{width: "105px"}}/>
                        </label>
                        <datalist id="dLSV1">
                            <option>None</option>
                        </datalist>
                    </td>
                </tr>
                <tr className="text-center">
                    <td className="border-start border-dark">
                        <input type="checkbox"/>
                    </td>
                    <td className="border-end border-dark">
                        <input type="checkbox"/>
                    </td>
                    <td className="fw-bold">
                        #2
                        <Input className="text-center" maxlength="4"/>
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
                        <label>
                            $ <input list="dLSV2" style={{width: "105px"}}/>
                        </label>
                        <datalist id="dLSV2">
                            <option>None</option>
                        </datalist>
                    </td>
                </tr>
                <tr className="text-center">
                    <td className="border-start border-dark">
                        <input type="checkbox"/>
                    </td>
                    <td className="border-end border-dark">
                        <input type="checkbox"/>
                    </td>
                    <td className="fw-bold">
                        #3
                        <Input className="text-center" maxlength="4"/>
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
                        <label>
                            $ <input list="dLSV3" style={{width: "105px"}}/>
                        </label>
                        <datalist id="dLSV3">
                            <option>None</option>
                        </datalist>
                    </td>
                </tr>
                <tr className="text-center">
                    <td className="border-start border-dark">
                        <input type="checkbox"/>
                    </td>
                    <td className="border-end border-dark">
                        <input type="checkbox"/>
                    </td>
                    <td className="fw-bold">
                        #4
                        <Input className="text-center" maxlength="4"/>
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
                        <label>
                            $ <input list="dLSV4" style={{width: "105px"}}/>
                        </label>
                        <datalist id="dLSV4">
                            <option>None</option>
                        </datalist>
                    </td>
                </tr>
                <tr className="text-center">
                    <td className="border-start border-dark">
                        <input type="checkbox"/>
                    </td>
                    <td className="border-end border-dark">
                        <input type="checkbox"/>
                    </td>
                    <td className="fw-bold">
                        #5
                        <Input className="text-center" maxlength="4"/>
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
                        <label>
                            $ <input list="dLSV5" style={{width: "105px"}}/>
                        </label>
                        <datalist id="dLSV5">
                            <option>None</option>
                        </datalist>
                    </td>
                </tr>
                <tr className="text-center">
                    <td className="border-start border-bottom border-dark">
                        <input type="checkbox"/>
                    </td>
                    <td className="border-end border-bottom border-dark">
                        <input type="checkbox"/>
                    </td>
                    <td className="fw-bold">
                        #6
                        <Input className="text-center" maxlength="4"/>
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
                        <label>
                            $ <input list="dLSV6" style={{width: "105px"}}/>
                        </label>
                        <datalist id="dLSV6">
                            <option>None</option>
                        </datalist>
                    </td>
                </tr>
                </tbody>
            </table>

            <table className="d-flex justify-content-center mt-3 font-10">
                <tbody>
                    <tr className="text-center fw-bold font-14">
                        <td colspan="8" >Vehicles in Use</td>
                    </tr>
                    <tr className="text-center fw-bold font-11">
                        <td className="border border-dark">#</td>
                        <td className="border border-dark">Stops per day:</td>
                        <td className="border border-dark">Miles Radius:</td>
                        <td className="border border-dark">Telematics</td>
                    </tr>
                    <tr>
                        <td>
                            1.- <input list="dLV1" style={{width: "140px"}}/>
                            <datalist id="dLV1">
                                <option>Commercial</option>
                                <option>Personal</option>
                                <option>Commercial & Personal</option>
                            </datalist>
                        </td>
                        <td className="text-center">
                            <input list="dLV3" style={{width: "60px"}}/>
                            <datalist id="dLV3">
                                <option>N/A</option>
                            </datalist>
                        </td>
                        <td className="text-center">
                            <Input className="text-center" width="70px" maxlength="10"/>
                        </td>
                        <td>
                            YES <input className="me-1" type="checkbox"/>
                            NO <input className="me-1" type="checkbox"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            2.- <input list="dLV4" style={{width: "140px"}}/>
                            <datalist id="dLV4">
                                <option>Commercial</option>
                                <option>Personal</option>
                                <option>Commercial & Personal</option>
                            </datalist>
                        </td>
                        <td className="text-center">
                            <input list="dLV6" style={{width: "60px"}}/>
                            <datalist id="dLV6">
                                <option>N/A</option>
                            </datalist>
                        </td>
                        <td className="text-center">
                            <Input className="text-center" width="70px" maxlength="10"/>
                        </td>
                        <td>
                            YES <input className="me-1" type="checkbox"/>
                            NO <input className="me-1" type="checkbox"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            3.- <input list="dLV7" style={{width: "140px"}}/>
                            <datalist id="dLV7">
                                <option>Commercial</option>
                                <option>Personal</option>
                                <option>Commercial & Personal</option>
                            </datalist>
                        </td>
                        <td className="text-center">
                            <input list="dLV9" style={{width: "60px"}}/>
                            <datalist id="dLV9">
                                <option>N/A</option>
                            </datalist>
                        </td>
                        <td className="text-center">
                            <Input className="text-center" width="70px" maxlength="10"/>
                        </td>
                        <td>
                            YES <input className="me-1" type="checkbox"/>
                            NO <input className="me-1" type="checkbox"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            4.- <input list="dLV10" style={{width: "140px"}}/>
                            <datalist id="dLV10">
                                <option>Commercial</option>
                                <option>Personal</option>
                                <option>Commercial & Personal</option>
                            </datalist>
                        </td>
                        <td className="text-center">
                            <input list="dLV12" style={{width: "60px"}}/>
                            <datalist id="dLV12">
                                <option>N/A</option>
                            </datalist>
                        </td>
                        <td className="text-center">
                            <Input className="text-center" width="70px" maxlength="10"/>
                        </td>
                        <td>
                            YES <input className="me-1" type="checkbox"/>
                            NO <input className="me-1" type="checkbox"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            5.- <input list="dLV13" style={{width: "140px"}}/>
                            <datalist id="dLV13">
                                <option>Commercial</option>
                                <option>Personal</option>
                                <option>Commercial & Personal</option>
                            </datalist>
                        </td>
                        <td className="text-center">
                            <input list="dLV15" style={{width: "60px"}}/>
                            <datalist id="dLV15">
                                <option>N/A</option>
                            </datalist>
                        </td>
                        <td className="text-center">
                            <Input className="text-center" width="70px" maxlength="10"/>
                        </td>
                        <td>
                            YES <input className="me-1" type="checkbox"/>
                            NO <input className="me-1" type="checkbox"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            6.- <input list="dLV16" style={{width: "140px"}}/>
                            <datalist id="dLV16">
                                <option>Commercial</option>
                                <option>Personal</option>
                                <option>Commercial & Personal</option>
                            </datalist>
                        </td>
                        <td className="text-center">
                            <input list="dLV18" style={{width: "60px"}}/>
                            <datalist id="dLV18">
                                <option>N/A</option>
                            </datalist>
                        </td>
                        <td className="text-center">
                            <Input className="text-center" width="70px" maxlength="10"/>
                        </td>
                        <td>
                            YES <input className="me-1" type="checkbox"/>
                            NO <input className="me-1" type="checkbox"/>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="mt-3">
                <tr>
                    <td colspan="2">
                        Business Type: <Input width = "600px" className="text-center" maxlength="90"/>
                        
                    </td>
                </tr>
                <tr>
                    <td>
                        Filings Purchased:
                        <b className="ms-2">MCP</b> 
                        <input className="ms-1 me-2" type="checkbox"/>
                        <b>ICC</b> 
                        <input className="ms-1 me-2" type="checkbox"/>
                        <b>DOT</b> 
                        <input className="ms-1 me-2" type="checkbox"/>
                        <b>PUC</b> 
                        <input className="ms-1 me-2" type="checkbox"/>
                        <b>NONE</b> 
                        <input className="ms-1" type="checkbox"/>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        Permit Numbers (If Purchased): <Input width = "500px" className="text-center" maxlength="70"/>
                    </td>
                </tr>
            </table>

            

            <div className="d-flex justify-content-between my-3">
                <div></div>
                <div>
                    <b>Date:</b> <CDate/>
                </div>
            </div>
            
        </div>
    );
}