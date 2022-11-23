import React from 'react'
import style from '../../../styles/Footer.module.scss'



const Footer = (props: FooterPropsType) => {
  return (
    <div className={style.footer}>{props.title}</div>
  )
}

export default Footer