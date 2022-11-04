import React from "react";
import Input from "../../Input";
import Logo from "../../Logo";
import Title from "../../Title";

export default function SBFDFFlood({name, initials, address, phone}) {
    return (
        <div className="sheet font-14 text-justify">
            
            <Logo />

            <Title text="STANDARD BROKER FEE DISCLOSURE FORM"/>

            <p>
                This disclosure was prepared by the California Insurance Commissioner. Please READ IT
                CAREFULLY!
            </p>
            <p>
                I. Do not sign any broker fee agreement unless all of its blank lines and spaces have been filled-
                in and you have read the entire document and the agreement carefully.
            </p>
            <p>
                II. Your insurance broker represents you, the consumer, and is entitled to charge a broker fee if
                he/she chooses. This fee is not set by law, and may be negotiable between you and the broker.
            </p>
            <p>
                III. It is illegal for an insurance broker to charge you a fee for placing coverage solely with the
                California Automobile Assigned Risk Plan or the California Fair Plan. Fees may be charged for
                placement of other coverage.
            </p>
            <p>
                IV. Broker fees are often non-refundable even if you cancel your coverage refer to your broker
                fee agreement to see if your broker fee is non-refundable. However, you may be entitled to a full
                refund of a broker fee if your broker acted incompetently or dishonestly. Unresolved disputes
                over non-refunded broker fees can be forwarded to the Department of Insurance for review.
            </p>
            <p>
                V. You are entitled to obtain and keep a completed copy of this disclosure and any broker fee
                agreement you sign.
            </p>
            <p>
                VI. Your broker may receive a commission from insurance company(ies) for placing your
                insurance. This commission may be paid to your broker by the insurance company(ies) in
                addition to any broker fee you pay.
            </p>
            <p>
                VII. If you will be paying your premium in installments to a finance company, by law you must
                receive a copy of a premium finance disclosure and agreement. Be sure to obtain and read those
                documents before signing a premium finance agreement. Also, ask the broker if the insurer offers
                its own installment payment plan. Insurer installment plans are often cheaper than premium
                financing through a separate premium finance company.
            </p>
            <p>
                VIII. If your broker is placing automobile coverage, your broker must provide you with a copy of
                the current Department of Insurance pamphlet Automobile Insurance. If your broker is placing
                residential coverage, your broker must provide you with a copy of the current Department of
                Insurance pamphlet Residential Insurance. By signing this disclosure, you acknowledge receipt
                of the appropriate pamphlet(s).
            </p>

            <div>
                <Input width="60px"/>
                <p className='mb-0 fw-bold'>Initials</p>
            </div>

        </div>
    );
}