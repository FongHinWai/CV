document.addEventListener("mousemove", parallax);

function parallax(e) {
  this.querySelectorAll('.profile-picture').forEach(layer => {
    const speed = layer.getAttribute('data-speed')
    var x = (window.innerWidth - e.pageX * speed) / 200
    var y = (window.innerHeight - e.pageY * speed) / 200

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}
