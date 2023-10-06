import { useEffect, useState } from "react";

const Messages = () => {
  const [emails, setEmails] = useState([]);
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      return JSON.parse(savedUser);
    }
    return {};
  });

  const url = "https://deno-mailer.deno.dev";

  useEffect(() => {
    window.scrollTo(0, 0);
    getMessages(user.token ?? null);
  }, [user]);

  const getMessages = async (token) => {
    if (!token) return;
    const response = await fetch(url + "/messages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const messages = await response.json();
    setEmails(messages);
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(url + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
        }),
      });

      if (!response.ok) throw new Error("Login failed");

      const user = await response.json();
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      setPassword("");
    } catch (error) {
      console.error(error);
      setPassword("");
      alert("Login failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser({});
  };

  if (!user?.token) {
    return (
      <>
        <br />
        <form
          onSubmit={login}
          style={{
            marginTop: "150px",
            marginLeft: "20%",
          }}
        >
          <label style={{ fontSize: "20px" }}>Password</label>
          <br />
          <input
            style={{
              width: "300px",
              height: "30px",
              fontSize: "20px",
              marginBottom: "20px",
            }}
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button style={{ fontSize: "20px", padding: "5px" }}>Login</button>
        </form>
      </>
    );
  }

  return (
    <>
      <br />
      <div style={{ marginTop: "100px", paddingLeft: "50px" }}>
        <h1>Messages</h1>
        <button style={{ fontSize: "20px", padding: "5px" }} onClick={logout}>
          Logout
        </button>
        <pre style={{ fontSize: "20px" }}>
          {JSON.stringify(emails, null, 6)}
        </pre>
      </div>
    </>
  );
};

export default Messages;
