import React, { useEffect, useState} from 'react';
import Input from "../../Input";
import Logo from "../../Logo";
import Title from "../../Title";

export default function VDAutoInternals({
    name, 
    date, 
    setDateVD, 
    date2,
    setVYear1,
    setVMake1,
    setVYear2,
    setVMake2,
    setVYear3,
    setVMake3,
    setVYear4,
    setVMake4,
    setVYear5,
    setVMake5,
    setVYear6,
    setVMake6,
    vYear1, 
    vMake1,
    vYear2, 
    vMake2,
    vYear3, 
    vMake3,
    vYear4, 
    vMake4,
    vYear5, 
    vMake5,
    vYear6, 
    vMake6,
    setVC,
    setVC1,
    setVC2,
    setVC3,
    setVC4,
    setVC5,
    setVC6,
    setMCP,
    setICC,
    setDOT,
    setPUC,
    setNONE,
    setPNumbers,
    setLiability1,
    setLiability2,
    mcp,
    icc,
    dot,
    puc,
    none,
    pNumbers,
    liability1,
    liability2
}) {

    if(vYear1.trim().length !== 0 && vMake1.trim().length !== 0){
        setVC(true);
        setVC1(true);
    }else{
        setVC(false);
        setVC1(false);
    }

    if(vYear2.trim().length !== 0 && vMake2.trim().length !== 0){
        setVC2(true);
    }else{
        setVC2(false);
    }

    if(vYear3.trim().length !== 0 && vMake3.trim().length !== 0){
        setVC3(true);
    }else{
        setVC3(false);
    }

    if(vYear4.trim().length !== 0 && vMake4.trim().length !== 0){
        setVC4(true);
    }else{
        setVC4(false);
    }

    if(vYear5.trim().length !== 0 && vMake5.trim().length !== 0){
        setVC5(true);
    }else{
        setVC5(false);
    }

    if(vYear6.trim().length !== 0 && vMake6.trim().length !== 0){
        setVC6(true);
    }else{
        setVC6(false);
    }


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
                chosen to have coverage start on: 
                <input 
                    type="date" 
                    style={{width: "100px"}} 
                    onChange = {e => setDateVD(e.target.value)}
                    {... date2 === "Invalid date" ? {className:"y text-center fw-bold"} : {className:"text-center fw-bold"}}
                />
            </p>

            <table style={{"margin-left": "auto", "margin-right": "auto"}}>
                <thead>
                    <tr>
                        <td colspan="4" className="fw-bold text-center font-14">Coverage Limits</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="tr-h">
                        <td>
                            Liability Bodily Injury:
                        </td>
                        <td>
                            <b>$</b> <input list="dL1" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15" onChange={e => setLiability1(e.target.value)} value={liability1}/>
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
                            <b><u>Liability Deductible:</u> $</b> <input list="dL2" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
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
                    <tr className="tr-h">
                        <td>
                            Liability Property Damage:
                        </td>
                        <td>
                            <b>$</b> <input list="dL3" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15" onChange={e => setLiability2(e.target.value)} value={liability2}/>
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
                            Medical Payment:
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
                            Uninsured Motorist BI:
                        </td>
                        <td>
                            <b>$</b>
                            <select name="dl5" className="ms-1 input-default text-center fw-bold" style={{width: "125px"}} maxLength="15">
                                <option>Rejected</option>
                                <option>15,000/30,000</option>
                                <option>25,000/50,000</option>
                                <option>30,000/60,000</option>
                                <option>100,000</option>
                                <option>300,000</option>
                                <option>500,000</option>
                                <option>1,000,000</option>
                            </select>
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            Uninsured Motorist PD:
                        </td>
                        <td>
                            <b>$</b>
                            <select name="dL6" className="ms-1 input-default text-center fw-bold" style={{width: "125px"}} maxLength="15">
                                <option>Rejected</option>
                                <option>3,500</option>
                                <option>5,000</option>
                                <option>CDW</option>
                                <option>***CSL***</option>
                            </select>
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            Comprehensive Deductible:
                        </td>
                        <td>
                            <b>$</b> <input list="dL7" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="dL7">
                                <option>Not Purchased</option>
                                <option>250,000</option>
                                <option>500,000</option>
                                <option>1,000,000</option>
                            </datalist>
                        </td>
                        <td className="fw-bold d-flex align-items-center">
                            On Vehicle &nbsp;&nbsp;#1&nbsp;<input className="me-3" type="checkbox"/>
                            2&nbsp;<input className="me-3" type="checkbox"/>
                            3&nbsp;<input className="me-3" type="checkbox"/>
                            4&nbsp;<input className="me-3" type="checkbox"/>
                            5&nbsp;<input className="me-3" type="checkbox"/>
                            6&nbsp;<input type="checkbox"/>
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            Collision Deductible:
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
                        <td className="fw-bold d-flex align-items-center">
                            On Vehicle &nbsp;&nbsp;#1&nbsp;<input className="me-3" type="checkbox"/>
                            2&nbsp;<input className="me-3" type="checkbox"/>
                            3&nbsp;<input className="me-3" type="checkbox"/>
                            4&nbsp;<input className="me-3" type="checkbox"/>
                            5&nbsp;<input className="me-3" type="checkbox"/>
                            6&nbsp;<input type="checkbox"/>
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            Theft and Fire Deductible:
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
                        <td className="fw-bold d-flex align-items-center">
                            On Vehicle &nbsp;&nbsp;#1&nbsp;<input className="me-3" type="checkbox"/>
                            2&nbsp;<input className="me-3" type="checkbox"/>
                            3&nbsp;<input className="me-3" type="checkbox"/>
                            4&nbsp;<input className="me-3" type="checkbox"/>
                            5&nbsp;<input className="me-3" type="checkbox"/>
                            6&nbsp;<input type="checkbox"/>
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            Additional Insured:
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
                    </tr>
                    <tr className="tr-h">
                        <td>
                            Special Equipment:
                        </td>
                        <td>
                            <b>$</b> <input list="dL11" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="dL11">
                                <option>Not Purchased</option>
                                <option>Excluded</option>
                                <option>Included</option>
                            </datalist>
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            Tool Coverage:
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
                            Trailer Interchange:
                        </td>
                        <td>
                            <b>$</b> <input list="dL13" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="dL13">
                                <option>Not Purchased</option>
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
                        <td className="fw-bold">
                            <b><u>Deductible:</u> $</b> <input list="dL17" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="dL17">
                                <option>Not Purchased</option>
                                <option>2,500</option>
                                <option>3,500</option>
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

        
            <table className="mt-3 font-10 tb">
                <thead>
                    <tr>
                        <td className="text-center border border-dark fw-bold" colspan="2">Salvage Title</td>
                        <td colspan="5"></td>
                    </tr>
                </thead>
                <tbody>
                <tr className="text-center tr-h fw-bold">
                    <td className="border-start border-dark">Yes</td>
                    <td className="border-end border-dark">No</td>
                    <td>Year</td>
                    <td>Make</td>
                    <td>Model</td>
                    <td>VIN #</td>
                    <td>Stated Value</td>
                </tr>
                <tr className="text-center tr-h">
                    <td className="border-start border-dark">
                        <input type="checkbox"/>
                    </td>
                    <td className="border-end border-dark">
                        <input type="checkbox"/>
                    </td>
                    <td className="fw-bold">
                        <span className="ms-2">#1 <input style={{width:"40px"}} className="text-center input-default" maxlength="4" onChange={e => setVYear1(e.target.value)}/></span>
                    </td>
                    <td>
                        <input style={{width:"110px"}} className="text-center input-default" maxlength="16" onChange={e => setVMake1(e.target.value)}/> 
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
                </tr>
                <tr className="text-center tr-h">
                    <td className="border-start border-dark">
                        <input type="checkbox"/>
                    </td>
                    <td className="border-end border-dark">
                        <input type="checkbox"/>
                    </td>
                    <td className="fw-bold">
                        <span className="ms-2">#2 <input style={{width:"40px"}} className="text-center input-default" maxlength="4" onChange={e => setVYear2(e.target.value)}/></span>
                    </td>
                    <td>
                        <input style={{width:"110px"}} className="text-center input-default" maxlength="16" onChange={e => setVMake2(e.target.value)}/> 
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
                </tr>
                <tr className="text-center tr-h">
                    <td className="border-start border-dark">
                        <input type="checkbox"/>
                    </td>
                    <td className="border-end border-dark">
                        <input type="checkbox"/>
                    </td>
                    <td className="fw-bold">
                        <span className="ms-2">#3 <input style={{width:"40px"}} className="text-center input-default" maxlength="4" onChange={e => setVYear3(e.target.value)}/></span>
                    </td>
                    <td>
                        <input style={{width:"110px"}} className="text-center input-default" maxlength="16" onChange={e => setVMake3(e.target.value)}/> 
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
                </tr>
                <tr className="text-center tr-h">
                    <td className="border-start border-dark">
                        <input type="checkbox"/>
                    </td>
                    <td className="border-end border-dark">
                        <input type="checkbox"/>
                    </td>
                    <td className="fw-bold">
                        <span className="ms-2">#4 <input style={{width:"40px"}} className="text-center input-default" maxlength="4" onChange={e => setVYear4(e.target.value)}/></span>
                    </td>
                    <td>
                        <input style={{width:"110px"}} className="text-center input-default" maxlength="16" onChange={e => setVMake4(e.target.value)}/> 
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
                </tr>
                <tr className="text-center tr-h">
                    <td className="border-start border-dark">
                        <input type="checkbox"/>
                    </td>
                    <td className="border-end border-dark">
                        <input type="checkbox"/>
                    </td>
                    <td className="fw-bold">
                        <span className="ms-2">#5 <input style={{width:"40px"}} className="text-center input-default" maxlength="4" onChange={e => setVYear5(e.target.value)}/></span>
                    </td>
                    <td>
                        <input style={{width:"110px"}} className="text-center input-default" maxlength="16" onChange={e => setVMake5(e.target.value)}/> 
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
                </tr>
                <tr className="text-center tr-h">
                    <td className="border-start border-bottom border-dark">
                        <input type="checkbox"/>
                    </td>
                    <td className="border-end border-bottom border-dark">
                        <input type="checkbox"/>
                    </td>
                    <td className="fw-bold">
                        <span className="ms-2">#6 <input style={{width:"40px"}} className="text-center input-default" maxlength="4" onChange={e => setVYear6(e.target.value)}/></span>
                    </td>
                    <td>
                        <input style={{width:"110px"}} className="text-center input-default" maxlength="16" onChange={e => setVMake6(e.target.value)}/> 
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
                </tr>
                </tbody>
            </table>

            <table className="d-flex justify-content-center mt-3 font-10">
                <tbody>
                    {/* <tr className="text-center fw-bold font-14">
                        <td colspan="8" >Vehicles in Use</td>
                    </tr> */}
                    <tr className="text-center fw-bold font-11">
                        <td className="border border-dark">Vehicles in Use</td>
                        <td className="border border-dark">States:</td>
                        <td className="border border-dark">Stops per day:</td>
                        <td className="border border-dark">Miles Radius:</td>
                        <td className="border border-dark">Telematics</td>
                    </tr>
                    <tr>
                        <td>
                            1.- <input list="dLV1" style={{width: "140px"}} className="text-center input-default"/>
                            <datalist id="dLV1">
                                <option>Commercial</option>
                                <option>Personal</option>
                                <option>Commercial & Personal</option>
                            </datalist>
                        </td>
                        <td>
                            <input list="states1" style={{width: "140px"}} className="text-center input-default"/>
                            <datalist id="states1">
                                <option>California Only</option>
                                <option>11 Western States</option>
                                <option>27 Western States</option>
                                <option>27 Western + Texas</option>
                                <option>48 Continental States</option>
                            </datalist>
                        </td>
                        <td className="text-center">
                            <input list="dLV3" style={{width: "60px"}} className="text-center input-default"/>
                            <datalist id="dLV3">
                                <option>N/A</option>
                            </datalist>
                        </td>
                        <td className="text-center">
                            <Input className="text-center" width="70px" maxlength="10"/>
                        </td>
                        <td className="d-flex align-items-center">
                            YES<input className="ms-1 me-3" type="checkbox"/>
                            NO<input className="ms-1" type="checkbox"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            2.- <input list="dLV4" style={{width: "140px"}} className="text-center input-default"/>
                            <datalist id="dLV4">
                                <option>Commercial</option>
                                <option>Personal</option>
                                <option>Commercial & Personal</option>
                            </datalist>
                        </td>
                        <td>
                            <input list="states2" style={{width: "140px"}} className="text-center input-default"/>
                            <datalist id="states2">
                                <option>California Only</option>
                                <option>11 Western States</option>
                                <option>27 Western States</option>
                                <option>27 Western + Texas</option>
                                <option>48 Continental States</option>
                            </datalist>
                        </td>
                        <td className="text-center">
                            <input list="dLV6" style={{width: "60px"}} className="text-center input-default"/>
                            <datalist id="dLV6">
                                <option>N/A</option>
                            </datalist>
                        </td>
                        <td className="text-center">
                            <Input className="text-center" width="70px" maxlength="10"/>
                        </td>
                        <td className="d-flex align-items-center">
                            YES<input className="ms-1 me-3" type="checkbox"/>
                            NO<input className="ms-1" type="checkbox"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            3.- <input list="dLV7" style={{width: "140px"}} className="text-center input-default"/>
                            <datalist id="dLV7">
                                <option>Commercial</option>
                                <option>Personal</option>
                                <option>Commercial & Personal</option>
                            </datalist>
                        </td>
                        <td>
                            <input list="states3" style={{width: "140px"}} className="text-center input-default"/>
                            <datalist id="states3">
                                <option>California Only</option>
                                <option>11 Western States</option>
                                <option>27 Western States</option>
                                <option>27 Western + Texas</option>
                                <option>48 Continental States</option>
                            </datalist>
                        </td>
                        <td className="text-center">
                            <input list="dLV9" style={{width: "60px"}} className="text-center input-default"/>
                            <datalist id="dLV9">
                                <option>N/A</option>
                            </datalist>
                        </td>
                        <td className="text-center">
                            <Input className="text-center" width="70px" maxlength="10"/>
                        </td>
                        <td className="d-flex align-items-center">
                            YES<input className="ms-1 me-3" type="checkbox"/>
                            NO<input className="ms-1" type="checkbox"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            4.- <input list="dLV10" style={{width: "140px"}} className="text-center input-default"/>
                            <datalist id="dLV10">
                                <option>Commercial</option>
                                <option>Personal</option>
                                <option>Commercial & Personal</option>
                            </datalist>
                        </td>
                        <td>
                            <input list="states4" style={{width: "140px"}} className="text-center input-default"/>
                            <datalist id="states4">
                                <option>California Only</option>
                                <option>11 Western States</option>
                                <option>27 Western States</option>
                                <option>27 Western + Texas</option>
                                <option>48 Continental States</option>
                            </datalist>
                        </td>
                        <td className="text-center">
                            <input list="dLV12" style={{width: "60px"}} className="text-center input-default"/>
                            <datalist id="dLV12">
                                <option>N/A</option>
                            </datalist>
                        </td>
                        <td className="text-center">
                            <Input className="text-center" width="70px" maxlength="10"/>
                        </td>
                        <td className="d-flex align-items-center">
                            YES<input className="ms-1 me-3" type="checkbox"/>
                            NO<input className="ms-1" type="checkbox"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            5.- <input list="dLV13" style={{width: "140px"}} className="text-center input-default"/>
                            <datalist id="dLV13">
                                <option>Commercial</option>
                                <option>Personal</option>
                                <option>Commercial & Personal</option>
                            </datalist>
                        </td>
                        <td>
                            <input list="states5" style={{width: "140px"}} className="text-center input-default"/>
                            <datalist id="states5">
                                <option>California Only</option>
                                <option>11 Western States</option>
                                <option>27 Western States</option>
                                <option>27 Western + Texas</option>
                                <option>48 Continental States</option>
                            </datalist>
                        </td>
                        <td className="text-center">
                            <input list="dLV15" style={{width: "60px"}} className="text-center input-default"/>
                            <datalist id="dLV15">
                                <option>N/A</option>
                            </datalist>
                        </td>
                        <td className="text-center">
                            <Input className="text-center" width="70px" maxlength="10"/>
                        </td>
                        <td className="d-flex align-items-center">
                            YES<input className="ms-1 me-3" type="checkbox"/>
                            NO<input className="ms-1" type="checkbox"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            6.- <input list="dLV16" style={{width: "140px"}} className="text-center input-default"/>
                            <datalist id="dLV16">
                                <option>Commercial</option>
                                <option>Personal</option>
                                <option>Commercial & Personal</option>
                            </datalist>
                        </td>
                        <td>
                            <input list="states6" style={{width: "140px"}} className="text-center input-default"/>
                            <datalist id="states6">
                                <option>California Only</option>
                                <option>11 Western States</option>
                                <option>27 Western States</option>
                                <option>27 Western + Texas</option>
                                <option>48 Continental States</option>
                            </datalist>
                        </td>
                        <td className="text-center">
                            <input list="dLV18" style={{width: "60px"}} className="text-center input-default"/>
                            <datalist id="dLV18">
                                <option>N/A</option>
                            </datalist>
                        </td>
                        <td className="text-center">
                            <Input className="text-center" width="70px" maxlength="10"/>
                        </td>
                        <td className="d-flex align-items-center">
                            YES<input className="ms-1 me-3" type="checkbox"/>
                            NO<input className="ms-1" type="checkbox"/>
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
                    <td className="d-flex align-items-center">
                        Filings Purchased:
                        <b className="ms-3">MCP</b><input className="ms-2 me-3" type="checkbox" checked={mcp} onChange={e => setMCP(e.target.checked)}/>
                        <b>ICC</b><input className="ms-2 me-3" type="checkbox" checked={icc} onChange={e => setICC(e.target.checked)}/>
                        <b>DOT</b><input className="ms-2 me-3" type="checkbox" checked={dot} onChange={e => setDOT(e.target.checked)}/>
                        <b>PUC</b><input className="ms-2 me-3" type="checkbox" checked={puc} onChange={e => setPUC(e.target.checked)}/>
                        <b>NONE</b><input className="ms-2" type="checkbox" checked={none} onChange={e => setNONE(e.target.checked)}/>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        Permit Numbers (If Purchased): <input 
                            style={{width: "500px"}} 
                            className="text-center input-default" 
                            maxlength="20" 
                            onChange={e => setPNumbers(e.target.value)}
                            {... none === true ? {value:"None"} : {value: pNumbers}}
                        />
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