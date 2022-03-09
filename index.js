let users = document.getElementById("users")

window.addEventListener("DOMContentLoaded", ()=>{
  fetch('https://randomuser.me/api/?results=20').then(function(res){
    return res.json()
  }).then(function (data){
   /* var Datee = new Date(`${data.results.dob.date}`);
		var myDate =  Datee.toDateString();
			.	*/
   console.log(data)
   let singleUser = data.results.map((el) => {
     let Datee = new Date(`${el.dob.date}`)
     let myDate = Datee.toDateString();
    return `
    <div class = "card shadow-lg" style="width: 18rem;">
        <img src ="${el.picture.large}" alt ="" class = "card-img-top img-fluid w-50 mx-auto rounded-circle">
        <div class = "card-body">
          <ul class = "list-unstyled card-text">
            <li class = "card-text"><strong>Name:</strong> ${el.name.title} ${el.name.first} ${el.name.last} </li>    
                <li class = "card-text"><strong>AGE:</strong> ${el.dob.age} </li> 
            <li class = "card-text"><strong>DOB:</strong> ${myDate} </li> 
            <ul>
            </div>
            </div>`  
   });
   users.innerHTML += singleUser
   
  })
})

