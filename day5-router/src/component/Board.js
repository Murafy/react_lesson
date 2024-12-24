import React from 'react'
import { useSearchParams } from 'react-router-dom';
 function Board() {
  const [searchParams, SetsearchParams] = useSearchParams()
  console.log ('serachParams: ',searchParams)
  //특정 파라미터값 가져오기
  const title = searchParams.get('title')
  const writer = searchParams.get('writer')
  return (
    <div>
    <h2> B o a r d </h2>
    <p>url 의 path 는 /Board</p>
    <hr/>
    {title && <h3>검색(제목) : {title}</h3>}
    {writer && <h3>검색(글쓴이) : {writer}</h3>}
    {/* && (참) 이면 title을 출력하라. */}
</div>
  )
}
export default Board;
