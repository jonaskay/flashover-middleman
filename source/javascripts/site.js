// This is where it all goes :)

document.addEventListener('DOMContentLoaded', function init() {
  var DISPLAY_BLOCK = 'display: block;';
  var DISPLAY_NONE = 'display: none;';

  function show(element) {
    element.setAttribute('style', DISPLAY_BLOCK);
  }

  function hide(element) {
    element.setAttribute('style', DISPLAY_NONE);
  }

  function isHidden(element) {
    var style = element.getAttribute('style');
    return style ? style === DISPLAY_NONE : true;
  }

  function toggle(element) {
    if (isHidden(element)) {
      show(element);
    } else {
      hide(element);
    }
  }

  function clickHandler(element) {
    var lists = document.querySelectorAll('[data-archive-list]');
    for (var i = 0; i < lists.length; i++) {
      var list = lists[i];
      if (list.dataset.archiveList === element.dataset.archive) {
        toggle(list);
      } else {
        hide(list);
      }
    }
  }

  var links = document.querySelectorAll('[data-archive]');
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.onclick = function handleClick() {
      return clickHandler(this);
    };
  }
});
