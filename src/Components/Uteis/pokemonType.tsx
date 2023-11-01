export const pokemonsType = (type: string) => {
  switch (type) {
    case "fire":
      return "#ff9900";
    case "grass":
      return "#1cd80e";
    case "flying":
      return "#89bdff";
    case "water":
      return "#14a8ff";
    case "bug":
      return "#7bcf00";
    case "poison":
      return "#f149ff";
    case "normal":
      return "#9fa39d";
    case "electric":
      return "#ffde00";
    case "dark":
      return "#5a566a";
    case "dragon":
      return "#0076ff";
    case "fighting":
      return "#ff215b";
    case "fairy":
      return "#ff76ff";
    case "ghost":
      return "#4e6aff";
    case "ground":
      return "#ff6b0d";
    case "ice":
      return "#2ee4c6";
    case "psychic":
      return "#ff6c64";
    case "rock":
      return "#d8bc5a";
    case "steel":
      return "#23a1bd";
    default:
      return "#000000";
  }
};

export const attributeColors = {
  hp: "red",
  defense: "blue",
  attack: "green",
  speed: "purple",
};
export const getColorForAttribute = (attributeName: any) => {
  switch (attributeName.toLowerCase()) {
    case "hp":
      return "green";
    case "defense":
      return "yellow";
    case "attack":
      return "red";
    case "speed":
      return "blue";
    default:
      return "gray";
  }
};
