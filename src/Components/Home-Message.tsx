import { Currency } from "./Cryptos-Types";
import { DateType } from "./Home";
import ReactLoading from "react-loading";

interface MessageProps  {
    currency : Currency | null,
    loading : boolean,
    date : DateType
}

export const Message = ({currency, loading, date} : MessageProps) => 
{
    let template = `The cryptocurrency with the highest normalized range on ${date?.toLocaleDateString()}, is ${currency?.currencyType}, 
    with a normalised range of ${((currency?.normalisedRange ?? 0) * 100).toFixed(4)}%.`;

    let notFound = `No data found on ${date?.toLocaleDateString()}.`

    return (
        <div className="message">
                {loading 
                ? <ReactLoading type = {"bars"} color="blue" height = {50} width={150} />
                : <p>
                    {currency && ((currency?.dailyPrices.length === 0 ) ? notFound : template)}
                </p>}
            </div>
        )
}

