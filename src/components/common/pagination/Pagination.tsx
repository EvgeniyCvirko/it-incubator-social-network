import React, {useState} from 'react';
import s from "../../Users/Users.module.css";

type PanaginationType ={
    currentPage: number
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (page: number) => void
    portionSize: number
}

export const Pagination = (props:PanaginationType) =>{
    const page = []
    console.log(props.totalUsersCount, props.pageSize )
    const pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    for (let i = 1; i <= pageCount; i++) {
        page.push(i)
    }
    const potionCount = Math.ceil(props.totalUsersCount / props.portionSize)
    const [portionNumber, setPortionNumber] = useState<number>(1)
    const leftPage = (props.currentPage - 1)

    return (<div>
        {page.map((p,i) => {
            return <span key={i} className={props.currentPage === p ? s.PageActive : s.Page} onClick={(e) => {
                props.onPageChanged(p)
            }}>{p}</span>
        })}
    </div>)

}