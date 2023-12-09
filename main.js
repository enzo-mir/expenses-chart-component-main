const data = fetch("./data.json")
  .then((r) => r.json())
  .then((data) => a(data));
const divGraphs = document.querySelectorAll("div.graph");
const maxGraph = 52.36;

function a(data) {
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    divGraphs[i].style.setProperty("--height", (element.amount*100) / maxGraph+ "%");
  }
}
