import { getImageUrl } from './utils.js';

let s1 = {
    name:"Maria Skłodowska-Curie",
    id:"szV5sdG",
    profession:"physicist and chemist",
    awardNo:'4',
    award:"(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
    discover:"polonium (element)"
}
let s2 = {
    name:"Katsuko Saruhashi",
    id:"YfeOqp2",
    profession:"geochemist",
    awardNo:'2',
    award:"(Miyake Prize for geochemistry, Tanaka Prize)",
    discover:"a method for measuring carbon dioxide in seawater"
}


export function Profile(props){
  return (
    <>
      <section className="profile">
        <h2>{props.data.name}</h2>
        <img
          className="avatar"
          src={getImageUrl(props.data.id)}
          alt={props.data.name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {props.data.profession}
          </li>
          <li>
            <b>Awards: {props.data.awardNo} </b> 
            {props.data.award}
          </li>
          <li>
            <b>Discovered: </b>
            {props.data.discover}
          </li>
        </ul>
      </section>
    
    
    </>
  )
}

export default function Gallery() {

  return (
    <div>
      <h1>Notable Scientists</h1>

      <Profile data={s1}/>
      <Profile data={s2}/>
      
    </div>
  );
}
