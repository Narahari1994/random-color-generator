const boxes = document.querySelectorAll(".box");

const randomColor = () => {
  let hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexCode[Math.floor(Math.random() * (hexCode.length - 1) + 1)];
  }

  return color;
};

boxes.forEach((box) => {
  box.style.backgroundColor = randomColor();
  box.innerHTML = randomColor();
});

const fetchData = async () => {
  try {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
// 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
