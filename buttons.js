document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".menu__category");
    const itemsGroups = document.querySelectorAll(".menu__items");
  
    categories.forEach((category) => {
      category.addEventListener("click", () => {

        categories.forEach((cat) => cat.classList.remove("menu__category--active"));

        category.classList.add("menu__category--active");
  

        itemsGroups.forEach((group) => group.classList.remove("menu__items--active"));

        const content = category.dataset.category;
        document.querySelector(`[data-content="${content}"]`).classList.add("menu__items--active");
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".header__topmenu-mob-button");
    const mobileMenu = document.querySelector(".header__nav-container-mob");

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("header__nav-container-mob--active");
    });
});
