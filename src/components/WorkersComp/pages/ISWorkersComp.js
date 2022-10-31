import React from 'react'
import Input from '../../Input'
import Title from '../../Title'
import Logo from '../../Logo'

export default function ISWorkersComp({}) {
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        
        <div className='sheet font-9'>
            
            <Logo/>
            
            <Title text="INSURED’S STATEMENT"/>
            
            <p className='font-9 text-center'>
                Form <b>must</b> be completed by <b>Insured.</b> (Please have customer handwrite)
                <br/>
                <i>Esta forma debe ser llenada por el Asegurado. (Por favor llenar a Mano)</i>
            </p>

            <div className="d-flex my-1">
                <b>Insured's Name <span className='font-8 fst-italic'> Nombre:</span></b>
                <span className="flex-fill">
                    <Input className="w-100 ms-1 text-center" disabled/>
                </span>
            </div>

            <div className="d-flex my-1">
                <b>DBA <span className='font-8 fst-italic'> Nombre del Negocio:</span></b>
                <span className="flex-fill">
                    <Input className="w-100 ms-1 text-center" disabled/>
                </span>
            </div>

            <div className="d-flex justify-content-between my-1">
                <div className='d-flex flex-fill'>
                    <b>Mailing Address <span className='font-8 fst-italic'> Dirección del Negocio:</span></b>
                    <span className='flex-fill mx-1'>
                        <Input className="w-100 text-center" disabled/>
                    </span>
                </div>
                <div>
                    <b>Unit <span className='font-8 fst-italic'> Unidad:</span></b>
                    <Input className="ms-1 text-center" disabled/>
                </div>
            </div>

            <div className="d-flex justify-content-between my-1">
                <div className='d-flex flex-fill'>
                    <b>City <span className='font-8 fst-italic'> Ciudad:</span></b>
                    <span className='flex-fill mx-1'>
                        <Input className="w-100 text-center" disabled/>
                    </span>
                </div>
                <div className='d-flex flex-fill'>
                    <b>Zip Code <span className='font-8 fst-italic'> Codigo Postal:</span></b>
                    <span className='flex-fill mx-1'>
                        <Input className="w-100 text-center" disabled/>
                    </span>
                </div>
                <div className='d-flex flex-fill'>
                    <b>Telephone:</b>
                    <span className='flex-fill mx-1'>
                        <Input className="w-100 text-center" disabled/>
                    </span>
                </div>
            </div>

            <div className="border border-1 border-dark my-4"></div>

            <div className="d-flex my-1">
                <b>Business Description <span className='font-8 fst-italic'> Descripcion del Negocio:</span></b>
                <span className="flex-fill">
                    <Input className="w-100 ms-1 text-center" disabled/>
                </span>
            </div>

            <div className="d-flex my-1">
                <b>Number of Employees <span className='font-8 fst-italic'> Numero de Empleados:</span></b>
                <span className="flex-fill">
                    <Input className="w-100 ms-1 text-center" disabled/>
                </span>
            </div>

            <div className="d-flex my-1">
                <b>Number of Owners and % of ownership <span className='font-8 fst-italic'> Numero de Dueños y % de dueño:</span></b>
                <span className="flex-fill">
                    <Input className="w-100 ms-1 text-center" disabled/>
                </span>
            </div>

            <div className="d-flex my-1">
                <b>Employees’ Payroll <span className='font-8 fst-italic'> Nomina de Pago Total:</span></b>
                <span className="flex-fill">
                    <Input className="w-100 ms-1 text-center" disabled/>
                </span>
            </div>

            <div class="d-flex justify-content-center my-4">
                <table class="d-inline me-5">
                <tr class="text-center">
                    <td>
                    <b>Fulltime Employees</b>
                    <br/>
                    <span class="fst-italic">Empleados Tiempo Completo</span>
                    </td>
                    <td>
                    <b>DOB</b>
                    <br/>
                    <span class="fst-italic">Fecha de Nac.</span>
                    </td>
                    <td>
                    <b>Payroll</b>
                    <br/>
                    <span class="fst-italic">Nomina de Pago</span>
                    </td>
                </tr>
                <tr>
                    <td><Input className="w-100 text-center" disabled/></td>
                    <td><Input className="text-center" width="100px" disabled/></td>
                    <td><Input className="text-center" width="100px" disabled/></td>
                </tr>
                <tr>
                    <td><Input className="w-100 text-center" disabled/></td>
                    <td><Input className="text-center" width="100px" disabled/></td>
                    <td><Input className="text-center" width="100px" disabled/></td>
                </tr>
                <tr>
                    <td><Input className="text-center w-100" disabled/></td>
                    <td><Input className="text-center" width="100px" disabled/></td>
                    <td><Input className="text-center" width="100px" disabled/></td>
                </tr>
                <tr>
                    <td><Input className="w-100 text-center" disabled/></td>
                    <td><Input className="text-center" width="100px" disabled/></td>
                    <td><Input className="text-center" width="100px" disabled/></td>
                </tr>
                </table>
                <table class="d-inline">
                <tr class="text-center">
                    <td>
                    <b>Part-time Employees</b>
                    <br/>
                    <span class="fst-italic">Empleados Tiempo Parcial</span>
                    </td>
                    <td>
                    <b>DOB</b>
                    <br/>
                    <span class="fst-italic">Fecha de Nac.</span>
                    </td>
                    <td>
                    <b>Payroll</b>
                    <br/>
                    <span class="fst-italic">Nomina de Pago</span>
                    </td>
                </tr>
                <tr>
                    <td><Input className="w-100 text-center" disabled/></td>
                    <td><Input className="text-center" width="100px" disabled/></td>
                    <td><Input className="text-center" width="100px" disabled/></td>
                </tr>
                <tr>
                    <td><Input className="w-100 text-center" disabled/></td>
                    <td><Input className="text-center" width="100px" disabled/></td>
                    <td><Input className="text-center" width="100px" disabled/></td>
                </tr>
                <tr>
                    <td><Input className="w-100 text-center" disabled/></td>
                    <td><Input className="text-center" width="100px" disabled/></td>
                    <td><Input className="text-center" width="100px" disabled/></td>
                </tr>
                <tr>
                    <td><Input className="w-100 text-center" disabled/></td>
                    <td><Input className="text-center" width="100px" disabled/></td>
                    <td><Input className="text-center" width="100px" disabled/></td>
                </tr>
                </table>
            </div>  


            <div className='font-9 text-justify lh-1'>
                <p>
                    I hereby apply to Adriana’s Insurance Services, Inc. for a policy of insurance. I agree that such policy shall be null and void if such information is materially false or misleading. I understand that
                    any existing claim at the time of application will not be covered by this insurance. I further understand that the insurance company can audit the policy upon their discretion and they
                    have the right to adjust the premium according o the information obtained in that audit. If I do not disclose any new employees immediately, my coverage could be revoked
                    completely, even if the employee that made the claim was added to the policy, since it can be considered as misrepresentation. The companies do not accept temporary laborers and
                    therefore will not cover temporary laborers.
                </p>
                <p>
                    I agree that the Insurance Company may correct my premium if rated incorrectly or if information obtained from additional sources, including the audit of the policy and other
                    factors which affect the premium. I agree and understand that if the correct premium is not paid, my policy will expire, or be cancelled for non payment of premium, based on the
                    correct premium developed.
                </p>
                <p>
                    <i>
                        Yo estoy aquí aplicando en Adriana’s Insurance Services, Inc. para una Póliza de Seguro. Y acepto que esta póliza es Nula o Cancelada si la información que les doy es falsa o errónea. Yo
                        entiendo que si existe un reclamo previo al tiempo de este trámite NO tendré ningún tipo de cobertura através de este seguro. Yo entiendo que en un futuro mi compañía de seguro
                        me hará una revisión a su discreción y tiene el derecho de ajustar el precio en caso de que encuentre que la información que di fue incorrecta. Si yo no declaro nuevos empleados en
                        el futuro, mi reclamo será negado, sea que ese empleado fuera el del reclamo u otro diferente, por mal representarme ante la compañía de seguros. Mi póliza no acepta a empleados
                        temporales. La compañía no cubrira a ningun empleado temporal.
                    </i>
                </p>
                <p>
                    <i>
                        Acepto que la Compañía de Seguros puede corregir el Premium de mi seguro en caso de que el Premium sea incorrecto debido a la información obtenida através de otros servicios
                        adicionales tales como las inspecciones futuras y otros factores que puedan afectar el Premium de mi seguro. Yo acepto y entiendo que si el Premium de mi seguro correcto en mi
                        póliza No es pagado, mi póliza puede ser cancelada, expirada o no renovada basado en el Premium correcto.
                    </i>
                </p>
            </div>

            <div className="d-flex justify-content-between my-4">
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

            <div class="text-center font-9 fw-bold">9445 Charles Smith Ave Rancho Cucamonga CA 91730 Ph: 909-373-4790 Fax: 909-963-5083</div>

        </div>

    )
}