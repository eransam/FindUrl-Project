import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UrlService from "../../../Services/findUrlService";
import notify from "../../../Services/NotifyService";
import UrlModel from "../../../Models/UrlModel";

import "./AddUrl.css";
import { useEffect, useState } from "react";
import store from "../../../redux/Store";
import { addUrlAction } from "../../../redux/UrlState";
import findUrlService from "../../../Services/findUrlService";

function AddUrl(): JSX.Element {
    useEffect(() => {
        try {
            findUrlService.deleteUrl()
    
        } catch (error) {
            
        }
      
    }, []);

    const navigate = useNavigate();


    const { register, handleSubmit, formState } = useForm<any>();
    const [TheUrls, setTheUrls] = useState<[]>([]);

    //const navigate = useNavigate();


    

    async function submit(url: UrlModel) {
        try {
            console.log("url: " , url.UrlModel);

            store.dispatch(addUrlAction(url.UrlModel));
            


           UrlService.getUrlToCheck(url.UrlModel)
           .then(urls => setTheUrls(urls))
           console.log("thelinks-TheUrls: " , TheUrls);

           navigate("/findurlList");



          // store.dispatch(registerAction(token));

           



            
            //await UrlService.findurl()
            
            //notify.success("vacation has been added!");

            
        navigate("/findurlList");
        }
        catch (err: any) {
            notify.error(err);
        }
    }

    return (
        <div className="AddVacation Box">

            <form onSubmit={handleSubmit(submit)}>
            <h2>Add url</h2>

            <label>url: </label>
            <input type="text" {...register("UrlModel", {
                required: { value: true, message: "Missing UrlModel" }
            })} />
            <span>{formState.errors.UrlModel?.message}</span>

            <button>Add</button>

            </form>

        </div>
    );
}

export default AddUrl;