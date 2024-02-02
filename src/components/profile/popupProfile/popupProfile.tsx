import React, { FC } from 'react'
import style from './popupProfile.module.scss'

interface IpopupProfile{
    closeHandler:()=>void
}

const  PopupProfile:FC<IpopupProfile>=({closeHandler}) =>{
    console.log(closeHandler);
    
  return (
    <><div className={style.background}></div>
    <div className={style.popup}>
        <button onClick={()=>closeHandler()} className={style.close}></button>
        <svg width="59.333984" height="59.430420" viewBox="0 0 59.334 59.4304" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <defs/>
        <path id="Icon" d="M13.2759 0.905762C24.082 -0.302002 35.252 -0.302002 46.0586 0.905762C50.1157 1.35938 53.6772 3.55347 55.9302 6.73975L27.917 34.7529L19.2734 26.1091C18.248 25.084 16.5859 25.084 15.561 26.1091C14.5356 27.1343 14.5356 28.7961 15.561 29.8213L26.061 40.3213C27.0859 41.3464 28.748 41.3464 29.7734 40.3213L58.1772 11.9172C58.2559 12.3008 58.3188 12.6902 58.3647 13.085C59.6572 24.134 59.6572 35.2964 58.3647 46.3455C57.6128 52.7749 52.4507 57.8101 46.0586 58.5247C35.252 59.7324 24.082 59.7324 13.2759 58.5247C6.8833 57.8101 1.72119 52.7749 0.969238 46.3455C-0.323242 35.2964 -0.323242 24.134 0.969238 13.085C1.72119 6.65552 6.8833 1.62036 13.2759 0.905762Z" fill="#C6F4C6" fillOpacity="1.000000" fillRule="nonzero"/>
        </svg>
        <h4>Изменения сохранены!</h4>
    </div>
    </>
  )
}

export default PopupProfile
