import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import Members from '../components/Members'

const MembersPage = (props) => {
    console.log ('Members Page : ', props)
    return (
        <>  
            <ScrollToTop />
            <Members {...props}/>
        </>
    )
}

export default MembersPage
