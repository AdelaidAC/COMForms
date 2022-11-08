import React from 'react'
import Input from '../../Input'
import Title from '../../Title'
import Logo from '../../Logo'

export default function RentersIS() {
    
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
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
                <div className='d-flex'>
                    <b>Date of Birth:</b>
                    <span className="flex-fill">
                        <Input className="ms-1" width="80px" disabled/>
                    </span>
                </div>
            </div>

            <div className='d-flex justify-content-between'>
                <div className='d-flex col-9'>
                    <b>Co-Applicant Name:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
                <div className='d-flex'>
                    <b>Date of Birth:</b>
                    <span className="flex-fill">
                        <Input className="ms-1" width="80px" disabled/>
                    </span>
                </div>
            </div>

            <div class="row">
                <div class="col d-flex">
                    <b>Home Phone:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
                <div class="col d-flex">
                    <b>Cell Phone:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
            </div>

            <div class="row">
                <div class="col d-flex">
                    <b>Work Phone:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
                <div class="col d-flex">
                    <b>Email:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
            </div>

            <div className="d-flex my-1">
                <b>Mailing Address:</b>
                <span className="flex-fill">
                    <Input className="w-100 ms-1" disabled/>
                </span>
            </div>

            <div className="d-flex my-1">
                <b>Property Address:</b>
                <span className="flex-fill">
                    <Input className="w-100 ms-1" disabled/>
                </span>
            </div>

            <p className='font-9 text-center pt-4'>
               <i>Please handwrite the landlord's/additional insureds information / Favor de escribir la informacion del proprietario o asegurado adicional.</i>
            </p>

            <div className="text-center">
                <b>Name:</b>
                <span className="flex-fill">
                    <Input className="ms-1" width="500px" disabled/>
                </span>
            </div>

            <div className="text-center">
                <b>Address:</b>
                <span className="flex-fill">
                    <Input className="ms-1" width="500px" disabled/>
                </span>
            </div>


            <div className='font-9 text-justify mt-4 lh-1'>
                <p>
                    I hereby apply to Adriana’s Insurance Services, Inc. for a policy of insurance. I agree that such policy shall be null and void if such information is materially false or misleading. I understand that any
                    existing loss at the time of application will not be covered by this insurance. I further understand that my policy does not cover undisclosed improvements or theft unless forced entry
                    is able to be proven. Coverage of liability is applied to the third party only. I also understand that the unit is to be covered by the landlord or property management agency and is not
                    covered under renter's insurance. This coverage was solely intended to cover the limits of coverage disclosed in the Verbal Disclosure and the Declaration's Page.
                    <br/><br/>
                    I agree that the Insurance Company may correct my premium if rated incorrectly or if information obtained from additional sources, including but not limited to your City Halls, City
                    Planning Department changes factors which affect the premium. I agree and understand that if the correct premium is not paid, my policy will expire, or be cancelled for non payment
                    of premium, based on the correct premium developed.
                    <br/><br/>
                    <i>
                        Yo estoy aquí aplicando en Adriana’s Insurance Services, Inc. para una Poliza de Seguro. Y acepto que esta poliza es Nula o Cancelada si la información que les doy es falsa o erronea. Yo entiendo
                        que si existe una perdida previa en mi casa al tiempo de este trámite NO tendré ningún tipo de covertura atravez de este seguro. Estoy enterado(a) que la poliza no me cubre robo al
                        menos que tenga comprobante de entrada forsoza. Tambien entiendo que la unidad no sera cubierta ya que es la responsabilidad de el propietaro o de la agencia de gestion y no esta
                        cubierta bajo seguro de inquilino.
                    </i>
                    <br/><br/>
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
                        <Input className="w-100" disabled bColor="yellow"/>
                    </span>
                </div>
                <div>
                    <b>Date: </b>
                    <Input className="ms-1" width="80px" disabled/>
                </div>
            </div>

            <div class="text-center font-9">9445 Charles Smith Avenue, Rancho Cucamonga, CA 91730 Ph: 909-291-4040 Fax: 909-963-5083</div>

        </div>

    )
}