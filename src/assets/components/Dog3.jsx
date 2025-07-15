import { useState, useEffect } from "react";

function Dog3(){
    const [dogs, setDogs] = useState([]); //HTML에 접근하기 위해서는 useState를 작성해줘야 함

    //첫 앱 실행 시 강아지 5마리 보이기 위한 마운트처리
    useEffect(()=>{
        //api 비동기로 불러오기
        const getDogs = async ()=>{
            try {
                // map함수 이용을 위한 배열 생성하기
                const dogArr = []; //빈배열준비(for로 생성되는 객체삽입을 위해)
                for(let i=0; i<5; i++){
                    const response = await fetch('https://dog.ceo/api/breed/hound/afghan/images/random');
                    const data = await response.json();
                    //console.log(data);
                    //for 종료하지 않고 반복할 때 반복하는 객체를 위 빈배열에 삽입
                    //배열 삽입 함수 => 배열명.push(값)
                    dogArr.push(data.message) //이미지경로값을 배열로 삽입
                }
                console.log(dogArr);
                setDogs(dogArr); //HTML을 위한 상태변수에 배열삽입하기
            }catch(error){
                console.error('강아지 로딩 실패', error);
            }
        }
        getDogs();
    },[])

    return(<ul>
        {/* map함수를 이용 li>img 5개 출력 */}
        {/* map함수 이용조건은 접근데이터가 배열이어야 한다. */}
        {/* {배열변수.map((데이터,인덱스)=>(실행JSX))} */}
        {dogs.map((data,idx)=>(
            <li key={idx}>
                <img src={data} alt="" style={{width:'200px'}} />
            </li>
        ))}
    </ul>)
}
export default Dog3;