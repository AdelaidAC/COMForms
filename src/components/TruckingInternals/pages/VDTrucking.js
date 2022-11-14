import React from "react";
import CDate from "../../CDate";
import Input from "../../Input";
import Logo from "../../Logo";
import Title from "../../Title";

export default function VDTrucking({name, initials, address, phone}) {
    return (
        <div className="sheet font-11">
            <Logo />

            <Title text="VERBAL DISCLOSURE" />

            <div className='d-flex justify-content-between mt-3 text-center'>
                <div>
                    Name:
                    <Input width="250px" name="VDTO_ApplicantName"/>
                </div>
                <div>
                    DBA:
                    <Input width="350px" name="VDTO_ApplicantDBA"/>
                </div>
            </div>

            <p>
                I <Input width="400px" name="VDTO_ApplicantName2"/> hereby appoint Adriana's Insurance Services Inc. as my Broker / Attorney in fact
                to sign papers, applications, documents that are necessary in order to secure the insurance coverage 
                specified below. I have also been advised of the importance of the effective date of the policy and have 
                chosen to have coverage start on: <CDate/>
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
                <td className="fw-bold text-decoration-underline" colspan="2" rowspan="5">
                    Liability Carrier
                    <br/>
                    <select name="myLiCarrier">
                        <option value="Allied Premium RRG">Allied Premium RRG</option>
                        <option value="Dongbu">Dongbu</option>
                        <option value="Global Hawk RRG">Global Hawk RRG</option>
                        <option value="National Indemnity">National Indemnity</option>
                        <option value="Progressive">Progressive</option>
                        <option value="Redwood">Redwood</option>
                        <option value="Scottsdale">Scottsdale</option>
                        <option value="Sutter">Sutter"</option>
                    </select>
                </td>
                <td>
                    Liability Bodily Injury:
                </td>
                <td>
                    $
                    <select className="ms-1" name="myLBInjury">
                        <option value="15,000/30,000">15,000/30,000</option>
                        <option value="25,000/50,000">25,000/50,000</option>
                        <option value="50,000/100,000">50,000/100,000</option>
                        <option value="100,000/300,000">100,000/300,000</option>
                        <option value="100,000">100,000</option>
                        <option value="300,000">300,000</option>
                        <option value="500,000">500,000</option>
                        <option value="750,000">750,000</option>
                        <option value="1,000,000">1,000,000</option>
                        <option value="Not Purchased">Not Purchased</option>
                    </select>
                </td>
                <td className="fw-bold" rowspan="2">
                    <span><u>Liability Deductible:</u> $</span>
                    <select className="ms-1" name="myLiabilityDeductible">
                        <option value="None">None</option>
                        <option value="250">250</option>
                        <option value="500">500</option>
                        <option value="1,000">1,000</option>
                        <option value="1,500">1,500</option>
                        <option value="2,000">2,000</option>
                        <option value="2,500">2,500</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    Liability Property Damage:
                </td>
                <td>
                    $
                    <select className="ms-1" name="myLPDamage">
                        <option value="***CSL***">***CSL***</option>
                        <option value="5,000">5,000</option>
                        <option value="10,000">10,000</option>
                        <option value="15,000">15,000</option>
                        <option value="20,000">20,000</option>
                        <option value="25,000">25,000</option>
                        <option value="50,000">50,000</option>
                        <option value="100,000">100,000</option>
                        <option value="Not Purchased">Not Purchased</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    Medical Payment:
                </td>
                <td>
                    $
                    <select className="ms-1" name="myMPayment">
                        <option value="Not Purchased">Not Purchased</option>
                        <option value="500">500</option>
                        <option value="1,000">1,000</option>
                        <option value="2,000">2,000</option>
                        <option value="3,000">3,000</option>
                        <option value="5,000">5,000</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    Uninsured Motorist BI:
                </td>
                <td>
                    $
                    <select className="ms-1" name="myUMBi">
                        <option value="Rejected">Rejected</option>
                        <option value="15,000/30,000">15,000/30,000</option>
                        <option value="25,000/50,000">25,000/50,000</option>
                        <option value="30,000/60,000">30,000/60,000</option>
                        <option value="100,000">100,000</option>
                        <option value="300,000">300,000</option>
                        <option value="500,000">500,000</option>
                        <option value="1,000,000">1,000,000</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    Uninsured Motorist PD:
                </td>
                <td>
                    $
                    <select className="ms-1" name="myUMPd">
                        <option value="Rejected">Rejected</option>
                        <option value="3,500">3,500</option>
                        <option value="5,000">5,000</option>
                        <option value="CDW">CDW</option>
                        <option value="***CSL***">***CSL***</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td className="fw-bold text-decoration-underline" colspan="2">
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
                    $
                    <select className="ms-1" name="myELLimits">
                        <option value="250,000">250,000</option>
                        <option value="500,000">500,000</option>
                        <option value="1,000,000">1,000,000</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td className="fw-bold text-decoration-underline" colspan="2" rowspan="3">
                    Phys. Damage Carrier
                    <br/>
                    <select name="myPDCarrier">
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
                    $
                    <select className="ms-1" name="myCDeductible">
                        <option value="Not Purchased">Not Purchased</option>
                        <option value="250">250</option>
                        <option value="500">500</option>
                        <option value="1000">1000</option>
                        <option value="1500">1500</option>
                        <option value="2000">2000</option>
                        <option value="2500">2500</option>
                    </select>
                </td>
                <td className="fw-bold">
                    #1<input className="me-1" type="checkbox" name="CD1" value="1"/>
                    2<input className="me-1" type="checkbox" name="CD2" value="2"/>
                    3<input className="me-1" type="checkbox" name="CD3" value="3"/>
                    4<input className="me-1" type="checkbox" name="CD4" value="4"/>
                    5<input className="me-1" type="checkbox" name="CD5" value="5"/>
                    6<input className="me-1" type="checkbox" name="CD6" value="6"/>
                    7<input className="me-1" type="checkbox" name="CD7" value="7"/>
                    8<input className="me-1" type="checkbox" name="CD8" value="8"/>
                    9<input className="me-1" type="checkbox" name="CD9" value="9"/>
                    10<input className="me-1" type="checkbox" name="CD10" value="10"/>
                </td>
            </tr>
            <tr>
                <td>
                    Collision Deductible:
                </td>
                <td>
                    $
                    <select className="ms-1" name="myCoDeductible">
                        <option value="Not Purchased">Not Purchased</option>
                        <option value="250">250</option>
                        <option value="500">500</option>
                        <option value="1000">1000</option>
                        <option value="1500">1500</option>
                        <option value="2000">2000</option>
                        <option value="2500">2500</option>
                    </select>
                </td>
                <td className="fw-bold">
                    #1<input className="me-1" type="checkbox" name="COLL1" value="1"/>
                    2<input className="me-1" type="checkbox" name="COLL2" value="2"/>
                    3<input className="me-1" type="checkbox" name="COLL3" value="3"/>
                    4<input className="me-1" type="checkbox" name="COLL4" value="4"/>
                    5<input className="me-1" type="checkbox" name="COLL5" value="5"/>
                    6<input className="me-1" type="checkbox" name="COLL6" value="6"/>
                    7<input className="me-1" type="checkbox" name="COLL7" value="7"/>
                    8<input className="me-1" type="checkbox" name="COLL8" value="8"/>
                    9<input className="me-1" type="checkbox" name="COLL9" value="9"/>
                    10<input className="me-1" type="checkbox" name="COLL10" value="10"/>
                </td>
            </tr>
            <tr>
                <td>
                    Theft and Fire Deductible:
                </td>
                <td>
                    $
                    <select className="ms-1" name="myTFDeductible">
                        <option value="Not Purchased">Not Purchased</option>
                        <option value="250">250</option>
                        <option value="500">500</option>
                        <option value="1000">1000</option>
                        <option value="1500">1500</option>
                        <option value="2000">2000</option>
                        <option value="2500">2500</option>
                    </select>
                </td>
                <td className="fw-bold">
                    #1<input className="me-1" type="checkbox" name="TF1" value="1"/>
                    2<input className="me-1" type="checkbox" name="TF2" value="2"/>
                    3<input className="me-1" type="checkbox" name="TF3" value="3"/>
                    4<input className="me-1" type="checkbox" name="TF4" value="4"/>
                    5<input className="me-1" type="checkbox" name="TF5" value="5"/>
                    6<input className="me-1" type="checkbox" name="TF6" value="6"/>
                    7<input className="me-1" type="checkbox" name="TF7" value="7"/>
                    8<input className="me-1" type="checkbox" name="TF8" value="8"/>
                    9<input className="me-1" type="checkbox" name="TF9" value="9"/>
                    10<input className="me-1" type="checkbox" name="TF10" value="10"/>
                </td>
            </tr>
            <tr>
                <td className="fw-bold text-decoration-underline" colspan="2" rowspan="3">
                    Cargo Carrier
                    <br/>
                    <select name="myCCarrier">
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
                    $
                    <select className="ms-1" name="myTInterchange">
                        <option value="Excluded">Excluded</option>
                        <option value="Included">Included</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    Motor Truck Cargo:
                </td>
                <td>
                    $
                    <select className="ms-1" name="myMTCargo">
                        <option value="Not Purchased">Not Purchased</option>
                        <option value="30,000">30,000</option>
                        <option value="50,000">50,000</option>
                        <option value="100,000">100,000</option>
                        <option value="300,000">300,000</option>
                        <option value="500,000">500,000</option>
                        <option value="1,000,000">1,000,000</option>
                    </select>
                </td>
                <td className="fw-bold">
                    <span><u>Deductible:</u> $</span>
                    <select className="ms-1" name="myMTCDeductible">
                        <option value="Not Purchased">Not Purchased</option>
                        <option value="250">250</option>
                        <option value="500">500</option>
                        <option value="1,000">1,000</option>
                        <option value="1,500">1,500</option>
                        <option value="2,000">2,000</option>
                        <option value="2,500">2,500</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    Reefer Breakdown:
                </td>
                <td>
                    $
                    <select className="ms-1" name="myRBreakdown">
                        <option value="Excluded">Excluded</option>
                        <option value="Included">Included</option>
                    </select>
                </td>
                <td className="fw-bold">
                    <span><u>Deductible:</u> $</span>
                    <select className="ms-1" name="myRBDeductible">
                        <option value="2,500">2,500</option>
                        <option value="3,500">3,500</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td colspan="2"/>
                <td>
                    Additional Insured:
                </td>
                <td>
                    $
                    <select className="ms-1" name="myAddInsured">
                        <option value="Not Purchased">Not Purchased</option>
                        <option value="1 Purchased">1 Purchased</option>
                        <option value="2 Purchased">2 Purchased</option>
                        <option value="3 Purchased">3 Purchased</option>
                        <option value="4 Purchased">4 Purchased</option>
                    </select>
                </td>
            </tr>
            </tbody>
            </table>

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

            <div className="mx-5 mt-3">
                <div className="border border-1 border-dark mt-1 mb-2"></div>
                <div className='d-flex justify-content-between mx-5 text-center'>
                    <div >
                        <label><strong>TOTAL:</strong></label>
                        <Input width = "250" name="VDTruckingOne_Total"/>
                    </div>
                    <div>
                        <label><strong>Down Payment:</strong></label>
                        <Input width = "250" name="VDTruckingOne_Down"/>
                    </div>
                    <div>
                        <label><strong>Payments of:</strong></label>
                        <Input width = "250" name="VDTruckingOne_Monthly"/>
                    </div>
                </div>
                <div className="border border-1 border-dark mt-2 mb-1"></div>
            </div>

            <div className="text-center">
                <span>
                    Business Type:
                    <Input width = "450" name="VDTruckingOne_BusinessType"/>
                    <br/>
                    Filings Purchased: <strong>MCP</strong> 
                    <input className="ms-1 me-2" type="checkbox" name="VDTruckingOne_MCP" value="MCP"/>
                    <strong>ICC</strong> 
                    <input className="ms-1 me-2" type="checkbox" name="VDTruckingOne_ICC" value="ICC"/>
                    <strong>DOT</strong> 
                    <input className="ms-1 me-2" type="checkbox" name="VDTruckingOne_DOT" value="DOT"/>
                    <strong>PUC</strong> 
                    <input className="ms-1 me-2" type="checkbox" name="VDTruckingOne_PUC" value="PUC"/>
                    <strong>NONE</strong> 
                    <input className="ms-1" type="checkbox" name="VDTruckingOne_NONE" value="NONE"/>
                    <br/>
                    Permit Numbers (If Purchased):
                    <Input width = "450" name="VDTruckingOne_PermitNumbers"/>
                    <br/>
                    <strong>All the above described coverage and conditions have been reviewed and approved by the signer below.</strong>
                </span>
            </div>

            <div className="d-flex justify-content-between my-3">
                <div>
                    Insured’s Signature:
                    <Input width="400px" name="VDTruckingOne_ISignature"/>
                </div>
                <div>
                    Date:
                    <CDate/>
                </div>
            </div>
            
        </div>
    );
}