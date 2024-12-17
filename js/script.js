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
        
        const burgerIcon = document.querySelector(".burger-icon");
        const nav = document.querySelector("nav");
        if(burgerIcon) {
            burgerIcon.addEventListener("click", () => {
                nav.classList.toggle("shown");
                burgerIcon.classList.toggle("clicked");
            })
        }

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




