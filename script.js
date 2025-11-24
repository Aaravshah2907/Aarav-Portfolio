function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Close menu when clicking a link
document.querySelectorAll('.menu-links a').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.remove("open");
    icon.classList.remove("open");
  });
});

// Scroll Effect for Header
window.addEventListener('scroll', () => {
  const nav = document.querySelector('#desktop-nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Add fade-in animation to elements on scroll
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.project-card, .skill-category, .stat-card, .contact-item, .research-card, .timeline-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(el);
});

// Theme Toggle Logic
function toggleTheme(e) {
  if (e) e.preventDefault(); // Prevent default anchor behavior
  const body = document.body;
  const themeIcon = document.getElementById("theme-icon");

  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    themeIcon.src = "assets/moon.svg";
    localStorage.setItem("theme", "light");
  } else {
    themeIcon.src = "assets/sun.svg";
    localStorage.setItem("theme", "dark");
  }
}

// Initialize Theme and Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    const icon = document.getElementById("theme-icon");
    if (icon) icon.src = "assets/moon.svg";
  }

  // Attach Event Listeners
  const desktopBtn = document.getElementById('theme-toggle-btn');
  const mobileBtn = document.getElementById('mobile-theme-toggle');

  if (desktopBtn) desktopBtn.addEventListener('click', toggleTheme);
  if (mobileBtn) mobileBtn.addEventListener('click', toggleTheme);
});

// Toggle Courses Show More/Less
function toggleCourses(button) {
  const categoryGroup = button.parentElement;
  const hiddenCourses = categoryGroup.querySelectorAll('.hidden-course');
  const isShowing = button.textContent === 'Show Less';

  hiddenCourses.forEach(course => {
    if (isShowing) {
      course.classList.remove('show');
    } else {
      course.classList.add('show');
    }
  });

  button.textContent = isShowing ? 'Show More' : 'Show Less';
}