import React from 'react'
import Input from '../../Input'
import Title from '../../Title'
import Logo from '../../Logo'

export default function MotorCarrier({
    name,
    date,
    mcp,
    icc,
    dot,
    puc,
    none,
    pNumbers,
    liability1,
    liability2
}) {

    return (
        
        <div className='sheet font-12 text-justify'>
           
            <Logo/>
            
            <p className='mt-4'>
                <b><u>MOTOR CARRIER PERMIT AND WHO NEEDS IT?</u></b>
                <br/>
                Any person who operates any commercial motor vehicle on the public highway is required to obtain permit (MCP).
            </p>

            <p>
                <b><u>WHAT IS A COMMERCIAL MOTOR VEHICLE?</u></b>
                <br/>
                As it pertains to MCP, a commercial motor vehicle is defined as:
                <ul>
                    <li>
                        Any self-propelled vehicle listed in subdivisions (a),(b),(f),(g), and (k) of section 34500 of the vehicle code (CVC).
                    </li>
                    <li>
                        Any motor truck of two or more axles that is more than 10,000 pound gross vehicles weight.
                    </li>
                    <li>
                        Any other motor vehicle used to transport property for compensation (for-hire).
                    </li>
                </ul>  
            </p>

            <p>
                <b><u>MCP Permits (Motor Carrier Permits)</u></b>
                <br/>
                We will process filing when required by the state. The following guidelines apply:
                <ol>
                    <li>
                        We must insure all the insured's owned and operated commercial vehicles. Filing will only be submitted for acceptable risks.
                    </li>
                    <li>
                        All vehicles on the policy must carry the same limits of liability (300 CSL or greater). Please verify the coverage required on
                        risks. The state requires 300 CSL coverage on "for-hire" vehicles with GVW under 10,000 lbs. and 750 CSL for vehicles
                        with 10,000 lbs. GVW or greater.
                    </li>
                    <li>
                        We charge a fully earned filing fee of $150.00 on new business and $125.00 on renewals or to reinstate an existing filing.
                    </li>
                    <li>
                        Filings require 30 days notice of cancellation. We will continue to earn premium during the notice period regardless of the
                        reason for cancellation.
                    </li>
                    <li>
                        Obtain a copy of the filing from the state and ensure the insured business name on the filing matches the name on the
                        application.
                    </li>
                </ol>  
                <b>NOTE: WE MUST INSURE ALL OWNED AND OPERATED COMMERCIALLY USED VEHICLES.</b>
            </p>

            <p>
                <b><u>COMMERCIAL LICENSE REQUIREMENTS</u></b>
                <table className='w-100'>
                    <tr>
                        <td>Vehicle over 26,000 lbs. GVW (gross vehicle weight)</td>
                        <td>- Class B license required</td>
                    </tr>
                    <tr>
                        <td>Tractor or pulling unit towing a trailer</td>
                        <td>- Class A license required</td>
                    </tr>
                    <tr>
                        <td>Public Livery risks transporting more than 10 passengers</td>
                        <td>- Class B license with passenger endorsement</td>
                    </tr>
                </table>
            </p>

            <div className="border border-2 border-dark my-2"></div>

            <p>
                <b>The undersigned acknowledges that required coverage's by law have been offered, that a
                premium, or rate, has been quoted for the required coverage and that not withstanding the
                coverages recommended by my agent, the liability limits are as follows:</b><Input width="150px" className="text-center" value={liability1}/>/<Input width="100px" className="text-center" value={liability2}/>
            </p>

            <div className="border border-2 border-dark my-2"></div>

            <p>
                <b>I acknowledge that the filing system has been explained in detail and I selected the folowing:</b>
                <br/>
                Filings Purchased:
                <b className="ms-2">MCP</b><input className="ms-2 me-2" type="checkbox" checked={mcp}/>
                <b>ICC</b><input className="ms-2 me-2" type="checkbox" checked={icc}/>
                <b>DOT</b><input className="ms-2 me-2" type="checkbox" checked={dot}/>
                <b>PUC</b><input className="ms-2 me-2" type="checkbox" checked={puc}/>
                <b>NONE</b><input className="ms-2 me-3" type="checkbox" checked={none}/>
                Permit Numbers <span className='font-10'>(If Purchased)</span>:
                <input 
                    className="text-center input-default" 
                    style={{width:"170px"}} 
                    maxlength="20" 
                    {... none === true ? {value:"None"} : {value: pNumbers}}
                />

            </p>
            
            <div className="border border-2 border-dark my-2"></div>

            <div className='d-flex justify-content-between mt-5 mx-5 text-center'>
                <div>
                    <Input width="260px" value={name} className='text-center'/>
                    <p className='mb-0 fw-bold'>Insured’s Name</p>
                </div>
                <div>
                    <Input width="260px" disabled bColor="yellow"/>
                    <p className='mb-0 fw-bold'>Insured’s Signature</p>
                </div>
                <div>
                    <Input value = {date} width = "80px" className = "text-center fw-bold"/>
                    <p className='mb-0 fw-bold'>Date</p>
                </div>
            </div>


        </div>

    )
}