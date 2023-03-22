
const app = document.querySelector('.container-user-info')

const getUrl = new URLSearchParams(window.location.search)

id = getUrl.get('id')

const url = 'https://jsonplaceholder.typicode.com/users'


fetch(`${url}/${id}`)
.then( Response => Response.json())
.then( data => {

    const username = document.createElement('p')
    username.innerHTML = `User Name: ${data.username}`
    app.appendChild(username)

    const email = document.createElement('p')
    email.innerHTML = `Email: ${data.email}`
    app.appendChild(email)

    const phone = document.createElement('p')
    phone.innerHTML = `Phone Number:${data.phone}`
    app.appendChild(phone)

    const website = document.createElement('p')
    website.innerHTML = `Web Site:${data.website}`
    app.appendChild(website)

    const companyName = document.createElement('p')
    companyName.innerHTML = `Company Name:${data.company.name}`
    app.appendChild(companyName)


      
})

.catch(err => console.log(err))


