(() => {
  document.documentElement.classList.add("js");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const header = document.querySelector("[data-header]");
  const visual = document.querySelector("[data-system-visual]");
  const revealItems = [...document.querySelectorAll(".reveal")];
  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  const articles = [...document.querySelectorAll("[data-article]")];
  const topicLinks = [...document.querySelectorAll("[data-topic-jump]")];
  const filterCount = document.querySelector("[data-filter-count]");
  const filterStatus = document.querySelector("[data-filter-status]");

  const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));
  }

  const setFilter = (filter) => {
    let visibleCount = 0;

    articles.forEach((article) => {
      const categories = article.dataset.categories?.split(" ") ?? [];
      const isVisible = filter === "all" || categories.includes(filter);
      article.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    filterButtons.forEach((button) => {
      const isActive = button.dataset.filter === filter;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    const label = visibleCount === 1 ? "note" : "notes";
    if (filterCount) filterCount.textContent = `${String(visibleCount).padStart(2, "0")} ${label}`;
    if (filterStatus) filterStatus.textContent = `Showing ${visibleCount} ${label}`;
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => setFilter(button.dataset.filter || "all"));
  });

  topicLinks.forEach((link) => {
    link.addEventListener("click", () => setFilter(link.dataset.topicJump || "all"));
  });

  if (visual && !reduceMotion) {
    visual.addEventListener("pointermove", (event) => {
      const bounds = visual.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      visual.style.setProperty("--tilt-x", `${(0.5 - y) * 3.5}deg`);
      visual.style.setProperty("--tilt-y", `${(x - 0.5) * 4.5}deg`);
      visual.style.setProperty("--glow-x", `${x * 100}%`);
      visual.style.setProperty("--glow-y", `${y * 100}%`);
    });

    visual.addEventListener("pointerleave", () => {
      visual.style.setProperty("--tilt-x", "0deg");
      visual.style.setProperty("--tilt-y", "0deg");
      visual.style.setProperty("--glow-x", "72%");
      visual.style.setProperty("--glow-y", "18%");
    });
  }

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
