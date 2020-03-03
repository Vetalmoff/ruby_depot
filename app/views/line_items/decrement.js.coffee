cart = document.getElementById("cart")
cart.innerHTML = "<%= j render(@cart) %>"
if cart.children[0].innerText == ""
  cart.style.display='none'
notice = document.getElementById("notice")
if notice
  notice.style.display = "none"