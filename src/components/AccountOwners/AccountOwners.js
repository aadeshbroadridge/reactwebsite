import React, {  } from "react";
import {  } from "react-router-dom";
import './AccountOwners.css';

const AccountOwners =()=>{
    
    return(
        <>
        <div className="bodyclassao">
        <div className="btcontainerao">
            <div className="profile_mainao">

                <h2>Account Owner Details </h2>
                
                <div className="tabledivao" id="tablediv">
                    <table className="tableao">
                        <thead>
                            <tr className="trao">
                                <th className="thao">AccountCount</th>
                                <th className="thao">AccountOwner</th>
                                <th className="thao">EncryptedAccountOwner</th>
                                <th className="thao">ID</th>
                                <th className="thao">TIN</th>
                                <th className="thao">TINTypeID</th>
                                <th className="thao">TotalMarketValue</th>
                                <th className="thao">UpdateDate</th>
                                <th className="thao">WorksheetRecordLimit</th>
                            </tr>
                        </thead>
                        <tbody id="data">

                        </tbody>
                    </table>
                </div>
                <div className="eldataao"></div>
            </div>
        </div>
    </div>
        </>
    );
}
export default AccountOwners;