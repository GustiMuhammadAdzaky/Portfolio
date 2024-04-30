let hamburgerMenu = document.getElementById("hamburger-menu");
let navbarNav = document.querySelector(".navbar-nav");

hamburgerMenu.addEventListener("click", function (e) {
  navbarNav.classList.toggle("active");
  e.preventDefault(); // Menahan perilaku default dari tautan
});

// jika menekan yang bukan dari sidebar, maka tombol active akan hilang
document.addEventListener("click", function (e) {
  // -> berfungsi untuk keluar dari sidebar

  //   jika user tidak menekan hamburgermenu, dan tidak menekan salahsatu dari navbarNav(yang ada pada media resolusi tertentu) maka :
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    // hapus class active pada navbarNav
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
