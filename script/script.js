

const APP = document.querySelector('.container')


const url = 'https://jsonplaceholder.typicode.com/users'


fetch(url)
.then(Response => Response.json())
.then(data => {  
      data.forEach( user => {
        console.log(user.name)
        const p = document.createElement('p')
        p.setAttribute('id',user.id)
        p.innerHTML = user.name
        p.addEventListener('click', function (){
            window.location.href = `html/user.html?id=${user.id}`
        })
        APP.appendChild(p)
        

              });
    })
.then(data =>console.log(data))
.catch(err => console.log(err))