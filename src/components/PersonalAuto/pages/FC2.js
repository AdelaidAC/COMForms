import React from "react";
import Input from "../../Input";
import FC2Image from "../../../img/fc2.png";

export default function FC2({date}) {

      return (
        <div className="sheet font-11 text-justify lh-5">
            
            <div class="row w-100">
                <div class="col-6">
                    <table className="border border-dark">
                        <tr className="text-center">
                            <td>
                                <b>Year:</b> <Input width="30px" maxlength="4"/> <b>Make:</b> <Input className="text-center" width="80px" maxlength="11"/> <b>Model:</b> <Input className="text-center" width="80px" maxlength="11"/>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td>
                                <b>VIN:</b> <Input className="text-center" maxlength="17" width="150px" /> <b>Plate:</b> <Input className="text-center" width="100px" maxlength="10"/>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td>
                                <img src={FC2Image} width="240px" />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <span className="flex-fill">
                                    <b>Comments:</b> <Input className="text-center" maxlength="40" width="250px"/>
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
                                <b>Year:</b> <Input width="30px" maxlength="4"/> <b>Make:</b> <Input className="text-center" width="80px" maxlength="11"/> <b>Model:</b> <Input className="text-center" width="80px" maxlength="11"/>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td>
                                <b>VIN:</b> <Input className="text-center" maxlength="17" width="150px" /> <b>Plate:</b> <Input className="text-center" width="100px" maxlength="10"/>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td>
                                <img src={FC2Image} width="240px" />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <span className="flex-fill">
                                    <b>Comments:</b> <Input className="text-center" maxlength="40" width="250px"/>
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
                                <b>Year:</b> <Input width="30px" maxlength="4"/> <b>Make:</b> <Input className="text-center" width="80px" maxlength="11"/> <b>Model:</b> <Input className="text-center" width="80px" maxlength="11"/>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td>
                                <b>VIN:</b> <Input className="text-center" maxlength="17" width="150px" /> <b>Plate:</b> <Input className="text-center" width="100px" maxlength="10"/>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td>
                                <img src={FC2Image} width="240px" />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <span className="flex-fill">
                                    <b>Comments:</b> <Input className="text-center" maxlength="40" width="250px"/>
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
                                <b>Year:</b> <Input width="30px" maxlength="4"/> <b>Make:</b> <Input className="text-center" width="80px" maxlength="11"/> <b>Model:</b> <Input className="text-center" width="80px" maxlength="11"/>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td>
                                <b>VIN:</b> <Input className="text-center" maxlength="17" width="150px" /> <b>Plate:</b> <Input className="text-center" width="100px" maxlength="10"/>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td>
                                <img src={FC2Image} width="240px" />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <span className="flex-fill">
                                    <b>Comments:</b> <Input className="text-center" maxlength="40" width="250px"/>
                                    <br/>
                                    <Input className="text-center" maxlength="50" width="325px"/>
                                </span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            <p className="text-center font-9 my-3 lh-1">
                The above is a true statement recording any and all existing vehicles, visible damage, rust, and/or missing parts as of the date of this Inspection.
                The undersigned certifies, under penalty of perjury, that this inspection report is true and complete to the best of his/her knowledge.
            </p>

            <div className="d-flex justify-content-between fw-bold">
                <div>
                    Inspector Signature: <Input width="225px" disabled/>
                </div>
                <div>
                    Inspector Name: <Input width="225px" disabled/>
                </div>
            </div>

            <p className="text-center font-9 my-3 lh-1">
                I certify under penalty of perjury under the laws of the state of California that the foregoing is true and correct
            </p>

            <div className="d-flex justify-content-between fw-bold">
                <div>
                    Insured’s Signature: <Input width="300px" bColor="yellow" disabled/>
                </div>
                <div>
                    Date: <Input value = {date} width = "80px" className = "text-center fw-bold"/>
                </div>
            </div>

        </div>
    );
}