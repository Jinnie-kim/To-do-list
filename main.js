'use strict';

const input = document.querySelector('.todo-input');
const addButton = document.querySelector('.todo-add-button');
const todoBoard = document.querySelector('.todo-list-board');

addButton.addEventListener('click', () => {
    onAdd();
})

window.addEventListener('keyup', (event) => {
    if(event.key === 'Enter') {
        onAdd();
    }
})

function onAdd() {
    // 1. 사용자가 입력한 텍스트를 받아옴
    const data = input.value;
    if(data === '') {
        input.focus();  
        return;
    }

    // input 값으로 새로운 리스트 만든다(텍스트 + 삭제버튼)
    const list = makeList(data);

    // 만든 list list board에 할당해주기
    todoBoard.appendChild(list);

    // 새로 추가된 아이템으로 스크롤링
    list.scrollIntoView({block: 'center'});

    // 인풋을 초기화 한다. 
    input.value = '';
    input.focus();
}

function makeList(data) {
    // li태그 리스트 만들기 
    const listRow = document.createElement('li');
    listRow.classList.add('todo-list-board__data');


    const checkButton = document.createElement('button');
    checkButton.classList.add('todo-check-button');
    checkButton.innerHTML ='<i class="far fa-circle"></i>';
    checkButton.addEventListener('click', () => {
        checkButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        span.style.color = 'grey';
        wordStroke.style.display = 'block';
    })

    const span = document.createElement('span');
    span.innerText = data;

    const wordStroke = document.createElement('div');
    wordStroke.classList.add('todo-list-stroke');

    listRow.appendChild(checkButton);
    listRow.appendChild(span);
    listRow.appendChild(wordStroke);

    // return 안해줘서 오류남
    return listRow;
}




