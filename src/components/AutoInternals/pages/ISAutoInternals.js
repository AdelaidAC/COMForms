import React from 'react'
import Input from '../../Input'
import CDate from '../../CDate';
import Title from '../../Title'
import Logo from '../../Logo'

export default function ISAutoInternals ({}) {

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        
        <div className='sheet font-10'>
            <Logo/>
            
            <p className='font-9 text-center my-2'>
                Form <b>must</b> be completed by <b>Insured.</b> (Please have customer handwrite)
                <br/>
                <i>Esta forma debe ser llenada por el Asegurado. (Por favor llenar a Mano)</i>
            </p>

            <div className='d-flex justify-content-between'>
                <div className='d-flex col-8'>
                    <b>Business Name:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
                <div className='d-flex'>
                <span><b>Entity Type:</b>&nbsp;&nbsp;Invidual&nbsp;&nbsp;Corporation&nbsp;&nbsp;LLC</span>
                </div>
            </div>

            <div className='d-flex justify-content-between'>
                <div className='d-flex col-9'>
                    <b>Insured’s Name:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
                <div className='d-flex'>
                    <b>Date of Birth:</b>
                    <span className="flex-fill">
                        <Input className="ms-1" width = "80px" disabled/>
                    </span>
                </div>
            </div>

            <div className='d-flex justify-content-between'>
                <div class="col d-flex">
                    <span><b><u>Garaging</u></b> Address/Dirección de Garage:</span>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
                <div className='ms-2 d-flex'>
                    Apt. No.
                    <span className="flex-fill">
                        <Input className="ms-1" width = "85px" disabled/>
                    </span>
                </div>
            </div>

            <div class="row font-9">
                <div class="col d-flex">
                    City/Ciudad:
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
                <div class="col d-flex">
                    Zip Code/C.P.
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
                <div class="col d-flex">
                    Telephone No.
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
            </div>

            <div className='d-flex justify-content-between'>
                <div class="col d-flex">
                    <span><b><u>Mailing</u></b> Address/Dirección de Correspondencia:</span>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
                <div className='ms-2 d-flex'>
                    Apt. No.
                    <span className="flex-fill">
                        <Input className="ms-1" width = "85px" disabled/>
                    </span>
                </div>
            </div>

            <div class="row font-9">
                <div class="col d-flex">
                    City/Ciudad:
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
                <div class="col d-flex">
                    Zip Code/C.P.
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
                <div class="col d-flex">
                    Mobile No.
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
            </div>

            <table className="table table-fit w-100 m-0 p-0">
                <tr>
                    <td className='fw-bold'>Civil Status:</td>
                    <td className='text-center'>Married</td>
                    <td className='text-center'>Single</td>
                    <td className='text-center'>Divorced</td>
                    <td className='text-center'>Widowed</td>
                    <td className='text-center'>Separated</td>
                    <td className='text-center'>Registered Domestic Partner</td>
                </tr>
                <tr>
                    <td className='fw-bold'>Estatus Civil:</td>
                    <td className='text-center'>Casado</td>
                    <td className='text-center'>Soltero</td>
                    <td className='text-center'>Divorciado</td>
                    <td className='text-center'>Viudo</td>
                    <td className='text-center'>Separado</td>
                    <td className='text-center'>Vive con su pareja</td>
                </tr>
            </table>

            <div className="d-flex mb-1">
                <span>Occupation & Description/<i>Oficio y Descripcion:</i></span>
                <span className="flex-fill">
                    <Input className="w-100 ms-1" disabled/>
                </span>
            </div>

            <div className="d-flex my-1">
                <span>Ever do work out of state/<i>Sale del estado para hacer trabajos:</i></span>
                <span className="flex-fill">
                    <Input className="w-100 ms-1" disabled/>
                </span>
            </div>

            <div className='d-flex justify-content-between'>
                <div className='d-flex'>
                    <span>How many miles radius do you operate/<i>Cuantas millas a la redonda trabaja:</i></span>
                    <span className="flex-fill">
                        <Input className="ms-1" width="70px" disabled/>
                    </span>
                </div>
                <div className='d-flex'>
                    <span>Years in business/<i>Años con el negocio:</i></span>
                    <span className="flex-fill">
                        <Input className="ms-1" width="60px" disabled/>
                    </span>
                </div>
            </div>

            <div className="d-flex my-1">
                <span><b>Do you have a CA # or DOT #?</b>&nbsp;&nbsp;Yes&nbsp;&nbsp;No</span>
            </div>

            <table className='w-100'>
                <tr className='text-center'>
                    <td colspan="4">
                        <span><b>Please list all people living with you</b><i>/Por favor enliste a Todas las personas que Viven con Usted</i></span>
                    </td>
                </tr>
                <tr className='d-flex justify-content-between border border-dark'>
                    <td>
                        <span><b>NAME</b> <span className='font-9 fst-italic'>Nombre</span></span>
                    </td>
                    <td>
                        <span><b>AGE/DOB</b> <span className='font-9 fst-italic'>Edad/Cumpleaños</span></span>
                    </td>
                    <td>
                        <span><b>RELATIONSHIP</b> <span className='font-9 fst-italic'>Relación con Usted</span></span>
                    </td>
                    <td>
                        <span><b>Occasional Driver</b> <span className='font-9 fst-italic'>Maneja?</span></span>
                    </td>
                </tr>
                <tr className='text-center'>
                    <td colspan="4">
                        <Input className="w-100" disabled/>
                    </td>
                </tr>
                <tr className='text-center'>
                    <td colspan="4">
                        <Input className="w-100" disabled/>
                    </td>
                </tr>
                <tr className='text-center'>
                    <td colspan="4">
                        <Input className="w-100" disabled/>
                    </td>
                </tr>
                <tr className='text-center'>
                    <td colspan="4">
                        <Input className="w-100" disabled/>
                    </td>
                </tr>
            </table>

            <table className='w-100'>
                <tr className='text-center'>
                    <td colspan="5">
                        <b>Please list all Vehicles to Named Insured or insured responsibility/interest and indicate coverage desired per each Vehicle</b>
                        <br/>
                        <i>Por favor, enliste todos los vehiculos registrados a su nombre ó bajo su responsabilidad e indique la cobertura que espera para cada uno</i>
                    </td>
                </tr>
                <tr className="text-center border border-dark">
                    <td>Year</td>
                    <td>Make</td>
                    <td>Model</td>
                    <td><b>Coverage</b></td>
                    <td>Stated Value</td>
                </tr>
                <tr className="text-center">
                    <td className="fw-bold">
                        <Input disabled/>
                    </td>
                    <td>
                        <Input width="110px" disabled/> 
                    </td>
                    <td>
                        <Input width="180px" disabled/> 
                    </td>
                    <td>
                        <Input width="135px" disabled/> 
                    </td>
                    <td>
                        $ <Input width="105px" disabled/>
                    </td>
                </tr>
                <tr className="text-center">
                    <td className="fw-bold">
                        <Input disabled/>
                    </td>
                    <td>
                        <Input width="110px" disabled/> 
                    </td>
                    <td>
                        <Input width="180px" disabled/> 
                    </td>
                    <td>
                        <Input width="135px" disabled/> 
                    </td>
                    <td>
                        $ <Input width="105px" disabled/>
                    </td>
                </tr>
                <tr className="text-center">
                    <td className="fw-bold">
                        <Input disabled/>
                    </td>
                    <td>
                        <Input width="110px" disabled/> 
                    </td>
                    <td>
                        <Input width="180px" disabled/> 
                    </td>
                    <td>
                        <Input width="135px" disabled/> 
                    </td>
                    <td>
                        $ <Input width="105px" disabled/>
                    </td>
                </tr>
                <tr className="text-center">
                    <td className="fw-bold">
                        <Input disabled/>
                    </td>
                    <td>
                        <Input width="110px" disabled/> 
                    </td>
                    <td>
                        <Input width="180px" disabled/> 
                    </td>
                    <td>
                        <Input width="135px" disabled/> 
                    </td>
                    <td>
                        $ <Input width="105px" disabled/>
                    </td>
                </tr>
            </table>
            
            

            <div className='font-9 text-justify mt-2 lh-2'>
                <p>
                    I hereby apply to Adriana’s Insurance Services, Inc. for a policy of insurance. I agree that such policy shall be null and void if such information is materially false or misleading. I understand
                    that any existing damage to my car at the time of application will not be covered by this insurance. I further understand that my policy does not covered any special equipment
                    not factory installed to my insured vehicle. I agree that the Insurance Company may correct my premium if rated incorrectly or if information obtained from additional sources,
                    including motor vehicle reports, changes factors which affect the premium. I agree and understand that if the correct premium is not paid, my policy will expire, or be cancelled
                    for non payment of premium, based on the correct premium developed.
                    <br/><br/>
                    <i>
                        Yo estoy aquí aplicando en Adriana’s Insurance Services, Inc. para una Póliza de Seguro. Y acepto que esta póliza es Nula o Cancelada si la información que les doy es falsa o errónea. Yo
                        entiendo que si existe un daño previo en mi auto al tiempo de este trámite NO tendré ningún tipo de cobertura através de este seguro. Yo entiendo que en un futuro mi póliza
                        puede no darme cobertura por cualquier equipo especial instalado en mi auto que No sea de fábrica. Acepto que la Compañía de Seguros puede corregir el Premium de mi
                        seguro en caso de que el Premium sea incorrecto debido a la información obtenida através de otros servicios adicionales tales como El Departamento de Motores y Vehículos,
                        y otros factores que puedan afectar el Premium de mi seguro. Yo acepto y entiendo que si el Premio de mi seguro correcto en mi póliza No es pagado, mi póliza puede ser
                        cancelada, expirada o no renovada basado en el Premium correcto.
                    </i>
                </p>
            </div>

            <div className="d-flex justify-content-between mt-4 mb-2">
                <div className='d-flex flex-fill'>
                    <b>Applicant Signature: </b>
                    <span className='flex-fill mx-1'>
                        <Input className="w-100 text-center" disabled/>
                    </span>
                </div>
                <div>
                    <b>Date: </b>
                    <Input className="ms-1 text-center" width = "80px" disabled/>
                </div>
            </div>

            <div class="text-center font-9 fw-bold">9445 Charles Smith Avenue, Rancho Cucamonga, CA 91730 Ph: 909-373-4790 Fax: 909-963-5083</div>

        </div>

    )
}