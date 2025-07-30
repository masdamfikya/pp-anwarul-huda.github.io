// ===== MAIN INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
  initAccordion();
  initSlideshow();
  initSidebar();
});

// ===== ACCORDION =====
function initAccordion() {
  document.querySelectorAll(".accordion").forEach(btn => {
    btn.addEventListener("click", function() {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
  });
}

// ===== SLIDESHOW =====
function initSlideshow() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  if (slides.length === 0) return;

  let currentSlide = 0;
  const totalSlides = slides.length;
  let slideInterval;

  function showSlide(n) {
    // Sembunyikan semua slide
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Update current slide
    currentSlide = (n + totalSlides) % totalSlides;
    
    // Tampilkan slide baru
    slides[currentSlide].classList.add('active');
    
    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function startSlideshow() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function pauseSlideshow() {
    clearInterval(slideInterval);
  }

  // Navigation handlers
  document.querySelector('.prev-slide')?.addEventListener('click', () => {
    pauseSlideshow();
    showSlide(currentSlide - 1);
    startSlideshow();
  });

  document.querySelector('.next-slide')?.addEventListener('click', () => {
    pauseSlideshow();
    nextSlide();
    startSlideshow();
  });

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      pauseSlideshow();
      showSlide(index);
      startSlideshow();
    });
  });

  // Pause on hover
  const slideshow = document.querySelector('.slideshow-container');
  slideshow?.addEventListener('mouseenter', pauseSlideshow);
  slideshow?.addEventListener('mouseleave', startSlideshow);

  // Initialize
  showSlide(0);
  startSlideshow();
}

// ===== SIDEBAR =====
function initSidebar() {
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.querySelector('.hamburger');
  const closeBtn = document.querySelector('.sidebar .closebtn');

  if (!sidebar || !hamburger) return;

  function toggleSidebar() {
    sidebar.classList.toggle('open');
    if (sidebar.classList.contains('open')) {
      document.addEventListener('click', closeSidebarOutside);
    } else {
      document.removeEventListener('click', closeSidebarOutside);
    }
  }

  function closeSidebarOutside(event) {
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
      sidebar.classList.remove('open');
      document.removeEventListener('click', closeSidebarOutside);
    }
  }

  // Event Listeners
  hamburger.addEventListener('click', toggleSidebar);
  if (closeBtn) closeBtn.addEventListener('click', toggleSidebar);

  // Close when clicking on links
  document.querySelectorAll('.sidebar a').forEach(link => {
    if (!link.parentElement.classList.contains('dropdown-sidebar') && 
        !link.classList.contains('dropdown-sidebar')) {
      link.addEventListener('click', toggleSidebar);
    }
  });
}
