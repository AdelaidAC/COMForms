import React from 'react'
import CDate from '../../CDate'
import Input from '../../Input'
import Logo from '../../Logo'
import Signature from '../../Signature'
import Title from '../../Title'

const agreementValues = [
    "PROOF OF PRIOR FOR THE LAST", 
    "PROOF OF NO LOSSES IN THE PAST 5 YEARS", 
    "VALID IDENTIFICATION FOR APPLICANT", 
    "INSPECTION OF PREMISES AND/OR OPERATIONS", 
    "PROOF OF LIVING IN PROPERTY INSURED", 
    "VERIFICATION OF LOCATION INFORMATION", 
    "PROOF OF MARRIAGE", 
    "MORTGAGEE, MORTGAGEE CLAUSE, AND LOAN NUMBER", 
    "BALANCE DUE", 
    "OTHER"
]

export default function PATrucking({name, initials, address, phone}) {
    return (
        
        <div className='sheet font-11'>
            
            <Logo />

            <Title text="PROMISE TO PROVIDE AGREEMENT" />

            <div className="d-flex justify-content-between my-3">
                <div>
                    Client Name:
                    <Input width="400px" name="PAT_ClientName"/>
                </div>
                <div>
                    Date:
                    <CDate/>
                </div>
            </div>
            
            <div className='px-2'>
                
                It is my stated intention to obtain insurance coverage effective <CDate/>, however I do not have copies of the following information with me:
                <br/>

                <input className="me-1" type="checkbox" name="PAT_PendingOne" value="Pending_One"/> 
                PROOF OF PRIOR INSURANCE FOR THE LAST
                <input className="ms-3 me-1" type="checkbox" name="PAT_6M" value="6 Months"/> 6 Months
                <input className="ms-3 me-1" type="checkbox" name="PAT_1Y" value="1 Year"/> 1 Year
                <input className="ms-3 me-1" type="checkbox" name="PAT_2Y" value="2 Years"/> 2 Years
                <input className="ms-3 me-1" type="checkbox" name="PAT_3Y" value="3 Years"/> 3 Years
                <br/>

                <input className="me-1" type="checkbox" name="PAT_PendingTwo" value="Pending_Two"/> 
                PROOF OF NON-FAULT OR NON-INJURY ACCIDENT FOR THE FOLLOWING DATE(S):
                <Input width="150px" name="PAT_AccidentDates"/>
                <br/>

                <input className="me-1" type="checkbox" name="PAT_PendingThree" value="Pending_Three"/> 
                VALID LICENSE FOR:
                <input className="ms-3 me-1" type="checkbox" name="PAT_D1" value="Driver 1"/> Driver 1
                <input className="ms-3 me-1" type="checkbox" name="PAT_D2" value="Driver 2"/> Driver 2
                <input className="ms-3 me-1" type="checkbox" name="PAT_D3" value="Driver 3"/> Driver 3
                <input className="ms-3 me-1" type="checkbox" name="PAT_D4" value="Driver 4"/> Driver 4
                <input className="ms-3 me-1" type="checkbox" name="PAT_D5" value="Driver 5"/> Driver 5
                <input className="ms-3 me-1" type="checkbox" name="PAT_D6" value="Driver 6"/> Driver 6
                <br/>

                <input className="me-1" type="checkbox" name="PAT_PendingFour" value="Pending_Four"/> 
                VALID VEHICLE REGISTRATION FOR:
                <div className='mx-3 d-flex justify-content-between'>
                    <div>
                        <input className="me-3" type="checkbox" name="PAT_RegOne" value="Reg_One"/>
                        <Input name="PAT_RYearOne"/>
                        <Input width="100px" name="PAT_RMakeOne"/>
                    </div>
                    <div>
                        <input className="me-3" type="checkbox" name="PAT_RegTwo" value="Reg_Two"/>
                        <Input name="PAT_RYearTwo"/>
                        <Input width="100px" name="PAT_RMakeTwo"/>
                    </div>
                    <div>
                        <input className="me-3" type="checkbox" name="PAT_RegThree" value="Reg_Three"/>
                        <Input name="PAT_RYearThree"/>
                        <Input width="100px" name="PAT_RMakeThree"/>
                    </div>
                </div>
                <div className='mx-3 d-flex justify-content-between'>
                    <div>
                        <input className="me-3" type="checkbox" name="PAT_RegFour" value="Reg_Four"/>
                        <Input name="PAT_RYearFour"/>
                        <Input width="100px" name="PAT_RMakeFour"/>
                    </div>
                    <div>
                        <input className="me-3" type="checkbox" name="PAT_RegFive" value="Reg_Five"/>
                        <Input name="PAT_RYearFive"/>
                        <Input width="100px" name="PAT_RMakeFive"/>
                    </div>
                    <div>
                        <input className="me-3" type="checkbox" name="PAT_RegSix" value="Reg_Six"/>
                        <Input name="PAT_RYearSix"/>
                        <Input width="100px" name="PAT_RMakeSix"/>
                    </div>
                </div>

                <input className="me-1" type="checkbox" name="PAT_PendingFive" value="Pending_Five"/> 
                VEHICLE FOR INSPECTIONS AND PHOTOS OF ALL FOUR SIDES:
                <div className='mx-3 d-flex justify-content-between'>
                    <div>
                        <input className="me-3" type="checkbox" name="PAT_PhotosOne" value="Photos_One"/>
                        <Input name="PAT_PYearOne"/>
                        <Input width="100px" name="PAT_PMakeOne"/>
                    </div>
                    <div>
                        <input className="me-3" type="checkbox" name="PAT_PhotosTwo" value="Photos_Two"/>
                        <Input name="PAT_PYearTwo"/>
                        <Input width="100px" name="PAT_PMakeTwo"/>
                    </div>
                    <div>
                        <input className="me-3" type="checkbox" name="PAT_PhotosThree" value="Photos_Three"/>
                        <Input name="PAT_PYearThree"/>
                        <Input width="100px" name="PAT_PMakeThree"/>
                    </div>
                </div>
                <div className='mx-3 d-flex justify-content-between'>
                    <div>
                        <input className="me-3" type="checkbox" name="PAT_PhotosFour" value="Photos_Four"/>
                        <Input name="PAT_PYearFour"/>
                        <Input width="100px" name="PAT_PMakeFour"/>
                    </div>
                    <div>
                        <input className="me-3" type="checkbox" name="PAT_PhotosFive" value="Photos_Five"/>
                        <Input name="PAT_PYearFive"/>
                        <Input width="100px" name="PAT_PMakeFive"/>
                    </div>
                    <div>
                        <input className="me-3" type="checkbox" name="PAT_PhotosSix" value="Photos_Six"/>
                        <Input name="PAT_PYearSix"/>
                        <Input width="100px" name="PAT_PMakeSix"/>
                    </div>
                </div>
                <br/>

                <input className="me-1" type="checkbox" name="PAT_PendingSix" value="Pending_Six"/> 
                PROOF OF GARAGING ADDRESS
                <br/>

                <input className="me-1" type="checkbox" name="PAT_PendingSeven" value="Pending_Seven"/> 
                PROOF OF MARRIAGE
                <br/>

                <input className="me-1" type="checkbox" name="PAT_PendingEight" value="Pending_Eight"/> 
                SALES OR LEASE AGREEMENT
                <br/>

                <input className="me-1" type="checkbox" name="PAT_PendingNine" value="Balance"/> 
                BALANCE DUE
                <br/>

                <input className="me-1" type="checkbox" name="PAT_PendingTen" value="Other"/> 
                OTHER
                <Input width="90%" name="PAT_Other"/>
            
            </div>

            <p className="text-center my-4">
                I hereby promise to provide the above-indicated information by 
                <CDate/> to Adriana's Insurance Services, Inc.
            </p>
            
            <p className="mx-3 mb-5 lh-2">
                In the event that the information is not provided by the above-mentioned date, I understand that some or all of my coverage may be subject to a premium increase, cancellation, or rejection, 
                with no coverage in effect. I further understand that if a premium increase, cancellation or rejection occurs because I fail to provide the above indicated information, I may lose all or part 
                of my down payment and fully-earned Broker’s Fee, and I may incur a financial loss.
            </p>

            <Signature />

        </div>

    )
}