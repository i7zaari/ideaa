(
    () => {
        const top_bar = document.querySelector(".top-bar")
        window.onscroll = () => {
            if (window.scrollY > 0) {
                top_bar.classList.add("scrolled")
            } else {
                top_bar.classList.remove("scrolled")
            }
        }
    }
)()