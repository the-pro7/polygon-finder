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
    this.actionToPerform = null;
    this.polygon = "";
  }

  getSides() {
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
    const actions = actionToPerform;
   return actions.addEventListener("change", (e) => {
      let actionType = e.target.options[e.target.selectedIndex];
      let actionTypeValue = actionType.value;
    });

  }

  static add() {
    return "hello world";
  }
}

let action = new Actions(10, "null");

console.log(action.getActions());
