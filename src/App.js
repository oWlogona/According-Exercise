import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];
function App() {
  return (
    <div>
      <Accordion articles={faqs} />
    </div>
  );
}

export default App;

function Accordion({ articles }) {
  return (
    <div className="accordion">
      {articles.map((article, index) => (
        <Article
          num={index}
          title={article.title}
          text={article.text}
          key={article.title}
        />
      ))}
    </div>
  );
}

function Article({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon" onClick={handleToggle}>
        {isOpen ? "-" : "+"}
      </p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
