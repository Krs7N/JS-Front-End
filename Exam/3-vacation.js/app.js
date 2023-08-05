function solve() {
    const list = document.getElementById('list');

    document.getElementById('load-vacations').addEventListener('click', loadVacations);
    document.getElementById('add-vacation').addEventListener('click', e => addVacation(e));

    const inputs = {
        name: document.getElementById('name'),
        days: document.getElementById('num-days'),
        date: document.getElementById('from-date')
    }

    async function addVacation(e) {
        e.preventDefault();

        if (Object.values(inputs).forEach(input => input.value === '')) {
            return;
        }

        const vacation = {
            name: inputs.name.value,
            date: inputs.date.value,
            days: inputs.days.value
        }

        await fetch('http://localhost:3030/jsonstore/tasks/', {
            method: 'POST',
            body: JSON.stringify(vacation)
        });

        document.getElementsByTagName('form')[0].reset();
        loadVacations();
    }

    async function loadVacations() {
        const vacations = await (await fetch('http://localhost:3030/jsonstore/tasks/')).json();
        list.innerHTML = '';

        Object.values(vacations).forEach(vacation => {
            const container = createElement('div', null, ['container'], null, list, null);
            createElement('h2', vacation.name, [], null, container, null);
            createElement('h3', vacation.date, [], null, container, null);
            createElement('h3', vacation.days, [], null, container, null);
            const changeButton = createElement('button', 'Change', ['change-btn'], null, container, null);
            changeButton.value = vacation._id;
            changeButton.addEventListener('click', e => changeVacation(e));
            const doneButton = createElement('button', 'Done', ['done-btn'], null, container, null);
            doneButton.value = vacation._id;
            doneButton.addEventListener('click', e => doneVacation(e))
        });
    }

    function changeVacation(e) {
        const id = e.target.value;
        inputs.name.value = e.target.offsetParent.getElementsByTagName('h2')[0].textContent;
        inputs.days.value = e.target.offsetParent.getElementsByTagName('h3')[1].textContent;
        inputs.date.value = e.target.offsetParent.getElementsByTagName('h3')[0].textContent;
        list.removeChild(e.target.offsetParent);

        document.getElementById('add-vacation').disabled = true;
        document.getElementById('edit-vacation').disabled = false;

        document.getElementById('edit-vacation').addEventListener('click', e => editVacation(e, id));
    }

    async function editVacation(e, id) {
        e.preventDefault();
        const vacation = {
            name: inputs.name.value,
            days: inputs.days.value,
            date: inputs.date.value,
            _id: id
        }

        await fetch(`http://localhost:3030/jsonstore/tasks/${id}`, {
            method: 'PUT',
            body: JSON.stringify(vacation)
        });

        loadVacations();
        document.getElementById('add-vacation').disabled = false;
        document.getElementById('edit-vacation').disabled = true;
    }

    async function doneVacation(e) {
        e.preventDefault();

        await fetch(`http://localhost:3030/jsonstore/tasks/${e.target.value}`, {
            method: 'DELETE'
        });

        loadVacations();
    }

    function createElement(type, textContent, classes, id, parent, useInnerHTML) {
        const element = document.createElement(type);
    
        if (useInnerHTML && textContent) {
            element.innerHTML = textContent;
        } else if (textContent) {
            element.textContent = textContent;
        }
    
        if (classes && classes.length > 0) {
            element.classList.add(...classes);
        }
    
        if (id) {
            element.setAttribute('id', id);
        }
    
        if (parent) {
            parent.appendChild(element);
        }
    
        return element;
    }
}

solve();