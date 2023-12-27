const cat = document.querySelector('#categories');

console.log('Numbers of categories ' + cat.children.length);
for (let i = 0; i < cat.children.length; i++) {
        console.log('Category: ' + cat.children[i].firstElementChild.innerHTML);
        console.log('Elements: ' + cat.children[i].lastElementChild.children.length);
    }