import React from 'react'
import s from './style.module.sass';

export default function index({add}) {
  const submit = (event) => {
    event.preventDefault();
    const { name, photo } = event.target;
    add(name.value, photo.value);
    name.value = '';
    photo.value = '';
  }


return (
<div>
    <form onSubmit={submit} className={s.wrapper}>
        <input placeholder='Имя' type="text" name='name' />
        <input placeholder='Фото' type="text" name='photo' />
        <button className={s.button}>Добавить</button>
    </form>
    
</div>
)
}
