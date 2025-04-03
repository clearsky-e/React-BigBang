import { useMemo, useState } from "react";

export const LearnMemo = () => {
  const users = [
    {
      id: 1,
      name: "Star Lord",
    },
    {
      id: 2,
      name: "Groot",
    },
    {
      id: 3,
      name: "Panther",
    },
    {
      id: 4,
      name: "Tony Stark",
    },
    {
      id: 5,
      name: "Loki",
    },
    {
      id: 6,
      name: "Docter Strange",
    },
    {
      id: 7,
      name: "Gamora",
    },
    {
      id: 8,
      name: "Ant Man",
    },
  ];

  const [search,setSearch] = useState("");

  const flteredSearch = useMemo(()=>{
    console.log("filtering the users");
    return users.filter((user)=>{
       return user.name.toLowerCase().includes(search.toLowerCase())
    })
    
  },[search, users]);

  return (
    <>
      <h2>Search Filter</h2>
      <input type="text" name="" id="" value={search} onChange={(e)=> setSearch(e.target.value)} />
      <ul style={{border:"2px solid red"}}>
        {flteredSearch.map((user)=>{
             return <li key={user.id}>{user.name}</li>
        })}
      </ul>
    </>
  );
};
