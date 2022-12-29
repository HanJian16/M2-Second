var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl);
  for(let i = 0; i < startEl.children.length; i++){
    let result = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet = [...resultSet, ...result];
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0] === '#') return 'id';
  if(selector[0] === '.') return 'class';
  if(selector.includes('.')) return 'tag.class';
  return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
   matchFunction = (elemento) => `#${elemento.id}` === selector;
  } else if (selectorType === "class") {
    matchFunction = (elemento) => { 
      for(let i = 0; i < elemento.classList.length; i++){
        if(`.${elemento.classList[i]}` === selector) return true;
      }
      return false;
    };
  } else if (selectorType === "tag.class") {
    matchFunction = (elemento) => {
      // let ele = elemento.classList;
      // for(let i = 0; i < ele.length; i++){
      //   if(`${elemento.tagName.toLowerCase()}.${ele[i]}` === selector) return true;
      // }
      // return false;
      let [tag, c] = selector.split('.');
      let function_tag = matchFunctionMaker(tag);
      let function_c = matchFunctionMaker('.'+c);
      return function_tag(elemento) && function_c(elemento);
    };
  } else if (selectorType === "tag") {
    matchFunction = (elemento) => elemento.tagName === selector.toUpperCase();
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
