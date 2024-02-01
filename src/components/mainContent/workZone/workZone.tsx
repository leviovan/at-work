
import React, { FC } from 'react'
import style from './workZone.module.scss'
import {  RootInterface } from '../../../store/userSlice/userSlice'

    interface IProps{
        users:RootInterface[],
        type:boolean,
        title:string,

    }


 const WorkZone:FC<IProps> = ({users,type,title}: IProps,) => {



  return (
    <div className={style.active}>
    <h2 className={style.title}>{title}</h2>
    <div className={style.content}>
    {users ? users.map((user,i)=> { return i<6 &&<div key={`user ${i}`} className={style.item}>
        {type &&<div className={style.gray}></div>}

        <img className={style.img} src="./../src/assets/ava.png" alt="" />
        <div className={style.desc}>
          <div className={style.tag}>
            <h4 className={style.title}> {user.name}</h4>
            <p >{user.company.name} </p> </div>
          <p>Санкт-Петербург</p>
        </div>
      </div>}):
        <div>loaded</div>}
        </div>
    </div>


  )
}

export default WorkZone