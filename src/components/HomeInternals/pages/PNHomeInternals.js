import React, { useEffect, useState} from 'react';
import Input from '../../Input'
import Logo from '../../Logo'
import Subtitle from '../../Subtitle'
import { ToWords } from 'to-words';
import CurrencyFormat from 'react-currency-format';

export default function PNHomeInternals({name, address, phone}) {

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toWords = new ToWords({
        localeCode: 'en-US',
        converterOptions: {
          currency: false,
          ignoreDecimal: false,
          ignoreZeroCurrency: false,
          doNotAddOnly: false,
          doNotAddOnly: true,
          currencyOptions: { // can be used to override defaults for the selected locale
            name: 'Dollar',
            plural: 'Dollars',
            symbol: '$',
            fractionalUnit: {
              name: 'Cent',
              plural: 'Cents',
              symbol: '¢',
            },
          }
        }
      });

      const [iCurrency, setCurrency] = useState('');

      let rCurrency, words = "";

      if(iCurrency.length !== 0)
      {
        rCurrency = iCurrency.replace('$','').replaceAll(',','');
        words = toWords.convert(rCurrency, { currency: true });
      }
      else
      {
        words = toWords.convert(0, { currency: true });
      }

    return (
        <div className='sheet font-11 text-justify'>
            
            <Logo />


            <p className='text-center fw-bold font-16 my-3'>PROMISSORY NOTE</p>

            <p className='lh-4'>
                Pursuant to U.C.C. Article 3, §§104-311, the following Note is a negotiable instrument, which legally binds you, the Maker, to legal
                performance of the terms therein. Consequently, because this instrument carries the full force and effect of a negotiable instrument,
                it grants certain rights and powers to the Holder of the Note. Any person who executes this instrument with the intent to dishonor it
                may be liable for fraud and other civil and/or criminal charges. Further, in consideration of this credit extension, I authorize
                Adriana’s Insurance Services, Inc. (“Adriana’s”) to obtain my credit report and to report my credit status to the credit bureau(s).
            </p>

            <div className='d-flex p-0'>
                <span className='me-1'>I (We),</span> <span className="flex-fill"><Input className="w-100 text-center" value={name}/></span>, the undersigned Maker(s),
            </div>

            <div className='d-flex w-100 p-0'>
                <span className='me-1'>Presently residing at</span> <span className="flex-fill"><Input className="w-100 text-center" value={address}/></span>,
            </div>

            <div>
                for value received, hereby promise to pay to the order of Adriana’s Insurance Services Inc.,
            </div>

            <div className='d-flex p-0'>
                <span className='me-1'>the sum of</span> <span className="flex-fill"><Input className="w-100 text-center" maxlength="50" value={words}/></span>(<CurrencyFormat 
                    thousandSeparator={true}
                    prefix={'$'} 
                    maxlength="13"
                    style = {{width:"90px"}}
                    className='fw-bold text-center input-default'
                    onChange = {e => setCurrency(e.target.value)}
                />), <i>without interest,</i>
            </div>

            <div className='p-0'>
                <i>by no later than, </i><input type="date" className='text-center'/>. In the event that my payment of the full amount of this note is not
                received by the aforementioned due date, the entire balance of principal then remaining unpaid, shall immediately become due and
                payable with <i>interest from the date of this note,</i> at the rate of 18% per annum, along with an added late charge of <u>Thirty dollars ($30.00).</u>
            </div>

            <div className='d-flex justify-content-between mt-5 mx-5 mb-3 pt-5 text-center fw-bold'>
                <div>
                    <Input width="300px" className="text-center" disabled bColor="yellow"/>
                    <p>Signature</p>
                </div>
                <div>
                    <Input width="300px" className="text-center" disabled/>
                    <p>Witness</p>
                </div>
            </div>
            
            <Subtitle text="POWER TO CANCEL INSURANCE FOR NON-PAYMENT"/>
            
            <p className='lh-4'>
                <Input disabled width="60px" bColor="yellow"/>
                <b className="me-3 ms-1">Initials</b>
                I understand and agree that, if this Promissory Note to Adriana’s is not paid as agreed, I hereby grant Adriana’s the
                power to request cancellation of my policy(ies) applied for through the California Automobile Assigned Risk Plan or
                any other Company. I also understand that I shall be liable for any allowed charges, earned premiums, fully earned
                fees, including broker fees, as well as, any collection or attorneys fees, if this should occur.
            </p>
          

            <Subtitle text="PROMISSORY NOTE GUARANTEE"/>
            
            <p className='lh-4'>
                <Input disabled width="60px" bColor="yellow"/>
                <b className="me-3 ms-1">Initials</b>
                By initialing this Promissory Note GUARANTEE and signing the Promissory Note above, I understand and
                acknowledge that I am legally bound, under the California Civil Code and the Uniform Commercial Code to make the
                payment below to Adriana’s (including its successors and assigns). If I should dishonor this Promissory Note:
            </p>

            <p className='lh-4'>
                <b>1.</b> I may be sent to a Collection Agency, without further notice of calls, for the total amount of this Promissory Note,
                interest, late fees, and any other fees or penalties;
                <br />
                <b>2.</b> I may be sued and be liable for the total amount of this Promissory Note, and other fees/penalties, including
                interest and attorneys fees; and
                <br />
                <b>3.</b> My insurance coverage may be cancelled, which may result in additional charges by the insurance company(ies)
                and which may cause me to be in violation of Sections 16020-16028 of the California Vehicle Code.
            </p>
            

            <p className='text-center fst-italic fw-bold'>I hereby agree and acknowledge that my initials against the clauses above are endorsed by my handwritten
            statement and signature below.</p>

            <div className='d-flex justify-content-between mt-2 mx-5 text-center'>
                <div>
                    <Input width="260px" value={name} className='text-center'/>
                    <p className='mb-0 fw-bold'>Insured’s Name</p>
                </div>
                <div>
                    <Input width="260px" disabled bColor="yellow"/>
                    <p className='mb-0 fw-bold'>Insured’s Signature</p>
                </div>
                <div>
                    <input className='text-center' type="date"/>
                    <p className='mb-0 fw-bold'>Date</p>
                </div>
            </div>

            <div className='d-flex justify-content-between mt-2 text-center'>
                <div>
                    <Input width = "150px" maxlength="15" className='text-center'/>
                    <p className='fw-bold'>Social Security Number</p>
                </div>
                <div>
                    <Input width = "150px" className='text-center' value={phone}/>
                    <p className='fw-bold'>Cell Phone Number</p>
                </div>
                <div>
                    <CurrencyFormat format="(###) ###-####" mask="_" className='text-center input-default' style={{width: "150px"}}/>
                    <p className='fw-bold'>Home Phone Number</p>
                </div>
                <div>
                    <CurrencyFormat format="(###) ###-####" mask="_" className='text-center input-default' style={{width: "150px"}}/>
                    <p className='fw-bold'>Work Phone Number</p>
                </div>
                <div>
                    <Input maxlength="5" className='text-center'/>
                    <p className='fw-bold'>Ext.</p>
                </div>
            </div>

        </div>
    )
}