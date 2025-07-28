// Accordion
document.querySelectorAll(".accordion").forEach(btn => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});

// Slideshow untuk testimoni
let testiIndex = 0;
showTesti();

function showTesti() {
  const slides = document.querySelectorAll(".testi");
  slides.forEach(s => s.style.display = "none");
  testiIndex++;
  if (testiIndex > slides.length) testiIndex = 1;
  slides[testiIndex - 1].style.display = "block";
  setTimeout(showTesti, 4000);
}

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const totalSlides = slides.length;
    let slideInterval;

    function showSlide(n) {
      slides.forEach(slide => slide.classList.remove('active'));
      currentSlide = (n + totalSlides) % totalSlides;
      slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
      showSlide(currentSlide + 1);
    }

    // Navigasi manual
    document.querySelector('.prev-slide').addEventListener('click', () => {
      pauseSlideshow();
      showSlide(currentSlide - 1);
    });
    
    document.querySelector('.next-slide').addEventListener('click', () => {
      pauseSlideshow();
      nextSlide();
    });

    // Auto-slide
    function startSlideshow() {
      slideInterval = setInterval(nextSlide, 5000);
    }

    function pauseSlideshow() {
      clearInterval(slideInterval);
    }

    // Mulai slideshow
    showSlide(0);
    startSlideshow();

    // Jeda saat hover
    const slideshow = document.querySelector('.slideshow-container');
    slideshow.addEventListener('mouseenter', pauseSlideshow);
    slideshow.addEventListener('mouseleave', startSlideshow);
  });

  // Mobile Sidebar
  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
  }

  // Tambahkan di dalam fungsi showSlide()
  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlide].classList.add('active');
</script>
