import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import store from "../../../redux/Store";
import "./Menu.css";

function Menu(): JSX.Element {

    const [urlLength, seturlLength] = useState<any[]>([]);


    useEffect(() => {
        seturlLength(store.getState().urlState.Url);
    
        // Subscribe to store changes
        const unsubscribe = store.subscribe(() => {
            seturlLength(store.getState().urlState.Url);
          });
    
          return () => {
            unsubscribe();
          };
        }, []);

        



    
    return (
        <div className="Menu">
    
                <NavLink to="/findurlList">findurlList</NavLink>
                <NavLink to="/RecipeReviewCard">RecipeReviewCard</NavLink>
                <NavLink to="/AddUrl">AddUrl</NavLink>


                

        </div>
    );
}
export default Menu;
