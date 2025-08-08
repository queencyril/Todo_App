import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../Hero_Section/Hero.css";

function Hero() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <div className="welcome_message">
        <h1>
          Hello Oluchi, <span>Start Planning Today...</span>
        </h1>
      </div>

      <div className="main_section">
        {/* Adding the react-calendar to our code */}
        <div>
          <div className="todays_date"><span>Today's Date:</span> {date.toDateString()}</div>
          <Calendar onChange={setDate} value={date} />
        </div>

        <div>
          <div className="todo_input">
            <div>
            <input type="text" placeholder="Type Title Of Task"/>
            <input type="text" placeholder="Details Of Your Task"/>
            </div>
            <div>
            <button>+</button>
            </div>
          </div>
          <div>
            <div>
              <h3>Learn Javascript</h3>
              <p>Master the learning powering the modern web.</p>
              <h4>Start date: 12-08-2025</h4>
            </div>
            <div>
              <img src="" alt="Completed Task" />
              <img src="" alt="Edit Task" />
              <img src="" alt="Delete Task" />
            </div>

            <div>
              <h3>Learn Javascript</h3>
              <p>Master the learning powering the modern web.</p>
              <h4>Start date: 12-08-2025</h4>
            </div>
            <div>
              <img src="" alt="Completed Task" />
              <img src="" alt="Edit Task" />
              <img src="" alt="Delete Task" />
            </div>

            <div>
              <h3>Learn Javascript</h3>
              <p>Master the learning powering the modern web.</p>
              <h4>Start date: 12-08-2025</h4>
            </div>
            <div>
              <img src="" alt="Completed Task" />
              <img src="" alt="Edit Task" />
              <img src="" alt="Delete Task" />
            </div>

            <div>
              <h3>Learn Javascript</h3>
              <p>Master the learning powering the modern web.</p>
              <h4>Start date: 12-08-2025</h4>
            </div>
            <div>
              <img src="" alt="Completed Task" />
              <img src="" alt="Edit Task" />
              <img src="" alt="Delete Task" />
            </div>
          </div>

          <button>Load More</button>

          <div>
            <div>
              <p>COMPLETED TASK</p>
              <h4>04</h4>
            </div>

            <div>
              <p>PENDING TASK</p>
              <h4>14</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
