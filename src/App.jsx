import { Header } from "./components/header/header.jsx";
import { Hero } from "./components/hero/hero.jsx";
import { Section } from "./components/section/section.jsx";
function App() {
  return (
    <>
      <div className="body">
        <div className="container">
          <Header />
          <Hero />
          <Section />
        </div>
      </div>
    </>
  );
}

export default App;
