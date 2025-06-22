const dynamic = document.querySelector(".dynamic")

function handleMouseMove(e){
    const x = e.clientX / window.innerWidth * 100
    dynamic.style.width = `${x}%`
}

window.addEventListener("mousemove", handleMouseMove)