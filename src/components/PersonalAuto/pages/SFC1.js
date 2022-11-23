import React from "react";
import Input from "../../Input";
import FC1Image from "../../../img/fc1.png";
import Logo from "../../Logo";

export default function SFC1({date}) {

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      return (
        <div className="sheet font-11 text-justify lh-5">
            
            <Logo/>
            
            <div class="row w-100 mt-3">
                <div class="col-6">
                    <table className="border border-dark">
                        <tr className="text-center">
                            <td>
                                <b>Año:</b> <Input width="30px" maxlength="4"/> <b>Marca:</b> <Input className="text-center" width="80px" maxlength="11"/> <b>Modelo:</b> <Input className="text-center" width="80px" maxlength="11"/>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td>
                                <b>VIN:</b> <Input className="text-center" maxlength="17" width="150px" /> <b>Placa:</b> <Input className="text-center" width="100px" maxlength="10"/>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td>
                                <img src={FC1Image} width="250px" />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <span className="flex-fill">
                                    <b>Comentarios:</b> <Input className="text-center" maxlength="40" width="250px"/>
                                    <br/>
                                    <Input className="text-center" maxlength="50" width="325px"/>
                                </span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="col-6">
                <table className="border border-dark">
                        <tr className="text-center">
                            <td>
                                <b>Año:</b> <Input width="30px" maxlength="4"/> <b>Marca:</b> <Input className="text-center" width="80px" maxlength="11"/> <b>Modelo:</b> <Input className="text-center" width="80px" maxlength="11"/>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td>
                                <b>VIN:</b> <Input className="text-center" maxlength="17" width="150px" /> <b>Placa:</b> <Input className="text-center" width="100px" maxlength="10"/>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td>
                                <img src={FC1Image} width="250px" />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <span className="flex-fill">
                                    <b>Comentarios:</b> <Input className="text-center" maxlength="40" width="250px"/>
                                    <br/>
                                    <Input className="text-center" maxlength="50" width="325px"/>
                                </span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="row w-100">
                <div class="col-6">
                    <table className="border border-dark">
                        <tr className="text-center">
                            <td>
                                <b>Año:</b> <Input width="30px" maxlength="4"/> <b>Marca:</b> <Input className="text-center" width="80px" maxlength="11"/> <b>Modelo:</b> <Input className="text-center" width="80px" maxlength="11"/>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td>
                                <b>VIN:</b> <Input className="text-center" maxlength="17" width="150px" /> <b>Placa:</b> <Input className="text-center" width="100px" maxlength="10"/>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td>
                                <img src={FC1Image} width="250px" />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <span className="flex-fill">
                                    <b>Comentarios:</b> <Input className="text-center" maxlength="40" width="250px"/>
                                    <br/>
                                    <Input className="text-center" maxlength="50" width="325px"/>
                                </span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="col-6">
                <table className="border border-dark">
                        <tr className="text-center">
                            <td>
                                <b>Año:</b> <Input width="30px" maxlength="4"/> <b>Marca:</b> <Input className="text-center" width="80px" maxlength="11"/> <b>Modelo:</b> <Input className="text-center" width="80px" maxlength="11"/>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td>
                                <b>VIN:</b> <Input className="text-center" maxlength="17" width="150px" /> <b>Placa:</b> <Input className="text-center" width="100px" maxlength="10"/>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td>
                                <img src={FC1Image} width="250px" />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <span className="flex-fill">
                                    <b>Comentarios:</b> <Input className="text-center" maxlength="40" width="250px"/>
                                    <br/>
                                    <Input className="text-center" maxlength="50" width="325px"/>
                                </span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            <p className="text-center my-3 lh-1">
                Lo anterior es verdadero en todos loa vehiculos existentes, daños visibles, corrosión, y/o partes faltantes hasta la fecha de la Inspección.
                El firmante certifica, bajo pena de perjurio, que este reporte de Inspección es verdadero y completo en lo major de su conocimiento.
            </p>

            <div className="d-flex justify-content-between fw-bold">
                <div>
                    Firma de Inspector: <Input width="225px" disabled/>
                </div>
                <div>
                    Nombre del Inspector: <Input width="225px" disabled/>
                </div>
            </div>

            <p className="text-center my-3 lh-1">
                Yo certifico bajo pena de perjurio bajo las leyes del Estado de California que lo anterior es verdadero y correcto.
            </p>

            <div className="d-flex justify-content-between fw-bold">
                <div>
                    Firma del Asegurado: <Input width="300px" bColor="yellow" disabled/>
                </div>
                <div>
                    Fecha: <Input value = {date} width = "80px" className = "text-center fw-bold"/>
                </div>
            </div>

        </div>
    );
}