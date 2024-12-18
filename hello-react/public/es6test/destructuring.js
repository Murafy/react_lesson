//비구조화, 구조분해
//ㄴ배열 또는 객체를 분해,

//객체
const sana = {name : '사나', age:23, address: '경기'}
//객체의 프로퍼티가 모두 필요하지 않다면 비구조(구조분해) 사용합니다.
//인자가 객체일 때 사용할 프로퍼티만 {}안에 나열함
function print(people){ //people = 매개변수
    console.log ('name:',people.name)
    console.log ('age:',people.age)
    console.log ('address:',people.address)
}


function print2({name,age}){
    console.log('name:',name)
    console.log('age:',age)
}


function print3({address}){
    console.log('address:',address) 
}
print3(sana) //sana 인자 (실 매개변수)