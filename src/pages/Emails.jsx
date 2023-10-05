import { useEffect, useState } from "react";

const Messages = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    fetch("https://deno-mailer.deno.dev/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: "",
      }),
    })
      .then((res) => res.json())
      .then((messages) => {
        setEmails(messages);
      });
  }, []);

  // TODO: Setup a simple authentication system
  // If fetching the emails fails, show a login form
  // If fetching the emails succeeds, show the emails

  return (
    <>
      <h1>Messages</h1>
      <pre style={{ fontSize: "20px", marginTop: "50px" }}>
        {JSON.stringify(emails, null, 3)}
      </pre>
    </>
  );
};

export default Messages;
