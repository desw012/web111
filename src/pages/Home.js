import {useEffect} from "react";
import {dataLayer} from "../ga";

function Home(){

    useEffect(()=>{
        dataLayer.push({
            event : 'ga_page_view',
            dimension1 : 'TEST2'

        })
    });

    return (
        <>
            <h1>My HOME</h1>
        </>
    )
}

export default Home;