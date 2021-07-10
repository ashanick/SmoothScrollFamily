import React, {useState, useReducer} from 'react'

const initialState = [
    { id: Date.now(), name: "Asha", email: "asha@gmail.com"}];


function reducer(state, action) {
    switch (action.type) {
        case "add": 
            return [...state, action.payload]
        case "delete" : 
        return state.filter((contact) =>
            { return contact.id !== action.payload.id})
        default: break;
    }
}

const LearnReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    console.log(state)

    const addContact=(e) => {
        e.preventDefault()
        const contact = {
            id: Date.now(),
            name,
            email,
        }
        setName("")
        setEmail("")
        dispatch({type:"add", payload:contact})
    }

    return (
        <div>
            <h1> Use Reducer Hook : </h1>
            <form onSubmit={addContact}>
                <input type="text" 
                onChange= {(e)=>setName(e.target.value)}
                value={name}
                placeholder = "name"
                />

                <input type="text" 
                onChange= {(e)=>setEmail(e.target.value)}
                value={email}
                placeholder = "email"
                />
                <div> <button type="submit">Add Contact</button></div>
            </form>

            <div>
                <ul >
                    {state.map(contact =>{
                        return (<li key={contact.id} style={{display:'flex'}}>
                            <h2 style={{padding: '10px 20px 10px 20px'}}>{contact.name}</h2>
                            <h2 style={{padding: '10px 20px 10px 20px'}}>{contact.email}</h2>
                            <div>
                                <button 
                                    onClick={() => dispatch({type: 'delete', payload: {id: contact.id}})}>Delete
                                </button>
                            </div>
                        </li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default LearnReducer
