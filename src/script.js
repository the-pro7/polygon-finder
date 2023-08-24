const polygonContainer = document.querySelector(".polygon-container");
const polygonSides = polygonContainer.querySelector('[type="number"]');
const computations = polygonContainer.querySelector(".computations");
const calculate = polygonContainer.querySelector('[type="button"]');
const polygonName = polygonContainer.querySelector(".polygon-name");

console.log(computations);
const messages = computations.querySelectorAll("p");

const round = (num) => {
  return Math.round((num * 1000) / 1000);
};

const availablePolygons = {
  3: "triangle",
  4: "square/rectangle",
  5: "pentagon",
  6: "hexagon",
  7: "heptagon",
  8: "octagon",
  9: "nonagon",
  10: "decagon",
  11: "undecagon",
  12: "duodecagon",
};

class configurePolygon {
  constructor(sides) {
    this.sides = sides;
    this.sumOfInteriorAngles = this.sumOfInteriorAngles();
    this.sizeOfInteriorAngle = this.sizeOfInteriorAngle();
    this.sizeOfExteriorAngle = this.sizeOfExteriorAngle();
    this.polygonName = this.polygonName();
  }

  sumOfInteriorAngles() {
    return this.sides > 2 ? round((this.sides - 2) * 180) : "bad";
  }

  sizeOfInteriorAngle() {
    return this.sides > 2
      ? round(((this.sides - 2) * 180) / this.sides)
      : "worse";
  }

  sizeOfExteriorAngle() {
    return this.sides > 2 ? round(360 / this.sides) : "worst";
  }

  polygonName() {
    return this.sides > 2 && this.sides <= 12
      ? availablePolygons[this.sides]
      : "none";
  }

  showComputatations() {
    messages.forEach((message) => {
      let messageHolders = message.querySelectorAll("span");
      messageHolders.forEach((holder) => {
        if (holder.classList.contains("sum-interior")) {
          holder.textContent = this.sumOfInteriorAngles;
        } else if (holder.classList.contains("size-interior")) {
          holder.textContent = this.sizeOfInteriorAngle;
        } else {
          holder.textContent = this.sizeOfExteriorAngle;
        }
      });
    });

    polygonName.textContent = this.polygonName.toUpperCase();
  }
}

console.log(round(57.55)); // Thanks to @beanythecoder for this!!

let configure = new configurePolygon(polygonSides.value);

calculate.addEventListener("click", () => {
  configure = new configurePolygon(polygonSides.value);
  console.log(configure.sides);
  configure.showComputatations();
});
