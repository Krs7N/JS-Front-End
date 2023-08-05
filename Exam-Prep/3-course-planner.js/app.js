function solve() {
    const list = document.getElementById('list');

    document.getElementById('load-course').addEventListener('click', loadCourses);
    document.getElementById('add-course').addEventListener('click', e => addCourse(e));

    const inputs = {
        title: document.getElementById('course-name'),
        type: document.getElementById('course-type'),
        description: document.getElementById('description'),
        teacher: document.getElementById('teacher-name')
    }

    async function addCourse(e) {
        e.preventDefault();

        if (Object.values(inputs).forEach(input => input.value === '')) {
            return;
        }

        const course = {
            title: inputs.title.value,
            type: inputs.type.value,
            description: inputs.description.value,
            teacher: inputs.teacher.value
        }

        await fetch('http://localhost:3030/jsonstore/tasks/', {
            method: 'POST',
            body: JSON.stringify(course)
        });

        document.getElementsByTagName('form')[0].reset();
        loadCourses();
    }

    async function loadCourses() {
        const courses = await (await fetch('http://localhost:3030/jsonstore/tasks/')).json();
        list.innerHTML = '';


        Object.values(courses).forEach(course => {
            const container = createElement('div', null, ['container'], null, list, null);
            createElement('h2', course.title, [], null, container, null);
            createElement('h3', course.teacher, [], null, container, null);
            createElement('h3', course.type, [], null, container, null);
            createElement('h4', course.description, [], null, container, null);
            const editButton = createElement('button', 'Edit Course', ['edit-btn'], null, container, null);
            editButton.value = course._id;
            editButton.addEventListener('click', e => editRecord(e));
            const finishButton = createElement('button', 'Finish Course', ['finish-btn'], null, container, null);
            finishButton.value = course._id;
            finishButton.addEventListener('click', e => finishRecord(e));
        })
    }

    function editRecord(e) {
        const id = e.target.value;
        inputs.title.value = e.target.offsetParent.getElementsByTagName('h2')[0].textContent;
        inputs.teacher.value = e.target.offsetParent.getElementsByTagName('h3')[0].textContent;
        inputs.type.value = e.target.offsetParent.getElementsByTagName('h3')[1].textContent;
        inputs.description.value = e.target.offsetParent.getElementsByTagName('h4')[0].textContent;
        list.removeChild(e.target.offsetParent);

        document.getElementById('add-course').disabled = true;
        document.getElementById('edit-course').disabled = false;

        document.getElementById('edit-course').addEventListener('click', e => editCourse(e, id));
    }

    async function editCourse(e, id) {
        e.preventDefault();
        const course = {
            title: inputs.title.value,
            type: inputs.type.value,
            description: inputs.description.value,
            teacher: inputs.teacher.value,
            _id: id
        }

        await fetch(`http://localhost:3030/jsonstore/tasks/${id}`, {
            method: 'PUT',
            body: JSON.stringify(course)
        });

        loadCourses();
        document.getElementById('add-course').disabled = false;
        document.getElementById('edit-course').disabled = true;
    }

    async function finishRecord(e) {
        e.preventDefault();

        await fetch(`http://localhost:3030/jsonstore/tasks/${e.target.value}`, {
            method: 'DELETE'
        });

        loadCourses();
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