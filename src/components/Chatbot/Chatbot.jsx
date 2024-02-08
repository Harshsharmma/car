import React from "react";

const Chatbot = () => {
  return (
    <section className="chatbot">
      <div className="chatbot-messages "></div>
      <form className="chatbot-form">
        <input type="text" placeholder="Type your message..." />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Chatbot;
