import React from 'react'
import CDate from '../../CDate'
import Input from '../../Input'
import Logo from '../../Logo'
import V1 from '../../../img/v1.jpg'
import V2 from '../../../img/v2.jpg'
import V3 from '../../../img/v3.jpg'
import V4 from '../../../img/v4.jpg'
import V5 from '../../../img/v5.jpg'
import V6 from '../../../img/v6.jpg'
import V7 from '../../../img/v7.jpg'
import V8 from '../../../img/v8.jpg'
import V9 from '../../../img/v9.jpg'
import V10 from '../../../img/v10.jpg'
import V11 from '../../../img/v11.jpg'
import V12 from '../../../img/v12.jpg'
import V13 from '../../../img/v13.jpg'
import V14 from '../../../img/v14.jpg'
import V15 from '../../../img/v15.jpg'
import V16 from '../../../img/v16.jpg'


export default function IAutoInternals({name, date}) {
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className='sheet font-11 text-justify'>
        
            <Logo/>

            <div className='d-flex justify-content-between my-4'>
                <div className='d-flex col-8'>
                    <b>Client Name:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1 text-center" maxlength="40" value={name}/>
                    </span>
                </div>
                <div>
                    <b>Date: </b>
                    <Input value = {date} width = "80px" className = "text-center fw-bold"/>
                </div>
            </div>

            <p className='text-center fw-bold'>
                <u>Please sign under the vehicle which corresponds to the Pick-Up or Van insured on the policy.</u>
                <br/>
                <i>Favor de firmar abajo del vehiculo que corresponde a el Pick-Up o Camioneta que esta en la poliza.</i>
            </p>


            <table className="text-center">
                <tr>
                    <td class="align-bottom px-2">
                        <img src={V1} alt="Pick-Up" width="150px" />
                        <br/>
                        <b>Pick-Up</b>
                        <br/>
                        <Input className="w-100 mt-4" disabled/>
                    </td>
                    <td class="align-bottom px-2">
                        <img src={V2} alt="Light Stake Body" width="150px" />
                        <br/>
                        <b>Light Stake Body</b>
                        <br/>
                        <Input className="w-100 mt-4" disabled/>
                    </td>
                    <td class="align-bottom px-2">
                        <img src={V3} alt="Passenger Van" width="150px" />
                        <br/>
                        <b>Passenger Van</b>
                        <br/>
                        <Input className="w-100 mt-4" disabled/>
                    </td>
                    <td class="align-bottom px-2">
                        <img src={V4} alt="Cargo Van" width="150px" />
                        <br/>
                        <b>Cargo Van</b>
                        <br/>
                        <Input className="w-100 mt-4" disabled/>
                    </td>
                </tr>
                <tr>
                    <td class="align-bottom px-2">
                        <img src={V5} alt="Light Dump Truck" width="150px" />
                        <br/>
                        <b>Light Dump Truck</b>
                        <br/>
                        <Input className="w-100 mt-4" disabled/>
                    </td>
                    <td class="align-bottom px-2">
                        <img src={V6} alt="Light Tow Truck" width="150px" />
                        <br/>
                        <b>Light Tow Truck</b>
                        <br/>
                        <Input className="w-100 mt-4" disabled/>
                    </td>
                    <td class="align-bottom px-2">
                        <img src={V7} alt="Light Flatbed" width="150px" />
                        <br/>
                        <b>Light Flatbed</b>
                        <br/>
                        <Input className="w-100 mt-4" disabled/>
                    </td>
                    <td class="align-bottom px-2">
                        <img src={V8} alt="Light Step Van" width="120px" />
                        <br/>
                        <b>Light Step Van</b>
                        <br/>
                        <Input className="w-100 mt-4" disabled/>
                    </td>
                </tr>
                <tr className='my-4'>
                    <td colspan="4" className='text-center'>
                        <b>********************* GVW 10,001 to 20,000 lbs *********************</b>
                    </td>
                </tr>
                <tr>
                    <td class="align-bottom px-2">
                        <img src={V9} alt="Medium Flatbed" width="150px" />
                        <br/>
                        <b>Medium Flatbed</b>
                        <br/>
                        <Input className="w-100 mt-4" disabled/>
                    </td>
                    <td class="align-bottom px-2">
                        <img src={V10} alt="Medium Step Van" width="150px" />
                        <br/>
                        <b>Medium Step Van</b>
                        <br/>
                        <Input className="w-100 mt-4" disabled/>
                    </td>
                    <td class="align-bottom px-2">
                        <img src={V11} alt="Stake Body" width="150px" />
                        <br/>
                        <b>Stake Body</b>
                        <br/>
                        <Input className="w-100 mt-4" disabled/>
                    </td>
                    <td class="align-bottom px-2">
                        <img src={V12} alt="Straight Truck" width="120px" />
                        <br/>
                        <b>Straight Truck</b>
                        <br/>
                        <Input className="w-100 mt-4" disabled/>
                    </td>
                </tr>
                <tr>
                    <td colspan="4" className='text-center'>
                        <b>********************* GVW 20,001 to 45,000 lbs *********************</b>
                    </td>
                </tr>
                <tr>
                    <td class="align-bottom px-2">
                        <img src={V13} alt="Hvy Straight Truck" width="150px" />
                        <br/>
                        <b>Hvy Straight Truck</b>
                        <br/>
                        <Input className="w-100 mt-4" disabled/>
                    </td>
                    <td class="align-bottom px-2">
                        <img src={V14} alt="Hvy Stake Body" width="150px" />
                        <br/>
                        <b>Hvy Stake Body</b>
                        <br/>
                        <Input className="w-100 mt-4" disabled/>
                    </td>
                    <td class="align-bottom px-2">
                        <img src={V15} alt="Hvy Flatbed" width="150px" />
                        <br/>
                        <b>Hvy Flatbed</b>
                        <br/>
                        <Input className="w-100 mt-4" disabled/>
                    </td>
                    <td class="align-bottom px-2">
                        <img src={V16} alt="Hvy Dump Truck" width="120px" />
                        <br/>
                        <b>Hvy Dump Truck</b>
                        <br/>
                        <Input className="w-100 mt-4" disabled/>
                    </td>
                </tr>
            </table>

            <p className='text-center fw-bold my-3'>
                My agent has clearly reviewed the difference in body types as shown above. I have signed under the vehicle which reflects the 
                vehicle I insured and by signing I agree to the terms of this document. I will not hold Adriana’s Insurance responsible for any 
                misrepresentation on my behalf. 
            </p>

            <p className='text-center'>
                9445 Charles Smith Ave Rancho Cucamonga CA 91730 Ph: 909-291-4040 Fax: 909-373-4795
            </p>

        </div>
    )
}