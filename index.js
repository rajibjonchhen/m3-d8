
const handlePostSubmit = function(event){
    event.preventDefault()
    const newProduct = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        brand: document.getElementById("brand").value,
        price: document.getElementById("price").value,
        imageUrl: document.getElementById("image").value
    }

    console.log(newProduct.name)
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method:"POST",
        body:JSON.stringify(newProduct),
        headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2Mzg5Njg5MjIsImV4cCI6MTY0MDE3ODUyMn0.I62rqMBiig_57YNcK0VzC7hRA65djJbbJ_wdeyHseRc"
        }
    })
    .then(response => response.json())
    .then(jsonData=>{

        console.log(jsonData)
    })
     
    .catch(err=>{
        console.error(err)
    })
}

const editPost = function(event){
    event.preventDefault()
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2Mzg5Njg5MjIsImV4cCI6MTY0MDE3ODUyMn0.I62rqMBiig_57YNcK0VzC7hRA65djJbbJ_wdeyHseRc"
        }
    })
    .then(res=> res.json())
    .then(products=>{


    products[0] = {
        name: "Acer Chromebook",
        description: "The light laptop on earth",
        brand: "Acer",
        price: "300",
        imageUrl: "https://static.fnac-static.com/multimedia/Images/PT/NR/23/86/73/7570979/1505-1.jpg",
    }

    console.log(newProduct.name)
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method:"POST",
        body:JSON.stringify(newProduct),
        headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2Mzg5Njg5MjIsImV4cCI6MTY0MDE3ODUyMn0.I62rqMBiig_57YNcK0VzC7hRA65djJbbJ_wdeyHseRc"
        }
    })
    .then(response => response.json())
    .then(jsonData=>{

        console.log(jsonData)
    })
     
    .catch(err=>{
        console.error(err)
    })
})
}


const loadProducts = function(){
   
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2Mzg5Njg5MjIsImV4cCI6MTY0MDE3ODUyMn0.I62rqMBiig_57YNcK0VzC7hRA65djJbbJ_wdeyHseRc"
        }
    })
    .then(response => response.json())
    .then(jsonData =>{
            console.log(jsonData)

        let displayCards = document.getElementById("displayCards")
    jsonData.forEach(item =>{

   
           displayCards.innerHTML +=`<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div class="card" style="width: 18rem;">
  <img src="${item.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Product Name :${item.name}</h5>   
    <p class="card-text">User Id : ${item._id}</p>
    <p class="card-text">Mobile Brand : ${item.brand}</p>
    <p class="card-text">Mobile Price : ${item.price}</p>
    <p class="card-text">Mobile Info : ${item.description}</p>
    <a href="#" class="btn btn-primary">know more about </a>
  </div>
  </div>
</div>`
}) 
    } )
    .catch(err=>{
        console.log(err)
        
    })
}

loadProducts()

window.onload = function(){



}
