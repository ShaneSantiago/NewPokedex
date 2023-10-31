export const pokemonsType = (type: any) => {
  if (type === "fire") {
    return "#ff9900";
  }
  if (type === "grass") {
    return "#1cd80e";
  }
  if (type === "flying") {
    return "#89bdff";
  }
  if (type === "water") {
    return "#14a8ff";
  }
  if (type === "bug") {
    return "#7bcf00";
  }
  if (type === "poison") {
    return "#f149ff";
  }
  if (type === "normal") {
    return "#9fa39d";
  }
  if (type === "electric") {
    return "#ffde00";
  }
  if (type === "dark") {
    return "#5a566a";
  }
  if (type === "dragon") {
    return "#0076ff";
  }
  if (type === "fighting") {
    return "#ff215b";
  }
  if (type === "fairy") {
    return "#ff76ff";
  }
  if (type === "ghost") {
    return "#4e6aff";
  }
  if (type === "ground") {
    return "#ff6b0d";
  }
  if (type === "ice") {
    return "#2ee4c6";
  }
  if (type === "psychic") {
    return "#ff6c64";
  }
  if (type === "rock") {
    return "#d8bc5a";
  }
  if (type === "steel") {
    return "#23a1bd";
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
      console.log("Atributo desconhecido:", attributeName);
      return "gray";
  }
};
