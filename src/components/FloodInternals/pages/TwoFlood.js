import React from "react";
import Input from "../../Input";
import Logo from "../../Logo";
import Title from "../../Title";
import CDate from '../../CDate';

export default function TwoFlood({name, initials, address, phone}) {
    return (
        <div className="sheet font-12">
            
            <Logo />

            <div className="d-flex justify-content-between mt-4">
                <label>Name:
                    <Input width="400px" name="PAT_ClientName" className="ms-1"/>
                </label>
                <label>Date:
                    <CDate/>
                </label>
            </div>

            <div className="d-flex">
                <label>Address:</label>
                <span className="flex-fill">
                    <Input className="ms-1" width="100%"/>
                </span>
            </div>

            <div className="border mx-5 my-3 px-5 py-3">
                
                <table className="d-flex justify-content-center">
                    <tbody>
                    <tr>
                        <td></td>
                        <td className="fw-bold text-decoration-underline text-center">
                        Limits
                        </td>
                        <td>
                        </td>
                        <td>
                        Down:
                        </td>
                        <td>
                        <Input/>
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                        A. Dwelling
                        </td>
                        <td className="text-center">
                        <Input/>
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                        B. Other Structures
                        </td>
                        <td className="text-center">
                        <Input/>
                        </td>
                        <td>
                        <Input/>
                        </td>
                        <td>
                        Payments of:
                        </td>
                        <td>
                        <Input/>
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                        C. Personal Property
                        </td>
                        <td className="text-center">
                        <Input/>
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                        D. <select className="ms-1" name="myELLimits">
                            <option value="Additional Living Expense">Additional Living Expense</option>
                            <option value="Fair Rental Value">Fair Rental Value</option>
                            </select>
                        </td>
                        <td className="text-center">
                        <Input/>
                        </td>
                        <td>
                        
                        </td>
                        <td>
                        Paid in Full:
                        </td>
                        <td>
                        <Input/>
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                        E. <select className="ms-1" name="myELLimits">
                            <option value="Increased Cost/Material">Increased Cost/Material</option>
                            <option value="Debris Removal">Debris Removal</option>
                            </select>
                        </td>
                        <td className="text-center">
                        <Input/>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                        <td colspan="2" className="text-center fw-bold text-decoration-underline">
                        Company
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                        <td colspan="2" className="text-center">
                        <Input/>
                        </td>
                    </tr>
                    </tbody>
                </table>
      
                <div className="container mt-5">
                    <div className="row row-cols-3">
                    <div className="col">Accepted: <Input/></div>
                    <div className="col"></div>
                    <div className="col">Rejected: <Input/></div>
                    </div>
                </div>
      
            </div>
    
            <div className="border mx-5 my-3 px-5 py-3">
                
                <table className="d-flex justify-content-center">
                    <tbody>
                    <tr>
                        <td></td>
                        <td className="fw-bold text-decoration-underline text-center">
                        Limits
                        </td>
                        <td>
                        </td>
                        <td>
                        Down:
                        </td>
                        <td>
                        <Input/>
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                        A. Dwelling
                        </td>
                        <td className="text-center">
                        <Input/>
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                        B. Other Structures
                        </td>
                        <td className="text-center">
                        <Input/>
                        </td>
                        <td>
                        <Input/>
                        </td>
                        <td>
                        Payments of:
                        </td>
                        <td>
                        <Input/>
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                        C. Personal Property
                        </td>
                        <td className="text-center">
                        <Input/>
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                        D. Loss of Use
                        </td>
                        <td className="text-center">
                        <Input/>
                        </td>
                        <td>
                        
                        </td>
                        <td>
                        Paid in Full:
                        </td>
                        <td>
                        <Input/>
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                        E. Increased Cost/Material
                        </td>
                        <td className="text-center">
                        <Input/>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                        <td colspan="2" className="text-center fw-bold text-decoration-underline">
                        Company
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                        <td colspan="2" className="text-center">
                        <Input/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            
                <div className="container mt-5">
                    <div className="row row-cols-3">
                    <div className="col">Accepted: <Input/></div>
                    <div className="col"></div>
                    <div className="col">Rejected: <Input/></div>
                    </div>
                </div>
            
            </div>
            
            <div className="border mx-5 my-3 px-5 py-3">
                
                <table className="d-flex justify-content-center">
                    <tbody>
                    <tr>
                        <td></td>
                        <td className="fw-bold text-decoration-underline text-center">
                        Limits
                        </td>
                        <td>
                        </td>
                        <td>
                        Down:
                        </td>
                        <td>
                        <Input/>
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                        A. Dwelling
                        </td>
                        <td className="text-center">
                        <Input/>
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                        B. Other Structures
                        </td>
                        <td className="text-center">
                        <Input/>
                        </td>
                        <td>
                        <Input/>
                        </td>
                        <td>
                        Payments of:
                        </td>
                        <td>
                        <Input/>
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                        C. Personal Property
                        </td>
                        <td className="text-center">
                        <Input/>
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                        D. Additional Living Expense
                        </td>
                        <td className="text-center">
                        <Input/>
                        </td>
                        <td>
                        
                        </td>
                        <td>
                        Paid in Full:
                        </td>
                        <td>
                        <Input/>
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                        E. Debris Removal
                        </td>
                        <td className="text-center">
                        <Input/>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                        <td colspan="2" className="text-center fw-bold text-decoration-underline">
                        Company
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                        <td colspan="2" className="text-center">
                        <Input/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            
                <div className="container mt-5">
                    <div className="row row-cols-3">
                    <div className="col">Accepted: <Input/></div>
                    <div className="col"></div>
                    <div className="col">Rejected: <Input/></div>
                    </div>
                </div>
            
            </div>
            
        </div>
    );
}