//스프레드 연산. (전개 연산)
const people = {name:'길동',age:23}

console.log('people:',people)

const people2={...people,name:'길순'}

console.log('people2:',people2)

const kor = [90,56,78]
const eng = [77,88,99]

const score = [...kor,...eng]
console.log ('합쳐진 배열 : ',score)