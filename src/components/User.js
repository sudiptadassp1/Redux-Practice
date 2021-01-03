import React from 'react'

const User = (props) =>{

    
    return (
        <div>
            {
                props.data.userList.map(list =>{
                    return(
                        <h3 key={list.name}>{list.name}: {list.age}</h3>
                    )
                    
                })
            }
        </div>
    )
}
export default User;
