import "./App.css";
import Review from "./components/Review";

function App() {
  return (
    <main>
      <section>
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
