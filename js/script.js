const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  menuBtn.addEventListener("click", () => {
    sidebar.classList.remove("-translate-x-full");
    overlay.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
  });
//   ---------------
var myHeroSwiper = new Swiper(".myHeroSwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: "fade",
  speed: 1200,

  on: {
    slideChangeTransitionStart: function () {
      document.querySelectorAll(".animate-fadeUp").forEach(el => {
        el.style.animation = "none";
        el.offsetHeight; 
        el.style.animation = null;
      });
    },

    slideChangeTransitionEnd: function () {
      const activeSlide = document.querySelector(".swiper-slide-active");
      const content = activeSlide.querySelector(".animate-fadeUp");
      if (content) {
        content.style.animation = "fadeUp 1s ease forwards";
      }
    }
  }
});

// ---------
const header = document.getElementById("mainHeader");

function handleHeader() {

  if (window.innerWidth >= 768) {
    // Desktop behavior
    if (window.scrollY > 100) {
      header.classList.add("bg-white", "Sticky_header");
    } else {
      header.classList.remove("bg-white", "Sticky_header");
    }
  } else {
    // Mobile behavior (always sticky)
    header.classList.add("bg-white", "Sticky_header");
  }

}

// Run on scroll
window.addEventListener("scroll", handleHeader);

// Run on resize
window.addEventListener("resize", handleHeader);

// Run once on load
handleHeader();
// -----------
 var slider = new Swiper(".slider2", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    effect: "slide",
  });

//   -----------
var BestsellerSwiper = new Swiper(".BestsellerSwiper", {
  loop: true,
  spaceBetween: 30,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
  breakpoints: {
    0: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 4 }
  }
});
var BestsellerSwipermen = new Swiper(".BestsellerSwipermen", {
  loop: true,
  spaceBetween: 30,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
  breakpoints: {
    0: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 4 }
  }
});
// ---------
 var testimonialSwiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      }
    }
  });

//   -------------
var myReelSwiper = new Swiper(".myReelSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: { slidesPerView: 3 },
      1024: { slidesPerView: 5 }
    }
  });
