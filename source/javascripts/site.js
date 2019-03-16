document.addEventListener('DOMContentLoaded', function init() {
  var DISPLAY_BLOCK = 'display: block;';
  var DISPLAY_NONE = 'display: none;';

  function showList(element) {
    element.setAttribute('style', DISPLAY_BLOCK);
  }

  function hideList(element) {
    element.setAttribute('style', DISPLAY_NONE);
  }

  function isHidden(element) {
    var style = element.getAttribute('style');
    return style ? style === DISPLAY_NONE : true;
  }

  function toggleList(element) {
    if (isHidden(element)) {
      showList(element);
    } else {
      hideList(element);
    }
  }

  function resetContentMinHeight() {
    var content = document.querySelector('#content');
    var menu = document.querySelector('#menu');

    var menuHeight = menu.clientHeight;
    content.setAttribute('style', 'min-height:' + menuHeight + 'px;');
  }

  function toggleLists(element) {
    var lists = document.querySelectorAll('[data-archive-list]');
    for (var i = 0; i < lists.length; i++) {
      var list = lists[i];
      if (list.dataset.archiveList === element.dataset.archive) {
        toggleList(list);
      } else {
        hideList(list);
      }
      resetContentMinHeight();
    }
  }

  var links = document.querySelectorAll('[data-archive]');
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.onclick = function handleClick() {
      return toggleLists(this);
    };
  }

  var body = document.querySelector('body');

  function isMenuOpen() {
    return body.dataset.menuOpen === 'true';
  }

  function closeMenu() {
    body.dataset.menuOpen = 'false';
  }

  function openMenu() {
    body.dataset.menuOpen = 'true';
  }

  function toggleMenu() {
    if (isMenuOpen()) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  var menuButton = document.querySelector('#menuButton');
  menuButton.onclick = function handleClick() {
    return toggleMenu();
  };

  var mask = document.querySelector('#mask');
  mask.onclick = function handleClick() {
    return closeMenu();
  };
});
