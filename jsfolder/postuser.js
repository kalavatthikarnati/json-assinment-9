
   
   fetch(`https://jsonplaceholder.typicode.com/users`).then((data) =>{
    console.log(data);//json format
    return data.json();
    }).then((objectData)=>{
      
    console.log(objectData[0].id);//length of array
     let tableData = "";
    objectData.map((values)=>{
        tableData +=  `<tr>
      <td>${values.id}</td>
      <td>${values.name}</td>
     
      <td>${values.email}</td>
      <td>${values.phone}</td>
        
    </tr>
   `;
   
    });
    document.getElementById("table-body").innerHTML = tableData;
})

//<td><button onclick="putData()">Put</button></td>//
//post method
<script>
     async function putData(){
        let res = await fetch("https://jsonplaceholder.typicode.com/users/3",{
        
          method : 'put',
         body : JSON.stringify(
            {
            "id" : "3",
            "name" :'kala',
             "email": 'kalavathi.karnati2@gmail.com',
             "phone" : "8639590903"
             
           }
        ),
      
              headers : {

            'Content-Type' : 'application/json',
          }

         
    
    })
         let data =await res.json();
  
         console.log(data);

}
/////////post////////////

       const postlist = document.querySelector('.table-body');
       const output = '';
        const url = 'https://jsonplaceholder.typicode.com/users';
          
        fetch(url)
        .then(res =>res.json())
        .then(data =>{
          data.forEach(post =>{
            output += `<tr>
      <td>${post.id}</td>
      <td>${post.name}</td>
     
      <td>${post.email}</td>
      <td>${post.phone}</td>
 
     
    </tr>`;
    
          });
          postlist.innerHTML = output;
        })
        
        
     /////div data------
      
        
<div class="post-list row">
  </div>
</div>
//////////////////////////post table////////////
 <h1 class="head1 text-center">Adding New Data in API</h1>

<div class="container">
<table class="table table-bordered">
  <thead class ="table table-dark text-center">
    <tr  class="heading2 text-center">
       <th scope="col">USER ID</th>
      <th scope="col">NAME</th>
      
      <th scope="col">E-MAIL</th>
      <th scope="col">PHONE NUMBER</th>
     
    </tr>
    
    
  </thead>
  <tbody id="table-body">
    
    
  </tbody>
    
</table>
    
</div>

       
       
     
         
         
     
  
 
 