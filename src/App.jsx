import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rental from './Rental';

function App() {
  const properties = [
    { id: 129031, name: "Desert Yurt", rating: 4.9, price: "15,000" },
    { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: "25,000" },
    { id: 129032, name: "Cactus Retreat", rating: 4.75, price: "30,000" },
    { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 1200 },
    { id: 129034, name: "Oceanview Condo", rating: 4.7, price: "14,000" },
    { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: "960" },
    { id: 129036, name: "Palm Springs", rating: 4.6, price: "11,000" },
    { id: 129037, name: "Beachfront View", rating: 4.44, price: "13,600" },
  ];

  return (
    <>
      {properties.map(
        rental => (
          <Rental key={rental.id} {...rental} />
        ))}
    </>
  )
}

export default App
