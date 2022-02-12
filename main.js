'use strict';

const input = document.querySelector('.todo-input');
const addButton = document.querySelector('.todo-add-button');
const todoBoard = document.querySelector('.todo-list-board');
const form = document.querySelector('.new-form');

// addButton.addEventListener('click', () => {
//     onAdd();
// })

// window.addEventListener('keydown', (event) => {
//     if(event.isComposing) {
//         return;
//     }
//     if(event.key === 'Enter') {
//         onAdd();
//     }
// })

form.addEventListener('submit', (event) => {
    event.preventDefault();
    onAdd();
}
)



todoBoard.addEventListener('click', (event) => {
    const id = event.target.dataset.id;
    if(id) {
        const toBeDeleted = document.querySelector(`.todo-list-board__data[data-id="${id}"]`);
        toBeDeleted.remove();
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

let id = 0;
function makeList(data) {
    // li태그 리스트 만들기 
    const listRow = document.createElement('li');
    listRow.classList.add('todo-list-board__data');
    listRow.setAttribute('data-id', id);

    listRow.innerHTML =`
        <button type="button" class="todo-check-button">
        <i class="fa-solid fa-square-minus" data-id=${id}></i>
        </button>
        <span>
            ${data}
        </span>
        <div class="todo-list-stroke"></div>
    `;

    id++;

    // return 안해줘서 오류남
    return listRow;
}



