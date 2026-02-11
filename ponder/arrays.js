let pets =['goldfish', 'dog', 'rhino'];

console.log(pets.length);

pets[3] = 'bunny';

console.log(pets);


pets.push('lizard');

console.log(pets);

const steps =['one', 'two', 'three'];

steps.forEach(function(item){
    console.log(item);
})

let List = document.querySelector('#List');

const stepsHtml = steps.map(listTemplate);

function listTemplate(item){
    return `<li>${item}</li>`
}

List.innerHTML = stepsHtml.join('');

let grades =['A', 'B', 'D'];

let points;
let gpaPonits = grades.map(convert);

function convert(grade){
    switch (grade) {
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade')
    }
    return points;
}
console.log(gpaPonits);


let totalPoints = gpaPonits.reduce(getTotal);

function getTotal(sum, item){
    return sum + item;
}

console.log(totalPoints);

let gpaAverage = totalPoints/gpaPonits.length;

console.log(gpaAverage);


const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
          
const shortWords = words.filter(function(word){
    return word.length <= 6
})

console.log(shortWords);












































































