import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import reactLogo2 from '/react.svg';
import sprite from '/sprite.svg';

import ReactLogo from './assets/react.svg?react';

const Icon = ({id}) => {
  return (
    <svg className={'mysvg'}><use href={`${sprite}#${id}`}/></svg>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ReactLogo/>

        <Icon/>

        <button>
          <svg
            className="item__like"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            style={{
              fill: state?.isLiked === true ? "#fc477e" : "",

              transition: "all 0.3s ease 0s",
            }}
          >
            <path d="M24,11.034a2.5,2.5,0,0,0-2.5-2.5H15.189a.25.25,0,0,1-.237-.328,8.684,8.684,0,0,0,.52-4.407c-.588-2.095-1.834-2.7-2.809-2.565A2,2,0,0,0,11,3.284C11,6.03,8.871,9.03,6.966,10.345a.5.5,0,0,0-.216.412V20.873a.5.5,0,0,0,.405.491c.357.069.681.135.987.2a17.309,17.309,0,0,0,4.108.471h6.5c1.957,0,2.25-1.1,2.25-1.75a2.24,2.24,0,0,0-.232-.994,2.248,2.248,0,0,0,1-3A2.252,2.252,0,0,0,23,14.284a2.226,2.226,0,0,0-.273-1.072A2.5,2.5,0,0,0,24,11.034Z"></path>
            <path d="M5.25,10.784a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1v11a1,1,0,0,0,1,1H4.25a1,1,0,0,0,1-1Zm-1.5,9.25a.75.75,0,1,1-.75-.75A.75.75,0,0,1,3.75,20.034Z"></path>
          </svg>
        </button>

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" loading={'lazy'} />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" loading={'lazy'} />
        </a>

        <div >
          <svg className={'mysvg'}><use href={`${reactLogo2}#react`}/></svg>
        </div>

        <div>

          <svg className={'mysvg'}><use href={`${sprite}#join-meeting`}/></svg>
          <svg className={'mysvg'}><use href={`${sprite}#add-personal`}/></svg>
          <Icon id={'join-meeting'}/>
        </div>

      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
