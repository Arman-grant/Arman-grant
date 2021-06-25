let tabcontent = document.querySelector(".tabcontent")
let tabcontainer = document.querySelector('.tabcontainer')
let tabItemsActive = document.querySelector('.tabheader__item_active')
console.log(tabcontainer);
console.log(tabItemsActive)
tabcontainer1 = tabcontainer.children[0];
tabcontainer2 = tabcontainer.children[1];
tabcontainer3 = tabcontainer.children[2];
tabcontainer4 = tabcontainer.children[3];
tabcontainer1.hidden = false;
tabcontainer2.hidden = true;
tabcontainer3.hidden = true;
tabcontainer4.hidden = true;

console.log(tabcontent)
let tabtext = document.querySelectorAll('.tabcontent__descr')
console.log(tabtext)

let tabItems = document.querySelector('.tabheader__items')
console.log(tabItems)
let tabItems1 = tabItems.children[0]
let tabItems2 = tabItems.children[1]
let tabItems3 = tabItems.children[2]
let tabItems4 = tabItems.children[3]

function active(item1, item2, item3, item4) {
    item1.addEventListener('click', () => {
        item1.classList.add('tabheader__item_active');
        item2.classList.remove('tabheader__item_active');
        item3.classList.remove('tabheader__item_active');
        item4.classList.remove('tabheader__item_active');
    })
    item2.addEventListener('click', () => {
        item1.classList.remove('tabheader__item_active');
        item2.classList.add('tabheader__item_active');
        item3.classList.remove('tabheader__item_active');
        item4.classList.remove('tabheader__item_active');
    })
    item3.addEventListener('click', () => {
        item3.classList.add('tabheader__item_active');
        item1.classList.remove('tabheader__item_active');
        item2.classList.remove('tabheader__item_active');
        item4.classList.remove('tabheader__item_active');
    })
    item4.addEventListener('click', () => {
        item4.classList.add('tabheader__item_active');
        item1.classList.remove('tabheader__item_active');
        item2.classList.remove('tabheader__item_active');
        item3.classList.remove('tabheader__item_active');
    })
}
active(tabItems1, tabItems2, tabItems3, tabItems4)

let arrTab = [tabcontainer1, tabcontainer2, tabcontainer3, tabcontainer4];

arrTab.forEach((item, i) => {
        item[i].addEventListener('click', () => {
            if (item[i].hidden = true) {
                item[i - 1].hidden = false
            }

        })

    })
    /*
    tabItems1.addEventListener('click', () => {
        if (tabcontainer1) {
            tabcontainer1.hidden = false;
            tabcontainer2.hidden = true;
            tabcontainer3.hidden = true;
            tabcontainer4.hidden = true;

        }
    });
    tabItems2.addEventListener('click', () => {
        if (tabcontainer2.hidden = true) {
            tabcontainer1.hidden = true;
            tabcontainer2.hidden = false;
            tabcontainer3.hidden = true;
            tabcontainer4.hidden = true;

        }
    });
    tabItems3.addEventListener('click', () => {
        if (tabcontainer3.hidden = true) {
            tabcontainer1.hidden = true;
            tabcontainer2.hidden = true;
            tabcontainer3.hidden = false;
            tabcontainer4.hidden = true;
        }
    });
    tabItems4.addEventListener('click', () => {
        if (tabcontainer4.hidden = true) {
            tabcontainer4.hidden = false;
            tabcontainer1.hidden = true;
            tabcontainer2.hidden = true;
            tabcontainer3.hidden = true;

        }
    });*/