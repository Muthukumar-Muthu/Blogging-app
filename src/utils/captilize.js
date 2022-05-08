import { trim } from "lodash";

export default function captilize(string) {
  const stringsArray = string.split(".");
  const formattedString = stringsArray
    .map((string) => {
      const trimmed = trim(string);
      const formatted = trimmed.at(0).toUpperCase() + trimmed.slice(1);
      return formatted;
    })
    .join(" ");
  return formattedString;
}
