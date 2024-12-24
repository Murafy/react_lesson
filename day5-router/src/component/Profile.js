import React from 'react';
import { useParams } from 'react-router-dom';

function Profile(props) {
    // Layout 의 경로 파라미터를 받기 위해서 useParams 함수(훅)로 객체를 리턴받음
    const params = useParams()

    //파라미터 객체중에 이름이 username 을 가져옴 
    const profile = params.username
    const profileid = params.id
    console.log("params:" ,params)
    return (
        <div>
            <h2> P r o f i l e </h2>
            <p>url 의 path 는 /Profile</p>
            <hr/>
                        {profile ? (<h3>{profile} 의 프로필 </h3>) :
                        (<h3>지정된 사용자가 없습니다.</h3>)
                        // ? 연산자 -> 프로필이 참이면 (<h3>{profile} 의 프로필 </h3>) 을 출력하라 
                        //   거짓 이면 (<h3>지정된 사용자가 없습니다.</h3>) 을 출력하라 (거짓은 undefined / flasy-flase 로 취급 )
             }

<hr/>
                        {profileid ? (<h3>{profileid} 의 프로필 </h3>) :
                        (<h3>지정된 사용자가 없습니다.</h3>)
                        // ? 연산자 -> 프로필이 참이면 (<h3>{profile} 의 프로필 </h3>) 을 출력하라 
                        //   거짓 이면 (<h3>지정된 사용자가 없습니다.</h3>) 을 출력하라 (거짓은 undefined / flasy-flase 로 취급 )
             }
                       
        </div>
    );
}

export default Profile;