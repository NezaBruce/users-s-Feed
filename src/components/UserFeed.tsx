import React from 'react'
import "./UserFeed.css";

const UserFeed: React.FC = () => {

    const users = [
      {
        name:'Syket',
        age:20,
        designation:'Software Engineer'
      },
      {
        name:'Sakib jamy',
        age:25,
        designation:'Programmer'
      },
      {
        name:'Jamy',
        age:30,
        designation:'Designer'
      },
      {
        name:'Manif',
        age:20,
        designation:'UX Writer'
      }
    ]
  const [userList,setUsetList] = React.useState<
  {name:string,age:number,designation:string} [] | undefined
  >(users);
  const [text,setText] = React.useState<string>('');

  const handleOnClick = ()  => {
      const findUsers = 
      userList && userList?.length > 0 
        ? userList?.filter(u => u?.name.toLowerCase() === text.toLowerCase()) 
        : undefined;
      setUsetList(findUsers);
      console.log(findUsers);
      console.log(text);

  }
  return (
    <div>
      <div className="title"> 
        <h1>UserFeed</h1>
      </div>
      <div className='input__wrapper'>
        <input 
        type="text" 
        placeholder='search'
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setUsetList(users);
        }}
        />
        <button disabled={!text} onClick={handleOnClick}>Search</button>

      </div>
      <div className='body'>

        {userList && userList?.length === 0 && (
            <div className='notFound'>No user Found </div>
        )}

        {userList && 
          userList?.length>0 && 
          userList?.map((user) => {
          return (
            <div className="body__item">
              <h3>Name {user?.name}</h3>
              <p>Age:{user?.age}</p>
              <p>Designation:{user?.designation}</p>
            </div>
          )
        })}
      </div>
    </div>
    );
};

export default UserFeed;