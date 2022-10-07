import React, {  } from "react";
import './Employees.css';
const Companies = () => {
  
    return (
        <>
        <h2>employees</h2>
            {/* <div className="btcontainer">
            <div id='company-header'>
                <h2>Companies and Employees</h2>
              </div>
          
              <div className="container">
                <form className="add-company-form" onSubmit={addSubmitfunc}>
                  <h3>Add new person!</h3>
                  <input type="text" name="name" defaultValue="" placeholder="Enter person name : " className="input-text" required/>
                  <br/>
                  <input type="text" name="companyname" defaultValue="" placeholder="Enter a company's name : " className="input-text" required/>
                  <br/>
                  <input type="text" name="image" defaultValue="" placeholder="Enter a company's image URL : " className="input-text" required/>
                  <br/>
                  <input type="text" name="age" defaultValue="" placeholder="Enter person's age : " className="input-text" required/>
                  <br/>
                  <input type="submit" name="submit" id="addnewbtn" defaultValue="Add New Person" className="btn btn-success" />
                  </form>
                <button className="btn btn-warning" onClick={cancelnewfunction}>Cancel</button>
              </div>
              <p  className="wannatextptag" >wanna add persons ?<button id='new-company-btn' className="new-company-btn btn btn-secondary" onClick={addbuttonfunc}>Add a new person</button></p>
              
              <div className="editcontainer" id="#editcontainer">
                  <form className="add-company-form">
                    <h3>Edit Here!</h3>
                    <input type="text" id="editid" name="id" defaultValue="" placeholder="Id: " className="input-text" disabled/>
                    <br/>
                    <input type="text" id="editname" name="name" defaultValue="" placeholder="Enter person name : " className="input-text"/>
                    <br/>
                    <input type="text" id="editcompanyname" name="companyname" defaultValue="" placeholder="Enter a company's name : " className="input-text"/>
                    <br/>
                    <input type="text" id="editage" name="age" defaultValue="" placeholder="Enter person's age : " className="input-text"/>
                    <br/>
                    <input type="submit" id="editsavebutton" name="submit" defaultValue="Edit" className="btn btn-success" onClick={editsavebtnfunc}/>
                    
                    <button className="btn btn-warning" onClick={cancelEditfunc}>Cancel</button>
                  </form>
                </div>
              
              <div id="company-list" onClick={companylistClickFunc}>
                Employees will be displayed here
              </div>
          
              <div id="company-edit-list">
              </div>
        </div> */}
        </>
    );
}
export default Companies;