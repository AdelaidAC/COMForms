import React from "react";
import Input from "../../Input";
import Logo from "../../Logo";

const disclosures = [
    {
        disclosure:
            "I understand and acknowledge that there is included in each monthly payment a billing fee. Payments must reach the insurance company on or before the due date to avoid cancellation. I understand that even if I do not receive a bill, it is my responsibility to pay the premium due. If the policy is cancelled, the insurance company may offer to reinstate the policy with a lapse in coverage. If the insurance company refuses to reinstate the policy, a new down payment will be required in order to replace the cancelled policy.",
        title: "BILLING FEE",
    },
    {
        disclosure:
            "I understand and agree that my property is not used in the course of or pursuit of my business. I also understand and agree that the coverage afforded by this policy shall not benefit any insured or third party claimant when the property is used in any manner other than noted above. This property is not insured as a commercial building, apartment complex, or commercial housing units.",
        title: "COMMERCIAL PROPERTY USE EXCLUSION",
    },
    {
        disclosure:
            "Please be advised that the insurance company will send your policy and billing statements to the same address listed in Insured Statement form which was completed personally by you at the time of the insurance purchase. I acknowledge and agree that if my mailing address changes, I will immediately notify Broker of my new address.",
        title: "CLIENT MAILING ADDRESS",
    },
    {
        disclosure:
            "I certify that the property address listed in the Insured Statement is in fact the dwelling requested to be covered.",
        title: "CLIENT PROPERTY ADDRESS",
    },
    {
        disclosure:
            "I am aware that disclosing false and/or incorrect information regarding Mailing and Property Address could affect my Insurance Coverage.",
        title: "",
    },
];

export default function BAGCFlood({name, date}) {
    return (
        
        <div className="sheet font-12 text-justify">
            
            <Logo />
            
            <h5 className="text-center fw-bold text-decoration-underline my-3">
                BROKER AGREEMENT GENERAL CONDITIONS
            </h5>

            <div className="row text-center fw-bold">
                <div className="col">
                    CHANGES ON POLICY(IES)
                </div>
                <div className="col">
                    CANCELLATIONS
                </div>
                <div className="col">
                    ADDRESS CHANGE
                </div>
            </div>

            <p className="mt-0 mb-3 mx-4">
                I understand and agree that if at any time I want to make any changes through my Broker on my policy(ies), 
                including upon renewal(s), it is my obligation to request such changes in writing to my Broker. I will 
                thereafter be responsible for any fees or premium increase resulting from such changes.
            </p>

            {disclosures.map((elem, i) => {
                return (
                    <div key={i} >
                        <div className="mx-4 my-3">
                            <p className="text-center mb-0 fw-bold">
                                {elem.title}
                            </p>
                            <p className="my-0">
                                <input disabled className="input-default y me-1" style={{width: "60px"}} />
                                <b className="me-3">Initials</b> {elem.disclosure}
                            </p>
                        </div>
                    </div>
                );
            })}

            <p className="my-3 mx-4">
                I certify by my signature below that all information contained in my application(s) 
                for insurance is true and accurate. I understand that additional
                efforts may be made by Broker or the insurance company to verify the 
                accuracy of the information contained in the Application, and that if I
                provided inaccurate information, it may result in an increase in my premium, 
                rejection of my application, and/or cancellation of my policy(ies).
            </p>

            <p className="text-center fw-bold font-10 mx-4">I AGREE TO THE CONDITONS AND DISCLOSURES ABOVE AND ACKNOWLEDGE RECEIPT OF A COPY OF THIS DISCLOSURE.</p>

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
    );
}
