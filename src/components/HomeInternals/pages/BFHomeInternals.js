import React, { useEffect, useState} from 'react';
import CurrencyFormat from 'react-currency-format';
import Input from '../../Input'
import Logo from '../../Logo'

export default function BFHomeInternals({name, date}) {

    const [inputBF, setBF] = useState('');

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
      
    return (
        <div className='sheet font-9 text-justify lh-3'>
            
            <Logo />

            <div className='d-flex justify-content-between my-3'>
                <div className='d-flex col-8'>
                    <b>Named Insured:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1 text-center fw-bold" value={name}/>
                    </span>
                </div>
                <div>
                    <b>Date: </b>
                    <Input value = {date} width = "80px" className = "text-center fw-bold"/>
                </div>
            </div>

            <p className='text-center fw-bold font-12 mb-0'>STANDARD BROKER FEE DISCLOSURE</p>

            <p className='text-center fw-bold mb-2'>This disclosure was prepared by California Insurance Commissioner: READ IT CAREFULLY!</p>
            
            <p className='mb-0'>
                <b>I. </b>Do not sign any broker fee agreement unless all of its blank lines and spaces have been filled-in and you have read the entire document and the agreement carefully.
                <br />
                <b>II. </b>Your insurance broker represents you, the consumer, and is entitled to charge a broker fee if he/she chooses. This fee is not set by law, and may be negotiable
                between you and the broker.
                <br />
                <b>III. </b>It is illegal for an insurance broker to charge you a fee for placing coverage solely with the California Automobile Assigned Risk Plan or the California Fair Plan.
                Fees may be charged for placement of other coverage’s.
                <br />
                <b>IV. </b>Broker fees are often non-refundable even if you cancel your coverage. Refer to your broker fee agreement to see if your broker fee is non-refundable. However,
                you may be entitled to a full refund of a broker fee if your broker acted incompetently or dishonestly. Unresolved disputes over non-refunded broker fees can be
                forwarded to the Department of Insurance for review.
                <br />
                <b>V. </b>You are entitled to obtain and keep a completed copy of this disclosure and any broker fee agreement you sign.
                <br />
                <b>VI. </b>Your broker may receive a commission from insurance company(ies) for placing your insurance. This commission may be paid to your broker by the insurance
                company(ies) in addition to any broker fee you pay.
                <br />
                <b>VII. </b>If you will be paying your premium in installments to a finance company, by law you must receive a copy of a premium finance disclosure and agreement. Be
                sure to obtain and read those documents before signing a premium finance agreement. Also, ask the broker if the insurer offers its own installment payment plan.
                Insurer installment plans are often cheaper than premium financing through a separate premium finance company.
                <br />
                <b>VIII. </b>If your broker is placing automobile coverage; your broker must provide you with a copy of the current Department of Insurance pamphlet Automobile
                Insurance. If your broker is placing residential coverage, your broker must provide you with a copy of the current Department of Insurance pamphlet Residential
                Insurance. By signing this disclosure, you acknowledge receipt of the appropriate pamphlet(s).
            </p>
            <br/>
            <p className='m-0'>
                Client Initials: <Input disabled width="60px" bColor="yellow"/>
            </p>

            <p className='text-center fw-bold font-10 my-1'>Appointment of Insurance Broker and Agreement to Pay Broker Fee</p>

            <p>
                As of today, the undersigned ("Client") appoints Adriana's Insurance Service, Inc. ("Broker") as his/her insurance broker of record. This Agreement shall continue in
                full force until terminated by either party. Broker agrees to represent Client honestly and competently in obtaining and servicing the desired insurance coverage, as
                may be available, and Client agrees to act in good faith with Broker and provide Broker with full disclosure of all information and documentation necessary to allow
                Broker to procure an insurance policy. Client agrees to pay a broker fee for Broker's services. The broker fee is in addition to: (i) any commissions, contingent
                commissions, or bonuses, which may be paid to Broker by the insurance company; and (ii) the Additional Services, listed below. Client authorizes Broker to cancel
                insurance if premiums or fees remain unpaid to Broker.
                <br/>
                <br/>
                CLIENT agrees to pay BROKER a broker fee for BROKER’S services. The <b>Broker Fee is</b> <CurrencyFormat 
                    onChange={e => setBF(e.target.value)} 
                    {...(inputBF === "" ? {style: {width: "100px", backgroundColor: 'yellow'}} : {style: {width: "100px"}})}
                    thousandSeparator={true} 
                    prefix={'$'} 
                    maxlength="10"
                    className='fw-bold text-center input-default'
                /> (Client Initials: <Input disabled width="60px" bColor="yellow"/>). Client understands
                this fee and understands that the broker fee <b>IS / <span className='bf-radius'>IS NOT REFUNDABLE</span></b>, irrespective of whether the policy is cancelled or rejected by the Client or insurer. Client
                authorizes Broker to maintain premium payments in interest-bearing trust accounts and to receive any interest income there from until paid to the insurance company.
                Additional Services: Broker may charge the following fees for the following services in addition to the broker fee:
            </p>

            <table className='table table-fit text-center'>
                <tbody>
                    <tr className="text-decoration-underline fw-bold tr-h">
                        <td>Services:</td>
                        <td>Fees:</td>
                        <td>Services:</td>
                        <td>Fees:</td>
                        <td>Services:</td>
                        <td>Fees:</td>
                        <td>Services:</td>
                        <td>Fees:</td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            <b>Endorsment:</b>
                        </td>
                        <td>
                            Up to $300 
                            <br/>
                            per transaction
                        </td>
                        <td>
                            <b>Monthly Payments:</b>
                        </td>
                        <td>
                            $15.00
                        </td>
                        <td>
                            <b>Reinstatement Fee/Late 
                            <br/>
                            Payment Fee:</b>
                        </td>
                        <td>
                            Up to 
                            <br/>
                            $50.00
                        </td>
                        <td>
                            <b>Registration 
                            <br/>    
                            Renewal Fee:</b>
                        </td>
                        <td>
                            $48.00 
                            <br/>
                            per vehicle
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            <b>DocuSign:</b>
                        </td>
                        <td>
                            $10.00 per 
                            <br/>
                            Transaction
                        </td>
                        <td>
                            <b>Credit Card Service 
                            <br/>
                            Fee:</b>
                        </td>
                        <td>
                            $1.00
                        </td>
                        <td>
                            <b>DMV Transfer Title:</b>
                        </td>
                        <td>
                            $148.00
                        </td>
                        <td>
                            <b>DMV Removed 
                            <br/>
                            Suspension:</b>
                        </td>
                        <td>
                            Service Fee 
                            <br/>
                            $15.71
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            <b>MVR:</b>
                        </td>
                        <td>
                            $10.00 per driver
                            <br/>
                            by transaction
                        </td>
                        <td>
                            <b>Agency Renewal:</b>
                        </td>
                        <td>
                            Up to 100% of 
                            <br/>
                            Original BrokerFee
                        </td>
                        <td>
                            <b>Non-Sufficient Funds on 
                            <br/>    
                            Credit Card/Check/Chargeback:</b>
                        </td>
                        <td>
                            $35.00
                        </td>
                        <td>
                            <b>Promo Registration 
                            <br/>
                            Renewal Fee:</b>
                        </td>
                        <td>
                            $8.50 P.F.
                            <br/>
                            Reg. per vehicle
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            <b>BF MK:</b>
                        </td>
                        <td>
                            $10.00 per Transaction
                            <br/>
                            NB or Endo
                        </td>
                        <td>
                            <b>Late Fee on 
                            <br/>    
                            Balance/Invoice:</b>
                        </td>
                        <td>
                            Up to 
                            <br/>
                            $30.00
                        </td>
                        <td>
                            <b>DMV
                            <br/>
                            Vehicle Verification:</b>
                        </td>
                        <td>
                            Up to $10.00
                            <br/>
                            per Vehicle
                        </td>
                        <td>
                            <b>Promo 
                            <br/>
                            Title Change:</b>
                        </td>
                        <td>
                            $74.00 
                            <br/>
                            per vehicle
                        </td>
                    </tr>
                </tbody>
            </table>

            <p className='mb-1'>
                <b>PREMIUM PAYMENTS: </b> 
                Broker may, at its sole option, accept premium installment payments and transmit the payments to the insurer for an additional fee of
                $15.00 for each payment received. Payments must be received by Broker not less than two (2) business days prior to the installment due date. Broker shall not be
                responsible for late payments, reinstatement fees, or resulting cancellation of your policy. Broker's liability for accepting premium payments shall be limited to the
                amount of the premium payment.
            </p>

            <p className='text-center fw-bold font-10 my-1'>CANCELLATION AND OTHER MISCELLANEOUS PROVISIONS</p>
            
            <p>
                Broker will only honor cancellation requests made in writing and signed by the Client. Broker may provide client with insurance identification cards upon completion
                of the applications process. Client acknowledges and understands that insurance coverage is not provided until the application is underwritten and accepted by the
                insurance company. Accordingly, the identification cards cannot be used as proof of the insurance by the Client until the insurance company has bound and issued
                coverage as evidenced by a declaration page and/or policy. Client understands that a "binder" number is not evidence of insurance under the declaration page is
                issued. Broker and Client agree to binding arbitration with ADR of any disputes in which the amount claimed exceeds the small Claims Court jurisdiction under the
                rules set up by the DR, in accordance with California Code of Civil Procedure, without right of appeal.
            </p>

            <div className='d-flex justify-content-between mt-3 mx-5 pt-3 text-center fw-bold'>
                <div>
                    <Input width="300px" className="text-center" disabled bColor="yellow"/>
                    <p>Named Insured Signature</p>
                </div>
                <div>
                    <Input width="300px" className="text-center" disabled/>
                    <p>Broker's Signature</p>
                </div>
            </div>
            
            <p className='text-center mt-2 fw-bold'>
                If you have any questions or complaints please call our customer service toll free number at 1-888-290-4040. In any case of questions/problems concerning broker fees or insurance,
                contact the Department of Insurance at 1-800-927-HELP.
            </p>

        </div>
    )
}