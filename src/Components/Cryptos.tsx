import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { Currency, DisplayCurrency, ConverToDisplayCurrencies } from "./Cryptos-Types";
import { ALL_CURRENCIES_ENDPOINT } from "./Home";
import { CryptoTable } from "./Cryptos-Table";


const Cryptos = () => 
{
    const [loading, setLoading] = useState<boolean>(false);
    const [currencies, setCurrencies] = useState<DisplayCurrency[]|null>(null);
    const [processedCurrencies, setProcessedCurrencies] = useState<DisplayCurrency[]|null>(null);

    const fetchAllCurrencies = async () =>
    {
        setLoading(true);

        const response = await fetch(ALL_CURRENCIES_ENDPOINT);
        const data : Currency[] = await response.json();

        if (data) 
            {
                setTimeout(() => {
                    let converted = ConverToDisplayCurrencies(data);
                    setCurrencies(converted);
                    setProcessedCurrencies(converted);
                    setLoading(false);
                    
                }, 1000);
            };
    }

    useEffect(()=>{
        fetchAllCurrencies();
    },[])


    return (
        <div className="crypto">

            {processedCurrencies && <CryptoTable processedCurrencies={processedCurrencies} setLoading={setLoading} />}

            {loading && <ReactLoading type = {"bars"} color="blue" height = {50} width={150} /> }  

        </div>
    )
}

export default Cryptos;