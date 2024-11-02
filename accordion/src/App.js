import "./App.css";
import { useState } from "react";
import data from "./Data/data"
import SingleQuestion from "./compontents/Question"

function App() {
  const [questions,] = useState(data);
  return (
    <main>
      <div className="container">
        <span>Question and Answer about Login</span>
      </div>
      <section className="info">
        {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question}/>
        })}
      </section>
    </main>
  );
}

export default App;
