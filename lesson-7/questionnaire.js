'use strict';

const correctAnswers = [46, true, 47, 144, true, 1, 10, 4, true, true];
let arrQuestion = [];
const question1 = getQuestions(`Скільки хромосом у здорової людини?`);
const question2 = confirm(`путін - хуйло?`);
const question3 = getQuestions(`Скільки хромосом у путіна?`);
const question4 = getQuestions(`Скільки тупих овець в московії (в млн)?`);
const question5 = confirm(`Чи знести пам'ятник Катерині-2 в Одесі?`);
const question6 = getQuestions(`Скільки чорних пакетів виділяється на одного орка?`);
const question7 = getQuestions(`На скільки ви оцінюєте роботу ЗСУ від 1 до 10?`);
const question8 = getQuestions(`З скількох позицій готувався напад на Білорусь?`);
const question9 = confirm(`Чи потрібно спалювати сосійський прапор?`);
const question10 = confirm(`Чи підтримуєте ви відхід іноземних компаній із московії?`);


addQuestionInArray(question1, arrQuestion);
addQuestionInArray(question2, arrQuestion);
addQuestionInArray(question3, arrQuestion);
addQuestionInArray(question4, arrQuestion);
addQuestionInArray(question5, arrQuestion);
addQuestionInArray(question6, arrQuestion);
addQuestionInArray(question7, arrQuestion);
addQuestionInArray(question8, arrQuestion);
addQuestionInArray(question9, arrQuestion);
addQuestionInArray(question10, arrQuestion);

alert(countResult(arrQuestion, correctAnswers));


function addQuestionInArray(question, list) {
    return list.push(question)
}

function countResult (questionList, answerList) {
    let result = 0;

    for(let i = 0; i < questionList.length; i++) {
        if (questionList[i] === answerList[i]) {
            result += 10;
        }
    }

    return result;
}

function getQuestions (question) {
    return Number(prompt(`${question}`));
}