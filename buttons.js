document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".menu__category");
    const itemsGroups = document.querySelectorAll(".menu__items");
  
    categories.forEach((category) => {
      category.addEventListener("click", () => {
        // Убираем активный класс со всех категорий
        categories.forEach((cat) => cat.classList.remove("menu__category--active"));
        // Добавляем активный класс текущей категории
        category.classList.add("menu__category--active");
  
        // Скрываем все группы меню
        itemsGroups.forEach((group) => group.classList.remove("menu__items--active"));
        // Показываем соответствующую группу
        const content = category.dataset.category;
        document.querySelector(`[data-content="${content}"]`).classList.add("menu__items--active");
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".header__topmenu-mob-button");
    const mobileMenu = document.querySelector(".header__nav-container-mob");

    menuButton.addEventListener("click", () => {
        // Переключаем класс для отображения или скрытия меню
        mobileMenu.classList.toggle("header__nav-container-mob--active");
    });
});
