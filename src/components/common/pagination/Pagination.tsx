import React from 'react';
import s from "./Pagination.module.css";

type PanaginationType ={
    currentPage: number
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (page: number) => void
    }

export const Pagination: React.FC<PanaginationType> = ({pageSize,totalUsersCount,currentPage,onPageChanged}) =>{
    const page = []
    const pageCount = Math.ceil(totalUsersCount / pageSize)
    for (let i = 1; i <= pageCount; i++) {
        page.push(i)
    }
    const previousClickHandler = () => {
        (currentPage - 10 < 1) ? onPageChanged(1) : onPageChanged(currentPage - 10)
    }

    const nextClickHandler = () => {
        (currentPage + 10 > pageCount) ? onPageChanged(pageCount) : onPageChanged(currentPage + 10)
    }

    const endPageHandler = () => onPageChanged(pageCount)

    let renderPage
    if (0 < currentPage &&  currentPage < 6) {
        renderPage = page.filter(p => p >= 1 && p <= 11 )
    } else {
        renderPage = page.filter( p => ( p >= currentPage -5 && p<= currentPage + 5))
    }
    return (<div>
        {
          currentPage > 6 ?
          < button onClick={previousClickHandler}>prv</button> : null
        }
        {renderPage.map((p, i) => {
            return <span key={i} className={currentPage === p ? s.PageActive : s.Page} onClick={(e) => {
                onPageChanged(p)
            }}>{p}</span>
        })
        }
        {
          currentPage + 5 <= pageCount ?
              <button onClick={nextClickHandler}>next</button> : null
        }
        <button onClick={endPageHandler}>end page</button>
    </div>)

}