import React from 'react'
import Input from '../../Input'
import CDate from '../../CDate';
import Title from '../../Title'
import Logo from '../../Logo'

export default function ISBond ({}) {

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        
        <div className='sheet font-10'>
            <Logo/>
            
            <p className='font-9 text-center mt-2 mb-4'>
                Form <b>must</b> be completed by the <b>new owner.</b> (Please have customer handwrite)
                <br/>
                <i>Esta forma debe ser llenada por el nuevo dueño (Por favor llenar a Mano)</i>
            </p>

            <div className="d-flex mb-1">
                <span>New Owner’s Name / <i>Nombre del Nuevo Dueño :</i></span>
                <span className="flex-fill">
                    <Input className="w-100 ms-1" disabled/>
                </span>
            </div>

            <div className='d-flex justify-content-between mb-2'>
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

            <div class="row font-9 mb-2">
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

            <div class="row font-9">
                <div class="col d-flex">
                </div>
                <div class="col d-flex">
                    Mobile No./Celular:
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
                <div class="col d-flex">
                </div>
            </div>

            <div className="border border-1 border-dark my-4"></div>

            <p className='font-9 text-center mb-4'>
                Please list the information for the vehicle which the defective title bond is required:
                <br/>
                <i>Por favor, enliste el vehiculo para cual se requiere el “bond” para titulo defectuoso:</i>
            </p>

            <div class="row font-9 mb-2 justify-content-center">
                <div class="col-2 d-flex">
                    Year:
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
                <div class="col-3 d-flex">
                    Make:
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
                <div class="col-4 d-flex">
                    Model:
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
            </div>

            <div class="row font-9 justify-content-center fst-italic">
                <div class="col-2 d-flex">
                    Año:
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
                <div class="col-3 d-flex">
                    Marca:
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
                <div class="col-4 d-flex">
                    Modelo:
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
            </div>

            <div class="row font-9 mt-4 mb-2 justify-content-center">
                <div class="col-3 d-flex">
                    Plate #:
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
                <div class="col-4 d-flex">
                    VIN #:
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
            </div>

            <div class="row font-9 justify-content-center fst-italic">
                <div class="col-4 d-flex">
                    # de Placas:
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
                <div class="col-4 d-flex">
                    # de VIN:
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
            </div>

            <div class="row font-9 mt-4 mb-2 justify-content-center">
                <div class="col-5 d-flex">
                    Driver’s License #:
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
                <div class="col-5 d-flex">
                    Social Security Number:
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
            </div>

            <div class="row font-9 justify-content-center fst-italic">
                <div class="col-5 d-flex">
                    # de Licencia:
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
                <div class="col-5 d-flex">
                    Numero de Seguro Social:
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
            </div>

            <div class="row font-9 mt-4 justify-content-center mb-2">
                <div class="col-4 d-flex">
                    Vehicle Stated Value:
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
                <div class="col-8 d-flex">
                    Will you process the bond at the DMV office or mail it in to Sacramento?
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
            </div>

            <div class="row font-9 justify-content-center fst-italic">
                <div class="col-4 d-flex">
                    Valor Declarado del Veh.:
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
                <div class="col-8 d-flex">
                    Procesara su “bond” en la oficina del DMV o lo mandara a Sacramento?
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" disabled/>
                    </span>
                </div>
            </div>


            <div className='font-9 text-justify mt-4 lh-2'>
                <p>
                    I hereby apply to Adriana’s Insurance for a Defective Title Bond. Bond shall be null and void if such information is materially false or misleading. I understand that
                    any additional fees incurred at the DMV will not be the responsibility of Adriana’s Insurance Svcs., Inc. There is no additional coverage included other than the
                    coverage provided by a Defective Title Bond.
                    <br/><br/>
                    The defective title I just purchased is an electronically submitted bond. In case the DMV requires a notarized bond, I will be liable for an additional <b>$20.00</b> fee for
                    the additional cost incurred to notarize the document. The process will also take more than one additional week beyond the initial time estimated for processing.
                    Adriana’s Insurance Svcs., Inc. will not be liable for any additional charges incurred at the DMV or any other entity in case the process is prolonged.
                    <br/><br/>
                    <i>
                    Yo estoy aplicando para un Bono para Títulos Defectuosos. El bono será nulo en caso de que la información dada sea materialmente falsa. Yo entiendo que cualquier
                    costo adicional incurrido en el DMV no será la responsabilidad de Adriana’s Insurance Svcs., Inc.. No hay ninguna cobertura adicional que la cobertura que un
                    Bono para Títulos Defectuosos provee.
                    <br/><br/>
                    El Bono para Títulos Defectuosos que acabo de comprar es electrónicamente procesado. En caso que el DMV requiera un Bono notarizado, seré responsable de un
                    aumento de tarifa de <b>$20.00 adicionales</b> por el costo adicional incurrido por notarizar tal documento. El proceso se demorara mínimo una semana más de el tiempo
                    estimado al inicio. Adriana’s Insurance Svcs., Inc. no será responsable por algún recargo incurrido por el DMV o alguna otra entidad debido al proceso prolongado.
                    </i>
                </p>
            </div>

            <div className="d-flex justify-content-between mt-4 mb-2">
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

            <div class="text-center font-9 fw-bold">9445 Charles Smith Avenue, Rancho Cucamonga, CA 91730 909-291-4040· Fax 909-373-4796</div>

        </div>

    )
}