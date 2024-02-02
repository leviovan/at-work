import style from "./profile.module.scss";
import { Link, useParams } from "react-router-dom";
import { Field, Formik } from "formik";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import * as Yup from 'yup';
import PopupProfile from "./popupProfile/popupProfile";
import { useState } from "react";

const Profile = () => {

    const {id} =useParams();
     const {name="",username="",address={city:""},company={name:""},phone="",email=""}= useSelector((state:RootState)=>state.users.users[Number(id)-1]);

     const  [isSubmiting, setIsSubmiting]= useState(false)

    
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        login: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        company: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
          city: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        number: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
      });

  return (
    <div className={style.profile}>
      <div className="container">
        <div className={style.body}>
          <p className={style.return}>
            <Link to={`/`}>Назад</Link>
          </p>
          <div className={style.content}>
            <div className={style.setting}>
              <img
                className={style.img}
                src="./../src/assets/avaBig.png"
                alt="ava"
              />
              <ul className={style.category}>
                <li className={style.item}>Данные профиля</li>
                <li className={style.item}>Рабочее пространство</li>
                <li className={style.item}>Приватность</li>
                <li className={style.item}>Безопасность</li>
              </ul>
            </div>
            <div className={style.data}>
              <h4 className={style.title}>Данные профиля</h4>
              <Formik
                initialValues={{
                  name: name,
                  login: username,
                  email: email,
                  city: address.city ,
                  number: phone,
                  company: company.name,
                }}
                 validationSchema={SignupSchema}
                 onSubmit={(values,isSubmitting) => {
                  console.log(values);
                  console.log(isSubmitting);
                  setIsSubmiting(true)
                  setTimeout(()=>{
                    setIsSubmiting(false)
                  },4000
                  )
                }}
              >
                {({
                  values,
                   errors,
                   touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  }) => (                   
                  <form className={style.form} onSubmit={handleSubmit}>
                    <label   className={style.label} htmlFor="name">Имя</label>
                    <Field  className={style.input}
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <label  className={style.label} htmlFor="login">Никнейм</label>
                    <Field  className={style.input}
                      type="text"
                      name="login"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.login}
                    />{" "}
                    <label  className={style.label} htmlFor="email">Почта</label>
                    <Field  className={style.input}
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />{" "}
                    <label  className={style.label} htmlFor="city">Город</label>
                    <Field  className={style.input}
                      type="text"
                      name="city"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.city}
                    />
                    <label  className={style.label} htmlFor="number">Номер</label>
                    <Field  className={style.input}
                      type="phone"
                      name="number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.number}
                    />
                    <label  className={style.label} htmlFor="company">Компания</label>
                    <Field  className={style.input}
                      type="text"
                      name="company"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.company}
                    />
                    <button className={style.submit} type="submit">Сохранить</button>
                    {isSubmiting && <PopupProfile closeHandler={()=>setIsSubmiting(false)}/>}
                  </form>
                
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
