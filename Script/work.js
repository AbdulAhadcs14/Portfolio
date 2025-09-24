


const FILTERS = [
  "All",   // 0
  "Top Rated",   // 0
  "2D",          // 1
  "3D",          // 2
  "Game Programming" // 3
];

class Work {
  constructor({
    id,
    name,
    shortDescription,
    longDescription,
    uniqueSellingPoint,
    link,
    downloads,
    rating,
    filterIndexes, // <-- renamed from 'filter'
    keyFeatures,
    technicalDetails,
    picture_filename
  }) {
    this.id = id;
    this.name = name;
    this.shortDescription = shortDescription;
    this.longDescription = longDescription;
    this.uniqueSellingPoint = uniqueSellingPoint;
    this.link = link;
    this.downloads = downloads;
    this.rating = rating;
    this.filter = filterIndexes.map(i => FILTERS[i]); // <-- Resolve filter names here
    this.keyFeatures = keyFeatures;
    this.technicalDetails = technicalDetails;
    this.picture_filename = picture_filename;
  }

  getRatingStars() {
    return this.rating + "★";
  }
}


const works = [

  new Work({
    id: 4,
    name: "Arcade Idle: Crop To Craft",
    shortDescription: "Build a relaxing farm empire with ASMR-inspired idle gameplay.",
    longDescription: "Become a farming tycoon by growing crops, raising animals, and crafting products. Expand your farm empire, unlock helpers to automate tasks, and relax with ASMR-inspired gameplay.",
    uniqueSellingPoint: "Relaxing ASMR sounds and helpers make farming addictive and easy to enjoy.",
    link: "https://play.google.com/store/apps/details?id=com.al.craftfactorytycoon",
    downloads: "1M+",
    rating: 4.1,
    filterIndexes: [1, 3],
    keyFeatures: [
      { title: "Farm Anytime", description: "Crops grow even while you’re offline." },
      { title: "Smart Helpers", description: "AI buddies harvest, craft, and sell for you." },
      { title: "Relaxing ASMR Vibes", description: "Soothing sounds and voices keep it calming." },
      { title: "Expand Your Empire", description: "Unlock new lands and factories." }
    ],
    technicalDetails: [
      { title: "Idle Economy System", description: "Supports offline progress and earnings." },
      { title: "Helper AI", description: "State machine-driven automation." },
      { title: "Monetization Setup", description: "Remote-configurable ads with Firebase + MAX." },
      { title: "Crafting System", description: "ScriptableObjects make adding recipes easy." }
    ],
    picture_filename: ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"]
  }),

  new Work({
    id: 5,
    name: "Idle Farm Factory",
    shortDescription: "Manage and upgrade your farm empire with idle factory systems.",
    longDescription: "Manage and upgrade your farm empire in this clicker idle game by crafting products, expanding land, and automating processes for continuous growth.",
    uniqueSellingPoint: "Factory machines automate production, while Firebase ads keep monetization balanced.",
    link: "https://play.google.com/store/apps/details?id=com.al.farmfactory",
    downloads: "1M+",
    rating: 4.1,
    filterIndexes: [1, 3],
    keyFeatures: [
      { title: "Clicker + Idle Gameplay", description: "Tap to manage, automate for passive earnings." },
      { title: "Strategic Growth", description: "Choose between machines or land upgrades." },
      { title: "Factory Flow", description: "Input → output machine cycles." },
      { title: "Offline Earnings", description: "Keep earning rewards while away." }
    ],
    technicalDetails: [
      { title: "Modular Factory System", description: "Scalable machine system with input-output flows." },
      { title: "Offline Progression", description: "Background timers for continuous earnings." },
      { title: "Firebase Ads Integration", description: "A/B test ads dynamically with MAX mediation." },
      { title: "Data & Analytics", description: "Firebase syncs player data and controls ads." }
    ],
    picture_filename: ["img1.jpg","img2.jpg","img3.jpg","img4.jpg"]
  }),

  new Work({
    id: 6,
    name: "Fit Blast",
    shortDescription: "Match colorful cubes with a fitness twist in this puzzle adventure.",
    longDescription: "Solve colorful match-3 puzzles with a fitness twist. Help Coach Tim transform clients, unlock new characters and gyms, and earn boosters along the way.",
    uniqueSellingPoint: "Candy Crush–style puzzle gameplay with a fun fitness transformation story.",
    link: "https://play.google.com/store/apps/details?id=com.Metaplay.FitBlast",
    downloads: "50K+",
    rating: 5.0,
    filterIndexes: [1, 2],
    keyFeatures: [
      { title: "Hundreds of Levels", description: "Challenging puzzles with variety." },
      { title: "Powerful Boosters", description: "Clear tough levels with unique boosters." },
      { title: "Transform Characters", description: "Unlock gyms, characters, and story rewards." },
      { title: "Visually Satisfying Puzzles", description: "Bright toon cubes and crisp visuals." }
    ],
    technicalDetails: [
      { title: "Puzzle Grid", description: "Match-3 mechanics with combo detection and boosters." },
      { title: "Fitness Meta-Layer", description: "Character transformations tied to level progress." },
      { title: "Reward Systems", description: "Boosters, coins, and cosmetics via events." },
      { title: "Social Features", description: "Events, tournaments, and global competition." }
    ],
    picture_filename: ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"]
  }),


  new Work({
    id: 2,
    name: "Cube Battleship",
    shortDescription: "Real-time PvP card battles with strategic building placement.",
    longDescription: "Engage in real-time PvP battles using a strategic deck of cards to place and upgrade buildings for attack and defense. Destroy the enemy’s hidden King and climb leaderboards.",
    uniqueSellingPoint: "Smooth multiplayer battles with deck-building and building placement strategy.",
    link: "https://play.google.com/store/apps/details?id=com.tinykrakengames.secret.wars&hl=en",
    downloads: "1K+",                // from Google Play :contentReference[oaicite:2]{index=2}
    rating: 5.0,                   // not clearly found
    filterIndexes: [3],
    keyFeatures: [
      { title: "Live PvP Battles", description: "Instant fights against real players." },
      { title: "Custom Decks", description: "Build and upgrade your unique card deck." },
      { title: "Dynamic Building Placement", description: "Drop and boost buildings mid-battle." },
      { title: "Reward System", description: "Unlock cards, coins, and power-ups through matches." },
      { title: "Tournaments & Rankings", description: "Compete globally for exclusive rewards." }
    ],
    technicalDetails: [
      { title: "Engine", description: "Unity with modular, scalable architecture." },
      { title: "Multiplayer", description: "Photon-powered, smooth real-time PvP." },
      { title: "Card-to-Building System", description: "Cards transform into upgradable buildings." },
      { title: "Reward & Ranking", description: "Engaging chest, tournament, and leaderboard systems." }
    ],
    picture_filename: ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"]
  }),

  new Work({
    id: 1,
    name: "Magnet Man",
    shortDescription: "Control a magnetic hero, pull objects, and cause massive explosions.",
    longDescription: "Take control of a magnetic hero, collect building pieces, dodge enemies, and unleash massive explosions to unlock gates and clear levels.",
    uniqueSellingPoint: "Control a hero with a magnet to pull, combine, and blow up 10,000+ cubes smoothly on PC and mobile.",
    link: "https://play.google.com/store/apps/details?id=com.tinykrakengames.magnet.man&hl=en",
    downloads: "500+",                // fetched from Google Play :contentReference[oaicite:0]{index=0}
    rating: 4.5,                      // from Google Play :contentReference[oaicite:1]{index=1}
    filterIndexes: [3, 4],
    keyFeatures: [
      { title: "Fresh Levels Every Time", description: "Dynamically generated levels for endless replayability." },
      { title: "Magnetic Pull", description: "Attract and combine objects in a visually unique way." },
      { title: "Epic Explosions", description: "Huge blasts with thousands of pieces flying smoothly." },
      { title: "Smash & Crash Physics", description: "Realistic destruction with Unity physics." }
    ],
    technicalDetails: [
      { title: "Engine & Tools", description: "Developed in Unity 2022.3.10, optimized for PC and mobile." },
      { title: "Procedural Level Design", description: "Data-driven system ensures progressive difficulty." },
      { title: "Magnet System", description: "DoTween animations with custom IAbsorb interface." },
      { title: "Explosion System", description: "Particle-based system supports 10,000+ cubes without lag." },
      { title: "Performance", description: "Runs at locked 60 FPS on both PC and mobile." }
    ],
    picture_filename: ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"]
  }),

  new Work({
    id: 3,
    name: "Windy Paratrooper",
    shortDescription: "Launch paratroopers with wind-affected catapult controls.",
    longDescription: "Adjust and aim the catapult to launch paratroopers onto islands. Conquer territory while accounting for wind direction and enemy AI resistance.",
    uniqueSellingPoint: "Dynamic wind physics and smart enemies make every drop unique.",
    link: "https://play.google.com/store/apps/details?id=com.tinykrakengames.windy.paratroppers&hl=en",
    downloads: "100+",           // no reliable data found
    rating: 4.5,                   // no reliable data found
    filterIndexes: [3, 4],
    keyFeatures: [
      { title: "Smooth Catapult Controls", description: "Easy swipe aiming for precision." },
      { title: "Windy Challenge", description: "Wind alters paratrooper flight paths." },
      { title: "Versatile Combat", description: "Engage in close or long-range fights." },
      { title: "Reward Choices", description: "Pick boosts after each victory." }
    ],
    technicalDetails: [
      { title: "Catapult Controls", description: "Implemented with LeanTouch for fluid aiming." },
      { title: "Wind System", description: "Physics-driven wind forces for fairness and challenge." },
      { title: "Enemy AI", description: "Decision Tree system for dynamic behaviors." },
      { title: "Pathfinding", description: "NavMesh generated per level for adaptive movement." }
    ],
    picture_filename: ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"]
  })
];







let produucts_container = document.getElementById("products_container");
let details_section = document.getElementById("details_section");
let details_panel = document.getElementById("details_panel");
let details_heading = document.getElementById("details_heading");
let details_link = document.getElementById("details_link");
let details_description = document.getElementById("details_description");
let details_downloads = document.getElementById("details_downloads");
let details_ratings = document.getElementById("details_ratings");
let details_usp = document.getElementById("details_usp");
let details_filters = document.getElementById("details_filters");
let details_keyfeatures = document.getElementById("details_keyfeatures");
let details_technicaldetails = document.getElementById("details_technicaldetails");


details_section.addEventListener("click", function(e) {
  if (e.target === details_section && !isDraggingDetails && !justDraggedDetails) {
    details_section.style.display = "none";
  }
});


function showDetails(id) {
  details_section.style.display = "flex";
  const work = works.find(w => w.id === id);

  if (work) {
    details_heading.innerText = work.name;
    details_description.innerText = work.longDescription;
    details_downloads.innerText = work.downloads;
    details_ratings.innerText = work.getRatingStars();
    details_usp.innerText = work.uniqueSellingPoint;

    // ✅ Link setup
    details_link.onclick = () => openLink(work.link);

    // Filters
    details_filters.innerHTML = '';
    work.filter.forEach(f => {
      const filterDiv = document.createElement('div');
      filterDiv.className = 'filter';
      filterDiv.innerText = f;
      details_filters.appendChild(filterDiv);
    });
    
    details_panel.scrollTop = 0;


    // Key Features
    details_keyfeatures.innerHTML = '';
    work.keyFeatures.forEach(feature => {
      const div = document.createElement('div');
      div.className = 'section_text';
      const p = document.createElement('p');
      p.innerHTML = `<b>${feature.title}</b> - ${feature.description}`;
      div.appendChild(p);
      details_keyfeatures.appendChild(div);
    });

    // Technical Details
    details_technicaldetails.innerHTML = '';
    work.technicalDetails.forEach(detail => {
      const div = document.createElement('div');
      div.className = 'section_text';
      const p = document.createElement('p');
      p.innerHTML = `<b>${detail.title}</b> - ${detail.description}`;
      div.appendChild(p);
      details_technicaldetails.appendChild(div);
    });

    // 🔥 Insert Images
    details_images.innerHTML = ''; // Clear old images
    if (work.picture_filename?.length) {
      work.picture_filename.forEach(filename => {
        const imgDiv = document.createElement('div');
        imgDiv.className = 'image';
        imgDiv.style.backgroundImage = `url(Images/products/${work.id}/${filename})`;
        details_images.appendChild(imgDiv);
      });
    }
    // Reset drag position for new images
    translateXDetails = 0;
    currentXDetails = 0;
    details_images.style.transform = 'translateX(0px)';
  }
}


let details_images_container = document.getElementById('details_images_container');
let details_images = document.getElementById('details_images');

let isDraggingDetails = false;
let startXDetails = 0;
let startYDetails = 0;
let currentXDetails = 0;
let translateXDetails = 0;
let sensitivityDetails = 1.5;
let isHorizontalDragDetails = false;
let justDraggedDetails = false;


// ---- Drag Start ----
function dragStartDetails(x, y) {
  isDraggingDetails = true;
  isHorizontalDragDetails = false;
  startXDetails = x;
  startYDetails = y;
  details_images.style.cursor = 'grabbing';
  document.body.classList.add('no-select');
}

// ---- Drag Move ----
function dragMoveDetails(x, y) {
  if (!isDraggingDetails) return;

  const deltaX = x - startXDetails;
  const deltaY = y - startYDetails;

  // Decide drag direction only once (after threshold)
  if (!isHorizontalDragDetails && Math.abs(deltaX) > 10) {
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      isHorizontalDragDetails = true;
    } else {
      // Vertical scroll — abort drag handling
      dragEndDetails();
      return;
    }
  }

  if (!isHorizontalDragDetails) return;

  currentXDetails = translateXDetails + deltaX * sensitivityDetails;

  const containerRectDetails = details_images_container.getBoundingClientRect();
  const maxTranslateXDetails = 0;
  const minTranslateXDetails = containerRectDetails.width - details_images.scrollWidth;

  // Clamp
  currentXDetails = Math.max(Math.min(currentXDetails, maxTranslateXDetails), minTranslateXDetails);

  details_images.style.transform = `translateX(${currentXDetails}px)`;
}

// ---- Drag End ----
function dragEndDetails() {
  if (!isDraggingDetails) return;
  isDraggingDetails = false;
  justDraggedDetails = true;
  setTimeout(() => justDraggedDetails = false, 50); // short cooldown
  translateXDetails = currentXDetails;
  details_images.style.cursor = 'grab';
  document.body.classList.remove('no-select');
}


// ---- Mouse Events ----
details_images.addEventListener('mousedown', e => dragStartDetails(e.clientX, e.clientY));
window.addEventListener('mousemove', e => dragMoveDetails(e.clientX, e.clientY));
window.addEventListener('mouseup', dragEndDetails);

// ---- Touch Events ----
details_images.addEventListener('touchstart', e => {
  const touch = e.touches[0];
  dragStartDetails(touch.clientX, touch.clientY);
}, { passive: true });

window.addEventListener('touchmove', e => {
  const touch = e.touches[0];
  dragMoveDetails(touch.clientX, touch.clientY);
  // Only prevent default if it's a horizontal drag
  if (isDraggingDetails && isHorizontalDragDetails) {
    e.preventDefault(); // Prevent vertical scroll
  }
}, { passive: false });

window.addEventListener('touchend', dragEndDetails);

// ---- Initial Cursor Style ----
details_images.style.cursor = 'grab';

// ---- Utility function to open link in new tab ----
function openLink(url) {
  if (url && typeof url === "string") {
    window.open(url, "_blank");
  }
}

function renderProducts(filterIndex = null) {
  produucts_container.innerHTML = ''; // Clear existing content

  const filteredWorks = filterIndex === 0
    ? works
    : works.filter(work => work.filter.includes(FILTERS[filterIndex]));

  filteredWorks.forEach(work => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    const productInner = document.createElement('div');
    productInner.className = 'product_inner';

    // Image
    const imgDiv = document.createElement('div');
    imgDiv.className = 'img';
    if (work.picture_filename?.length) {
      imgDiv.style.backgroundImage = `url(Images/products/${work.id}/${work.picture_filename[0]})`;
    }

    // Content
    const contentDiv = document.createElement('div');
    contentDiv.className = 'content';

    // Upper (Filters + Link Icon)
    const upperDiv = document.createElement('div');
    upperDiv.className = 'upper';

    const filtersDiv = document.createElement('div');
    filtersDiv.className = 'filters';
    work.filter.forEach(f => {
      const filter = document.createElement('div');
      filter.className = 'filter';
      filter.innerText = f;
      filtersDiv.appendChild(filter);
    });

    const linkDiv = document.createElement('div');
    linkDiv.className = 'link';
    const iconDiv = document.createElement('div');
    iconDiv.className = 'icon';
    iconDiv.style.maskImage = 'url(Images/Link.png)';
    iconDiv.style.webkitMaskImage = 'url(Images/Link.png)';
    linkDiv.appendChild(iconDiv);

    // ---- Make link icon clickable ----
    linkDiv.onclick = () => openLink(work.link);

    upperDiv.appendChild(filtersDiv);
    upperDiv.appendChild(linkDiv);

    // Middle (Name, Description, Button)
    const middleDiv = document.createElement('div');
    middleDiv.className = 'middle';

    const h1 = document.createElement('h1');
    h1.innerText = work.name;

    const p = document.createElement('p');
    p.innerText = work.shortDescription;

    const button = document.createElement('button');
    button.innerText = 'See Details';
    button.onclick = () => showDetails(work.id);

    middleDiv.appendChild(h1);
    middleDiv.appendChild(p);
    middleDiv.appendChild(button);

    // Lower (Downloads & Rating)
    const lowerDiv = document.createElement('div');
    lowerDiv.className = 'lower';

    const metricsDiv = document.createElement('div');
    metricsDiv.className = 'metrics';

    const downloadMetric = document.createElement('div');
    downloadMetric.className = 'metric';
    const downloadIcon = document.createElement('div');
    downloadIcon.className = 'icon';
    downloadIcon.style.maskImage = 'url(Images/Download.png)';
    downloadIcon.style.webkitMaskImage = 'url(Images/Download.png)';
    const downloadText = document.createElement('div');
    downloadText.className = 'text';
    downloadText.innerText = work.downloads;
    downloadMetric.appendChild(downloadIcon);
    downloadMetric.appendChild(downloadText);

    const ratingMetric = document.createElement('div');
    ratingMetric.className = 'metric';
    const ratingText = document.createElement('div');
    ratingText.className = 'text';
    ratingText.innerText = work.getRatingStars();
    ratingMetric.appendChild(ratingText);

    metricsDiv.appendChild(downloadMetric);
    metricsDiv.appendChild(ratingMetric);
    lowerDiv.appendChild(metricsDiv);

    // Final assembly
    contentDiv.appendChild(upperDiv);
    contentDiv.appendChild(middleDiv);
    contentDiv.appendChild(lowerDiv);

    productInner.appendChild(imgDiv);
    productInner.appendChild(contentDiv);
    productDiv.appendChild(productInner);
    produucts_container.appendChild(productDiv);
  });
}

let filters_container = document.getElementById("filters_container");

function renderFilters() {
  filters_container.innerHTML = ''; // Clear existing

  FILTERS.forEach((filter, index) => {
    const filterDiv = document.createElement('div');
    filterDiv.className = 'filter';
    filterDiv.innerText = filter;

    // Default: first filter is active
    if (index === 0) {
      filterDiv.classList.add('filter_active');
    }

    // Add click handler
    filterDiv.onclick = () => {
      // Remove active class from all filters
      document.querySelectorAll('#filters_container .filter').forEach(f => f.classList.remove('filter_active'));

      // Add active class to clicked filter
      filterDiv.classList.add('filter_active');

      // Show relevant products
      renderProducts(index);
    };

    filters_container.appendChild(filterDiv);
  });
}

// Initialize filters
renderFilters();

// Initially render Top Rated products
renderProducts(0);