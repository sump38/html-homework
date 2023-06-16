const $ = (selector,parent = document) => parent.querySelector(selector);
const $$ = (selector,parent = document) => parent.querySelectorAll(selector);

const first_menu = $$('.menu > .menu-item');

function addChevron(item, src) {
    item.forEach(element => {
      if (element.childNodes.length > 1) {
        const chevron = document.createElement('img');
        chevron.src = src;
        chevron.classList.add('chevron')
        element.insertBefore(chevron, element.childNodes[3]);
      }
    });
}
  
function subChevron(item, src){
  item.forEach(node => {
      addChevron($$('.submenu-container > .menu-item',node),src);
  });
}

function subToggle(){
    $$('.chevron').forEach(img => {
        img.onclick = function() {
            this.parentNode.classList.toggle('active');
        };
    });

    $('section').onclick = function() {
        first_menu.forEach(element => { 
            if(element.classList.contains('active')){
                element.classList.remove('active');
            }
        })
    }
}


addChevron(first_menu,'img/chevron-light.svg');
subChevron(first_menu,'img/chevron.svg');
subToggle()

