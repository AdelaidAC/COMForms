import React from "react";
import CurrencyFormat from 'react-currency-format';
import Input from "../../Input";
import Logo from "../../Logo";

export default function TwoFlood(
    {
        name, 
        sn, 
        city, 
        state, 
        zipcode/*address*/,
        date,
        limitA,
        limitB,
        limitC,
        limitD,
        limitE,
        pD,
        pE
    }) {
    return (
        <div className="sheet font-10 lh-1">
            
            <Logo />

            <div className='d-flex justify-content-between mt-3'>
                <div className='d-flex col-8'>
                    <b>Name:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1 text-center fw-bold" value={name}/>
                    </span>
                </div>
                <div>
                    <b>Date: </b>
                    <Input value = {date} width = "80px" className = "text-center fw-bold"/>
                </div>
            </div>

            <div className="d-flex">
                <div className='d-flex col-12'>
                    <b>Address:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1 text-center fw-bold" /*value={address}*/ value={sn + ", " + city + ", " + state + ", " + zipcode}/>
                    </span>
                </div>
            </div>

            <div className="border border-dark mx-5 my-3 px-5 py-3">
                
                <table className="d-flex justify-content-center">
                    <tbody>
                    <tr>
                        <td></td>
                        <td className="fw-bold text-decoration-underline text-center">
                            Limits
                        </td>
                        <td>
                        </td>
                        <td className="text-end">
                            Down:
                        </td>
                        <td>
                            <CurrencyFormat 
                                thousandSeparator={true} 
                                prefix={'$'}
                                maxlength="10"
                                style = {{width:"80px"}}
                                className='fw-bold text-center input-default'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            A. Dwelling
                        </td>
                        <td className="text-center">
                            <Input className='fw-bold text-center' width="80px" value={limitA}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            B. Other Structures
                        </td>
                        <td className="text-center">
                            <Input className='fw-bold text-center' width="80px" value={limitB}/>
                        </td>
                        <td>
                            
                        </td>
                        <td className="text-end">
                        <Input className="ms-3 text-center" width="30px" maxlength="4"/> Payments of:
                        </td>
                        <td>
                            <CurrencyFormat 
                                thousandSeparator={true} 
                                prefix={'$'}
                                maxlength="10"
                                style = {{width:"80px"}}
                                className='fw-bold text-center input-default'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            C. Personal Property
                        </td>
                        <td className="text-center">
                            <Input className='fw-bold text-center' width="80px" value={limitC}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            D. {pD}
                        </td>
                        <td className="text-center">
                            <Input className='fw-bold text-center' width="80px" value={limitD}/>
                        </td>
                        <td>
                        
                        </td>
                        <td className="text-end">
                            Paid in Full:
                        </td>
                        <td>
                            <CurrencyFormat 
                                thousandSeparator={true} 
                                prefix={'$'}
                                maxlength="10"
                                style = {{width:"80px"}}
                                className='fw-bold text-center input-default'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            E. {pE}
                        </td>
                        <td className="text-center">
                            <Input className='fw-bold text-center' width="80px" value={limitE}/>
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
                            <Input width="260px" className="text-center fw-bold" maxlength="40"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
      
                <div className="d-flex justify-content-between mt-3">
                    <div>Accepted: <Input disabled width="180px" bColor="yellow"/></div>
                    <div>Rejected: <Input disabled width="180px"/></div>
                </div>
      
            </div>

            <div className="border border-dark mx-5 my-3 px-5 py-3">
                
                <table className="d-flex justify-content-center">
                    <tbody>
                    <tr>
                        <td></td>
                        <td className="fw-bold text-decoration-underline text-center">
                            Limits
                        </td>
                        <td>
                        </td>
                        <td className="text-end">
                            Down:
                        </td>
                        <td>
                            <CurrencyFormat 
                                thousandSeparator={true} 
                                prefix={'$'}
                                maxlength="10"
                                style = {{width:"80px"}}
                                className='fw-bold text-center input-default'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            A. Dwelling
                        </td>
                        <td className="text-center">
                            <Input className='fw-bold text-center' width="80px" value={limitA}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            B. Other Structures
                        </td>
                        <td className="text-center">
                            <Input className='fw-bold text-center' width="80px" value={limitB}/>
                        </td>
                        <td>
                            
                        </td>
                        <td className="text-end">
                        <Input className="ms-3 text-center" width="30px" maxlength="4"/> Payments of:
                        </td>
                        <td>
                            <CurrencyFormat 
                                thousandSeparator={true} 
                                prefix={'$'}
                                maxlength="10"
                                style = {{width:"80px"}}
                                className='fw-bold text-center input-default'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            C. Personal Property
                        </td>
                        <td className="text-center">
                            <CurrencyFormat 
                                thousandSeparator={true} 
                                prefix={'$'}
                                maxlength="10"
                                style = {{width:"80px"}}
                                className='fw-bold text-center input-default'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            D. Loss of Use
                        </td>
                        <td className="text-center">
                            <CurrencyFormat 
                                thousandSeparator={true} 
                                prefix={'$'}
                                maxlength="10"
                                style = {{width:"80px"}}
                                className='fw-bold text-center input-default'
                            />
                        </td>
                        <td>
                        
                        </td>
                        <td className="text-end">
                            Paid in Full:
                        </td>
                        <td>
                            <CurrencyFormat 
                                thousandSeparator={true} 
                                prefix={'$'}
                                maxlength="10"
                                style = {{width:"80px"}}
                                className='fw-bold text-center input-default'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            E. Increased Cost/Material
                        </td>
                        <td className="text-center">
                            <CurrencyFormat 
                                thousandSeparator={true} 
                                prefix={'$'}
                                maxlength="10"
                                style = {{width:"80px"}}
                                className='fw-bold text-center input-default'
                            />
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
                            <Input width="260px" className="text-center fw-bold" maxlength="40"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
      
                <div className="d-flex justify-content-between mt-3">
                    <div>Accepted: <Input disabled width="180px"/></div>
                    <div>Rejected: <Input disabled width="180px" bColor="yellow"/></div>
                </div>
      
            </div>

            <div className="border border-dark mx-5 my-3 px-5 py-3">
                
                <table className="d-flex justify-content-center">
                    <tbody>
                    <tr>
                        <td></td>
                        <td className="fw-bold text-decoration-underline text-center">
                            Limits
                        </td>
                        <td>
                        </td>
                        <td className="text-end">
                            Down:
                        </td>
                        <td>
                            <CurrencyFormat 
                                thousandSeparator={true} 
                                prefix={'$'}
                                maxlength="10"
                                style = {{width:"80px"}}
                                className='fw-bold text-center input-default'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            A. Dwelling
                        </td>
                        <td className="text-center">
                            <Input className='fw-bold text-center' width="80px" value={limitA}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            B. Other Structures
                        </td>
                        <td className="text-center">
                            <Input className='fw-bold text-center' width="80px" value={limitB}/>
                        </td>
                        <td>
                            
                        </td>
                        <td className="text-end">
                        <Input className="ms-3 text-center" width="30px" maxlength="4"/> Payments of:
                        </td>
                        <td>
                            <CurrencyFormat 
                                thousandSeparator={true} 
                                prefix={'$'}
                                maxlength="10"
                                style = {{width:"80px"}}
                                className='fw-bold text-center input-default'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            C. Personal Property
                        </td>
                        <td className="text-center">
                            <CurrencyFormat 
                                thousandSeparator={true} 
                                prefix={'$'}
                                maxlength="10"
                                style = {{width:"80px"}}
                                className='fw-bold text-center input-default'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            D. Additional Living Expense
                        </td>
                        <td className="text-center">
                            <CurrencyFormat 
                                thousandSeparator={true} 
                                prefix={'$'}
                                maxlength="10"
                                style = {{width:"80px"}}
                                className='fw-bold text-center input-default'
                            />
                        </td>
                        <td>
                        
                        </td>
                        <td className="text-end">
                            Paid in Full:
                        </td>
                        <td>
                            <CurrencyFormat 
                                thousandSeparator={true} 
                                prefix={'$'}
                                maxlength="10"
                                style = {{width:"80px"}}
                                className='fw-bold text-center input-default'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">
                            E. Debris Removal
                        </td>
                        <td className="text-center">
                            <CurrencyFormat 
                                thousandSeparator={true} 
                                prefix={'$'}
                                maxlength="10"
                                style = {{width:"80px"}}
                                className='fw-bold text-center input-default'
                            />
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
                            <Input width="260px" className="text-center fw-bold" maxlength="40"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
      
                <div className="d-flex justify-content-between mt-3">
                    <div>Accepted: <Input disabled width="180px"/></div>
                    <div>Rejected: <Input disabled width="180px" bColor="yellow"/></div>
                </div>
      
            </div>
    
            
            
        
            
        </div>
    );
}