const formEl = document.querySelector(".js-question");


formEl.addEventListener("submit", handlerQuestion);

function handlerQuestion(evt) {

    evt.preventDefault();
    console.dir(evt.currentTarget);
    const { comment , email, phone, name} = evt.currentTarget.elements;
    /* const request = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        comment: comment.value,
    }
    console.log(request); */
    const request = {};
    const formData = new FormData(evt.currentTarget);
    console.log(formData);
    formData.forEach((value, key) => (request[key] = value));
    console.log(request);
    serviceQuestion(request)
        .then(() => alert("Success!!!"))
        .catch(() => alert("Error!!!"));
    evt.currentTarget.reset();
};

function serviceQuestion(data) {
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json",
        },
    }
   return fetch("http://127.0.0.1:3000/api/question", options)
        .then((resp) => { 
            if (!resp.ok) {
                throw new Error(resp.statusText ?? resp.text)
            } 
            return resp.json();
        })
}