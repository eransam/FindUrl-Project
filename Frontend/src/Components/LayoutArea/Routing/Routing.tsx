import "./Routing.css";
import { Route, Routes } from "react-router";
import LayoutCopy from "../Layout/Layout";

import FindurlList from "../../findurlArea/findurlList/findurlList";
import RecipeReviewCard from "../../findurlArea/findurlCard/findurlCard";
import { Navigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import AddAddUrl from "../../findurlArea/AddUrl/AddUrl";
import AddUrl from "../../findurlArea/AddUrl/AddUrl";








function Routing(): JSX.Element {
    return (
    <Routes>
        <Route path="/findurlList" element={<FindurlList />} /> 
        <Route path="/RecipeReviewCard" element={<RecipeReviewCard url />} />
        <Route path="/" element={<Navigate to="/AddUrl" />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/AddUrl" element={<AddUrl />} />

        
    </Routes>
    );
}

export default Routing;
