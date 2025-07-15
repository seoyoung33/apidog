import { useState, useEffect } from "react";

function Dog2(){
    const [dogBtn, setDogBtn] = useState(null)

    // api(데이터) 불러오기
    const fetchDog = async ()=>{

        try{
            const response = await fetch('https://dog.ceo/api/breed/husky/images/random')
            const data = await response.json();
            console.log(data);
            setDogBtn(data.message)
        }catch(error){
            console.error('강아지 로딩 실패', error)
        }
    }
    useEffect(()=>{
        fetchDog(); /* 새로고침하면 처음부터 사진이 나오게! */
    },[])

    return(<>
        <button onClick={fetchDog}>강아지 호출버튼</button><br /> {/* 필요할때만 업데이트해서 가져오는것! useEffect와는 다르다! */}
        {/* 상태관리 button이 아닌 경로가 변경되는 img에 적용됨 */}
        {/* img에 useState 변수를 삽입하고 button은 api함수를 호출해야 한다. */}
        {/* api함수를 호출하는 위치에 img에 대입할 useState값을 업데이트 해야한다. */}
        <img src={dogBtn} alt="" style={{width:'400px'}} />
    </>)
}
export default Dog2;