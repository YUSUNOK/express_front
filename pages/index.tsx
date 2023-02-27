import axios from "axios";
import { ReactNode, useEffect, useState } from "react";

interface IValue {
   "id" : number,
   "email" : string,
   "name" : string,
   "posts" : {
      "id"?:number,
      "title"?: string,
      "content"?: string,
      "published"?:boolean,
      "authorId"?: number
   }[]
}


export default function Home() {
  const [value, setValue] = useState<IValue[]>([]);
  useEffect(() => {
    // fetchData란 비동기함수 생성
    const fetchData = async () => {
      const result = await axios(
        "http://localhost:3000/aaa"
      );
      setValue(result.data);
    };
    // 실행함으로써 데이타를 fetching합니다.
    fetchData();
  }, []);

  console.log(value[0]);
  console.log(value[1]);

  return (
    <>
    helloworld
    <div>
      {value.map((item : IValue, index) => {
        return <h1 key={index}>{item.email}</h1>
      })}
    </div>
    </>
  )
}

