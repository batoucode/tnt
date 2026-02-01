
const scoreRegex = /^(.*?)\s+(\d+)\s*[-]\s*(\d+)\s+(.*)$/;
const str = "TNT 55 - 29 Azay Cheille";
const match = str.match(scoreRegex);

console.log("String:", str);
if (match) {
    console.log("Match found!");
    console.log("Team 1:", match[1]);
    console.log("Score 1:", match[2]);
    console.log("Score 2:", match[3]);
    console.log("Team 2:", match[4]);
} else {
    console.log("No match found.");
}
