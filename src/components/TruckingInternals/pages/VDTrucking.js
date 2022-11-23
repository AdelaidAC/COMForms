import React from "react";
import CurrencyFormat from 'react-currency-format';
import Input from "../../Input";
import Logo from "../../Logo";
import Title from "../../Title";

export default function VDTrucking({name, date, setDateVD, date2}) {
    return (
        <div className="sheet font-10 text-justify">
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

            <p className="mt-3">
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
                        <td colspan="5" className="fw-bold text-center font-14">Coverage Limits</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="tr-h">
                        <td className="fw-bold text-decoration-underline text-center" colspan="2" rowspan="5">
                            Liability Carrier
                            <br/>
                            <select name="myLiCarrier" className="text-center">
                                <option>Allied Premium RRG</option>
                                <option>Dongbu</option>
                                <option>Global Hawk RRG</option>
                                <option>National Indemnity</option>
                                <option>Progressive</option>
                                <option>Redwood</option>
                                <option>Scottsdale</option>
                                <option>Sutter</option>
                            </select>
                        </td>
                        <td>
                            Liability Bodily Injury:
                        </td>
                        <td>
                            <b>$</b> <input list="s1" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="s1">
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
                        <td className="fw-bold" rowspan="2">
                            <b><u>Liability Deductible:</u> $</b> <input list="s2" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="s2">
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
                            <b>$</b> <input list="s3" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="s3">
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
                            <b>$</b> <input list="s4" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="s4">
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
                            <b>$</b> <input list="s5" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="s5">
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
                            Uninsured Motorist PD:
                        </td>
                        <td>
                            <b>$</b> <input list="s6" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="s6">
                                <option>Rejected</option>
                                <option>3,500</option>
                                <option>5,000</option>
                                <option>CDW</option>
                                <option>***CSL***</option>
                            </datalist>
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td className="fw-bold text-decoration-underline text-center" colspan="2">
                            Excess Liability Carrier
                            <br/>
                            <select name="myELCarrier">
                                <option value="Golden Bear">Golden Bear</option>
                            </select>
                        </td>
                        <td>
                            Excess Liability Limits:
                        </td>
                        <td>
                            <b>$</b> <input list="s7" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="s7">
                                <option>250,000</option>
                                <option>500,000</option>
                                <option>1,000,000</option>
                            </datalist>
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td className="fw-bold text-decoration-underline text-center" colspan="2" rowspan="3">
                            Phys. Damage Carrier
                            <br/>
                            <select name="myPDCarrier" className="text-center">
                                <option value="Adriatic">Adriatic</option>
                                <option value="Allied Premium RRG">Allied Premium RRG</option>
                                <option value="Dongbu">Dongbu</option>
                                <option value="Global Hawk RRG">Global Hawk RRG</option>
                                <option value="Lloyds of London">Lloyds of London</option>
                                <option value="National Interstate">National Interstate</option>
                                <option value="PMA">PMA</option>
                                <option value="Progressive">Progressive</option>
                                <option value="Redwood">Redwood</option>
                                <option value="Scottsdale">Scottsdale</option>
                                <option value="Sutter">Sutter</option>
                            </select>
                        </td>
                        <td>
                            Comprehensive Deductible:
                        </td>
                        <td>
                            <b>$</b> <input list="s8" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="s8">
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
                            #1 <input className="ms-1 me-2" type="checkbox"/>
                            2 <input className="ms-1 me-2" type="checkbox"/>
                            3 <input className="ms-1 me-2" type="checkbox"/>
                            4 <input className="ms-1 me-2" type="checkbox"/>
                            5 <input className="ms-1 me-2" type="checkbox"/>
                            6 <input className="ms-1 me-2" type="checkbox"/>
                            7 <input className="ms-1 me-2" type="checkbox"/>
                            8 <input className="ms-1 me-2" type="checkbox"/>
                            9 <input className="ms-1 me-2" type="checkbox"/>
                            10 <input className="ms-1" type="checkbox"/>
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            Collision Deductible:
                        </td>
                        <td>
                            <b>$</b> <input list="s9" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="s9">
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
                            #1 <input className="ms-1 me-2" type="checkbox"/>
                            2 <input className="ms-1 me-2" type="checkbox"/>
                            3 <input className="ms-1 me-2" type="checkbox"/>
                            4 <input className="ms-1 me-2" type="checkbox"/>
                            5 <input className="ms-1 me-2" type="checkbox"/>
                            6 <input className="ms-1 me-2" type="checkbox"/>
                            7 <input className="ms-1 me-2" type="checkbox"/>
                            8 <input className="ms-1 me-2" type="checkbox"/>
                            9 <input className="ms-1 me-2" type="checkbox"/>
                            10 <input className="ms-1" type="checkbox"/>
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            Theft and Fire Deductible:
                        </td>
                        <td>
                            <b>$</b> <input list="s10" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="s10">
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
                            #1 <input className="ms-1 me-2" type="checkbox"/>
                            2 <input className="ms-1 me-2" type="checkbox"/>
                            3 <input className="ms-1 me-2" type="checkbox"/>
                            4 <input className="ms-1 me-2" type="checkbox"/>
                            5 <input className="ms-1 me-2" type="checkbox"/>
                            6 <input className="ms-1 me-2" type="checkbox"/>
                            7 <input className="ms-1 me-2" type="checkbox"/>
                            8 <input className="ms-1 me-2" type="checkbox"/>
                            9 <input className="ms-1 me-2" type="checkbox"/>
                            10 <input className="ms-1" type="checkbox"/>
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td className="fw-bold text-decoration-underline text-center" colspan="2" rowspan="3">
                            Cargo Carrier
                            <br/>
                            <select name="myCCarrier" className="text-center">
                                <option value="Adriatic">Adriatic</option>
                                <option value="Allied Premium RRG">Allied Premium RRG</option>
                                <option value="Dongbu">Dongbu</option>
                                <option value="Global Hawk RRG">Global Hawk RRG</option>
                                <option value="Lloyds of London">Lloyds of London</option>
                                <option value="National Interstate">National Interstate</option>
                                <option value="PMA">PMA</option>
                                <option value="Progressive">Progressive</option>
                                <option value="Redwood">Redwood</option>
                                <option value="Scottsdale">Scottsdale</option>
                                <option value="Sutter">Sutter</option>
                            </select>
                        </td>
                        <td>
                            Trailer Interchange:
                        </td>
                        <td>
                            <b>$</b> <input list="s11" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="s11">
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
                            <b>$</b> <input list="s12" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="s12">
                                <option>Not Purchased</option>
                                <option>30,000</option>
                                <option>50,000</option>
                                <option>100,000</option>
                                <option>300,000</option>
                                <option>500,000</option>
                                <option>1,000,000</option>
                            </datalist>
                        </td>
                        <td className="fw-bold">
                            <b><u>Deductible:</u> $</b> <input list="s15" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="s15">
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
                            <b>$</b> <input list="s13" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="s13">
                                <option>Excluded</option>
                                <option>Included</option>
                            </datalist>
                        </td>
                        <td className="fw-bold">
                            <b><u>Deductible:</u> $</b> <input list="s16" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="s16">
                                <option>2,500</option>
                                <option>3,500</option>
                            </datalist>
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td colspan="2"/>
                        <td>
                            Additional Insured:
                        </td>
                        <td>
                            <b>$</b> <input list="s14" className="input-default text-center fw-bold" style={{width: "125px"}} maxLength="15"/>
                            <datalist id="s14">
                                <option>Not Purchased</option>
                                <option>1 Purchased</option>
                                <option>2 Purchased</option>
                                <option>3 Purchased</option>
                                <option>4 Purchased</option>
                            </datalist>
                        </td>
                    </tr>
                </tbody>
            </table>

            {
                /*
                
                <table>
                <thead>
                    <tr className="text-decoration-underline text-center">
                        <th>Year</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>VIN #</th>
                        <th>Stated Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="fw-bold">
                            #1
                            <Input name="Year_One"/>
                        </td>
                        <td>
                            <Input width="70px" name="Make_One"/> 
                        </td>
                        <td>
                            <Input width="100px" name="Model_One"/> 
                        </td>
                        <td>
                            <Input width="90px" name="VIN_One"/> 
                        </td>
                        <td>
                            $
                            <select className="mx-1" name="Value_One">
                                <option value="None">None</option>
                            </select>
                            States:
                            <select className="mx-1" name="State_One">
                                <option value="CA Only">CA Only</option>
                                <option value="11 Western">11 Western</option>
                                <option value="11 West + TX">11 West + TX</option>
                                <option value="48 States">48 States</option>
                            </select>
                            Radius:
                            <Input width="50px" name="Miles_Radius_One"/> 
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            #2
                            <Input name="Year_Two"/>
                        </td>
                        <td>
                            <Input width="70px" name="Make_Two"/> 
                        </td>
                        <td>
                            <Input width="100px" name="Model_Two"/> 
                        </td>
                        <td>
                            <Input width="90px" name="VIN_Two"/> 
                        </td>
                        <td>
                            $
                            <select className="mx-1" name="Value_Two">
                                <option value="None">None</option>
                            </select>
                            States:
                            <select className="mx-1" name="State_Two">
                                <option value="CA Only">CA Only</option>
                                <option value="11 Western">11 Western</option>
                                <option value="11 West + TX">11 West + TX</option>
                                <option value="48 States">48 States</option>
                            </select>
                            Radius:
                            <Input width="50px" name="Miles_Radius_Two"/> 
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            #3
                            <Input name="Year_Three"/>
                        </td>
                        <td>
                            <Input width="70px" name="Make_Three"/> 
                        </td>
                        <td>
                            <Input width="100px" name="Model_Three"/> 
                        </td>
                        <td>
                            <Input width="90px" name="VIN_Three"/> 
                        </td>
                        <td>
                            $
                            <select className="mx-1" name="Value_Three">
                                <option value="None">None</option>
                            </select>
                            States:
                            <select className="mx-1" name="State_Three">
                                <option value="CA Only">CA Only</option>
                                <option value="11 Western">11 Western</option>
                                <option value="11 West + TX">11 West + TX</option>
                                <option value="48 States">48 States</option>
                            </select>
                            Radius:
                            <Input width="50px" name="Miles_Radius_Three"/> 
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            #4
                            <Input name="Year_Four"/>
                        </td>
                        <td>
                            <Input width="70px" name="Make_Four"/> 
                        </td>
                        <td>
                            <Input width="100px" name="Model_Four"/> 
                        </td>
                        <td>
                            <Input width="90px" name="VIN_Four"/> 
                        </td>
                        <td>
                            $
                            <select className="mx-1" name="Value_Four">
                                <option value="None">None</option>
                            </select>
                            States:
                            <select className="mx-1" name="State_Four">
                                <option value="CA Only">CA Only</option>
                                <option value="11 Western">11 Western</option>
                                <option value="11 West + TX">11 West + TX</option>
                                <option value="48 States">48 States</option>
                            </select>
                            Radius:
                            <Input width="50px" name="Miles_Radius_Four"/> 
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            #5
                            <Input name="Year_Five"/>
                        </td>
                        <td>
                            <Input width="70px" name="Make_Five"/> 
                        </td>
                        <td>
                            <Input width="100px" name="Model_Five"/> 
                        </td>
                        <td>
                            <Input width="90px" name="VIN_Five"/> 
                        </td>
                        <td>
                            $
                            <select className="mx-1" name="Value_Five">
                                <option value="None">None</option>
                            </select>
                            States:
                            <select className="mx-1" name="State_Five">
                                <option value="CA Only">CA Only</option>
                                <option value="11 Western">11 Western</option>
                                <option value="11 West + TX">11 West + TX</option>
                                <option value="48 States">48 States</option>
                            </select>
                            Radius:
                            <Input width="50px" name="Miles_Radius_Five"/> 
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            #6
                            <Input name="Year_Six"/>
                        </td>
                        <td>
                            <Input width="70px" name="Make_Six"/> 
                        </td>
                        <td>
                            <Input width="100px" name="Model_Six"/> 
                        </td>
                        <td>
                            <Input width="90px" name="VIN_Six"/> 
                        </td>
                        <td>
                            $
                            <select className="mx-1" name="Value_Six">
                                <option value="None">None</option>
                            </select>
                            States:
                            <select className="mx-1" name="State_Six">
                                <option value="CA Only">CA Only</option>
                                <option value="11 Western">11 Western</option>
                                <option value="11 West + TX">11 West + TX</option>
                                <option value="48 States">48 States</option>
                            </select>
                            Radius:
                            <Input width="50px" name="Miles_Radius_Six"/> 
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            #7
                            <Input name="Year_Seven"/>
                        </td>
                        <td>
                            <Input width="70px" name="Make_Seven"/> 
                        </td>
                        <td>
                            <Input width="100px" name="Model_Seven"/> 
                        </td>
                        <td>
                            <Input width="90px" name="VIN_Seven"/> 
                        </td>
                        <td>
                            $
                            <select className="mx-1" name="Value_Seven">
                                <option value="None">None</option>
                            </select>
                            States:
                            <select className="mx-1" name="State_Seven">
                                <option value="CA Only">CA Only</option>
                                <option value="11 Western">11 Western</option>
                                <option value="11 West + TX">11 West + TX</option>
                                <option value="48 States">48 States</option>
                            </select>
                            Radius:
                            <Input width="50px" name="Miles_Radius_Seven"/> 
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            #8
                            <Input name="Year_Eight"/>
                        </td>
                        <td>
                            <Input width="70px" name="Make_Eight"/> 
                        </td>
                        <td>
                            <Input width="100px" name="Model_Eight"/> 
                        </td>
                        <td>
                            <Input width="90px" name="VIN_Eight"/> 
                        </td>
                        <td>
                            $
                            <select className="mx-1" name="Value_Eight">
                                <option value="None">None</option>
                            </select>
                            States:
                            <select className="mx-1" name="State_Eight">
                                <option value="CA Only">CA Only</option>
                                <option value="11 Western">11 Western</option>
                                <option value="11 West + TX">11 West + TX</option>
                                <option value="48 States">48 States</option>
                            </select>
                            Radius:
                            <Input width="50px" name="Miles_Radius_Eight"/> 
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            #9
                            <Input name="Year_Nine"/>
                        </td>
                        <td>
                            <Input width="70px" name="Make_Nine"/> 
                        </td>
                        <td>
                            <Input width="100px" name="Model_Nine"/> 
                        </td>
                        <td>
                            <Input width="90px" name="VIN_Nine"/> 
                        </td>
                        <td>
                            $
                            <select className="mx-1" name="Value_Nine">
                                <option value="None">None</option>
                            </select>
                            States:
                            <select className="mx-1" name="State_Nine">
                                <option value="CA Only">CA Only</option>
                                <option value="11 Western">11 Western</option>
                                <option value="11 West + TX">11 West + TX</option>
                                <option value="48 States">48 States</option>
                            </select>
                            Radius:
                            <Input width="50px" name="Miles_Radius_Nine"/> 
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            #10
                            <Input name="Year_Ten"/>
                        </td>
                        <td>
                            <Input width="70px" name="Make_Ten"/>        
                        </td>
                        <td>
                            <Input width="100px" name="Model_Ten"/> 
                        </td>
                        <td>
                            <Input width="90px" name="VIN_Ten"/> 
                        </td>
                        <td>
                            $
                            <select className="mx-1" name="Value_Ten">
                                <option value="None">None</option>
                            </select>
                            States:
                            <select className="mx-1" name="State_Ten">
                                <option value="CA Only">CA Only</option>
                                <option value="11 Western">11 Western</option>
                                <option value="11 West + TX">11 West + TX</option>
                                <option value="48 States">48 States</option>
                            </select>
                            Radius:
                            <Input width="50px" name="Miles_Radius_Ten"/> 
                        </td>
                    </tr>
                </tbody>
            </table>
                
                */
            }

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
                        <Input width="30px" className="text-center" maxlength="3"/>
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

            <p className="fw-bold text-center my-3">
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