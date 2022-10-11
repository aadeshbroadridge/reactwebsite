import React, {  } from "react";
import { } from "react-router-dom";
import './AccountOwners.css';

const AccountOwners = () => {
    window.onload = function () { 
            
    const api_url = "http://10.67.204.33:8080/frameworkapi/getAccountOwner";
        async function getUser(){
            console.log('getuser');
            document.querySelector('#tabledivao').style.display = 'none';

            await fetch(api_url, {


                method: "POST",


                body: JSON.stringify({
                    groupIDList: [0],
                    userIDList: [4052]
                }),

                // Adding headers to the request
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(
                res => {
                    console.log('res: ', res);
                    res.json().then(
                        data => {
                            console.log('data: ', data);
                            if (data.length > 0) {
                                document.querySelector('#tabledivao').style.display = 'block';
                                var temp = "";
                                data.forEach((itemData) => {
                                    temp += `
                                    <tr>
                                    <td style="border:1px solid;text-align:center;word-wrap:break-word;overflow:hidden;white-space: nowrap; padding:10px">${itemData.AccountCount}</td>
                                    <td style="border:1px solid;text-align:center;word-wrap:break-word;overflow:hidden;white-space: nowrap; padding:10px">${itemData.AccountOwner}</td>
                                    <td style="border:1px solid;text-align:center;word-wrap:break-word;overflow:hidden;white-space: nowrap; padding:10px">${itemData.EncryptedAccountOwner}</td>
                                    <td style="border:1px solid;text-align:center;word-wrap:break-word;overflow:hidden;white-space: nowrap; padding:10px">${itemData.ID}</td>
                                    <td style="border:1px solid;text-align:center;word-wrap:break-word;overflow:hidden;white-space: nowrap; padding:10px">${itemData.TIN}</td>
                                    <td style="border:1px solid;text-align:center;word-wrap:break-word;overflow:hidden;white-space: nowrap; padding:10px">${itemData.TINTypeID}</td>
                                    <td style="border:1px solid;text-align:center;word-wrap:break-word;overflow:hidden;white-space: nowrap; padding:10px">${itemData.TotalMarketValue}</td>
                                    <td style="border:1px solid;text-align:center;word-wrap:break-word;overflow:hidden;white-space: nowrap; padding:10px">${itemData.UpdateDate}</td>
                                    <td style="border:1px solid;text-align:center;word-wrap:break-word;overflow:hidden;white-space: nowrap; padding:10px">${itemData.WorksheetRecordLimit}</td></tr>`
                                }); 
                                document.getElementById('dataao').innerHTML = temp;
                                // console.log(temp)
                                

                            }
                            else {
                                document.querySelector('#tabledivao').style.display = 'none';

                            }
                        }
                    )
                }
            ).catch(() => {


                var eltemp = "<h2>Problem in Fetching the Owners Data</h2>"
                document.getElementById('eldataao').innerHTML = eltemp;


            });
            

            
        }
        console.log('before getuser')
       
        getUser()

        console.log('after getuser')
        
    }

        return (
            <>
                <div className="bodyclassao">
                    <div className="btcontainerao">
                        <div className="profile_mainao">

                            <h2>Account Owner Details </h2>

                            <div className="tabledivao" id="tabledivao">
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
                                    <tbody id="dataao">

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