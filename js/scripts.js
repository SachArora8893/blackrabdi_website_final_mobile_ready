
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img");
  const options = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, options);

  images.forEach(img => {
    observer.observe(img);
  });
});
