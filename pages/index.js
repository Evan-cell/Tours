import Loading from "@/components/Loading";
import Tour from "@/components/Tour";
import Image from "next/image";
import { useState } from "react";
const url = 'https://www.course-api.com/react-tours-project'

export default function Home() {
  const [loading,setLoading] = useState(true)
  const [tours,setTours] = useState([])
  if(loading){
    return (
      <main>
        <Loading/>
      </main>
    )
  }
  return (
    <main>
      <h1>tours</h1>
      
      
    </main>
  );
}
