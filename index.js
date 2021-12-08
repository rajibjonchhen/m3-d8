
const loadEvents = function(){
    fetch("https://striveschool-api.herokuapp.com/api/product", {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2Mzg5Njg5MjIsImV4cCI6MTY0MDE3ODUyMn0.I62rqMBiig_57YNcK0VzC7hRA65djJbbJ_wdeyHseRc"
        }
    })
    .then(response => response.json())
    .then(jsonData =>{
            console.log(jsonData)
    } )
}


window.onload = function(){
loadEvents()
}