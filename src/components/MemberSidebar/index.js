import React, {useState, useEffect} from 'react'
import MemberList from '../../Data/MembersData.json'
import {NavLink} from 'react-router-dom'

const MemberSidebar = () => {
    const [members, setMembers] = useState([])

    useEffect(() => {
        const temp = MemberList.data;
        setMembers(temp)
    }, [members])
    console.log('Members Side Bar Data : ', members)

    return (
        <div>
            <h3>Members List</h3>
            <div>
                {
                    members.map(mm => {
                        return (
                            <NavLink key={mm.Id} 
                                to={`/members/${mm.Id}`}>
                                <div>{mm.FirstName}  {mm.LastName}</div>
                            </NavLink> 
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MemberSidebar
