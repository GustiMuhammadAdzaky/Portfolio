let hamburgerMenu = document.getElementById("hamburger-menu");
let navbarNav = document.querySelector(".navbar-nav");

hamburgerMenu.addEventListener("click", function (e) {
  navbarNav.classList.toggle("active");
  e.preventDefault(); // Menahan perilaku default dari tautan
});

// jika menekan yang bukan dari sidebar, maka tombol active akan hilang
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// scroll effect
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    // Ubah angka 10 menjadi 10px atau jarak scroll yang Anda inginkan
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// filter content
document.addEventListener("DOMContentLoaded", function (e) {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = button.dataset.filter;
      // Hide all items
      items.forEach((item) => {
        item.style.display = "none";
      });

      // Show items based on selected filter
      if (filter === "all") {
        items.forEach((item) => {
          item.style.display = "block";
        });
      } else {
        const filteredItems = document.querySelectorAll("." + filter);
        filteredItems.forEach((item) => {
          item.style.display = "block";
        });
      }
    });
  });
});

// Event listener untuk tombol filter
const filterButtons = document.querySelectorAll(".filter-buttons .filter-btn");
filterButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    // Hapus kelas "active" dari semua tombol filter
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Tambahkan kembali kelas "active" pada tombol yang ditekan
    e.target.classList.add("active");
  });
});

// Event listener untuk menghapus kelas "active" ketika area di luar tombol filter ditekan
document.addEventListener("click", function (e) {
  const filterButtonsContainer = document.querySelector(".filter-buttons");
  const targetElement = e.target;

  // Periksa apakah elemen yang ditekan bukan bagian dari .filter-buttons
  if (!filterButtonsContainer.contains(targetElement)) {
    // Hapus kelas "active" dari semua tombol filter
    filterButtons.forEach((button) => {
      button.classList.remove("active");
    });
  }
});

//  Modal
// Tambahkan skrip berikut untuk menangani masalah scrolling dan menampilkan modal

document.addEventListener("DOMContentLoaded", function () {
  const aboutLink = document.getElementById("about");
  const educationLink = document.getElementById("education");
  const contactLink = document.getElementById("contact");
  const modals = document.querySelectorAll(".modal");

  function showModal(modal) {
    modal.style.display = "block"; // Tampilkan modal
    modal.offsetHeight; // Force browser to process styling
    modal.classList.add("show"); // Tambahkan kelas show

    // Tambahkan event listener untuk menutup modal saat transisi selesai
    modal.addEventListener(
      "transitionend",
      function modalTransitionEndListener(event) {
        if (
          event.propertyName === "opacity" &&
          modal.classList.contains("show")
        ) {
          // Hapus event listener agar tidak dipicu lagi
          modal.removeEventListener(
            "transitionend",
            modalTransitionEndListener
          );
        }
      }
    );
  }

  function hideModals() {
    modals.forEach((modal) => {
      modal.classList.remove("show"); // Hapus kelas show dari semua modal

      // Tambahkan event listener untuk menyembunyikan modal setelah transisi selesai
      modal.addEventListener(
        "transitionend",
        function modalTransitionEndListener(event) {
          if (
            event.propertyName === "opacity" &&
            !modal.classList.contains("show")
          ) {
            modal.style.display = "none"; // Sembunyikan modal setelah transisi selesai
            // Hapus event listener agar tidak dipicu lagi
            modal.removeEventListener(
              "transitionend",
              modalTransitionEndListener
            );
          }
        }
      );
    });
  }

  // Tambahkan event listener untuk masing-masing tautan navbar
  aboutLink.addEventListener("click", function (e) {
    e.preventDefault();
    hideModals(); // Sembunyikan semua modal sebelum menampilkan modal yang baru
    showModal(document.getElementById("about-modal"));
    navbarNav.classList.remove("active");
  });

  educationLink.addEventListener("click", function (e) {
    e.preventDefault();
    hideModals(); // Sembunyikan semua modal sebelum menampilkan modal yang baru
    showModal(document.getElementById("education-modal"));
    navbarNav.classList.remove("active");
  });

  contactLink.addEventListener("click", function (e) {
    e.preventDefault();
    hideModals(); // Sembunyikan semua modal sebelum menampilkan modal yang baru
    showModal(document.getElementById("contact-modal"));
    navbarNav.classList.remove("active");
  });

  // Tambahkan event listener untuk tombol close di setiap modal
  document.querySelectorAll(".close").forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
      const modal = closeButton.closest(".modal");
      hideModals(); // Sembunyikan modal saat tombol close ditekan
    });
  });

  // Tambahkan event listener untuk menutup modal saat klik di luar area modal
  window.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
      hideModals(); // Sembunyikan modal saat area luar modal ditekan
    }
  });
});
