import { useEffect, useState } from "react";
import { CryptoTableProps, DisplayCurrency, Filter, Header, initFilter, initHeader } from "./Cryptos-Types";
import { FilterBar } from "./Cryptos-FilterBar";
import { TableBody } from "./Cryptos-Body";
import { TableHeader } from "./Cryptos-Header";

export const CryptoTable = ({processedCurrencies, setLoading}: CryptoTableProps) =>
    {
        const [currencies, setCurrencies] = useState<DisplayCurrency[]>(processedCurrencies);
        const [headers, setHeaders] = useState<Header[]>(initHeader);
        const [filters, setFilters] = useState<Filter[]>(initFilter);
    
        useEffect(()=>{
            let fdate = filters.find(f => f.label === "DateTime")?.filters;
            let fprice = filters.find(f => f.label === "Price")?.filters;
            let fsymbol = filters.find(f => f.label === "Symbol")?.filters;
            let currs = processedCurrencies
                .filter(pc => fdate?.length === 0 || pc.date.toISOString().split('T')[0] === fdate![0] )
                .filter(pc => fsymbol?.length === 0 || pc.symbol === fsymbol![0])
            setCurrencies(currs);
        },[filters])
    
    
        return (
            <div className="crypto-table">
                    <hr/>
                    <TableHeader headers = {headers} setHeaders = {setHeaders} />
                    
                    <hr/>
                    <TableBody currencies = {currencies} headers = {headers} filters = {filters} setLoading={setLoading}/>
                    
                    <hr/>
                    <FilterBar currencies = {processedCurrencies} filters = {filters} setFilters = {setFilters} />
                    
                    <hr/>
                    <button onClick={()=> setFilters(initFilter)}>Reset Filters</button>
            </div>
        )
    }