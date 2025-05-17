const postlist = document.querySelector(`.post-list`);
const addPostForm = document.querySelector(`.add-post-form`);
const addid = document.getElementById(`id`);
const addName =document.getElementById('name');
const addEmail = document.getElementById('email');
const addPno = document.getElementById('phone');
 let output  = ``;
 const renderpost = (posts) => {
  post.forEach( post => {
    output += `<div class="card mt-4 col-md-6 bg-light">
  <div class="card-body">
    <h5 class="card-title">${post.id}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${post.name}</h6>
    <p class="card-text">${post.email}</p>
    <p class="card-text">${post.phone}</p>
    <a href="#" class="card-link">Edit</a>
    <a href="#" class="card-link">Delete</a>
  </div>
</div>
    
`;
   });
        postlist.innerHTML = output;

    }

const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
    .then(res => res.json())
    .then(data => renderpost(data))
            
  //create insert new post/////
  //Method post
    
  addPostForm.addEventListener(`submit`, (e) =>{
    e.preventDefault();
    console.log(addid.value);
    console.log(addName.value);
    console.log(addEmail.value);
    console.log(addPno.value);
    fetch(url, {
      method : 'post',
      headers : {
        'Content-Type' : 'application/json'
      },
     // body: JSON.stringify({
         id : addid.value,
         name : addName.value,
         email : addEmail.value,
         phone : addPno
       
      })
    })
    .then(res => res.json())
    .then(data => {
      const dataArr = [];
      dataArr.push(data);
      renderpost(dataArr);
    })
    if(res.ok){
      console.log('successfully added in data');
    }else{
      console.log('unsuccessfully added  in data');
    }
  


            
        
    