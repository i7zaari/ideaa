(
    () => {
        const containers = document.querySelectorAll("[data-focus-trap]")
        containers.forEach(
            container => {
                const focusable = container.querySelectorAll("[data-focusable]")
                const first = focusable[0]
                const last = focusable[focusable.length - 1]
                focusable.forEach(
                    element => {
                        element.addEventListener(
                            "keydown",
                            (e) => {
                                function trap() {
                                    if (e.shiftKey && e.key === "Tab") {
                                        if (document.activeElement === first) {
                                            last.focus()
                                            e.preventDefault()
                                        }
                                    } else if (e.key === "Tab") {
                                        if (document.activeElement === last) {
                                            first.focus()
                                            e.preventDefault()
                                        }
                                    }
                                }
                                if (first.className === "hamburger" && first.ariaExpanded === "true") {
                                    trap()
                                } else {
                                    // trap()
                                }
                            }
                        )
                    }
                )
            }
        )
    }
)()