// Each app has an icon name and a color
const apps = [
  {
    title: "Nuclear Band of Stability",
    description: "Plot nuclides and explore their stability and choice of emission",
    url: "https://radioactive.learnwithcole.com/",
    icon: "radiation",
    color: "#0d6efd"
  },
  {
    title: "Chemical Kinetics",
    description: "Explore Rates of Reaction, Boltzmann Distribution and Half-life",
    url: "https://rates.learnwithcole.com/",
    icon: "flask-conical",
    color: "#e83e8c"
  },
  {
    title: "Thermometric Titration",
    description: "Plot graph with Temperature data to explore endpoint of acid-base reactions",
    url: "https://thermometric.learnwithcole.com/",
    icon: "pipette",
    color: "#0d6efd"
  },
  {
    title: "Titration Curves",
    description: "Explore types of titration curve with interactive simulator",
    url: "https://tcurves.learnwithcole.com/",
    icon: "flask-round",
    color: "#05cdfe"
  },
  {
    title: "Chemical Equilibria",
    description: "Explore the concepts of Chemical Equilibria",
    url: "https://chemical-equilibria.learnwithcole.com/",
    icon: "wand-sparkles",
    color: "#06cdaf"
  },
  // {
  //   title: "SCQ Visual Capture",
  //   description: "Captures visuals from TVJ matches",
  //   url: "https://scqviscap.learnwithcole.com/",
  //   icon: "video",
  //   color: "#06cdaf"
  // },
  // {
  //   title: "Radioactivity Simulator",
  //   description: "Explore Band of Stability with Simulation",
  //   url: "https://radioactive.learnwithcole.com/",
  //   icon: "radiation",
  //   color: "#e83e8c"
  // },
  // {
  //   title: "Quiz Zip Merger",
  //   description: "Combine multiple zip folders into one from screenshot workflow",
  //   url: "https://scqvismerge.learnwithcole.com/",
  //   icon: "video",
  //   color: "#0d6efd"
  // },
  // {
  //   title: "Scorer and Timer",
  //   description: "Explore Ideas and topics with Crossword",
  //   url: "https://scqtimer.learnwithcole.com/",
  //   icon: "gamepad-2",
  //   color: "#0d6efd"
  // },
  // {
  //   title: "SCQ Viewer",
  //   description: "Manipulate all dimensions of quiz resources",
  //   url: "https://iviewer.learnwithcole.com/",
  //   icon: "gamepad-2",
  //   color: "#0d6efd"
  // },
  // {
  //   title: "SCQ Video Center",
  //   description: "Creates Images, Audio and Text data",
  //   url: "https://iscribe.learnwithcole.com",
  //   icon: "video",
  //   color: "05cdfe"
  // },
  // {
  //   title: "SCQ Visual Center",
  //   description: "Displays Images from TVJ's School's Challenge Quiz",
  //   url: "https://visuals.learnwithcole.com",
  //   icon: "gamepad-2",
  //   color: "05cdfe"
  // },
  //  {
  //   title: "SCQ Buzzers",
  //   description: "Displays buzzers from TVJ's School's Challenge Quiz",
  //   url: "https://buzzers.learnwithcole.com",
  //   icon: "gamepad-2",
  //   color: "#0d6efd"
  // }
];

const gallery = document.getElementById("gallery");

apps.forEach(app => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="icon" style="background:${app.color}">
      <i data-lucide="${app.icon}"></i>
    </div>
    <h2>${app.title}</h2>
    <p>${app.description}</p>
    <a href="${app.url}" target="_blank" class="launch-btn">Launch</a>
  `;
  gallery.appendChild(card);
});

// Initialize Lucide icons
lucide.createIcons();
