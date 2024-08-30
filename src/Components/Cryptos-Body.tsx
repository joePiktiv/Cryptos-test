import { DisplayCurrency, SortByHeaders, TableBodyProps } from "./Cryptos-Types";

export const TableBody = ({currencies, headers, filters, setLoading}: TableBodyProps) => {
    
    let sortThis = headers.filter(h => h.sorting !== null);
    currencies = (sortThis.length !== 0) ? SortByHeaders(currencies, sortThis[0]): currencies;

    return (
        <div className="table-body">
           { currencies.map((curr,index) => <TableBodyRow key = {index} row = {curr} />)}
        </div>
    )
}

export const TableBodyRow = ({row}: {row:DisplayCurrency}) =>
{
    return (
        <div className="table-header">
            <div className="table-item">{row.date.toISOString()}</div>
            <div className="table-item">{row.symbol}</div>
            <div className="table-item">{row.price}</div>
        </div>
    )
}
