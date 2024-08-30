import { useEffect, useState } from "react";
import { FilterBarProps, onlyUnique } from "./Cryptos-Types";
import { Selector } from "./Cryptos-Selector";

export const FilterBar = ({currencies,filters, setFilters}:FilterBarProps) => {
    let optionsDate = currencies.map(curr => curr.date.toISOString().split('T')[0]).filter(onlyUnique).sort((a,b)=> a < b ? -1 : 1);
    let optionsSymbol = currencies.map(curr => curr.symbol).filter(onlyUnique).sort((a,b)=> a < b ? -1 : 1);
    let optionsPrice = currencies.map(curr => curr.price).filter(onlyUnique).sort((a,b)=> a < b ? -1 : 1);

    let fdate = filters.find(f => f.label === "DateTime")?.filters;
    let dateInit = (fdate?.length === 0) ? "" : fdate![0];

    let fsymbol = filters.find(f => f.label === "Symbol")?.filters;
    let symbolInit = (fsymbol?.length === 0) ? "" : fsymbol![0];

    let fprice = filters.find(f => f.label === "Price")?.filters;
    let priceInit = (fprice?.length === 0) ? 0 : fprice![0];

    const [selectedDate, setFilterDate] = useState<string | number>(dateInit);
    const [selectedSymbol, setFilterSymbol] = useState<string | number>(symbolInit);
    const [selectedPrice, setFilterPrice] = useState<string | number>(priceInit);
    
    useEffect(()=> {
        filters = [        
            {label: "DateTime", filters: selectedDate === "" ? [] : [selectedDate] }, 
            {label: "Symbol", filters: selectedSymbol === "" ? []: [selectedSymbol]},
            {label: "Price", filters: selectedPrice === 0 ? [] : [selectedPrice]}]
        setFilters(filters);
    }, [selectedDate, selectedSymbol, selectedPrice])

    return (
        <div className="table-header">
            <Selector key = "Date" tag = "Date: "  options = {optionsDate} setSelectedValue = {setFilterDate} />
            <Selector key = "Symbol" tag = "Symbol: "  options = {optionsSymbol} setSelectedValue = {setFilterSymbol} />
        </div>
    )
}
