tailwind.config = {
  theme: {
    extend: {
      colors: {
        "brand-bg": "#212121",
        "brand-primary": " #ffea28",
        "brand-text": "#ffffff",
        "brand-text-secondary": "#acacac",
      },
    },
  },
};

AOS.init({
  once: true,
});

const toggleButtons = document.querySelectorAll("[data-collapse-toggle]");

for (const button of toggleButtons) {
  const handleCollapse = (button) => {
    document
      .getElementById(button.currentTarget.dataset.collapseToggle)
      .classList.toggle("hidden");
  };
  button.addEventListener("click", handleCollapse);
}

// Animate player pictures
// Find the item we want to animate on scroll
var talents = document.querySelectorAll(".talent-item");
var targetActiveClass = "is-active";

// Call this function when it enters/leaves the viewport
var callback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(targetActiveClass);
    } else {
      entry.target.classList.remove(targetActiveClass);
    }
  });
};

var observer = new IntersectionObserver(callback, {
  threshold: 0,
  rootMargin: "-120px",
});

for (const talent of talents) {
  observer.observe(talent);
}
