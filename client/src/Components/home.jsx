import React,{useContext} from 'react'
import { UserContext } from "../UserContext";
import Gallery from "./Gallery";

export default function Home() {
  return (
    <div>
      <Gallery/>
      </div>
  )
}
