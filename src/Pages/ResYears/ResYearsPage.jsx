import React , {Component} from 'react';
import axios from 'axios';
import CRUDGrid from "../../Components/CRUDGrid/CRUDGrid";
import Dashboard from '../../Components/Dashboard/Dashboard';


class ResYearsPage extends Component {
    constructor(props) {
        super(props);
         this.state = {
             url:'http://172.16.1.102/api/v1/getdata',
             data:[],
             columns: [
                 { title: 'Name', field: 'NAME' },
                 { title: 'id', field: 'ID', type: 'numeric' },
                 { title: 'Flag', field: 'CURRENT_FLAG' },
             ],
             title:'RES YEAR'
         }
    }
componentDidMount(){
    axios({
        method: 'post',
        url:this.state.url,
        data:{
            fun_name:"FU_RES_YEAR",
            param_name:[],
            param_value:[]
        }
    })
        .then(response => {
         this.setState({data: response.data.Table})
          console.log(response.data.Table)

        })
        .catch(error => console.error('timeout exceeded'))
}
    render() {
        return (
            <div>
                   <Dashboard>
                       <CRUDGrid title={this.state.title} data={this.state.data} columns={this.state.columns}/>
                   </Dashboard>
            </div>
        );
    }

}

export default ResYearsPage;