import React from "react";
import Input from "../../Input";
import Logo from "../../Logo";

export default function PendingInfo({name, date}) {

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      return (
        <div className="sheet font-11 text-justify lh-5">
            
            <Logo />

            <p className='fw-bold font-14 text-center my-4'>
                PENDING INFORMATION SHEET
            </p>

            <div className='d-flex justify-content-between mb-3'>
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
            
            <p>
                In the event that the information is not provided <b>within 5 working days of the above mentioned date, I</b> understand that some or all of my coverage may be subject to a premium increase, cancellation, or rejection, with
                no coverage in effect. I further understand that if a premium increase, cancellation or rejection occurs because I
                failed to provide the above indicated information. I may incur a financial loss, lose all or part of my down payment
                and fully-earned Broker's Fees.
            </p>

            <table className='w-100'>
                <tr>
                    <td>A:</td>
                    <td className='col-3'>Copy of Ca Drivers License for Drivers:</td>
                    <td>1 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>2 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>3 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>4 <Input className="text-center fw-bold" width="100px"/></td>
                </tr>
                <tr>
                    <td>B:</td>
                    <td>Copy of Valid Foreign Drivers License for:</td>
                    <td>1 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>2 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>3 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>4 <Input className="text-center fw-bold" width="100px"/></td>
                </tr>
                <tr>
                    <td>C:</td>
                    <td>Proof of Valid Ca Driver's License (Renewed/Reinstated) for:</td>
                    <td>1 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>2 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>3 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>4 <Input className="text-center fw-bold" width="100px"/></td>
                </tr>
                <tr>
                    <td>D:</td>
                    <td>Current Vehicle Registration Under Named Insured for:</td>
                    <td>1 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>2 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>3 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>4 <Input className="text-center fw-bold" width="100px"/></td>
                </tr>
                <tr>
                    <td>E:</td>
                    <td>Vehicle for Physical Inspection or Photos for: (Bring Vehicles to Office)</td>
                    <td>1 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>2 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>3 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>4 <Input className="text-center fw-bold" width="100px"/></td>
                </tr>
                <tr>
                    <td>F:</td>
                    <td>Current Lienholder Information for Vehicles:</td>
                    <td>1 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>2 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>3 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>4 <Input className="text-center fw-bold" width="100px"/></td>
                </tr>
                <tr>
                    <td>G:</td>
                    <td>Payment in the Amount of:</td>
                    <td>$ <Input className="text-center fw-bold" width="100px"/></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>

            <div class="row w-100 my-4">
                <div class="col-6">
                    <table>
                        <tr>
                            <td>
                                <input type="checkbox"/> Proof of marriage (Taxes, Certificate, Affidavit) If not provided, single rate may apply.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox"/> Proof of active SR-22 filing
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox"/> Proof of Good Student 
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <input type="checkbox"/> Voided Check
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox"/> <Input className="text-center fw-bold" width="300px" maxlength="35"/>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="col-6">
                    <table>
                        <tr>
                            <td>
                                <input type="checkbox"/> Proof of Garaging Address (Utility bill under Named Insured)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox"/> Proof of No-Fault or No-Injury Accident
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox"/> Proof of Insurance due to future effective date
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox"/> Was this a Call Center quote?
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox"/> <Input className="text-center fw-bold" width="300px" maxlength="35"/>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            <div className='d-flex justify-content-between mt-3 mx-5 pt-3 text-center fw-bold'>
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