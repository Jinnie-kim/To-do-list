'use strict';

const input = document.querySelector('.todo-input');
const addButton = document.querySelector('.todo-add-button');
const todoBoard = document.querySelector('.todo-list-board');
const checkButton = document.querySelector('.todo-check-button');

addButton.addEventListener('click', () => {
    onAdd();
})

function onAdd() {
    // input 값 받아오기
    const data = input.value;

    // input 값으로 리스트 만들어서 변수에 할당해주기
    const list = makeList(data);

    // 만든 list list board에 할당해주기
    todoBoard.appendChild(list);

    input.value = '';
    input.focus();
}

function makeList(data) {
    let lists = document.createElement('li');
    lists.classList.add('todo-list-board__data');
    lists.innerHTML = `
    <button type="button" class="todo-check-button">
        <i class="far fa-circle"></i>
    </button>
    <span>
        ${data}
    </span>`;
    // return 안해줘서 오류남
    return lists;
}



