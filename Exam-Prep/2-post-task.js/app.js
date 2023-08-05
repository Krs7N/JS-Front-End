window.addEventListener("load", solve);

function solve() {
    const inputSelectors = {
        title: document.querySelector('#task-title'),
        category: document.querySelector('#task-category'),
        content: document.querySelector('#task-content')
    };

    const selectors = {
        publish: document.querySelector('#publish-btn').addEventListener('click', createTask)
    };

    function createTask(e) {
        if (Object.values(inputSelectors).some(input => input.value === '')) {
            return;
        }

        const task = {
            title: inputSelectors.title.value,
            category: `Category: ${inputSelectors.category.value}`,
            content: `Content: ${inputSelectors.content.value}`
        }

        const list = document.getElementById('review-list');
        const item = document.createElement('li');
        item.classList.add('rpost');
        const article = document.createElement('article');
        const h4 = document.createElement('h4');
        h4.textContent = task.title;
        const firstParagraph = document.createElement('p');
        firstParagraph.textContent = task.category;
        const secondParagraph = document.createElement('p');
        secondParagraph.textContent = task.content;
        const firstButton = document.createElement('button');
        firstButton.classList.add('action-btn', 'edit');
        firstButton.textContent = 'EDIT';
        const secondButton = document.createElement('button');
        secondButton.classList.add('action-btn', 'post');
        secondButton.textContent = 'POST';
        article.appendChild(h4);
        article.appendChild(firstParagraph);
        article.appendChild(secondParagraph);
        item.appendChild(article);
        item.appendChild(firstButton);
        item.appendChild(secondButton);
        list.appendChild(item);

        const form = document.getElementsByClassName('newPostContent')[0];
        form.reset();

        document.getElementsByClassName('edit')[0].addEventListener('click', editTask);
        document.getElementsByClassName('post')[0].addEventListener('click', postTask);
    } 

    function editTask(e) {
        const title = document.getElementById('task-title');
        const category = document.getElementById('task-category');
        const content = document.getElementById('task-content');

        title.value = document.getElementsByTagName('h4')[0].textContent;
        category.value = document.getElementsByTagName('p')[0].textContent.substring(10);
        content.value = document.getElementsByTagName('p')[1].textContent.substring(9);

        const list = document.getElementById('review-list');
        list.innerHTML = '';
    }

    function postTask(e) {
        const task = {
            title: document.getElementsByTagName('h4')[0].textContent,
            category: document.getElementsByTagName('p')[0].textContent,
            content: document.getElementsByTagName('p')[1].textContent
        }

        const list = document.getElementById('published-list');
        const item = document.createElement('li');
        item.classList.add('rpost');
        const article = document.createElement('article');
        const h4 = document.createElement('h4');
        h4.textContent = task.title;
        const firstParagraph = document.createElement('p');
        firstParagraph.textContent = task.category;
        const secondParagraph = document.createElement('p');
        secondParagraph.textContent = task.content;

        article.appendChild(h4);
        article.appendChild(firstParagraph);
        article.appendChild(secondParagraph);
        item.appendChild(article);
        list.appendChild(item);

        const reviewList = document.getElementById('review-list');
        reviewList.innerHTML = '';
    }
}