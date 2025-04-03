import React, { useRef } from "react";

export default function ChatForm({
  chatHistory,
  setChatHistory,
  generateBotResponse,
}) {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    setTimeout(
      () =>
        setChatHistory((history) => [
          ...history,
          { role: "model", text: "Thinking..." },
        ]),
      600
    );

    generateBotResponse([...chatHistory, { role: "user", text: userMessage }]);
  };
  return (
    <>
      <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Message..."
          className="message-input"
          required
        />
        <button className="material-symbols-outlined">keyboard_arrow_up</button>
      </form>
    </>
  );
}
