const items = [
  {
    name: "Web Design",
    category: "Technology",
    description: "Creating websites using HTML and CSS."
  },
  {
    name: "JavaScript",
    category: "Technology",
    description: "Building interactive features for websites."
  },
  {
    name: "Boxing",
    category: "Sports",
    description: "Training in boxing and improving fitness."
  },
  {
    name: "MMA",
    category: "Sports",
    description: "Learning mixed martial arts techniques."
  },
  {
    name: "Photography",
    category: "Creative",
    description: "Taking and editing creative photos."
  },
  {
    name: "Graphic Design",
    category: "Creative",
    description: "Designing logos and digital artwork."
  }
];

function renderItems(list) {

  const container = document.getElementById("items-container");

  container.innerHTML = "";

  for (let i = 0; i < list.length; i++) {

    const card = document.createElement("div");
    card.className = "item-card";

    card.innerHTML =
      "<h3>" + list[i].name + "</h3>" +
      "<p>" + list[i].description + "</p>" +
      "<span class='item-tag'>" + list[i].category + "</span>";

    container.appendChild(card);
  }

  document.getElementById("result-count").textContent =
    list.length + " items shown";
}

function filterItems(category) {

  switch (category) {

    case "":
      renderItems(items);
      break;

    case "Technology":

      const filtered1 = [];

      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Technology") {
          filtered1.push(items[i]);
        }
      }

      renderItems(filtered1);
      break;

    case "Sports":

      const filtered2 = [];

      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Sports") {
          filtered2.push(items[i]);
        }
      }

      renderItems(filtered2);
      break;

    case "Creative":

      const filtered3 = [];

      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Creative") {
          filtered3.push(items[i]);
        }
      }

      renderItems(filtered3);
      break;

    default:
      renderItems(items);
      break;
  }
}

filterItems("");
