export default class NavMenu {

  constructor(buttonName, items) {
    this.items = items;
    this.name = buttonName;
    this.navMenu = constructNavMenu(this);
    this.buttonStyleName = `${this.name}-button`
    this.styles = [];
    this.styles[0] = `#${this.buttonStyleName} {`;
    this.styles[1] = `}`;

    let customNavBar = document.querySelector('.custom-nav-bar');
    customNavBar.appendChild(this.navMenu);
  }

  getItems() { return this.items; }
  getNavMenuHTML() { return this.navMenu; }

  // Modifiers
  setButtonBorderRadius(radius) {
    updateCSSRule(`#${this.name}-container > button`, `border-radius: ${radius}px;`);
  }

  setButtonBackgroundColor(color) {
    updateCSSRule(`#${this.name}-container > button`, `background: ${color};`);
  }

  setButtonBoxShadow(boxShadow) {
    updateCSSRule(`#${this.name}-container > button`, `box-shadow: ${boxShadow};`);
  }

  setNavBackgroundColor(rgb) {
    let navContainer = document.querySelector(`#${this.name}-container`);
    navContainer.children[1].style.background = rgb;
  }

  setNavBorderRadius(radius) {
    let navContainer = document.querySelector(`#${this.name}-container`);
    navContainer.children[1].style.borderRadius = radius + 'px';
  }

  // Item Modifiers
  setItemMargin(margin) {
    let navItems = document.querySelector(`#${this.name}-container`).children[1].children;
    
    for(let navItem of navItems) {
      navItem.style.margin = margin;
    }
  }

  setItemTransparency(alpha) {
    let navItems = document.querySelector(`#${this.name}-container`).children[1].children;

    for(let navItem of navItems) {
      navItem.style.opacity = alpha; 
    }
  }

  setItemBorderRadius(radius) {
    let navItems = document.querySelector(`#${this.name}-container`).children[1].children;
    
    for(let navItem of navItems) {
      navItem.style.borderRadius = radius + 'px';
    }

  }

  setItemBoxShadow(boxShadow) {
    let navItems = document.querySelector(`#${this.name}-container`).children[1].children;
    
    for(let navItem of navItems) {
      navItem.style.boxShadow = boxShadow;
    }
  }

  setItemColor(color) {
    updateCSSRule(`#${this.name}-container > div > div`, `background: ${color};`);
  }

  setItemHoverColor(color) {
    updateCSSRule(`#${this.name}-container > div > div:hover`, `background: ${color};`);
  }

  setItemFontColor(color) {
    updateCSSRule(`#${this.name}-container > div > div > a`, `color: ${color};`);
  }
}

// Private helper functions for NavMenu Class
let constructNavMenu = (nav) => {
  let navContainer = document.createElement('div');
  let button = document.createElement('button');
  let navContentContainer = document.createElement('div');

  navContainer.classList.add('dropdown-container');
  navContainer.id = (`${nav.name}-container`);
  button.classList.add('dropdown-button');
  button.id = (`${nav.name}-button`);
  button.textContent = nav.name;
  navContentContainer.classList.add('dropdown-content-container');

  navContainer.appendChild(button);
  navContentContainer = addItems(navContentContainer, nav.items)
  navContainer.appendChild(navContentContainer);

  return navContainer; 
}

let addItems = (element, items) => {
  items.forEach(item => {
    let menuItem = document.createElement('div');
    menuItem.classList.add('dropdown-content');
    menuItem.id = (`${element.name}-item`);
    menuItem.innerHTML = `<a href='#'>${item}</a>`;

    element.appendChild(menuItem);
  });

  return element;
}

let updateCSSRule = (className, rule) => {
  let ruleIndex = getStyleRuleIndex(className);
  let rules = document.styleSheets[0].rules;

  if (ruleIndex === undefined) {                    // New Rule
    rule = className + " { " + rule + " }";     
  } else {
    let existingRules = rules[ruleIndex].cssText    // Edit Rule
        .replace(rules[ruleIndex].selectorText + ' { ', ' ')
        .replace(' }', ' ');
    
    rule += existingRules; 
    rule = className + " { " + rule + " }";
    document.styleSheets[0].deleteRule(ruleIndex);
  }

  document.styleSheets[0].insertRule(rule, document.styleSheets[0].rules.length);
}

let getStyleRuleIndex = (className) => {
  let cssText; 
  let index;
  var classes = document.styleSheets[0].rules || document.styleSheets[0].cssRules;
  for (var x = 0; x < classes.length; x++) {       
      if ((classes[x].selectorText == className) || (classes[x].selectorText == '#'+className)) {
          cssText += classes[x].cssText || classes[x].style.cssText;
          index = x; 
      }         
  }
  return index;
}
