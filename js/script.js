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
        const allLinks = document.querySelectorAll("nav ul li a");

        allLinks.forEach(a => a.href === location.href ? a.classList.add('active') : "")

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

    const products = document.querySelectorAll(".products .card");
    products.forEach(card => {
        card.addEventListener("click", () => {
            const cardImg = card.querySelector('img')
            sessionStorage.setItem("img-src", cardImg.src);
            location.href = "../single-product.html"
        })
    })
    
    const singleProdImg = document.querySelector(".product-info .big-img img");
    if (singleProdImg) {
        singleProdImg.src = sessionStorage.getItem("img-src") || "";

        const singleProdSmallImgs = document.querySelectorAll(".product-info .small-imgs img");
        singleProdSmallImgs.forEach(img => {
            img.addEventListener("click", (e) => {
                singleProdImg.src = e.currentTarget.src;
            });
        });
    }
})

