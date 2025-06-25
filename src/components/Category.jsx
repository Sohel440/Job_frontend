import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../components/ui/carousel'
import { Button } from './ui/button'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSearchQuery } from '../redux/jobSlice'
const category = [
    "Frontend Devloper",
    "Backend Devloper",
    "Graphic Designer",
    "Data Engineer",
    "Fullstack Devloper ",

]

const Category = () => {
   const dispatch = useDispatch();
    const navigate = useNavigate();
   const serchJobHandler = (query) => {
      dispatch(setSearchQuery(query));
      navigate("/brows");
    };
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20 ">
        <CarouselContent>
                {
                    category.map((key ,index)=>(
                        <CarouselItem className= "md:basis-1/2 lg:basis-1/3">
                            <Button onClick={()=>serchJobHandler(key)} className= "rounded-full bg-purple-100 " variant="outline">{key}</Button>
                        </CarouselItem>
                    ))
                }
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </div>
  )
}

export default Category
