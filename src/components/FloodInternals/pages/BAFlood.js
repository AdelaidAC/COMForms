import React from 'react'
import Input from '../../Input'
import Logo from '../../Logo'
import Signature from '../../Signature'
import Subtitle from '../../Subtitle'
import CDate from '../../CDate';
import Title from '../../Title'

export default function BAFlood({firstSignature, secondSignature, name, initials, address, phone}) {
    return (
        <div className='sheet font-12 text-justify'>
            
            <Logo />

            <div className="d-flex justify-content-between mt-4">
                <label>Insured’s Name:
                    <Input width="400px" className="ms-1 text-center" value={name}/>
                </label>
                <label>Date:
                    <CDate/>
                </label>
            </div>
            
            <Title text="BROKER’S AGREEMENT"/>

            <Subtitle text="APPOINTMENT OF INSURANCE BROKER AND AGREEMENT TO PAY BROKER FEE"/>
            
            <p>
                As of today, <CDate/> , the undersigned (“Client”) appoints Adriana’s Insurance Services, Inc. (“Broker”) as his/her insurance broker of record.
                This Agreement shall continue in full force until terminated by either party. Broker agrees to represent Client honestly and competently in obtaining
                and servicing the desired insurance coverage, as may be available, and Client agrees to act in good faith with Broker and provide Broker with full
                disclosure of all information and documentation necessary to allow Broker to procure an insurance policy. Client agrees to pay a broker fee for Broker’s
                services. The broker fee is in addition to: (i) any commissions, contingent commissions, or bonuses, which may be paid to Broker by the insurance 
                company; and (ii) the Additional Services, listed below. Client authorizes Broker to cancel insurance if premiums or fees remain unpaid to Broker
            </p>

            <p>
                The <b>Broker Fee is</b> <Input className="text-center"/> (<b>Initials:</b> <Input className="text-center" value={initials}/> ). Client agrees to this fee and understands that the broker fee is / is not refundable, 
                irrespective of whether the policy is cancelled or rejected by the Client or insurer. Client authorizes Broker to maintain premium payments in 
                interest-bearing trust accounts and to receive any interest-income there from until paid to the insurance company. Additional Services: Broker 
                may charge the following fees for the following services in addition to the broker fee: 
            </p>
            
            <table>
                <tbody>
                    <tr className="text-decoration-underline fw-bold">
                        <td>Services:</td>
                        <td>Fees:</td>
                        <td>Services:</td>
                        <td>Fees:</td>
                    </tr>
                    <tr>
                        <td>Endorsements:</td>
                        <td>$100.00 per endorsement</td>
                        <td>Split Down Payment:</td>
                        <td>$20.00</td>
                    </tr>
                    <tr>
                        <td>MVR:</td>
                        <td>$10.00 per MVR</td>
                        <td>Bounced Check:</td>
                        <td>$25.00</td>
                    </tr>
                    <tr>
                        <td>Vehicle Registration:</td>
                        <td>$10.00 per copy</td>
                        <td>Agency Renewal:</td>
                        <td>Up to 100% of original broker fee</td>
                    </tr>
                </tbody>
            </table>

            <p>
                <b>PREMIUM PAYMENTS:</b> Broker may, at its sole option, accept premium installment payments and transmit the payments to the insurer for an 
                additional fee of <b><u>$10.00</u></b> or each payment received. Payments must be received by Broker not less than two (2) business days prior to the 
                installment due date. Broker shall not be responsible for late payments, reinstatement fees, or resulting cancellation of your policy. Broker’s 
                liability for accepting premium payments shall be limited to the amount of the premium payment. Check payments are not acceptable. 
            </p>

            <Subtitle text="CANCELLATION AND OTHER MISCELLANEOUS PROVISIONS"/>

            <p className="mb-1">
                Broker will only honor cancellation requests made in writing and signed by the Client. Broker may provide client with insurance identification 
                cards upon completion of the application process. Client acknowledges and understands that insurance coverage is not provided until the 
                application is underwritten and accepted by the insurance company. Accordingly, the identification cards cannot be used as proof of insurance by 
                the Client until the insurance company has bound and issued coverage as evidenced by a declaration page and/or policy. Client understands that 
                a “binder” number is not evidence of insurance until the declaration page is issued. Broker and Client agree to binding arbitration with ADR of 
                any disputes in which the amount claimed exceeds the Small Claims Court jurisdiction under the rules set up by the ADR, in accordance with 
                California Code of Civil Procedure, without right of appeal.
            </p>

            <Subtitle text="SPECIAL POWER OF ATTORNEY "/>

            <p className="mb-1">
                Client hereby appoints Broker, as his/her Attorney-in-Fact, to act in Client’s name and place, and for Client’s use and benefit in connection with 
                obtaining and maintaining insurance for Client. Client hereby grants to said Attorney-in-Fact, full power and authority to perform any act which 
                may be necessary or convenient in connection with any of the foregoing as fully as Client might or could do in person including, but not limited 
                to: Signing and acknowledging insurance applications and papers, including rewrites and renewals, endorsements/change request forms, and 
                endorsing all returned and unearned premiums. Client hereby ratifies and confirms all that said Attorney-in-Fact shall lawfully do or cause to be 
                done by authority hereof. 
            </p>

            <p className="mb-1">
                I agree to the conditions set forth above and acknowledge receipt of a copy of this Agreement. I understand that upon signing this document, the 
                broker fee will be fully earned by Broker and will be non-refundable even if the policy is cancelled. 
            </p>

            <div className="text-center mt-3">
                <Input width="60%" className="text-center"/>
                <p className='mb-0'>(Insured must write in his/her own hand: <b>“I have read and understand the above and do read English.”</b>) </p>
            </div>

            <Signature firstSignature={firstSignature} secondSignature={secondSignature}/>
            
            <label className='mt-1 text-center'>
                <b>
                If you have any questions or complaints please call our customer service toll free number at 1-888-290-4040. In any case of questions/problems concerning broker fees or insurance,
                contact the Department of Insurance at 1-800-927-HELP
                </b>
            </label>

        </div>
    )
}