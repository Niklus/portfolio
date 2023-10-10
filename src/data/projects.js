export const projects = [
  {
    title: "FupiLink",
    description:
      "FupiLink is a URL shortener that allows you to shorten your links and track them. It's a full stack app that includes authentication a dashboard to manage your links and analytics.",
    image: "/assets/png/fupilink.png",
    tags: ["KOA", "Node", "Deno", "Chart.js", "CSS", "HTML", "ES6+"],
    source: "https://github.com/niklus",
    visit: "https://fupilink.deno.dev",
    id: 0,
    details:
      "FupiLink is a URL shortener with a public facing page where anonymous users can shorten their links and a dashboard where registered users can manage their links and view analytics. The analytics are displayed using Chart.js. The backend is runs on Deno but uses both deno and node modules such as koa etc.",
  },
  {
    title: "ContactKeep",
    description:
      "ContactKeep is a full stack app that allows you to keep track of your contacts. It includes authentication and a dashboard to manage your contacts.",
    image: "/assets/png/contactkeep.png",
    tags: ["Express", "Node", "DynamoDB", "AWS", "CSS", "HTML", "ES6+"],
    source: "https://github.com/niklus",
    visit: "https://contactkeep.cyclic.app",
    id: 1,
    details:
      "ContactKeep is a contacts manager app that uses AWS DynamoDB to store the contacts. It includes authentication and a dashboard to manage your contacts. The backend runs on Node and Express and the frontend uses ejs templating. It also used AWS bucket to store the profile images. Users can add contacts, delete contacts, edit contacts and search for contacts.",
  },
  {
    title: "Space Browser",
    description:
      "Space Browser is a progressive web app that allows you to browse the NASA image library, With the ability to manage your favorites.",
    image: "/assets/png/spacebrowser.png",
    tags: [
      "React",
      "Hyperapp",
      "Express",
      "SQLite",
      "CSS",
      "HTML",
      "ES6+",
      "PWA",
      "IndexedDb",
      "localStorage",
    ],
    source: "/",
    visit: "https://space-browser.netlify.app/",
    id: 2,
    details:
      "Space Browser is a progressive web app (best used with smartphones) that allows you to browse the NASA image library, With the ability to manage your favorites. The favorites are stored in the browser using IndexedDb. LocalStorage is used as a 'cache' to avoid too much requests. It uses Hyperapp for the frontend and (Express and SQLite) for the backend.",
  },
];
