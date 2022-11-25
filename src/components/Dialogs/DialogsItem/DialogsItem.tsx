import c from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';
import {DialogsDataType} from '../../../types/types';

type DialogsItemPropsType = {
  dialogsData: Array<DialogsDataType>,
}

export const DialogsItem = (props: DialogsItemPropsType) => {
  let dialog = props.dialogsData.map((e, i) => {
    let path = '/dialogs/' + e.id
    return (<div key={i} className={c.dialog}>
      <img src="https://cdn-0.emojis.wiki/emoji-pics/twitter/orange-circle-twitter.png" alt=""/>
      < NavLink to={path} className={c.name}> {e.name}</NavLink>
    </div>)
  })
  return (
    <div className={c.dialogsItem}>
      {dialog}
    </div>
  )
}