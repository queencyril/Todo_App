import React, { useState } from 'react'
import "../Hero_Section/Hero.css"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function Hero() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <div className='welcome_message'>
        <h1>Hello Oluchi, <span>Start Planning Today...</span></h1>
      </div>
      <div className='main_content'></div>
      <div>Selected date: {date.toDateString()}</div>
      <Calendar onChange={setDate} value={date} />
    </div>
  )
}

export default Hero
