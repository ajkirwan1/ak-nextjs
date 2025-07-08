const colors = [
  "rgba(255, 99, 132, 0.6)", // pink/red
  "rgba(54, 162, 235, 0.6)", // blue
  "rgba(255, 206, 86, 0.6)", // yellow
  "rgba(75, 192, 192, 0.6)", // teal
  "rgba(153, 102, 255, 0.6)", // purple
];

const ballCount = 20;
const container = document.querySelector(".balls");

for (let i = 0; i < ballCount; i++) {
  const ball = document.createElement("div");
  ball.classList.add("ball");

  const size = Math.random() * 40 + 20; // 20–60px
  ball.style.width = `${size}px`;
  ball.style.height = `${size}px`;

  const left = Math.random() * 100;
  ball.style.left = `${left}vw`;
  ball.style.top = `${Math.random() * 100}vh`;

  const color = colors[Math.floor(Math.random() * colors.length)];
  ball.style.background = `radial-gradient(circle at 30% 40%, rgba(255,255,255,0.8), ${color})`;
  ball.style.boxShadow = `0 0 20px ${color}`;

  const duration = Math.random() * 10 + 10; // 10–20s
  ball.style.animationDuration = `${duration}s`;

  const delay = Math.random() * 5;
  ball.style.animationDelay = `${delay}s`;

  container.appendChild(ball);
}
