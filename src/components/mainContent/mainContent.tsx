import {  fetchUsers } from "../../store/userSlice/userSlice";
import style from "./mainContent.module.scss";
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from "../../store/store";
import WorkZone from "./workZone/workZone";

const MainContent = () => {
    
  const dispatch =useDispatch<AppDispatch>()
  const users= useSelector((state:RootState)=>state.users.users)
    useEffect( () => {
    dispatch(fetchUsers())
    },[])


  return (
    <div className={style.mainContent} >
      <div className="container">
        <div className={style.body}>  
        
          <WorkZone users={users} type={false} title="Активные"/>
          <WorkZone  users={users} type={true} title="Архив"/>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
