import React, {useState} from 'react';

import './App.css';
import people from './data';

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

function Review() {

   const [index,setindex] = useState(0);
   const {name,job,image,text} = people[index];
   
   const cheakNumber = (number) =>{
       if(number > people.length - 1){
           return 0;
       }
       if(number < 0){
           return people.length - 1;
       }
       return number;
   }

   const nextperson = () =>{
       setindex((index)=>{
        let newindex = index + 1;
        return cheakNumber(newindex);
       } )
       
   }

   const prevperson = () =>{
    setindex((index)=>{
     let newindex = index + 1;
     return cheakNumber(newindex);
    } )
    
}

const randomPerson = () => {
  let newRondom = Math.floor(Math.random() * people.length);
  if(newRondom === index){
    newRondom++;}

  setindex(cheakNumber(newRondom));
}


    return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"/>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
        </div>
        <h4 className="auther">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container"> 
         <button className="next-btn" onClick={nextperson}>
          <FaChevronLeft />         
         </button>
         <button className="prev-btn" onClick={prevperson}>
          <FaChevronRight />         
         </button>
         </div>
         <button className="random-btn" onClick={randomPerson}>suprise me</button>
    </article>
  );
}

export default Review;
