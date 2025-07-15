import { useState, useEffect } from "react";

function Dog1(){
    const [dog, setDog] = useState(null);

    //api주소 불러오기(async + await 활용)
    //async function 비동기함수명(){try{}catch{}}
    //const 비동기함수명 = async()=>{try{}catch{}}
    //useEffect 마운트:컴포넌트 처음 렌더링 시 실행 훅
    //useEffect(()=>{},[])
    useEffect(()=>{
        async function getDog(){
            try {
                //const response = await fetch('api주소'); //데이터불러오기
                //const data = await response.json(); //데이터 json변환
                const response = await fetch('https://dog.ceo/api/breeds/image/random');/* ''안에 있는 api주소는 promise다. 지금은 데이터가 없는데 나중에 주겠다고 하는 것 */
                const data = await response.json();
                console.log(data.message);
                setDog(data);
            }catch(error){
                console.log('강아지 로딩 실패',error);
            }
        }
        getDog();
    },[]) //처음 렌더링(마운트)

    //useState의 dog값이 빈 값일 경우 출력 조건문
    if(!dog) return <div>강아지 사진 로딩중...</div>

    return(
        <>
            <h1>강아지 보여줘!</h1>
            <img src={dog.message} alt="" style={{width:'400px'}} />
        </>
    )
}
export default Dog1;