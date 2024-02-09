function captalize(string) {
  string = string.split("");
  string[0] = string[0].toUpperCase();
  for (let i = 1; i < string.length; i++) {
    if (string[i] === " ") {
      string[i + 1] = string[i + 1].toUpperCase();
    }
  }
  string = string.join("");
  return string;
}

console.log(captalize("oi xoxoto diojadioa doasjdpoisaj aidjdoia sdijaod"));
