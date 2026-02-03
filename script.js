function createLight() {
  const l = document.createElement("div");
  l.className = "light";
  l.innerHTML = "✨";
  l.style.left = Math.random() * 100 + "vw";
  l.style.animationDuration = (6 + Math.random() * 4) + "s";
  document.body.appendChild(l);
  setTimeout(() => l.remove(), 10000);
}
setInterval(createLight, 900);
