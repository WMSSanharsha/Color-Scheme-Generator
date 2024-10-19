const selectedElement = document.getElementById("color-select");
const form = document.getElementById("form");
const btn = document.getElementById("submit-btn");

let selectedColorHexCode;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  selectedColorHexCode = selectedElement.value.slice(1);

  fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColorHexCode}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const colorsArr = data.colors;
      const colorsHexCodes = colorsArr.map((colorHexCode) => {
        return colorHexCode.hex.value;
      });
      console.log(colorsHexCodes);
      colorsHexCodes.forEach((color, i) => {
        return (document.getElementById(`color${i + 1}`).style.backgroundColor =
          color);
      });
    });
});

//data.colors[0].hex.value
