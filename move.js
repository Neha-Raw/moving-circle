let circle = document.querySelector(".box")
document.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === "w" || e.key === "W") {
        let y = parseInt(getComputedStyle(circle).top)
        y -= 10;
        circle.style.top = y + "px"
    }
    else if (e.key === "a" || e.key === "A") {
        let y = parseInt(getComputedStyle(circle).left)
        y -= 10;
        circle.style.left = y + "px"
    }
    else if (e.key === "d" || e.key === "D") {
        let y = parseInt(getComputedStyle(circle).left)
        y += 10;
        circle.style.left = y + "px"
    }
    else if (e.key === "e" || e.key === "E") {
        let y = parseInt(getComputedStyle(circle).top)
        y += 10;
        circle.style.top = y + "px"
    }
})