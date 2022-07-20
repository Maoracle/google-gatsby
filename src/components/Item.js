import React from 'react'

import * as moduleStyles from './list.module.css';

export default function Item({ icon, name, url, clickHandle }) {
  console.log(url)
  return (
    <>
    <a
      href={url}
      draggable="true"
    >
      <div
        role="button"
        tabIndex="0"
        className={moduleStyles.tile}
        onClick={clickHandle}
        onKeyDown={clickHandle}
      >
        <div className={moduleStyles.tileIcon}>
          <img src={icon} alt="" />
        </div>
        <div className={moduleStyles.tileTitle}>
          <span>{name}</span>
        </div>
      </div>
      </a>
    </>
  )
}
