const revealElements = document.querySelectorAll(".reveal");
const skillBars = document.querySelectorAll(".bar > div");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("show");

      if (entry.target.classList.contains("card")) {
        skillBars.forEach((bar) => {
          if (bar.style.width) return;
          bar.style.width = bar.dataset.width || "0%";
        });
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((element) => observer.observe(element));
