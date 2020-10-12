import React from 'react';
import ResYearsPage from "./ResYearsPage";
import Dashboard from "../../Components/Dashboard/Dashboard";

const GetResYearPage = () => <ResYearsPage/>

const ResYearGird = props => {
    return (<div>
           <Dashboard component={GetResYearPage}/>
    </div>)
}
export default ResYearGird;