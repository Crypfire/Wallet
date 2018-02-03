function expand(x) {
  if (x.childNodes[0].id == "open") {
    x.parentNode.style = "height: 40px;";

    x.style = "margin-top: -35px;";
    x.innerHTML = '<a id="closed">more</a>';

  } else {
    x.parentNode.style = "height: 100px;";

    x.style = "margin-top: 25px;";
    x.innerHTML = '<a id="open">less</a>';
  }
}

function openSettings() {

}
