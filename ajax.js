console.log("Test message for script is working")
let getbtn = document.getElementById('getbtn')
getbtn.addEventListener('click', buttonClickHandlerget)

function buttonClickHandlerget()
{ console.log("You Clicked the GET Button")

 
  //Initiating an XHR object
  const xhr = new XMLHttpRequest();

  //Open the Object
  xhr.open('GET', 'https://getbootstrap.com/docs/4.3/components/buttons/',true);
  xhr.withCredentials = true;

  //Recieving and showing Responce
  xhr.onload = function()
  {
    console.log(this.responseText)  
  }

 // Send the Request!
  xhr.send();
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// For POST Request

let postbtn = document.getElementById('postbtn')
postbtn.addEventListener('click', buttonClickHandlerpost)

function buttonClickHandlerpost()
{ console.log("You Clicked the POST Button")

 
  //Initiating an XHR object
  const xhr = new XMLHttpRequest();

  //Open the Object
  xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create',true);  // Dummy URL to test POST request
  xhr.getResponseHeader('Content-type', 'application/json');
  xhr.withCredentials = true;

  //Recieving and showing Responce
  xhr.onload = function()
  {
    console.log(this.responseText)  
  }

 // Send the Request with POST data!
  params= `{"name":"shubham_srt","salary":"123456789","age":"22"}`  //Make sure to change the Name everytime or there will be error as the data is already there in database with that name
  xhr.send(params);
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// For PUT Request


let putbtn = document.getElementById('putbtn')
putbtn.addEventListener('click', buttonClickHandlerput)

function buttonClickHandlerput()
{ console.log("You Clicked the PUT Button")

 
  //Initiating an XHR object
  const xhr = new XMLHttpRequest();

  //Open the Object
  xhr.open('PUT', 'https://dummy.restapiexample.com/api/v1/update/21',true);  // Dummy URL to test PUT request
  xhr.getResponseHeader('Content-type', 'application/json');
  xhr.withCredentials = true;

  //Recieving and showing Responce
  xhr.onload = function()
  {
    console.log(this.responseText)  
  }

 // Send the Request with PUT data!
  params= `{"name":"shubham_srt","salary":"123456789","age":"22"}`  
  xhr.send(params);
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// For DELETE Request


let deletebtn = document.getElementById('deletebtn')
deletebtn.addEventListener('click', buttonClickHandlerdelete)

function buttonClickHandlerdelete()
{ console.log("You Clicked the DELETE Button")

 
  //Initiating an XHR object
  const xhr = new XMLHttpRequest();

  //Open the Object
  xhr.open('DELETE', 'https://reqres.in/api/users/2',true);  // Dummy URL to test DELETE request
  xhr.getResponseHeader('Content-type', 'application/json');
  xhr.withCredentials = true;

  //Recieving and showing Responce
  xhr.onload = function()
  {
    console.log(this.responseText)  
  }

 // Send the Request with DELETE data!
  params= `{"name":"shubham_srt","salary":"123456789","age":"22"}`  
  xhr.send(params);
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// For PATCH Request


let patchbtn = document.getElementById('patchbtn')
patchbtn.addEventListener('click', buttonClickHandlerpatch)

function buttonClickHandlerpatch()
{ console.log("You Clicked the PATCH Button")

 
  //Initiating an XHR object
  const xhr = new XMLHttpRequest();

  //Open the Object
  xhr.open('PATCH', 'https://reqres.in/api/users/2',true);  // Dummy URL to test PATCH request
  xhr.getResponseHeader('Content-type', 'application/json');
  xhr.withCredentials = true;

  //Recieving and showing Responce
  xhr.onload = function()
  {
    console.log(this.responseText)  
  }

 // Send the Request with PATCH data!
  params= `{
    "name": "morpheus",
    "job": "zion resident"
}`  
  xhr.send(params);
}








history.pushState('', '', '/');
      document.forms[0].submit();
