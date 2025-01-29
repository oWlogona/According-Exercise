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
  const [currentOpen, setCurrentOpen] = useState(null);
  return (
    <div className="accordion">
      {articles.map((article, index) => (
        <Article
          num={index}
          title={article.title}
          key={article.title}
          currentOpen={currentOpen}
          onOpen={setCurrentOpen}
        >
          {article.text}
        </Article>
      ))}
    </div>
  );
}

function Article({ num, title, currentOpen, onOpen, children }) {
  const isOpen = num === currentOpen;
  function handleToggle() {
    onOpen(isOpen ? null : num);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
