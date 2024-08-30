export interface DailyPrice {
    timestamp : string,
    price : number,
}

export interface Currency {
    currencyType : string,
    dailyPrices : DailyPrice[],
    min : number,
    max : number,
    normalisedRange: number,
}

export interface DisplayCurrency {
    date : Date,
    symbol : string,
    price : number,
}

export interface CryptoTableProps {
    processedCurrencies : DisplayCurrency[],
    setLoading : (value : boolean) => void;
}

export interface FilterBarProps {
    currencies : DisplayCurrency[];
    filters : Filter[];
    setFilters :  (value : Filter[]) => void
}

export interface SelectorProps {
    tag: string,
    initValue? : string,
    options : string[] ,
    setSelectedValue : (value: any) => void
}

export interface TableBodyProps {
    currencies : DisplayCurrency[];
    headers : Header[];
    filters : Filter[];
    setLoading : (value:boolean)=> void;
}

export interface TableHeaderProps {
    headers : Header[],
    setHeaders : (value : Header[]) => void
}

export interface TableHeaderItemProps {
    headerItem : Header,
    setSortItem : (value: string) => void
}

export type Header = {
    label : string,
    sorting : SortingSelector,
}

export type Filter = {
    label : string ,
    filters : (string| number)[],
}

export type SortingSelector = "up"|"down"|null;

export const sortingOrder = ["up","down",null];   
    
export const initHeader = [
    {label: "DateTime", sorting : null}, 
    {label: "Symbol", sorting: null},
    {label: "Price", sorting: null}
]

export const initFilter = [
    {label: "DateTime", filters:[]}, 
    {label: "Symbol", filters:[]},
    {label: "Price", filters:[]}
]


export const ConverToDisplayCurrencies = (data : Currency[]) =>
    {
        return data.map(d => d.dailyPrices
            .map(dp =>{ return {date : new Date (dp.timestamp), symbol: d.currencyType, price : dp.price  } }))
            .reduce((a,b) => a.concat(b) , []);
    }


export const onlyUnique = (value:any, index: number, array: any[]) =>
        {
            return array.indexOf(value) === index;
        }


export const SortByHeaders = (currencies : DisplayCurrency[] , header: Header) =>
            {
                currencies.sort((a,b)=> 
                    {
                        if (header.label === "DateTime") return (header.sorting === "down" ? -1 : 1) * (a.date < b.date ? -1 : 1) ;
                        else if (header.label === "symbol") return (header.sorting === "down" ? -1 : 1) * (a.symbol < b.symbol ? -1 : 1) ;
                        else return (header.sorting === "down" ? -1 : 1) * (a.price < b.price ? -1 : 1) ;
                    });
                return currencies;
            }


export const SortNext = (headers:Header[], sortItem:string) =>
                {   
                    return sortItem === "" 
                        ? headers 
                        : headers.map(h => {
                        if (h.label === sortItem) {
                            if (h.sorting === "up") h.sorting = "down"
                            else if (h.sorting === "down") h.sorting = null
                            else h.sorting = "up";
                        } else h.sorting = null;
                            return h;
                    } )
                }