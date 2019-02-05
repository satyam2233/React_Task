import React from 'react'
import ChangeLanguage from './changeLanguage/changeLanguage'
import Visit from './visit'
import Input from './Input.js'
import HelloWorld from './lines/HelloWorld'
import GoodMorning from './lines/GoodMorning'
import HowRU from './lines/HowRU'
import AllGood from './lines/AllGood'

const App = () => {
  return (
    <div>
      <div>
        <ChangeLanguage />
        <br />
        <Input />
      </div>
      <div>
        <HelloWorld />
        <GoodMorning />
        <HowRU />
        <AllGood />
      </div>
    </div>
  )
}

export default App
