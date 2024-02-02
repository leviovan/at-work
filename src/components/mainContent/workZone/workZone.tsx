
import React, { FC, useRef } from 'react'
import style from './workZone.module.scss'
import { RootInterface, activedUser, archiveUser } from '../../../store/userSlice/userSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../store/store'
import { Link } from 'react-router-dom'

interface IProps {
    users: RootInterface[],
    type: boolean,
    title: string,
}


const WorkZone: FC<IProps> = ({ users, type, title, }: IProps,) => {
    const arrayRef = useRef([])
    arrayRef.current = []
    const dispatch = useDispatch<AppDispatch>()

    const addReff = (el: HTMLDivElement) => {

        if (el && !arrayRef.current.includes(el as never)) {
            arrayRef.current.push(el as never)
        }
    }
    const tooglePopup = (i: number) => {
        const type = { 'flex': 'none', 'none': 'flex' }
        let typeType = arrayRef.current[i].style.display;
        !typeType ? typeType = type['flex'] : "";
        arrayRef.current[i].style.display = type[typeType];
    }
    const activeUser = (user: RootInterface) => {
        dispatch(activedUser(user))
    }
    const acriveUser = (user: RootInterface) => {
        dispatch(archiveUser(user))
    }
    return (
        <div className={style.active}>
            <h2 className={style.title}>{title}</h2>
            <div className={style.content}>
                {users ? users.map((user, i) => {
                    return <div key={`user ${i}`} className={style.item}>
                        {type && <div className={style.gray}></div>}
                        <button className={style.btn} onClick={() => tooglePopup(i)}>
                            {title === 'Активные' ? <div ref={addReff} className={style.popup}>
                                <p><Link to={`/${user.id}`}>Редактировать</Link></p>
                                <p onClick={() => acriveUser(user)}>Архивировать</p>
                                <p>Скрыть</p>
                            </div>
                                : <div ref={addReff} className={style.popup}>
                                    <p onClick={() => activeUser(user)}>Активировать</p>
                                </div>}
                        </button>

                        <img className={style.img} src="./../src/assets/ava.png" alt="" />
                        <div className={style.desc}>
                            <div className={style.tag}>
                                <h4 className={style.title}> {user.name}</h4>
                                <p >{user.company?.name} </p> </div>
                            <p>{user.address?.city}</p>
                        </div>
                    </div>
                }) :
                    <div>loaded</div>}
            </div>
        </div>


    )
}

export default WorkZone