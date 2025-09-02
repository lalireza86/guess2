
const number = Math.floor(Math.random() * 100) + 1;
let tries = 0;
document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  const guess = parseInt(document.getElementById("input").value);
  tries++;
  if (guess === number) {
    console.log("آفرین! درست حدس زدی.");
  } else if (tries >= 3) {
    console.log("شما باختید! عدد درست بود: " + number);
  } else {
    const diff = Math.abs(number - guess);
    if (diff <= 14) {
      console.log("نزدیک بودی!");
    } else {
      console.log("خیلی دور بودی!");
    }
  }
  document.getElementById("input").value = "";
});