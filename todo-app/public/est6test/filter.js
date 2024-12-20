// map, filter 는 매우 중요한 배열 메소드임 

const keywords = ['package','filter','map','gitignore','if','for']

//배열 요소 값을 하나씩 처리하기

keywords.map((item,idx) => {
    console.log("위치 :", idx, "값 :",item)

})

//filter : 특정 조건에 맞는 배열 요소만 추출하여 새로운 배열을 만듬
//         ㄴ 리턴 : 새로운 배열 


//배열 요소의 글자 길이가 5보다 큰것만 
const newKeywords = keywords.filter((item) => item.length > 5)
    console.log ("5글자보다 큰것만 =",newKeywords)