const input = document.querySelector('.textInput')
const button = document.querySelector('.add')
const formHead = document.querySelector('.formHead')
const sortDecrease = document.querySelector('.decrease')
const sortIncrease = document.querySelector('.increase')

let data = [{
    content: '',
    id: 1
}];

let id = data.length;

const addElement = () => {

    data.map( (element) => {

        const newDiv = document.createElement('div');

        newDiv.setAttribute('class', 'formInput');

        const newInput = document.createElement('input');

        newInput.value = element.content;
        ////////////////////////////////////////////////////////////////////////////////////
        const del = document.createElement('span');

        del.setAttribute('class', "delete");

        del.textContent = 'x';

        del.setAttribute('onclick', `deleteItem(${element.id})`);
        ////////////////////////////////////////////////////////////////////////////////////
        newInput.addEventListener('focusout', (event) => {

            let newElement = data.find( ( item => item.id === element.id ) );

            newElement.content = event.target.value;

            console.log(data);
        })

        ////////////////////////////////////////////////////////////////////////////////////
        newDiv.append(newInput, del);
        formHead.append(newDiv);

    })
    console.log(data);

}


const deleteItem = ( id ) => {

    data = data.filter((item) => item.id !== id );
    console.log(data);
    formHead.innerHTML = '';
    addElement();

}

button.addEventListener('click', (item) => {
    item.preventDefault();
    id++;
    data.push({ content: '', id: id });
    formHead.innerHTML = '';
    addElement();
})

input.addEventListener('focusout', (item) => {
    data[0] = {
        content: item.target.value,
        id: 1
    }
})

sortIncrease.addEventListener('click', () => {
    if ( data.length < 2 ) {
        return;
    }

    data = data.sort( (a, b) => b.content > a.content ? 1 : -1 );

    formHead.innerHTML = '';

    addElement();

    sortIncrease.classList.toggle('active');
    sortDecrease.classList.toggle('active');

})

sortDecrease.addEventListener('click', () => {
    if (data.length < 2) {
        return;
    }

    data = data.sort( (a, b) => a.content > b.content ? 1 : -1 );

    formHead.innerHTML = '';

    addElement();
    
    sortDecrease.classList.toggle('active');
    sortIncrease.classList.toggle('active');
})