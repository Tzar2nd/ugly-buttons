import NavMenu from './nav-menu.js';

document.addEventListener("DOMContentLoaded", () => createButtons());

function createButtons() {    
    for(let x = 1; x <= 99; x++ ){ 
        buttonCreator('Button-' + x);
    }
};

function buttonCreator(buttonName) { 
    let button = new NavMenu(buttonName, ['apples', 'oranges', 'bananas']);

    button.setButtonBorderRadius(rand(1, 50));
    button.setButtonBackgroundColor
                (`rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 10)/10})`);
    button.setButtonBoxShadow
                (`rgba(6, 24, 44, 0.4) ${rand(0,5)}px ${rand(0,5)}px ${rand(0,5)}px ${rand(0,3)}px`);
    button.setNavBackgroundColor
                (`rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 10)/10})`);
    button.setNavBorderRadius(rand(1, 20));
    button.setItemMargin(rand(0, 20)/10 + 'rem');
    button.setItemBorderRadius(rand(1, 20));
    
            (`rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}, 1)`);
    button.setItemFontColor
            (`rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}, 1)`);
    button.setItemHoverColor
            (`rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}, 1)`);
    button.setItemBoxShadow(`rgba(6, 24, 44, 0.4) ${rand(0,5)}px ${rand(0,5)}px ${rand(0,5)}px ${rand(0,3)}px`);
}

function rand(lower, upper) {
    let random = Math.floor(Math.random() * upper + 1);
    return random;
}