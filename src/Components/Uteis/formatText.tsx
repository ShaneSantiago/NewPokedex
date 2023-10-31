export function capitalizeFirstLetters(str: any) {
  return str
    .toLowerCase()
    .replace(/-/g, " ")
    .replace(/(^\w| \w)/g, function (match: any) {
      return match.toUpperCase();
    });
}

export type StatName =
  | "hp"
  | "attack"
  | "defense"
  | "special-attack"
  | "special-defense"
  | "speed";

export function translateText(text: StatName) {
  const translations: Record<StatName, string> = {
    hp: "HP",
    attack: "ATK",
    defense: "DEF",
    "special-attack": "ASP",
    "special-defense": "DSP",
    speed: "SPD",
  };

  return translations[text] || text;
}
