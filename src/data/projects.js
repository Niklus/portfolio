export const projects = [
  {
    title: "FupiLink",
    description:
      "FupiLink is a URL shortener that allows you to shorten your links and track them. It's a full stack app that includes authentication a dashboard to manage your links and analytics.",
    image: "/assets/png/fupilink.png",
    tags: ["KOA", "Node", "Deno", "Chart.js", "CSS", "HTML", "ES6+"],
    source: "https://github.com/Niklus/fupi.link",
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
    source: "https://github.com/Niklus/ContactKeep",
    visit: "https://contactkeep.cyclic.app",
    id: 1,
    details:
      "ContactKeep is a contacts manager app that uses AWS DynamoDB to store the contacts. It includes authentication and a dashboard to manage your contacts. The backend runs on Node and Express and the frontend uses ejs templating. It also used AWS bucket to store the profile images. Users can add contacts, delete contacts, edit contacts and search for contacts.",
  },
  {
    title: "CanvaSplash",
    description:
      "This is simple integration between Snipcart and Printful API. Snipcart for the cart and Printful for the printing and shipping.",
    id: 2,
    image: "/assets/png/canvasplash.png",
    tags: [
      "KOA",
      "NODE",
      "DENO",
      "Snipcart",
      "Printful",
      "CSS",
      "HTML",
      "ES6+",
    ],
    source: "https://github.com/Niklus/snipcart-printful-app",
    visit: "https://canvasplash.deno.dev",
    details:
      "CanvaSplash is a demo ecommerce store that sells prints of images on poster flags. It uses snipcart to handle the ecommerce on the frontend and Printful to handle the printing and shipping. The products are fetched from your printful account and displayed on the site. When a customer places an order, the order is sent to Printful and the order is fulfilled. The backend is runs on Deno but uses both deno and node modules.",
  },
  {
    title: "Space Browser",
    description:
      "Space Browser is a progressive web app that allows you to browse the NASA image library, With the ability to manage your favorites.",
    image: "/assets/png/spacebrowser.png",
    tags: [
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
    source: "https://github.com/Niklus/space-browser",
    visit: "https://space-browser.netlify.app/",
    id: 3,
    details:
      "Space Browser is a progressive web app (best used with smartphones) that allows you to browse the NASA image library, With the ability to manage your favorites. The favorites are stored in the browser using IndexedDb. LocalStorage is used as a 'cache' to avoid too much requests. It uses Hyperapp for the frontend and (Express and SQLite) for the backend.",
  },
];
