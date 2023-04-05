import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import './App.css'
import moment from 'moment';

function App() {
  const [countDown, setCountDown] = useState({} as any);

  useEffect(() => {
    const interval = setInterval(() => {
      const eventTime = moment("2023-04-13 10:00:00");
      const currentTime = moment();
      const diffTime = eventTime.diff(currentTime);
      const duration = moment.duration(diffTime);

      const days = `0${Math.floor(duration.asDays())}`.slice(-2);
      const hours = `0${duration.hours()}`.slice(-2);
      const minutes = `0${duration.minutes()}`.slice(-2);
      const seconds = `0${duration.seconds()}`.slice(-2);
      setCountDown({ days, hours, minutes, seconds });
    }, 1000)


    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <img src="logo.png" alt="" />
      <div className="countdown-list">
        <div className="countdown">
          <p>DIAS</p>
          {countDown.days}
        </div>
        <div className="countdown">
          <p>HORAS</p>
          {countDown.hours}

        </div>
        <div className="countdown">
          <p>MINUTOS</p>
          {countDown.minutes}

        </div>
        <div className="countdown">
          <p>SEGUNDOS</p>
          {countDown.seconds}
        </div>
      </div>
      <div className="icons">
        <a href="https://www.instagram.com/atleticacompuesb/">
        <AiFillInstagram />
        </a>
        <a href="https://twitter.com/atleticacomp">
        <AiFillTwitterCircle />
        </a>
      </div>
    </div>
  )
}

export default App
