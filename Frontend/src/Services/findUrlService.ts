import axios from "axios";
import { useState } from "react";
import { Url } from "url";
import UrlModel from "../Models/UrlModel";
import store from "../redux/Store";
import { DeleteUrlAction } from "../redux/UrlState";
import config from "../Utils/Config";

class findurlService {


    public async findurl(): Promise<[]> {
        console.log("eran findurlservise");


            const urlFromStore = store.getState().urlState.Url;
            console.log("urlFromStore: " , urlFromStore);
            console.log("config.findurl + urlFromStore: " , config.findurl + urlFromStore);
            
            
            const response = await axios.get<[]>(config.findurl + urlFromStore);
            console.log("response: " , response);
            
            const theUrl = response.data;
            console.log("the html in the vacation service: " ,theUrl);

        return theUrl;
    }


    public async getUrlToCheck(url: Url): Promise<any> {

            const response = await axios.get<any>(config.findurl + url);
            return console.log("good");
        }

        public async deleteUrl(): Promise<any> {

            store.dispatch(DeleteUrlAction());
            return
        }
    }

    



const thefindurlService = new findurlService();

export default thefindurlService;