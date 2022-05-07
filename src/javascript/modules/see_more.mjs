(
    () => {
        const projects = document.querySelectorAll("#projects li")
        const see_more = document.querySelector(".see-more")
        let visible = 6
        let show = 2
        for (let hidden = visible; hidden < projects.length; hidden++) {
            projects[hidden].className = "hidden"
        }
        see_more.addEventListener(
            "click",
            () => {
                let total = visible + show
                for (; visible < total; visible++) {
                    if (visible === projects.length) {
                        break
                    } else if (visible === (projects.length - 1)) {
                        see_more.remove()
                    }
                    projects[visible].className = "fade-in-up"
                    projects[total - show].firstElementChild.focus()
                }
            }
        )
    }
)()