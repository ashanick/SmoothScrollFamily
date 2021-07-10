import React, {useReducer} from 'react'

const people = [
    {name: 'Jay', alive: true},
    {name: 'Kailee', alive: true},
    {name: 'John', alive: true},
    {name: 'Mia', alive: true}
  ];

function reducer(state, action) {
    console.log('reducer', action, 'peopel', state)
    if(action.type === 'chomp') {
        const temp = action.payload.name
        console.log('State :' , temp) 
        return people.map (person => {
         if (person.name === action.payload.name) {
             console.log('Change status', )
           person.alive = false;
         }
         return person;
     })}
    if(action.type === 'revive') {
      return people.map(person => {
        if(person.name === action.payload.name) {
          person.alive = true;
        }
        return person;
      })
    }
  } 

  export  const KillingFields =()=> {
    const [state, dispatch] = useReducer(reducer, people)

    return (
        <div style={{margin: '20px', padding: '20px', boxSizing: 'border-box', border: '1px solid black'}}> 
            {state.map((person, idx) => (
                <div key={idx} style={{display: 'flex', width: '50%', justifyContent: 'space-around'}}>
                    <div>{person.name}</div>
                    {person.alive ?
                    <div> ✨✨ ALIVE! ✨✨</div> :
                    <div> ☠ ☠ DEAD ☠ ☠</div>}
                    <button onClick={()=> dispatch ({type: 'chomp', payload: {name: person.name}})} >Chomp</button>
                    <button onClick={()=> dispatch ({type: 'revive', payload: {name: person.name}})} >Revive</button>
                </div>
            ))}
        </div>
    )
}

 
