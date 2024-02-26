import Loading from "@/components/Loading";
import Tour from "@/components/Tour";
import Tours from "@/components/Tours";
import Image from "next/image";
import { useEffect, useState } from "react";
const url = 'https://www.course-api.com/react-tours-project'

export default function Home() {
  const [loading,setLoading] = useState(true)
  const [tours,setTours] = useState([])
  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
   
  }
  useEffect(() => {
    fetchTours()
  }, [])
  
  if(loading){
    return (
      <main>
        <Loading/>
      </main>
    )
  }
  return (
    <main>
     <Tours/>
      
      
    </main>
  );
}
