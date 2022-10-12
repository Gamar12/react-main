import u from "../../Users/User.module.css";
import React from "react";


const Paginator = ({totalElementForPage, pageSizeElement, currentPage, onChangePage}) => {
    let pagesCount = Math.ceil(totalElementForPage / pageSizeElement);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            { pages.map(page => <span key={page} className={page === currentPage ? u.currentPage : ''} onClick={() => onChangePage(page)}> {page}</span>) }
        </div>
    )
}

export default Paginator;