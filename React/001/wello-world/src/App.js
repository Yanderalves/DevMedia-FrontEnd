import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h2>React JS</h2>
      </header>
      <main>
        <section>
          <h1>React JS</h1>
          <h2>Biblioteca JavaScript para criar SPA's</h2>
          <a>Site oficial</a>
        </section>
        <section>
          <h2>Requisitos</h2>
          <p>Requisitos mínimos para aprender React JS</p>
          <div className="container-cards">
            <div className="card">
              <h3>HTML</h3>
              <p>Aprender a estruturar os elementos da página com HTML</p>
            </div>
            <div className="card">
              <h3>CSS</h3>
              <p>Aprender a estilizar os elementos da página com HTML</p>
            </div>
            <div className="card">
              <h3>JavaScript</h3>
              <p>Aprender a linguagem utilizada pelo React JS, O JavaScript</p>
            </div>
          </div>
        </section>
      </main>
      <footer>Curso de introdução a React JS</footer>
    </div>
  );
}

export default App;
