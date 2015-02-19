(function(){

  'use strict';

  Sizzle('#select-a')[0].onclick = function(event) {
    var elements = Sizzle('.a'),
        i, len;

    for (i = 0, len = elements.length; i < len; ++i) {
      elements[i].style.backgroundColor = '#ffcccc';
    }
  };

  Sizzle('#select-b')[0].onclick = function(event) {
    var elements = Sizzle('.b'),
        i, len;

    for (i = 0, len = elements.length; i < len; ++i) {
      elements[i].style.backgroundColor = '#ccccff';
    }
  };

  Sizzle('#select-div-9')[0].onclick = function(event) {
    Sizzle('#div-9')[0].style.backgroundColor = '#ccffcc';
  };

  Sizzle('#selector')[0].onkeyup = function(event) {
    var result = Sizzle('#result')[0];

    try  {
      result.innerHTML =
        Sizzle.matchesSelector(Sizzle('#div-1')[0], this.value);
    } catch (e) {
      result.innerHTML = 'error';
    }
  };

  Sizzle('#select-all-b')[0].onclick = function(event) {
    var result = Sizzle('#result-all')[0],
        elements = Sizzle.matches('.b', Sizzle('div')),
        ids = [],
        i, len;

    for (i = 0, len = elements.length; i < len; ++i) {
      ids.push(elements[i].id);
    }

    result.innerHTML = ids.join(', ');
  };

}());
