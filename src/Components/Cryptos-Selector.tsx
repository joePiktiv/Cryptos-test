import { useState } from "react";
import { SelectorProps } from "./Cryptos-Types"

export const Selector = ({tag, options, setSelectedValue}:SelectorProps) => {
    options.push( "" );

    return (
        <label className="table-item">
            {tag}
            <select key={tag} onChange={(e) => setSelectedValue(e.target.value)} >
                {options.map((o,index) => <option key={index} value={o} >{o}</option>   )}
            </select>
        </label>
    )
}
