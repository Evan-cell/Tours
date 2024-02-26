import Loading from "@/components/Loading";
import Tour from "@/components/Tour";
import Tours from "@/components/Tours";
import Image from "next/image";
import { useEffect, useState } from "react";
const url = 'https://www.course-api.com/react-tours-project'

export default function Home() {
  const [loading,setLoading] = useState(true)
  const [tours,setTours] = useState([])
  const removeTour = (id) => {
    const newTours = tours.filter ((tour) => tour.id !==id)
    setTours(newTours)
  }
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
  if(tours.length === 0){
    return (
      <div className="title">
        <h2>no tours left</h2>
        <button className="btn" onClick={()=>fetchTours()}>Refresh</button>
      </div>
    )
  }
  return (
    <main>
     <Tours tours={tours} removeTour={removeTour}/>
      
      
    </main>
  );
}
