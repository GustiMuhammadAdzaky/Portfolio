let hamburgerMenu = document.getElementById("hamburger-menu");
let navbarNav = document.querySelector(".navbar-nav");
hamburgerMenu.addEventListener("click", function (e) {
  navbarNav.classList.toggle("active");
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

window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    // Ubah angka 10 menjadi 10px atau jarak scroll yang Anda inginkan
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
