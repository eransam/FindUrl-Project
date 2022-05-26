import axios from "axios";
import express, { NextFunction, Request, Response } from "express";
import logic from "../05-logic/logic";

const router = express.Router();

router.get("/findurl", async (request: Request, response: Response, next: NextFunction) => {
    try {
        //const regex = new RegExp("^[h][t][t][p].*$", "g");
        var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
        var regex = new RegExp(expression);
        const arrUrl = [];
        
                const theAxiosFromWeb = await axios.get<[]>("https://www.bestmobile.co.il/");
                //console.log("theAxiosFromWeb: " ,  theAxiosFromWeb);
                
        const theHtmlFromTheWebToString = theAxiosFromWeb.data.toString();
        //console.log("theHtmlFromTheWebToString: " ,  theHtmlFromTheWebToString);


        const results = theHtmlFromTheWebToString.matchAll(regex);
       // console.log("results: " ,  results);


            for(const item of results) {
            // console.log("item[0]: " , item[0]);
             arrUrl.push(item[0]);
            }

        console.log("--------------------------");

            response.json(arrUrl)



        
        }
            catch (err: any) {
              next(err);
        }
            });


            router.get("/findurl/:url", async (request: Request, response: Response, next: NextFunction) => {
                try {
                    const url = request.params.url;
                    console.log("url in the controller 2: " , url);

                    var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
                    var regex = new RegExp(expression);
                    const arrUrl = [];
                    const thefullurl = `https://${url}/`;
                    console.log("thefullurl: " ,  thefullurl);
                    
                    const theAxiosFromWeb = await axios.get<[]>(`https://${url}/`);

                    const theHtmlFromTheWebToString = theAxiosFromWeb.data.toString();
                    //console.log("theHtmlFromTheWebToString: " ,  theHtmlFromTheWebToString);
            
            
                    const results = theHtmlFromTheWebToString.matchAll(regex);
                   // console.log("results: " ,  results);
            
            
                        for(const item of results) {
                        // console.log("item[0]: " , item[0]);
                         arrUrl.push(item[0]);
                        }
            
                    console.log("--------------------------");
            
                        response.json(arrUrl)

                }
                catch (err: any) {
                    next(err);
                }
            });

export default router;