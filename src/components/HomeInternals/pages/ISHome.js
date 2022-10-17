import React from 'react'
import Input from '../../Input'
import CDate from '../../CDate';
import Title from '../../Title'
import Logo from '../../Logo'

export default function ISHome({name, initials, address, phone}) {
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        
        <div className='sheet font-10'>
            <Logo/>
            <Title text="INSURED’S STATEMENT"/>
            
            <p className='font-9 text-center'>
                Form <b>must</b> be completed by <b>Insured.</b> (Please have customer handwrite)
                <br/>
                <i>Esta forma debe ser llenada por el Asegurado. (Por favor llenar a Mano)</i>
            </p>

            <div className='d-flex justify-content-between'>
                <div className='d-flex col-9'>
                    <b>Legal Owner Name:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" maxlength="40" value={name}/>
                    </span>
                </div>
                <div className='d-flex'>
                    <b>Date of Birth:</b>
                    <span className="flex-fill">
                        <Input className="ms-1" maxlength="40" width = "80px" placeholder = "mm/dd/yyyy"/>
                    </span>
                </div>
            </div>

            <div className='d-flex justify-content-between'>
                <div className='d-flex col-9'>
                    <b>Co-Applicant Name:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" maxlength="40"/>
                    </span>
                </div>
                <div className='d-flex'>
                    <b>Date of Birth:</b>
                    <span className="flex-fill">
                        <Input className="ms-1" maxlength="40" width = "80px" placeholder = "mm/dd/yyyy"/>
                    </span>
                </div>
            </div>

            <div class="row">
                <div class="col d-flex">
                    <b>Home Phone:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" maxlength="40"/>
                    </span>
                </div>
                <div class="col d-flex">
                    <b>Cell Phone:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" maxlength="45"/>
                    </span>
                </div>
            </div>

            <div class="row">
                <div class="col d-flex">
                    <b>Work Phone:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" maxlength="40"/>
                    </span>
                </div>
                <div class="col d-flex">
                    <b>Email:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" maxlength="45"/>
                    </span>
                </div>
            </div>

            <div className="d-flex my-1">
                <b>Mailing Address:</b>
                <span className="flex-fill">
                    <Input className="w-100 ms-1" maxlength="80"/>
                </span>
            </div>

            <div className="d-flex my-1">
                <b>Property Address:</b>
                <span className="flex-fill">
                    <Input className="w-100 ms-1" maxlength="80"/>
                </span>
            </div>

            <p className='font-9 text-center my-3 fw-bold'>
               <i>Please handwrite the landlord's/additional insureds information / Favor de escribir la informacion del proprietario o asegurado adicional.</i>
            </p>

            <div className="d-flex">
                <b>Mortgagee 1 / Hipotecario 1:</b>
                <span className="flex-fill">
                    <Input className="w-100 ms-1" maxlength="80"/>
                </span>
            </div>

            <div className="text-center">
                Loan Number 1 / Numero de Prestamo 1:
                <span className="flex-fill">
                    <Input className="ms-1" maxlength="80" width="400px"/>
                </span>
            </div>

            <div className="d-flex">
                <b>Mortgagee 2 / Hipotecario 2:</b>
                <span className="flex-fill">
                    <Input className="w-100 ms-1" maxlength="80"/>
                </span>
            </div>

            <div className="text-center">
                Loan Number 2 / Numero de Prestamo 2:
                <span className="flex-fill">
                    <Input className="ms-1" maxlength="80" width="400px"/>
                </span>
            </div>
 
            <table className='w-100 '>
                <tr>
                    <td colspan="5">
                        *(Please initial occupancy description chosen)*
                    </td>
                </tr>
                <tr className='d-flex justify-content-between'>
                    <td>
                        <input className="me-1" type="checkbox"/> 
                        Owner Occupied
                        <Input width="60px" maxlength="40" className="ms-1"/>
                    </td>
                    <td>
                        <input className="me-1" type="checkbox"/> 
                        Tenant
                        <Input width="60px" maxlength="40" className="ms-1"/>
                    </td>
                    <td>
                        <input className="me-1" type="checkbox"/> 
                        Secondary
                        <Input width="60px" maxlength="40" className="ms-1"/>
                    </td>
                    <td>
                        <input className="me-1" type="checkbox"/> 
                        Seasonal
                        <Input width="60px" maxlength="40" className="ms-1"/>
                    </td>
                    <td>
                        <input className="me-1" type="checkbox"/> 
                        Vacant
                        <Input width="60px" maxlength="40" className="ms-1"/>
                    </td>
                </tr>
            </table>

            <div className='row mt-3'>
                <div className='col-3'>
                    # of Bedrooms:
                    <Input className="ms-1" width="40%" maxlength="40"/>
                </div>
                <div className='col-3'>
                    Year Built:
                    <Input className="ms-1" width="40%" maxlength="40"/>
                </div>
                <div className='col-3'>
                    # of Bathrooms:
                    <Input className="ms-1" width="40%" maxlength="40"/>
                </div>
                <div className='col-3'>
                    Square Feet:
                    <Input className="ms-1" width="40%" maxlength="40"/>
                </div>
            </div>

            <div className='row'>
                <div className='col-3'>
                    # of Stories:
                    <Input className="ms-1" width="40%" maxlength="40"/>
                </div>
                <div className='col-3'>
                    Age of Roof:
                    <Input className="ms-1" width="40%" maxlength="40"/>
                </div>
                <div className='col-3'>
                    # of Fireplaces:
                    <Input className="ms-1" width="40%" maxlength="40"/>
                </div>
                <div className='col-3'>
                    Date of Purchase
                    <Input className="ms-1" width="40%" maxlength="40"/>
                </div>
            </div>

            <table className='my-4'>
                <tr>
                    <td>1) Does the home have Copper Plumbing?</td>
                    <td>
                        Yes
                        <input className="me-1" type="checkbox"/> 
                    </td>
                    <td>
                        No
                        <input className="me-1" type="checkbox"/> 
                        <b>SURCHARGE</b>
                    </td>
                </tr>
                <tr>
                    <td>2) Are there smoke detectors installed?</td>
                    <td>
                        Yes
                        <input className="me-1" type="checkbox"/> 
                    </td>
                    <td>
                        No
                        <input className="me-1" type="checkbox"/> 
                        <b>INELIGIBLE RISK</b>
                    </td>
                </tr>
                <tr>
                    <td>3) Does the house have circuit breakers? Yes INELIGIBLE RISK</td>
                    <td>
                        Yes
                        <input className="me-1" type="checkbox"/> 
                    </td>
                    <td>
                        No
                        <input className="me-1" type="checkbox"/> 
                        <b>INELIGIBLE RISK</b>
                    </td>
                </tr>
                <tr>
                    <td>4) Do you own or board any pets?</td>
                    <td>
                        Yes
                        <input className="me-1" type="checkbox"/> 
                        <b>CALL FOR APPROVAL</b>
                    </td>
                    <td>
                        No
                        <input className="me-1" type="checkbox"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        5) Do you have an attached garage?
                        <br/>
                        <span className='ms-3'>
                            If “yes”, what kind?
                            <Input width="150px"/>
                        </span>
                    </td>
                    <td>
                        Yes
                        <input className="me-1" type="checkbox"/>
                    </td>
                    <td>
                        No
                        <input className="me-1" type="checkbox"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        6) Do you have a pool?
                        <br/>
                        <span className='ms-3'>
                            If “yes,” how many cars?
                            <Input width="150px"/>
                        </span>
                    </td>
                    <td>
                        Yes
                        <input className="me-1" type="checkbox"/>
                    </td>
                    <td>
                        No
                        <input className="me-1" type="checkbox"/>
                    </td>
                </tr>
                <tr>
                    <td>7) Do you have a pool?</td>
                    <td>
                        Yes
                        <input className="me-1" type="checkbox"/>
                    </td>
                    <td>
                        No
                        <input className="me-1" type="checkbox"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className='ms-3'>If “yes,” is the pool fenced?</span>
                    </td>
                    <td>
                        Yes
                        <input className="me-1" type="checkbox"/>
                    </td>
                    <td>
                        No
                        <input className="me-1" type="checkbox"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className='ms-3'>
                            Does the pool have a slide/diving board?
                        </span>
                    </td>
                    <td>
                        Yes
                        <input className="me-1" type="checkbox"/>
                    </td>
                    <td>
                        No
                        <input className="me-1" type="checkbox"/>
                    </td>
                </tr>
            </table>


            <div className='font-9 text-justify lh-2'>
                <p>
                    I hereby apply to Adriana’s Insurance for a policy of insurance. I agree that such policy shall be null and void if such information is materially false or misleading. I understand that any
                    existing loss at the time of application will not be covered by this insurance. I further understand that my policy does not cover undisclosed improvements or theft unless forced entry
                    is able to be proven. Coverage of liability is applied to the third party only. I also understand that the unit is to be covered by the landlord or property management agency and is not
                    covered under renter's insurance. This coverage was solely intended to cover the limits of coverage disclosed in the Verbal Disclosure and the Declaration's Page.
                </p>
                <p>
                    I agree that the Insurance Company may correct my premium if rated incorrectly or if information obtained from additional sources, including but not limited to your City Halls, City
                    Planning Department changes factors which affect the premium. I agree and understand that if the correct premium is not paid, my policy will expire, or be cancelled for non payment
                    of premium, based on the correct premium developed.
                </p>
                <p>
                    <i>
                        Yo estoy aquí aplicando en Adriana’s Insurance para una Poliza de Seguro. Y acepto que esta poliza es Nula o Cancelada si la información que les doy es falsa o erronea. Yo entiendo
                        que si existe una perdida previa en mi casa al tiempo de este trámite NO tendré ningún tipo de covertura atravez de este seguro. Estoy enterado(a) que la poliza no me cubre robo al
                        menos que tenga comprobante de entrada forsoza. Tambien entiendo que la unidad no sera cubierta ya que es la responsabilidad de el propietaro o de la agencia de gestion y no esta
                        cubierta bajo seguro de inquilino.
                    </i>
                </p>
                <p>
                    <i>
                        Acepto que la Compañia de Seguros puede corregir el premium de mi seguro en caso de que el premium sea incorrecto debido a la información obtenida atravez de otros servicios
                        adicionales pero no limitados como City Hall, City Planning Department y otros factores que puedan afectar el premium de mi seguro.. Yo acepto y entiendo que si el premium de mi
                        seguro correcto en mi poliza No es pagado, mi poliza puede ser cancelada, expirada o no renovada basado en el premium correcto.
                    </i>
                </p>
            </div>

            <div className="d-flex justify-content-between my-4">
                <div className='d-flex flex-fill'>
                    <b>Applicant Signature: </b>
                    <span className='flex-fill mx-1'>
                        <Input className="w-100" maxlength="80" disabled = "true"/>
                    </span>
                </div>
                <div>
                    <b>Date: </b>
                    <CDate/>
                </div>
            </div>

            <div class="text-center font-9">9445 Charles Smith Avenue, Rancho Cucamonga, CA 91730 Ph: 909-291-4040 Fax: 909-373-4795</div>

        </div>

    )
}