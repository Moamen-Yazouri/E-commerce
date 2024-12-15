window.addEventListener('DOMContentLoaded', () => {
    fetch('components/header.html')

    .then(response => {
        if(response.ok) {
            return response.text();
        }
        else {
            throw new Error("Failed To Load Header")
        }
    })

    .then(component => {
        document.body.insertAdjacentHTML("afterbegin", component);
    })

    .catch(error => console.error(error));


    fetch('components/footer.html')

    .then(response => {
        if(response.ok) {
            return response.text();
        }
        else {
            throw new Error("Failed To Load Footer")
        }
    })

    .then(component => {
        document.body.insertAdjacentHTML("beforeend", component);
    })

    .catch(error => console.error(error));
})