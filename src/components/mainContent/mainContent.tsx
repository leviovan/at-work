import style from "./mainContent.module.scss";
const MainContent = () => {

  return (
    <div className={style.mainContent} >
      <div className="container">
        <div className={style.body}>  
         <div className={style.active}>
          <h2 className={style.title}>Активные</h2>
          <div className={style.content}>
            <div className={style.item}>
              <img className={style.img} src="./../src/assets/ava.png" alt="" />
              <div className={style.desc}>
                <div className={style.tag}>
                  <h4 className={style.title}> Ivan1234</h4>
                  <p >At-Work  </p> </div>
                <p>Санкт-Петербург</p>
              </div>

            </div>
          </div>
        </div>
          <div className={style.active}></div>
          <h2 className={style.title}>Архив</h2>
          <div className={style.content}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
