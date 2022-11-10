import React from 'react';
import Input from '../../Input'

export default function D1({date}) {

    return (
        <div className='sheet font-12 text-justify fw-bold'>
            

            <p className='text-center font-14 mt-5'>
                IMPORTANT NOTICE:
            </p>

            <p>
                <span className='me-4'>1.</span>
                The insurance policy that you are applying to purchase is being
                issued by an insurer that is not licensed by the State of California.
                These companies are called “nonadmitted” or “surplus line”
                insurers.
            </p>
            <p>
                <span className='me-4'>2.</span>
                The insurer is not subject to the financial solvency regulation
                and enforcement that apply to California licensed insurers.
            </p>
            <p>
                <span className='me-4'>3.</span>
                The insurer does not participate in any of the insurance
                guarantee funds created by California law. Therefore, these funds
                will not pay your claims or protect your assets if the insurer becomes
                insolvent and is unable to make payments as promised.
            </p>
            <p>
                <span className='me-4'>4.</span>
                The insurer should be licensed either as a foreign insurer in
                another state in the United States or as a non-United States (alien)
                insurer. You should ask questions of your insurance agent, broker, or
                “surplus line” broker or contact the California Department of
                Insurance at the toll-free number 1-800-927-4357 or internet website
                www.insurance.ca.gov. Ask whether or not the insurer is licensed as
                a foreign or non-United States (alien) insurer and for additional
                information about the insurer. You may also visit the NAIC’s internet
                website at www.naic.org. The NAIC—the National Association of
                Insurance Commissioners—is the regulatory support organization
                created and governed by the chief insurance regulators in the United
                States.
            </p>
            <p>
                <span className='me-4'>5.</span>
                Foreign insurers should be licensed by a state in the United
                States and you may contact that state’s department of insurance to
                obtain more information about that insurer. You can find a link to
                each state from this NAIC internet website:
                https://naic.org/state_web_map.htm.
            </p>
            <p>
                <span className='me-4'>6.</span>
                For non-United States (alien) insurers, the insurer should be
                licensed by a country outside of the United States and should be on
                the NAIC’s International Insurers Department (IID) listing of
                approved nonadmitted non-United States insurers. Ask your agent,
                broker, or “surplus line” broker to obtain more information about
                that insurer.
            </p>
            <p>
                <span className='me-4'>7.</span>
                California maintains a “List of Approved Surplus Line Insurers
                (LASLI).” Ask your agent or broker if the insurer is on that list, or
                view that list at the internet website of the California Department of
                Insurance: www.insurance.ca.gov/01-consumers/120-company/07-
                lasli/lasli.cfm.
            </p>
            <p>
                <span className='me-4'>8.</span>
                If you, as the applicant, required that the insurance policy you
                have purchased be effective immediately, either because existing
                coverage was going to lapse within two business days or because you
                were required to have coverage within two business days, and you did
                not receive this disclosure form and a request for your signature until
                after coverage became effective, you have the right to cancel this
                policy within five days of receiving this disclosure. If you cancel
                coverage, the premium will be prorated and any broker’s fee charged
                for this insurance will be returned to you.
            </p>

            <p className='text-end my-5'>
                Insured’s Signature: <Input width="300px" bColor="yellow" disabled/>
                <br/>
                Date: <Input value = {date} width = "80px" className = "text-center fw-bold"/>
            </p>

            <p>
                D-1 (Effective January 1, 2020)
            </p>



        </div>
    )
}