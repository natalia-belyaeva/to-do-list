let button = document.querySelector('.button');
let sortButton = document.querySelector('.push-to-sort');
let order = 'asc';

let addNewLine = () => {
    let line = document.querySelector('.line');
    let textWrapper = document.createElement('div');
    textWrapper.classList.add('text-wrapper');
    line.append(textWrapper);

    let input = document.createElement('input');
    input.classList.add('text');
    textWrapper.append(input);

    let pushToDelete = document.createElement('div');
    pushToDelete.classList.add('push-to-delete');
    pushToDelete.addEventListener('click', () => {
        if (document.querySelectorAll('.text-wrapper').length > 1) {
            textWrapper.remove();
        } else {
            input.value = '';
        } 
    })
    pushToDelete.addEventListener('mouseover', (event) => {
        event.target.src = 'img/purpledelete.svg'
    });
    pushToDelete.addEventListener('mouseout', (event) => {
        event.target.src = 'img/delete.svg'
    });
    textWrapper.append(pushToDelete);

    let img = document.createElement('img');
    img.src = 'img/delete.svg';
    pushToDelete.append(img);
}

let sortList = () => {
    let arr = [];
    let input = document.querySelectorAll('input');
    input.forEach ((element) => {
        arr.push(element.value);
    });

    if (order === 'desc') {
        order = 'asc';
        arr.sort ((a,b) => {return a < b ? -1 : 1});
        
    } else {
        order = 'desc';
        arr.reverse ((a,b) => {return b < a ? -1 : 1});
        
    }

    let textWrapper = document.querySelectorAll('.text');
    textWrapper.forEach ((element, index) => {
        element.value = arr[index];
    });
    
};

let getPicName = (event) => {
    let arr = event.target.src.split('/');
    let picture = arr[arr.length - 1];
    return picture;
}

let sortPic = document.querySelector('.sort-img');

sortPic.addEventListener('mouseover', (event) => {
    if (getPicName(event) === 'AtoZgrey.svg') {
        event.target.src = 'img/AtoZblack.svg';
    } else {
        event.target.src = 'img/ZtoAblack.svg'
    }
});

sortPic.addEventListener('click', (event) => {
    if (getPicName(event) === 'AtoZblack.svg') {
        event.target.src = 'img/ZtoAblack.svg';
    } else {
        event.target.src = 'img/AtoZblack.svg'
    }
});

sortPic.addEventListener('mouseout', (event) => {
    if (getPicName(event) === 'ZtoAblack.svg') {
        event.target.src = 'img/ZtoAgrey.svg';
    } else {
        event.target.src = 'img/AtoZgrey.svg';
    }
});


addNewLine();
button.addEventListener('click', addNewLine);
sortButton.addEventListener('click', sortList)