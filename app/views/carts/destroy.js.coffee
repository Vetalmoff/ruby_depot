cart = document.getElementById("cart")
cart.innerHTML = "<%= j  render_if @cart && @cart.line_items.any?, @car %>"

notice = document.getElementById("notice")
if notice
  notice.style.display = "block"