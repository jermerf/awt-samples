$(document.body).append(
  $("<h1>").text("I am born!")
)

var btn = document.getElementById("magic")

btn.addEventListener("click", event => {
  console.log("Clicked", event)
})
btn.addEventListener("keydown", event => {
  console.log("keydown", event)
})

btn.addEventListener("click", magicClicked)
btn.addEventListener("click", generallySortOfClicked)
btn.addEventListener("click", clickedForGoodMeasure)

function magicClicked() {
  alert("Sparkle")
}

function generallySortOfClicked() {
  alert("Yeah what'ver")
}

function clickedForGoodMeasure() {
  alert("Just in case")
}


var specialDiv = document.getElementById("special")
specialDiv.addEventListener("click", event => {
  event.target.style.border = "5px solid purple"
})