import React from "react";
import CDate from "../../CDate";
import Input from "../../Input";
import Logo from "../../Logo";
import Title from "../../Title";

export default function AssignedRisk({name, initials, address, phone}) {

    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
        <div className="sheet font-11">
            <Logo />

            <Title text="VERBAL DISCLOSURE" />

            <div className='d-flex justify-content-between mt-3 text-center'>
                <div>
                    Name:
                    <Input width="250px" name="VDTT_ApplicantName"/>
                </div>
                <div>
                    DBA:
                    <Input width="350px" name="VDTT_ApplicantDBA"/>
                </div>
            </div>

            <p>
                I <Input width="400px" name="VDTT_ApplicantName2"/> hereby appoint Adriana's Insurance Services Inc. as my Broker / Attorney in fact
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
                        <td className="fw-bold text-decoration-underline" rowspan="5">
                            Liability Carrier
                            <br/>
                            <select name="VDTT_LCarrier">
                                <option value="CAARP">CAARP</option>
                            </select>
                        </td>
                        <td>
                            Liability Bodily Injury:
                        </td>
                        <td>
                            $
                            <select className="ms-1" name="VDTT_LBInjury">
                                <option value="750,000">750,000</option>
                                <option value="1,000,000">1,000,000</option>
                                <option value="1,500,000">1,500,000</option>
                            </select>
                        </td>
                        <td className="fw-bold" rowspan="2">
                            <span><u>Liability Deductible:</u> $</span>
                            <select className="ms-1" name="VDTT_LDeductible">
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
                            <select className="ms-1" name="VDTT_LPDamage">
                                <option value="***CSL***">***CSL***</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Medical Payment:
                        </td>
                        <td>
                            $
                            <select className="ms-1" name="VDTT_MPayment">
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
                            <select className="ms-1" name="VDTT_UMBi">
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
                            <select className="ms-1" name="VDTT_UMPd">
                                <option value="Rejected">Rejected</option>
                                <option value="3,500">3,500</option>
                                <option value="5,000">5,000</option>
                                <option value="CDW">CDW</option>
                                <option value="***CSL***">***CSL***</option>
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
                            <Input name="VDTT_Year_One"/>
                        </td>
                        <td>
                            <Input width="70px" name="VDTT_Make_One"/> 
                        </td>
                        <td>
                            <Input width="100px" name="VDTT_Model_One"/> 
                        </td>
                        <td>
                            <Input width="90px" name="VDTT_VIN_One"/> 
                        </td>
                        <td>
                            $
                            <select className="mx-1" name="VDTT_Value_One">
                                <option value="None">None</option>
                            </select>
                            States:
                            <select className="mx-1" name="VDTT_State_One">
                                <option value="CA Only">CA Only</option>
                                <option value="11 Western">11 Western</option>
                                <option value="11 West + TX">11 West + TX</option>
                                <option value="48 States">48 States</option>
                            </select>
                            Radius:
                            <Input width="50px" name="VDTT_Miles_Radius_One"/> 
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            #2
                            <Input name="VDTT_Year_Two"/>
                        </td>
                        <td>
                            <Input width="70px" name="VDTT_Make_Two"/> 
                        </td>
                        <td>
                            <Input width="100px" name="VDTT_Model_Two"/> 
                        </td>
                        <td>
                            <Input width="90px" name="VDTT_VIN_Two"/> 
                        </td>
                        <td>
                            $
                            <select className="mx-1" name="VDTT_Value_Two">
                                <option value="None">None</option>
                            </select>
                            States:
                            <select className="mx-1" name="VDTT_State_Two">
                                <option value="CA Only">CA Only</option>
                                <option value="11 Western">11 Western</option>
                                <option value="11 West + TX">11 West + TX</option>
                                <option value="48 States">48 States</option>
                            </select>
                            Radius:
                            <Input width="50px" name="VDTT_Miles_Radius_Two"/> 
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            #3
                            <Input name="VDTT_Year_Three"/>
                        </td>
                        <td>
                            <Input width="70px" name="VDTT_Make_Three"/> 
                        </td>
                        <td>
                            <Input width="100px" name="VDTT_Model_Three"/> 
                        </td>
                        <td>
                            <Input width="90px" name="VDTT_VIN_Three"/> 
                        </td>
                        <td>
                            $
                            <select className="mx-1" name="VDTT_Value_Three">
                                <option value="None">None</option>
                            </select>
                            States:
                            <select className="mx-1" name="VDTT_State_Three">
                                <option value="CA Only">CA Only</option>
                                <option value="11 Western">11 Western</option>
                                <option value="11 West + TX">11 West + TX</option>
                                <option value="48 States">48 States</option>
                            </select>
                            Radius:
                            <Input width="50px" name="VDTT_Miles_Radius_Three"/> 
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            #4
                            <Input name="VDTT_Year_Four"/>
                        </td>
                        <td>
                            <Input width="70px" name="VDTT_Make_Four"/> 
                        </td>
                        <td>
                            <Input width="100px" name="VDTT_Model_Four"/> 
                        </td>
                        <td>
                            <Input width="90px" name="VDTT_VIN_Four"/> 
                        </td>
                        <td>
                            $
                            <select className="mx-1" name="VDTT_Value_Four">
                                <option value="None">None</option>
                            </select>
                            States:
                            <select className="mx-1" name="VDTT_State_Four">
                                <option value="CA Only">CA Only</option>
                                <option value="11 Western">11 Western</option>
                                <option value="11 West + TX">11 West + TX</option>
                                <option value="48 States">48 States</option>
                            </select>
                            Radius:
                            <Input width="50px" name="VDTT_Miles_Radius_Four"/> 
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            #5
                            <Input name="VDTT_Year_Five"/>
                        </td>
                        <td>
                            <Input width="70px" name="VDTT_Make_Five"/> 
                        </td>
                        <td>
                            <Input width="100px" name="VDTT_Model_Five"/> 
                        </td>
                        <td>
                            <Input width="90px" name="VDTT_VIN_Five"/> 
                        </td>
                        <td>
                            $
                            <select className="mx-1" name="VDTT_Value_Five">
                                <option value="None">None</option>
                            </select>
                            States:
                            <select className="mx-1" name="VDTT_State_Five">
                                <option value="CA Only">CA Only</option>
                                <option value="11 Western">11 Western</option>
                                <option value="11 West + TX">11 West + TX</option>
                                <option value="48 States">48 States</option>
                            </select>
                            Radius:
                            <Input width="50px" name="VDTT_Miles_Radius_Five"/> 
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            #6
                            <Input name="VDTT_Year_Six"/>
                        </td>
                        <td>
                            <Input width="70px" name="VDTT_Make_Six"/> 
                        </td>
                        <td>
                            <Input width="100px" name="VDTT_Model_Six"/> 
                        </td>
                        <td>
                            <Input width="90px" name="VDTT_VIN_Six"/> 
                        </td>
                        <td>
                            $
                            <select className="mx-1" name="VDTT_Value_Six">
                                <option value="None">None</option>
                            </select>
                            States:
                            <select className="mx-1" name="VDTT_State_Six">
                                <option value="CA Only">CA Only</option>
                                <option value="11 Western">11 Western</option>
                                <option value="11 West + TX">11 West + TX</option>
                                <option value="48 States">48 States</option>
                            </select>
                            Radius:
                            <Input width="50px" name="VDTT_Miles_Radius_Six"/> 
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            #7
                            <Input name="VDTT_Year_Seven"/>
                        </td>
                        <td>
                            <Input width="70px" name="VDTT_Make_Seven"/> 
                        </td>
                        <td>
                            <Input width="100px" name="VDTT_Model_Seven"/> 
                        </td>
                        <td>
                            <Input width="90px" name="VDTT_VIN_Seven"/> 
                        </td>
                        <td>
                            $
                            <select className="mx-1" name="VDTT_Value_Seven">
                                <option value="None">None</option>
                            </select>
                            States:
                            <select className="mx-1" name="VDTT_State_Seven">
                                <option value="CA Only">CA Only</option>
                                <option value="11 Western">11 Western</option>
                                <option value="11 West + TX">11 West + TX</option>
                                <option value="48 States">48 States</option>
                            </select>
                            Radius:
                            <Input width="50px" name="VDTT_Miles_Radius_Seven"/> 
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            #8
                            <Input name="VDTT_Year_Eight"/>
                        </td>
                        <td>
                            <Input width="70px" name="VDTT_Make_Eight"/> 
                        </td>
                        <td>
                            <Input width="100px" name="VDTT_Model_Eight"/> 
                        </td>
                        <td>
                            <Input width="90px" name="VDTT_VIN_Eight"/> 
                        </td>
                        <td>
                            $
                            <select className="mx-1" name="VDTT_Value_Eight">
                                <option value="None">None</option>
                            </select>
                            States:
                            <select className="mx-1" name="VDTT_State_Eight">
                                <option value="CA Only">CA Only</option>
                                <option value="11 Western">11 Western</option>
                                <option value="11 West + TX">11 West + TX</option>
                                <option value="48 States">48 States</option>
                            </select>
                            Radius:
                            <Input width="50px" name="VDTT_Miles_Radius_Eight"/> 
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            #9
                            <Input name="VDTT_Year_Nine"/>
                        </td>
                        <td>
                            <Input width="70px" name="VDTT_Make_Nine"/> 
                        </td>
                        <td>
                            <Input width="100px" name="VDTT_Model_Nine"/> 
                        </td>
                        <td>
                            <Input width="90px" name="VDTT_VIN_Nine"/> 
                        </td>
                        <td>
                            $
                            <select className="mx-1" name="VDTT_Value_Nine">
                                <option value="None">None</option>
                            </select>
                            States:
                            <select className="mx-1" name="VDTT_State_Nine">
                                <option value="CA Only">CA Only</option>
                                <option value="11 Western">11 Western</option>
                                <option value="11 West + TX">11 West + TX</option>
                                <option value="48 States">48 States</option>
                            </select>
                            Radius:
                            <Input width="50px" name="VDTT_Miles_Radius_Nine"/> 
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            #10
                            <Input name="VDTT_Year_Ten"/>
                        </td>
                        <td>
                            <Input width="70px" name="VDTT_Make_Ten"/>        
                        </td>
                        <td>
                            <Input width="100px" name="VDTT_Model_Ten"/> 
                        </td>
                        <td>
                            <Input width="90px" name="VDTT_VIN_Ten"/> 
                        </td>
                        <td>
                            $
                            <select className="mx-1" name="VDTT_Value_Ten">
                                <option value="None">None</option>
                            </select>
                            States:
                            <select className="mx-1" name="VDTT_State_Ten">
                                <option value="CA Only">CA Only</option>
                                <option value="11 Western">11 Western</option>
                                <option value="11 West + TX">11 West + TX</option>
                                <option value="48 States">48 States</option>
                            </select>
                            Radius:
                            <Input width="50px" name="VDTT_Miles_Radius_Ten"/> 
                        </td>
                    </tr>
                </tbody>
                </table>

            <div className="mx-5 mt-3">
                <div className="border border-1 border-dark mt-1 mb-2"></div>
                <div className='d-flex justify-content-between mx-5 text-center'>
                    <div >
                        <label><strong>TOTAL:</strong></label>
                        <Input width = "250" name="VDTT_Total"/>
                    </div>
                    <div>
                        <label><strong>Down Payment:</strong></label>
                        <Input width = "250" name="VDTT_Down"/>
                    </div>
                    <div>
                        <label><strong>Payments of:</strong></label>
                        <Input width = "250" name="VDTT_Monthly"/>
                    </div>
                </div>
                <div className="border border-1 border-dark mt-2 mb-1"></div>
            </div>

            <div className="text-center">
                <span>
                    Business Type:
                    <Input width = "450" name="VDTT_BusinessType"/>
                    <br/>
                    Filings Purchased: <strong>MCP</strong> 
                    <input className="ms-1 me-2" type="checkbox" name="VDTT_MCP" value="MCP"/>
                    <strong>ICC</strong> 
                    <input className="ms-1 me-2" type="checkbox" name="VDTT_ICC" value="ICC"/>
                    <strong>DOT</strong> 
                    <input className="ms-1 me-2" type="checkbox" name="VDTT_DOT" value="DOT"/>
                    <strong>PUC</strong> 
                    <input className="ms-1 me-2" type="checkbox" name="VDTT_PUC" value="PUC"/>
                    <strong>NONE</strong> 
                    <input className="ms-1" type="checkbox" name="VDTT_NONE" value="NONE"/>
                    <br/>
                    Permit Numbers (If Purchased):
                    <Input width = "450" name="VDTT_PermitNumbers"/>
                    <br/>
                    <strong>All the above described coverage and conditions have been reviewed and approved by the signer below.</strong>
                </span>
            </div>

            <div className="d-flex justify-content-between my-3">
                <div>
                    Insured’s Signature:
                    <Input width="400px" name="VDTT_ISignature"/>
                </div>
                <div>
                    Date:
                    <CDate/>
                </div>
            </div>
            
        </div>
    );
}