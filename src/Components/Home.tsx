import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Currency } from "./Cryptos-Types";
import { Message } from "./Home-Message";
import { Greeting } from "./Home-Greeting";
import { Calendar } from "./Home-Calendar";

export type DateType = Date | null | undefined;


export const BASE_URL = "http://localhost:8080/api/";
export const NORMALISED_RANGE_ENDPOINT = BASE_URL+"highestnormalisedbydate/";
export const ALL_CURRENCIES_ENDPOINT = BASE_URL+"currencies";

const Home = () => 
{
    const [date, setDate] = useState<DateType>(new Date(2022,0,2));
    const [loading, setLoading] = useState<boolean>(false);
    const [currency, setCurrency] = useState<Currency|null>(null);

    const handleSelect = async (date : DateType) => 
    {
        if (date !== null || date !== undefined )
        {
            await fetchMessage();
        }
        setDate(date);
    }

    const fetchMessage = async () => 
    {
        setLoading(true);
        const response = await fetch(NORMALISED_RANGE_ENDPOINT+date?.toISOString().split('T')[0]);
        const data : Currency = await response.json();

        if (data) 
            {
                setTimeout(() => {
                    setCurrency(data);
                    setLoading(false);
                }, 1000);
            };
    }

    return (
        <div className="home">
            <Greeting />
            <Calendar date = {date} handleSelect = {handleSelect} />
            {currency && <Message currency={currency} loading = {loading} date = {date}/>}
        </div>
    )
}

export default Home;