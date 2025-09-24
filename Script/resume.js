// Define a Resume Entry class
class ResumeEntry {
  constructor({ role, company, duration, details }) {
    this.role = role;
    this.company = company;
    this.duration = duration;
    this.details = details; // array of strings
  }
}

// Your Resume Data
const resumeEntries = [
  new ResumeEntry({
    role: "Lead Game Engineer",
    company: "Techstract",
    duration: "June 2023 - Present",
    details: [
      "Led cross-functional teams to launch 5+ titles on Steam, iOS, and Android.",
      "Collaborated on a large-scale project using Git for smooth teamwork with devs and artists.",
      "Optimized game size with dynamic streaming, cutting install size by 25% and load times by 30%.",
      "Managed post-launch updates and live events, increasing player engagement by 15%.",
      "Built scalable, low-latency multiplayer systems with Photon, Nakama, and Node.js tailored to project needs."
    ]
  }),
  new ResumeEntry({
    role: "Game Engineer",
    company: "Tiny Kraken",
    duration: "April 2020 - May 2023",
    details: [
      "Partnered with top publishers like Homa and Super Sonic.",
      "Designed scalable architectures using SOLID principles and ScriptableObjects.",
      "Contributed to hit mobile games with 100K+ downloads."
    ]
  }),
  new ResumeEntry({
    role: "Game Engineer",
    company: "Film Factory",
    duration: "July 2016 - December 2017",
    details: [
      "Developed hit parking and stunt games with smooth controls, boosting user retention by 18%.",
      "Improved performance by optimizing draw calls, batching, and LODs, boosting frame rates by 20%.",
      "Improved loading times using asset bundling and async scene management."
    ]
  })
];

// Function to render Resume Cards
function renderResume() {
  const resumeContainer = document.querySelector(".resume_cards");
  resumeContainer.innerHTML = ""; // Clear old content

  resumeEntries.forEach((entry, index) => {
    // Outer card
    const card = document.createElement("div");
    card.className = "resume_card";

    // Left section
    const left = document.createElement("div");
    left.className = "left";

    const circle = document.createElement("div");
    circle.className = "circle";
    circle.innerHTML = "<div></div>"; // inner dot

    left.appendChild(circle);

    // Only add line if it's NOT the last card
    if (index !== resumeEntries.length - 1) {
      const line = document.createElement("div");
      line.className = "line";
      left.appendChild(line);
    }

    // Right section
    const right = document.createElement("div");
    right.className = "right";

    const heading = document.createElement("div");
    heading.className = "heading";
    heading.innerHTML = `<h1>${entry.role}</h1><p>| ${entry.company}</p>`;

    const duration = document.createElement("p");
    duration.innerText = entry.duration;

    const textbox = document.createElement("div");
    textbox.className = "textbox";

    entry.details.forEach(detail => {
      const textDiv = document.createElement("div");
      textDiv.className = "text";
      textDiv.innerHTML = `<p>${detail}</p>`;
      textbox.appendChild(textDiv);
    });

    right.appendChild(heading);
    right.appendChild(duration);
    right.appendChild(textbox);

    // Assemble card
    card.appendChild(left);
    card.appendChild(right);

    // Append to container
    resumeContainer.appendChild(card);
  });
}

// Call it once to load resume
renderResume();
