const polygonContainer = document.querySelector(".polygon-container");
const polygonName = polygonContainer.querySelector(".polygon-name");
const polygonSides = polygonContainer.querySelector('[name="polygon-sides"]');
const actionToPerform = polygonContainer.querySelector(
  ".polygon-container__inputs-select"
);
const calculate = document.querySelector('[type="button"]');

let sidesOfPolygon = polygonSides.value;

class Actions {
  constructor(sides) {
    this.sides = sides;
    this.actionToPerform = this.getActions();
    this.getInteriorAngle = this.getInteriorAngle();
    this.polygon = this.returnName();
    this.result = null;
  }

  returnName() {
    switch (this.sides) {
      case 3:
        return (this.polygon = "triangle");
      case 4:
        return (this.polygon = "square");
      case 5:
        return (this.polygon = "pentagon");
      case 6:
        return (this.polygon = "hexagon");
      case 7:
        return (this.polygon = "heptagon");
      case 8:
        return (this.polygon = "octagon");
      case 9:
        return (this.polygon = "nonagon");
      case 10:
        return (this.polygon = "decagon");
      case 11:
        return (this.polygon = "undecagon");
      case 12:
        return (this.polygon = "duodecagon");
      default:
        return (this.polygon = "");
    }
  }

  getActions() {
    let operand = null; // Default value

    actionToPerform.addEventListener("change", (e) => {
      let actionType = e.target.options[e.target.selectedIndex];
      let actionTypeValue = actionType.value;
      operand = actionTypeValue;

      console.log(operand);
    });

    return operand;
  }

  getInteriorAngle() {
    return this.sides > 2 && this.actionToPerform === "size-of-interior-angle"
      ? (this.result = Math.round((this.sides - 2 * 180) / this.sides))
      : "?";
  }
}

let action = new Actions(10, "null");

console.log(action.result);

calculate.addEventListener("click", () => {
  action = new Actions(polygonSides)
  console.log(action.result)
})
