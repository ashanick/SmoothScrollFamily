import React, {useState, useCallback} from 'react'
import Count from './Count'
import ButtonCount from './ButtonCount'

const HookUseCallback = () => {
    const [age, setAge] = useState(30)
    const [salary, setSalary] = useState(50000)
    const redStyle= "red"
    const greenStyle= "green"

    let IncAge = useCallback (()=>{
        setAge(age+1)
    }, [age])

    let IncSalary = useCallback(() => {
        setSalary(salary+1000)
    }, [salary])

    return (
        <div style={{margin: '20px', padding: '20px', boxSizing: 'border-box', border: '1px solid black'}}>
           <h1>Use CallBack POC</h1> 
           <div style={{display: 'flex', padding: '50'}}>
                <div style={{margin: '50px'}}>
                    <Count text="Age" count={age} />  
                    <ButtonCount handleClick={IncAge} bstyle={redStyle}>Increase Age</ButtonCount>  
                </div>
                <div style={{margin: '50px'}}>
                    <Count text="Salary" count={salary} />  
                    <ButtonCount handleClick={IncSalary} bstyle={greenStyle}>Increase Salary</ButtonCount>  
                </div>
           </div>
        </div>
    )
}

export default HookUseCallback
