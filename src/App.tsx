import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";

import "./App.css";

function App() {
  return (
    <>
      <div className="todos-section">
        <Header />
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
