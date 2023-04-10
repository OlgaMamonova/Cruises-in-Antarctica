const initBurger = () => {
  const header = document.querySelector('.header__wrapper');
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

  const onOverlayClick = (evt) => {
    const Overlay = evt.composedPath().includes(header);
    if (!Overlay) {
      closeMenu();
    }
  };

  const openMenu = () => {
    body.classList.add('is-opened');
    navList.addEventListener('click', onNavListClick);
    logoLink.addEventListener('click', onLogoLinkClick);
    document.addEventListener('click', onOverlayClick);
  };

  const closeMenu = () => {
    body.classList.remove('is-opened');
    burgerToggle.removeEventListener('click', closeMenu);
    navList.removeEventListener('click', onNavListClick);
    logoLink.removeEventListener('click', onLogoLinkClick);
    document.removeEventListener('click', onOverlayClick);
    burgerToggle.addEventListener('click', onBurgerTogleClick);
  };

  function onBurgerTogleClick() {
    openMenu();
    burgerToggle.addEventListener('click', closeMenu);
  }


  burgerToggle.addEventListener('click', onBurgerTogleClick);
};

export {initBurger};
