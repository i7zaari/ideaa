(
    () => {
        const hamburger = document.querySelector(".hamburger")
        const links = document.querySelectorAll(".menu a")
        hamburger.addEventListener(
            "click",
            () => {
                if (hamburger.ariaExpanded === "false") {
                    hamburger.ariaExpanded = "true"
                    document.body.classList.add("overflow-hidden")
                } else if (hamburger.ariaExpanded === "true") {
                    hamburger.ariaExpanded = "false"
                    document.body.classList.remove("overflow-hidden")
                }
            }
        )
        links.forEach(
            link => {
                link.addEventListener(
                    "click",
                    () => {
                        hamburger.ariaExpanded = "false"
                        document.body.classList.remove("overflow-hidden")
                    }
                )
            }
        )
    }
)()