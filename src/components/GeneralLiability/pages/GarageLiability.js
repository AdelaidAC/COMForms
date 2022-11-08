import React from 'react'
import Input from '../../Input'
import Title from '../../Title'
import Logo from '../../Logo'

export default function GarageLiability({}) {
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        
        <div className='sheet font-10'>
            <Logo/>
            <Title text="INSURED’S STATEMENT"/>
            
            <p className='font-9 text-center m-0'>
                Form <b>must</b> be completed by <b>Insured.</b> (Please have customer handwrite)
                <br/>
                <i>Esta forma debe ser llenada por el Asegurado. (Por favor llenar a Mano)</i>
            </p>

            <div className="d-flex mt-2 mb-1">
                <b>Insured Name/Nombre:</b>
                <span className="flex-fill">
                    <Input className="w-100 ms-1" disabled/>
                </span>
            </div>

            <div className="d-flex my-1">
                <b>DBA (Doing Business As)/Nombre del Negocio:</b>
                <span className="flex-fill">
                    <Input className="w-100 ms-1" disabled/>
                </span>
            </div>

            <div className="my-1">
                <b>Mailing Address/Dirección para Correspondencia:</b>
                <div className="flex-fill">
                    <Input className="w-100" disabled/>
                </div>
                <div className="flex-fill">
                    <Input className="w-100" disabled/>
                </div>
            </div>

            <div className="my-1">
                <b>Property Address/Dirección del Negocio/Oficina:</b>
                <div className="flex-fill">
                    <Input className="w-100" disabled/>
                </div>
                <div className="flex-fill">
                    <Input className="w-100" disabled/>
                </div>
            </div>

            <div class="row">
                <div class="col d-flex">
                    <b>Business Phone:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
                <div class="col d-flex">
                    <b>Annual Gross:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
            </div>

            <div class="row">
                <div class="col d-flex">
                    <b>Number of Employees:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
                <div class="col d-flex">
                    <b>Annual Payroll:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
            </div>

            <div class="row">
                <div class="col d-flex">
                    <b>Business Email/Website:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
            </div>


            <div className="d-flex my-1">
                <b>Type of business:</b>
                <input className="ms-4 me-1" type="checkbox"/>
                Individual
                <input className="ms-4 me-1" type="checkbox"/>
                Partnership
                <input className="ms-4 me-1" type="checkbox"/>
                Corporation
                <input className="ms-4 me-1" type="checkbox"/>
                Other
            </div>

            <div className="my-1">
                <b>Description of all operations:</b>
                <div className="flex-fill">
                    <Input className="w-100" disabled/>
                </div>
                <div className="flex-fill">
                    <Input className="w-100" disabled/>
                </div>
                <div className="flex-fill">
                    <Input className="w-100" disabled/>
                </div>
            </div>

            <div class="row">
                <div class="col d-flex">
                    <b>Vehicle(s) Value:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
                <div class="col d-flex">
                    <b>Total Lot Coverage:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
            </div>

            <div className="my-1">
                <b>List any additional insureds to be named and advise what their interest is in this operation:</b>
                <div className="flex-fill">
                    <Input className="w-100" disabled/>
                </div>
                <div className="flex-fill">
                    <Input className="w-100" disabled/>
                </div>
            </div>

            <div className='lh-1 text-justify mt-4'>
                <p>
                    I hereby apply to Adriana’s Insurance Services, Inc. for a policy of insurance. I agree that such policy shall be null and void if such information is
                    materially false or misleading. I understand that any existing damage to my car at the time of application will not be covered by this
                    insurance. I further understand that my policy does not covered any special equipment not factory installed to my insured vehicle.
                </p>
                <p>
                    I agree that the Insurance Company may correct my premium if rated incorrectly or if information obtained from additional sources,
                    including motor vehicle reports, changes factors which affect the premium. I agree and understand that if the correct premium is not
                    paid, my policy will expire, or be cancelled for non payment of premium, based on the correct premium developed.
                </p>
                <p>
                    <i>
                        Yo estoy aquí aplicando en Adriana’s Insurance Services, Inc. para una Póliza de Seguro. Y acepto que esta póliza es Nula o Cancelada si la
                        información que les doy es falsa o errónea. Yo entiendo que si existe un daño previo en mi auto al tiempo de este trámite NO tendré
                        ningún tipo de cobertura através de este seguro. Yo entiendo que en un futuro mi póliza puede No darme cobertura por cualquier
                        equipo especial instalado en mi auto que No sea de fábrica.
                    </i>
                </p>
                <p>
                    <i>
                        Acepto que la Compañía de Seguros puede corregir el Premium de mi seguro en caso de que el Premium sea incorrecto debido a la
                        información obtenida através de otros servicios adicionales tales como El Departamento de Motores y Vehículos, y otros factores que
                        puedan afectar el Premium de mi seguro.. Yo acepto y entiendo que si el Premium de mi seguro correcto en mi póliza No es pagado,
                        mi póliza puede ser cancelada, expirada o no renovada basado en el Premium correcto.
                    </i>
                </p>
            </div>

            <div className="d-flex justify-content-between mt-4 mb-1">
                <div className='d-flex flex-fill'>
                    <b>Applicant Signature: </b>
                    <span className='flex-fill mx-1'>
                        <Input className="w-100" disabled bColor="yellow"/>
                    </span>
                </div>
                <div>
                    <b>Date: </b>
                    <Input className="ms-1" width = "80px" disabled/>
                </div>
            </div>

            <p class="text-center font-9">9445 Charles Smith Avenue, Rancho Cucamonga, CA 91730 Ph: 909-291-4040 Fax: 909-963-5083</p>

        </div>

    )
}