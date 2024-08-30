import { useEffect, useState } from "react";
import { SortNext, TableHeaderItemProps, TableHeaderProps } from "./Cryptos-Types";

export const TableHeader = ({headers, setHeaders}: TableHeaderProps) => {
    const [sortItem, setSortItem] = useState<string>("");

    useEffect(()=>{

        setSortItem("");
        setHeaders(SortNext(headers, sortItem));

    },[sortItem])

    return (
        <div className="table-header">
            {headers.map((h,index) => <HeaderItems key={index} headerItem={h} setSortItem={setSortItem} />)}
        </div>
        
    )
}

export const HeaderItems = ({headerItem, setSortItem}: TableHeaderItemProps) => {
    return <div onClick= {() => setSortItem(headerItem.label)} className="table-item">
        {headerItem.label} {(headerItem.sorting === "up" && <strong>&#x25b4;</strong>)}{(headerItem.sorting === "down" && <strong>&#x25be;</strong>)}
        </div>
}