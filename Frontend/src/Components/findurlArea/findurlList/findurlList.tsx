import axios from "axios";
import notify from "../../../Services/NotifyService";
import findurlService from "../../../Services/findUrlService";
import config from "../../../Utils/Config";
import "./findurlList.css";
import { useEffect, useState } from "react";
import RecipeReviewCard from "../findurlCard/findurlCard";
import store from "../../../redux/Store";

function FindurlList(): JSX.Element {
    const [TheUrls, setTheUrls] = useState<[]>([]);

       useEffect(() => {
        try {
             
                findurlService.findurl()
                .then(urls => setTheUrls(urls))
        }
        catch (err: any) {
            notify.error(err);
        }
    }, []);

    



    return (
        <div className="AddVacation Box">
            {TheUrls.map(p => <RecipeReviewCard key={p} url={p} />)}   
        </div>
    );
}

export default FindurlList;