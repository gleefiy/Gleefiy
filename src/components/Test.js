import React from 'react'
import { useState, useEffect } from 'react';
import {get,ref} from 'firebase/database';
import { database } from '../firebaseConfig';



function Test() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const usersref=ref(database,'blog_data');
        get(usersref).then((snapshot)=>{
            if(snapshot.exists()){
                // console.log(snapshot.val());
                // setUser(snapshot.val());
                const usersArray = Object.entries(snapshot.val()).map(([id,data]) => ({
                    id,
                    ...data
                }));
                setUser(usersArray);
            }else{
                console.log('No data available');
            }
        }).catch((error)=>{
            console.error(error);
        });
    },[])
  return (
    <div>
      <h1>fetch data from</h1>
      {user.map((data)=>(
          <div key={data.id}>
              <h1>{data.title}</h1>
              <p>{data.excerpt}</p>
          </div>
      ))}
    </div>
  )
}

export default Test;
