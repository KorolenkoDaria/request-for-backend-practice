const container = document.querySelector(".js-list");

function serviceGetQuestion() {
   return fetch("http://127.0.0.1:3000/api/getAll")
       .then((resp) => {
           if (!resp.ok) {          
                 throw new Error(resp.statusText ?? resp.text); 
           }
           return resp.json();
       })
}
serviceGetQuestion()
    .then((data) => container.insertAdjacentHTML("afterbegin", createMarkup(data)))
    .catch((err) => console.log(err)) 

function createMarkup(arr) {
    return arr.map(({ name, phone, email, comment, _id }) => 
    `<li class="card" data-id="${_id}">
        <h2 class="card-name" class="card-content">${name}</h2>
        <div>Phone: <span class="card-phone">${phone}</span></div>
        <div>Email: <span class="card-email">${email}</span></div>
        <div><span>${comment}</span></div>
    </li>`)
        .join('')
    }