window.addEventListener("load", solve);

function solve() {
  const inputSelectors = {
    student: document.querySelector('#student'),
    university: document.querySelector('#university'),
    score: document.querySelector('#score')
};

const selectors = {
    next: document.querySelector('#next-btn').addEventListener('click', forwardStudent)
};

function forwardStudent(e) {
  document.querySelector('#next-btn').disabled = true;
    if (Object.values(inputSelectors).some(input => input.value === '')) {
        return;
    }

    const studentInfo = {
        student: inputSelectors.student.value,
        university: `University: ${inputSelectors.university.value}`,
        score: `Score: ${inputSelectors.score.value}`
    }

    const list = document.getElementById('preview-list');
    const item = document.createElement('li');
    item.classList.add('application');
    const article = document.createElement('article');
    const h4 = document.createElement('h4');
    h4.textContent = studentInfo.student;
    const firstParagraph = document.createElement('p');
    firstParagraph.textContent = studentInfo.university;
    const secondParagraph = document.createElement('p');
    secondParagraph.textContent = studentInfo.score;
    const firstButton = document.createElement('button');
    firstButton.classList.add('action-btn', 'edit');
    //malki bukvi?
    firstButton.textContent = 'EDIT';
    const secondButton = document.createElement('button');
    secondButton.classList.add('action-btn', 'apply');
    //malki bukvi?
    secondButton.textContent = 'APPLY';
    article.appendChild(h4);
    article.appendChild(firstParagraph);
    article.appendChild(secondParagraph);
    item.appendChild(article);
    item.appendChild(firstButton);
    item.appendChild(secondButton);
    list.appendChild(item);

    const form = document.getElementsByClassName('applyContent')[0];
    form.reset();

    document.getElementsByClassName('edit')[0].addEventListener('click', editStudent);
    document.getElementsByClassName('apply')[0].addEventListener('click', applyStudent);
} 

function editStudent(e) {
    const student = inputSelectors.student;
    const university = inputSelectors.university;
    const score = inputSelectors.score;

    student.value = document.getElementsByTagName('h4')[0].textContent;
    university.value = document.getElementsByTagName('p')[0].textContent.substring(12);
    score.value = document.getElementsByTagName('p')[1].textContent.substring(7);

    const list = document.getElementById('preview-list');
    document.querySelector('#next-btn').disabled = false;
    list.innerHTML = '';
}

function applyStudent(e) {
  document.querySelector('#next-btn').disabled = false;
    const studentInfo = {
        student: document.getElementsByTagName('h4')[0].textContent,
        university: document.getElementsByTagName('p')[0].textContent,
        score: document.getElementsByTagName('p')[1].textContent
    }

    const list = document.getElementById('candidates-list');
    const item = document.createElement('li');
    item.classList.add('application');
    const article = document.createElement('article');
    const h4 = document.createElement('h4');
    h4.textContent = studentInfo.student;
    const firstParagraph = document.createElement('p');
    firstParagraph.textContent = studentInfo.university;
    const secondParagraph = document.createElement('p');
    secondParagraph.textContent = studentInfo.score;

    article.appendChild(h4);
    article.appendChild(firstParagraph);
    article.appendChild(secondParagraph);
    item.appendChild(article);
    list.appendChild(item);

    const previewList = document.getElementById('preview-list');
    previewList.innerHTML = '';
  }
}