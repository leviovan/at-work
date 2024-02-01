import {  fetchUsers } from "../../store/userSlice/userSlice";
import style from "./mainContent.module.scss";
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from "../../store/store";
import WorkZone from "./workZone/workZone";

const MainContent = () => {
    
  const dispatch =useDispatch<AppDispatch>()
  const usersActive= useSelector((state:RootState)=>state.users.usersActive)
  const usersArchive= useSelector((state:RootState)=>state.users.usersArchive)
    useEffect( () => {
    dispatch(fetchUsers())
    },[])

    // const popupActive=['Редактировать', 'Архивировать' , 'Скрыть']

    // const popupArchive=['Активировать']

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
