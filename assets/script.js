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
