//your code here
let agebutton=document.getElementById('age');
  let emailbutton=document.getElementById('email');
  let phonebutton=document.getElementById('phone');
  let otherUserbutton=document.getElementById('otherUser');
  let image=document.getElementById('image');
  let addinfo=document.getElementById('addinfo');
let ss=function()
{
  fetch("https://randomuser.me/api/")
  .then((response) => {return response.json();})
  .then((data) => {console.log(data.results[0]);

  

  image.innerHTML=`<img src=${data.results[0].picture.large}></img>`

  function AgeButton(){
        
    addinfo.innerHTML=`<h1>${data.results[0].dob.age}</h1>` 
    
}

function EmailButton(){
  addinfo.innerHTML=`<h1>${data.results[0].email}</h1>` 

}

function PhoneButton(){
  addinfo.innerHTML=`<h1>${data.results[0].phone}</h1>` 

}

agebutton.addEventListener('click',AgeButton);
emailbutton.addEventListener('click',EmailButton);
phonebutton.addEventListener('click',PhoneButton);

}
  );
}
  
  
ss();
otherUserbutton.addEventListener('click',ss);


  
