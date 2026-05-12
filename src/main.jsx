import "./style.css";

function App() {
  return `
    <main class="home">
      <div class="overlay"></div>

      <section class="hero">
        <h1>DAGDROØM</h1>
        <div class="line"></div>
        <p>Calm.Clean.Nordic.</p>
      </section>
    </main>
  `;
}

document.querySelector("#app").innerHTML = App();
