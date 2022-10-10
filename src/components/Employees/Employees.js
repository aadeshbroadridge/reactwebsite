import React, { useEffect, useState } from "react";
import './Employees.css';
const Companies = () => {
  const [addform, setAddForm] = useState({
        id:"",
        name: "",
        companyname: "",
        image:"",
        age:""
    });
    const [editform, setEditForm] = useState({
        id:"",
        editname: "",
        editcompanyname: "",
        editage:""
  });

  useEffect(()=>{console.log('addform: ',addform);
  console.log('editform: ',editform);})
  const onUpdateAddFields = e => {
    console.log('name:' + e.target.name);
    console.log('value:' + e.target.value);
   
    setAddForm((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value

    }))
    // console.log('after form:' + JSON.stringify(form));
  };
  const onUpdateEditFields = e => {
    console.log('name:' + e.target.name);
    console.log('value:' + e.target.value);
   
    setEditForm((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value

    }))
    // console.log('after form:' + JSON.stringify(form));
  };
    const canceleditfunc = ()=>{
      document.querySelector('.editcontainer').style.display = 'none';
    }
    function cancelnewfunction() {
      console.log('cancel add new invoked')
      document.querySelector('.containerep').style.display = 'none';
    }
    window.onload=function(){
    const addBtn = document.querySelector('#new-company-btn')
// const companyForm = document.querySelector('.containerep')
const editFormz = document.querySelector('.editcontainer')

addBtn.addEventListener('click', () => {
    console.log('add function invoked');
   
    document.querySelector('.containerep').style.display = 'block'
    window.scrollTo(0, 0);

})



function fetchcompanies() {
    fetch('http://localhost:4322/employees')
        .then(resp => resp.json())
        .then(getCompanies)
}

const companyList = document.getElementById('company-list')
function getCompanies(employees) {
    console.log('employees: ', employees)
    companyList.innerHTML = ""
    employees.forEach(function (item) {
        companyList.innerHTML += `
   <div class="card" data-id=${item.id}>
        
        <img src="${item.image}" class="company-avatar" />
        <br/>
        
              <table style="border:1px solid;width:100%;">
              <tr style="border:1px solid">
              <th style="border:1px solid">Name</th>
              <td style="border:1px solid;text-align:center">${item.name}</td>
              </tr>
              <tr style="border:1px solid">
              <th style="border:1px solid">Company</th>
              <td style="border:1px solid;text-align:center">${item.company}</td>
              </tr>
              <tr style="border:1px solid">
              <th style="border:1px solid">Age</th>
              <td style="border:1px solid;text-align:center">${item.age}</td>
              </tr style="margin-bottom:5px">
              </table>
        <br/>
        <button class="edit-btn btn btn-success" style="margin:2px;width:13rem;">Edit</button>
        <button class="delete-btn btn btn-danger" style="margin:2px;width:13rem;">Delete</button>
        
   </div>
  `
    })
}
fetchcompanies();

const addcompanyForm = document.querySelector('.add-company-form')
addcompanyForm.addEventListener('submit', function (event) {
    // event.preventDefault();
    window.scrollTo(0, 0);
    console.log('add invoked');
    fetch(`http://localhost:4322/employees/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: `${event.target.name.value}`,
            image: `${event.target.image.value}`,
            company: `${event.target.companyname.value}`,
            age: `${event.target.age.value}`
        })

    })
        .then(resp => resp.json())
        .then(getCompanies)
})


// const companyList = document.getElementById('company-list')
companyList.addEventListener('click', function (event) {
    // console.log('delete invoked')
    console.log('className :', event.target.className);
    let editButtonIsPressed = event.target.className === "edit-btn btn btn-success"
    let delButtonIsPressed = event.target.className === "delete-btn btn btn-danger"
    if (editButtonIsPressed) {
        let id = event.target.parentElement.dataset.id
        console.log('id inside::',id);
        editFormz.style.display = 'block'

       
        fetch(`http://localhost:4322/employees/${id}`).then(res => res.json())
            .then((item) => {
                console.log(item);
                
                setEditForm((prevState) => ({
                  ...prevState,
                  "id": item.id,
                  "editname": item.name,
                  "editcompanyname": item.company,
                  "editage": item.age,
          
              }))
                // document.getElementById('id').value = item.id;
                // document.getElementById('editname').value = item.name;
                // document.getElementById('editcompanyname').value = item.company;
                // document.getElementById('editage').value = item.age;

                // document.getElementById('editsavebutton').name = item.id
                // $(document).scrollTop(10) 
                window.scrollTo(0, 0);
                event.preventDefault();
            });

    }
    else if (delButtonIsPressed) {
        if (window.confirm("Do you really want to Delete?")) {
            let id = event.target.parentElement.dataset.id
            console.log('id: ', id);
            fetch(`http://localhost:4322/employees/${id}`, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(fetchcompanies)
        }
    }
}
);
    

const editsavebtn = document.querySelector('#editsavebutton');
editsavebtn.addEventListener('click', (e) => {
    
    console.log('editsave invoked');
    // let formname = editform.name;
    // let formcompanyname = editform.company;
    // let formage =editform.age;
    // let idinsideeditsavebtn = editform.id;
    let formname = document.getElementById('editname').value;
    let formcompanyname = document.getElementById('editcompanyname').value;
    let formage = document.getElementById('editage').value;
    let eid = document.getElementById('id').value;
    // console.log(editform)
    console.log('id inside editsavebtn::',eid);
    
    fetch(`http://localhost:4322/employees/${eid}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: formname,
            company: formcompanyname,
            age: formage
        })
        
        
    })
        .then(response => response.json())
        .catch(err=>console.log(err))
        // e.preventDefault();
})

    }


  return (
    <>
      <div className="bodyclassep">
        <div className="btcontainerep">
        <div className="profile_mainep">
          <div id='company-header'>
            <h2>Companies and Employees</h2>
          </div>

          <div className="containerep">
            <form className="add-company-form">
              <h3>Add new person!</h3>
              <input type="text" name="name" value={addform.name}  onChange={onUpdateAddFields} placeholder="Enter person name : " className="input-text"  required />
              <br />
              <input type="text" name="companyname" value={addform.companyname}  onChange={onUpdateAddFields} placeholder="Enter a company's name : " className="input-text" required />
              <br />
              <input type="text" name="image" value={addform.image}  onChange={onUpdateAddFields} placeholder="Enter a company's image URL : " className="input-text" required />
              <br />
              <input type="text" name="age" value={addform.age}  onChange={onUpdateAddFields} placeholder="Enter person's age : " className="input-text" required />
              <br />
              <input type="submit"  name="submit" id="addnewbtn" value="Add New Person" className="btn btn-success"  />
            </form>
            <button className="btn btn-warning" onClick={cancelnewfunction}>Cancel</button>
          </div>
          <p  className="wannaaddpclass">wanna add persons ?<button id='new-company-btn' className="new-company-btn btn btn-secondary">Add a new person</button></p>

          <div className="editcontainer" id="#editcontainer">
            <form className="add-company-form">
              <h3>Edit Here!</h3>
              <input type="text" id="id" name="id" value={editform.id}  onChange={onUpdateEditFields} placeholder="Id: " className="input-text" disabled />
              <br />
              <input type="text" id="editname" name="editname" value={editform.editname}  onChange={onUpdateEditFields} placeholder="Enter person name : " className="input-text" />
              <br />
              <input type="text" id="editcompanyname" name="editcompanyname" value={editform.editcompanyname}  onChange={onUpdateEditFields} placeholder="Enter a company's name : " className="input-text" />
              <br />
              <input type="text" id="editage" name="editage" value={editform.editage}  onChange={onUpdateEditFields} placeholder="Enter person's age : " className="input-text" />
              <br />
              <input type="submit" id="editsavebutton" name="submit" value="Edit" className="btn btn-success" />

              <button className="btn btn-warning" onClick={canceleditfunc}>Cancel</button>
            </form>
          </div>

          <div id="company-list">
          </div>

          <div id="company-edit-list">
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Companies;