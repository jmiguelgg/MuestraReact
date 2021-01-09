import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Menu from '../componets/menu';
import Answares from '../componets/answares';
import Data from '../componets/ejercicios';

export default function Home() {
  return (
    <div>
      <Menu />
      <h1>Este es nuestro proyecto con react</h1>
      <Answares data={Data}/>
    </div>
  )
}
