import style from "./mainContent.module.scss";
import {  useDispatch, useSelector } from 'react-redux'
import {  AppDispatch, RootState } from "../../store/store";
import WorkZone from "./workZone/workZone";
import { useEffect } from "react";
import { fetchUsers } from "../../store/userSlice/userSlice";

const MainContent = () => {


  const dispatch =useDispatch<AppDispatch>()

  useEffect( () => {
  dispatch(fetchUsers())
  },[])

  const usersActive= useSelector((state:RootState)=>state.users.usersActive)
  const usersArchive= useSelector((state:RootState)=>state.users.usersArchive)
  return (
    <div className={style.mainContent} >
      <div className="container">
        <div className={style.body}>  
          <WorkZone users={usersActive} type={false} title="Активные" />
          <WorkZone  users={usersArchive} type={true} title="Архив"  />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
