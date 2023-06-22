const $ = (selector,parent = document) => parent.querySelector(selector);
const $$ = (selector,parent = document) => parent.querySelectorAll(selector);

const first_menu = $$('.menu > .menu-item');
const sub_menu = $$('.menu > .menu-item > .submenu-container > span.menu-item');

function addChevron(item, src) {
    item.forEach(element => {
      if (element.childNodes.length > 1) {
        const chevron = document.createElement('img');
        chevron.src = src;
        chevron.classList.add('chevron')
        element.insertBefore(chevron, element.childNodes[3]);
      }
    });
};
  
function subChevron(item, src){
  item.forEach(node => {
      addChevron($$('.submenu-container > .menu-item',node),src);
  });
};

function subToggle(){
    $$('.chevron').forEach(img => {
        img.onclick = function() {
            this.parentNode.classList.toggle('active');
        };
    });

    $('section').onclick = function() {
        first_menu.forEach(element => { 
                element.classList.remove('active');
        });
        sub_menu.forEach(element => { 
            element.classList.remove('active');
        });
    };
};

function chevronSet(){
    if($('.menu').parentNode.classList.contains('horizontal')){
        addChevron(first_menu,'img/chevron-light.svg');
        subChevron(first_menu,'img/chevron.svg');
    } else if($('.menu').parentNode.classList.contains('vertical')){
        subChevron(first_menu,'img/chevron-light-side.svg');
    };
    subToggle();
};
chevronSet();