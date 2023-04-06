const initBurger = () => {
  const header = document.querySelector('.header');
  const body = document.querySelector('body');
  const burgerToggle = header.querySelector('.header__burger-toggle');
  const navList = header.querySelector('.nav__list');
  const logoLink = header.querySelector('.logo');

  if (!burgerToggle) {
    return;
  }

  const onNavListClick = (evt) => {
    if (evt.target.nodeName === 'A') {
      closeMenu();
    }
  };

  const onLogoLinkClick = () => {
    closeMenu();
  };

  const openMenu = () => {
    body.classList.add('scroll-lock');
    header.classList.add('header--menu-opened');
    navList.addEventListener('click', onNavListClick);
    logoLink.addEventListener('click', onLogoLinkClick);
  };

  const closeMenu = () => {
    body.classList.remove('scroll-lock');
    header.classList.remove('header--menu-opened');
    burgerToggle.removeEventListener('click', closeMenu);
    navList.removeEventListener('click', onNavListClick);
    logoLink.removeEventListener('click', onLogoLinkClick);
    burgerToggle.addEventListener('click', onBurgerTogleClick);
  };

  function onBurgerTogleClick() {
    openMenu();
    burgerToggle.addEventListener('click', closeMenu);
  }


  burgerToggle.addEventListener('click', onBurgerTogleClick);
};

export {initBurger};
