import React, { useEffect, useState} from 'react';
import Input from "../../Input";
import Logo from "../../Logo";

export default function Vehicle({name, date}) {

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const [l1, setL1] = useState('');
    const [l2, setL2] = useState('');

    const [vType, setVType] = useState("motorcycle");

    const handleVType = (e) => {
        setVType(e.target.value);
    }

    useEffect(() => {
        if(vType === "motorcycle" || vType === "rv" || vType === "travelTrailer"){
          setL1("Liability: Property Damage"); 
          setL2("Liability: Bodily Injury");
        }
        else if(vType === "boat" || vType === "watercraft"){
          setL1("Combined Single Limit Liability");
          setL2("Watersports Liability");
        }
    }, [vType])

    return (
        <div className="sheet font-10 text-justify">
            
            <Logo />

            <div className='d-flex justify-content-between mt-2'>
                <div className='d-flex col-8'>
                    <b>Client Name:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1 text-center fw-bold" value={name}/>
                    </span>
                </div>
                <div>
                    <b>Date: </b>
                    <Input value = {date} width = "80px" className = "text-center fw-bold"/>
                </div>
            </div>  

            <p className='fw-bold font-12 text-center my-2'>
                READ BEFORE SIGNING
            </p>
            
            <p className='fw-bold mt-0 mb-2'>
                ANY PERSON WHO INTENTS TO DEFRAUD OR KNOWINGLY FACILITATES A FRAUD AGAINST AN INSURER, BY
                SUBMITING AN APPLICATION OR FILING A CLAIM CONTAINING A FALSE OR DECEPTIVE STATEMENT IS
                COMMITTING INSURANCE FRAUD AND WILL BE PROSECTUTED TO THE FULLEST EXTENT OF THE LAW.
            </p>

            <p className='m-0'>
                I hereby apply to Adriana’s Insurance Services Inc. (“Broker”) for a policy of insurance as set forth in this application on the basis to the statements
                contained herein. <b>By signing below I understand that this application becomes a part of my policy and is a legal document and I certify that:</b>
                <br/>
                1. I have listed all operators of the vehicles listed on this application. This includes anyone that may operate my vehicles(s) on a regular or frequent
                basis, children away from home and away at school, and all person age 15 or older who live with me. I agree to notify Broker of any changes in
                operators or licensing of household residents.
                <br/>
                2. I have reported any business or commercial use of my vehicles to Broker. I understand that business use is not covered unless I have disclosed the
                specific use on this application and paid a premium for the business use Endorsement.
                <br/>
                3. My principle residence address and place of vehicle garaging is (are) the address (es) shown in this application for ten (10) or more months each
                year.
                <br/>
                4. Any custom and special add-on equipment that I want covered has been declared on this application and a premium paid for this additional
                coverage.
            </p>

            <p className='fw-bold font-12 text-center mt-2 mb-1'>
                COVERAGES
            </p>
            
            <p className='mt-0 mb-2'>
                The undersigned acknowledges that Adriana’s Insurance Services, Inc. (“Broker”) had explained the full meaning of Automobile Liability (third-party
                liability) Insurance coverage which is required by California State Law; the full meaning of Comprehensive and Collision Insurance coverage; The
                Uninsured Motorist Bodily Injury; Uninsured Motorist Property Damage coverage; and Medical Payment coverage. The undersigned chooses the
                following insurance coverage: <b>Initial Limits or Write “None”</b>
            </p>

            <table className='border border-dark w-100'>
                <tr className='text-center fw-bold tr-h'>
                    <td className='col-3'>
                        <select className='fw-bold text-center w-100' value={vType} onChange={handleVType}>
                            <option value="motorcycle" default>Motorcycle</option>
                            <option value="rv">RV</option>
                            <option value="travelTrailer">Travel Trailer</option>
                            <option value="boat">Boat</option>
                            <option value="watercraft">Watercraft</option>
                        </select>
                    </td> 
                    <td><Input className="text-center fw-bold w-100" maxlength="15"/></td>
                    <td><Input className="text-center fw-bold w-100" maxlength="15"/></td>
                    <td><Input className="text-center fw-bold w-100" maxlength="15"/></td>
                    <td><Input className="text-center fw-bold w-100" maxlength="15"/></td>
                    <td><Input className="text-center fw-bold w-100" maxlength="15"/></td>
                    <td>Initials</td>
                </tr>
                <tr className='tr-h'>
                    <td>{l1}</td> 
                    <td>
                        <input list="r1-1" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r1-1">
                            <option>5</option>
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                            <option>None</option>
                        </datalist>
                    </td>
                    <td>
                        <input list="r1-2" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r1-2">
                            <option>5</option>
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                            <option>None</option>
                        </datalist>
                    </td>
                    <td>
                        <input list="r1-3" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r1-3">
                            <option>5</option>
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                            <option>None</option>
                        </datalist>
                    </td>
                    <td>
                    <input list="r1-4" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r1-4">
                            <option>5</option>
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                            <option>None</option>
                        </datalist>
                    </td>
                    <td>
                    <input list="r1-5" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r1-5">
                            <option>5</option>
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                            <option>None</option>
                        </datalist>
                    </td>
                    <td className='text-center'><Input bColor="yellow" disabled width="60px"/></td>
                </tr>
                <tr className='tr-h'>
                    <td>{l2}</td> 
                    <td>
                        <input list="r2-1" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r2-1">
                            <option>15/30</option>
                            <option>25/50</option>
                            <option>50/100</option>
                            <option>100/300</option>
                            <option>None</option>
                        </datalist>
                    </td>
                    <td>
                        <input list="r2-2" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r2-2">
                            <option>15/30</option>
                            <option>25/50</option>
                            <option>50/100</option>
                            <option>100/300</option>
                            <option>None</option>
                        </datalist>
                    </td>
                    <td>
                        <input list="r2-3" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r2-3">
                            <option>15/30</option>
                            <option>25/50</option>
                            <option>50/100</option>
                            <option>100/300</option>
                            <option>None</option>
                        </datalist>
                    </td>
                    <td>
                    <input list="r2-4" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r2-4">
                            <option>15/30</option>
                            <option>25/50</option>
                            <option>50/100</option>
                            <option>100/300</option>
                            <option>None</option>
                        </datalist>
                    </td>
                    <td>
                    <input list="r2-5" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r2-5">
                            <option>15/30</option>
                            <option>25/50</option>
                            <option>50/100</option>
                            <option>100/300</option>
                            <option>None</option>
                        </datalist>
                    </td>
                    <td className='text-center'><Input bColor="yellow" disabled width="60px"/></td>
                </tr>
                <tr className='tr-h'>
                    <td>Medical Payment (per person)</td> 
                    <td>
                        <input list="r3-1" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r3-1">
                            <option>None</option>
                            <option>.5</option>
                            <option>1</option>
                            <option>2</option>
                            <option>5</option>
                            <option>10</option>
                        </datalist>
                    </td>
                    <td>
                        <input list="r3-2" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r3-2">
                            <option>None</option>
                            <option>.5</option>
                            <option>1</option>
                            <option>2</option>
                            <option>5</option>
                            <option>10</option>
                        </datalist>
                    </td>
                    <td>
                        <input list="r3-3" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r3-3">
                            <option>None</option>
                            <option>.5</option>
                            <option>1</option>
                            <option>2</option>
                            <option>5</option>
                            <option>10</option>
                        </datalist>
                    </td>
                    <td>
                    <input list="r3-4" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r3-4">
                            <option>None</option>
                            <option>.5</option>
                            <option>1</option>
                            <option>2</option>
                            <option>5</option>
                            <option>10</option>
                        </datalist>
                    </td>
                    <td>
                    <input list="r3-5" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r3-5">
                            <option>None</option>
                            <option>.5</option>
                            <option>1</option>
                            <option>2</option>
                            <option>5</option>
                            <option>10</option>
                        </datalist>
                    </td>
                    <td className='text-center'><Input bColor="yellow" disabled width="60px"/></td>
                </tr>
                <tr className='tr-h'>
                    <td>Uninsured Motorist: Bodily Injury</td> 
                    <td>
                        <input list="r4-1" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r4-1">
                            <option>None</option>
                            <option>15/30</option>
                            <option>25/50</option>
                            <option>30/60</option>
                            <option>50/100</option>
                            <option>100/300</option>
                        </datalist>
                    </td>
                    <td>
                        <input list="r4-2" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r4-2">
                            <option>None</option>
                            <option>15/30</option>
                            <option>25/50</option>
                            <option>30/60</option>
                            <option>50/100</option>
                            <option>100/300</option>
                        </datalist>
                    </td>
                    <td>
                        <input list="r4-3" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r4-3">
                            <option>None</option>
                            <option>15/30</option>
                            <option>25/50</option>
                            <option>30/60</option>
                            <option>50/100</option>
                            <option>100/300</option>
                        </datalist>
                    </td>
                    <td>
                    <input list="r4-4" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r4-4">
                            <option>None</option>
                            <option>15/30</option>
                            <option>25/50</option>
                            <option>30/60</option>
                            <option>50/100</option>
                            <option>100/300</option>
                        </datalist>
                    </td>
                    <td>
                    <input list="r4-5" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r4-5">
                            <option>None</option>
                            <option>15/30</option>
                            <option>25/50</option>
                            <option>30/60</option>
                            <option>50/100</option>
                            <option>100/300</option>
                        </datalist>
                    </td>
                    <td className='text-center'><Input bColor="yellow" disabled width="60px"/></td>
                </tr>
                <tr className='tr-h'>
                    <td>Uninsured Motorist: Property Damage / CDW</td> 
                    <td>
                        <input list="r5-1" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r5-1">
                            <option>None</option>
                            <option>3.5</option>
                            <option>5</option>
                            <option>CDW</option>
                        </datalist>
                    </td>
                    <td>
                        <input list="r5-2" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r5-2">
                            <option>None</option>
                            <option>3.5</option>
                            <option>5</option>
                            <option>CDW</option>
                        </datalist>
                    </td>
                    <td>
                        <input list="r5-3" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r5-3">
                            <option>None</option>
                            <option>3.5</option>
                            <option>5</option>
                            <option>CDW</option>
                        </datalist>
                    </td>
                    <td>
                    <input list="r5-4" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r5-4">
                            <option>None</option>
                            <option>3.5</option>
                            <option>5</option>
                            <option>CDW</option>
                        </datalist>
                    </td>
                    <td>
                    <input list="r5-5" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r5-5">
                            <option>None</option>
                            <option>3.5</option>
                            <option>5</option>
                            <option>CDW</option>
                        </datalist>
                    </td>
                    <td className='text-center'><Input bColor="yellow" disabled width="60px"/></td>
                </tr>
                <tr className='tr-h'>
                    <td>Comprehensive & Collision</td> 
                    <td>
                        <input list="r6-1" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r6-1">
                            <option>None</option>
                            <option>250/250</option>
                            <option>500/500</option>
                            <option>750/750</option>
                            <option>1000/1000</option>
                            <option>1500/1500</option>
                        </datalist>
                    </td>
                    <td>
                        <input list="r6-2" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r6-2">
                            <option>None</option>
                            <option>250/250</option>
                            <option>500/500</option>
                            <option>750/750</option>
                            <option>1000/1000</option>
                            <option>1500/1500</option>
                        </datalist>
                    </td>
                    <td>
                        <input list="r6-3" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r6-3">
                            <option>None</option>
                            <option>250/250</option>
                            <option>500/500</option>
                            <option>750/750</option>
                            <option>1000/1000</option>
                            <option>1500/1500</option>
                        </datalist>
                    </td>
                    <td>
                    <input list="r6-4" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r6-4">
                            <option>None</option>
                            <option>250/250</option>
                            <option>500/500</option>
                            <option>750/750</option>
                            <option>1000/1000</option>
                            <option>1500/1500</option>
                        </datalist>
                    </td>
                    <td>
                    <input list="r6-5" className="input-default text-center fw-bold w-100" maxlength="15"/>
                        <datalist id="r6-5">
                            <option>None</option>
                            <option>250/250</option>
                            <option>500/500</option>
                            <option>750/750</option>
                            <option>1000/1000</option>
                            <option>1500/1500</option>
                        </datalist>
                    </td>
                    <td className='text-center'><Input bColor="yellow" disabled width="60px"/></td>
                </tr>
            </table>

            <p className='fw-bold font-12 text-center mt-2 mb-1'>
                DISCLOSURE OF DRIVING RECORD
            </p>
            
            <p className='m-0'>
                I understand and acknowledge that all rates given are based on the facts that I disclosed. If the records shown in the Motor Vehicle Report or C.L.U.E. Report are
                different from the records that I gave below, my premium will be subject to change, my policy(ies) may be cancelled, or my Application could be rejected and <b>no
                insurance coverage will be bound or in effect. Also, in the event that any drivers' License(s) are suspended, revoked or invalid, no insurance coverage will be
                bound of in effect.</b>
            </p>

            <p className='mt-2 text-end'>
                Initials: <Input disabled width="60px" bColor="yellow"/>
            </p>

            <p className='fw-bold font-12 text-center mt-2 mb-1'>
                Exclusion for: Uninsured Motorist Body Injury and Uninsured Motorist Property Damage
                Underinsured Motorist Body Injury and Underinsured Motorist Property Damage
            </p>
            
            <p className='m-0'>
                I, the undersigned, acknowledge that notwithstanding the recommendations and warnings of my Broker, I have applied for Liability Insurance only, and that no other
                coverage is included except as listed on my insurance application. I have not applied for Uninsured/Underinsured Motorist Body Injury and Uninsured/Underinsured
                Motorist Property Damage insurance coverage and acknowledge that I will not have material damage coverage, unless and until I request such coverage in writing and
                pay additional premium. In the future if I decide to add Uninsured/Underinsured Motorist Body Injury and Uninsured/Underinsured Motorist Property Damage to any
                of my vehicle(s) this disclosure shall become null and void.
            </p>

            <p className='mt-2 text-end'>
                Initials: <Input disabled width="60px" bColor="yellow"/>
            </p>

            
            {/*<p className='fw-bold mt-0 mb-1'>
                Please have insured handwrite the words "I HAVE READ AND UNDERSTAND THIS EXCLUSION" on the line below.
            </p>

                <Input className="w-100" disabled bColor="yellow"/>*/}

            <div className='d-flex justify-content-between mt-2 mx-5 pt-2 text-center fw-bold'>
                <div>
                    <Input width="300px" className="text-center" disabled bColor="yellow"/>
                    <p>Insured's Signature</p>
                </div>
                <div>
                    <Input width="300px" className="text-center" disabled/>
                    <p>Broker's Signature</p>
                </div>
            </div>

        </div>
    );
}