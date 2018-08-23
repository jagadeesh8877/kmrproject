import React from "react";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import '../node_modules/react-datepicker/dist/react-datepicker.css';
import {Table} from './table';
import {TableRows} from './tablerows';
import './styles/homepagestyle.css'
const getstudentname = id => `http://localhost:8089/data/${id}`
class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            startDate: moment(),
            studentID: '',
            dateDisabled: false,
            IDDisabled: false,
            name:'',
            course:'',
            recordedtime:'',
            createddate:'',
            status: '',
            tableRows: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.setStudentID = this.setStudentID.bind(this);
        this.setStudentID();
    }
    handleChange(date) {
        this.setState({
          startDate: date,
          IDDisabled: true
        });
    }
    setStudentID(e) {
        this.rows = [];
        fetch(getstudentname(e ? e.target.value : '')).then(d => d.json()).then(d => {
            d.forEach(function(row) {
                 this.rows.push(<TableRows name={row.RequestTime} user={row.User} zid={row.Zid} />);
            }.bind(this));
         this.setState({tableRows: this.rows});
         }).catch((err)=>{console.log(err)});
        if (e && e.target.value !== '') {
            this.setState({dateDisabled: true})
        } else {
            this.setState({dateDisabled: false});
        }
        
    }
    render() {
        return(
            <div id="home">
                <div id="ID">Search by ID:
                    <input id="idField" type="text" name="studentID" placeholder="Type student ID here" onChange={this.setStudentID} disabled={this.state.IDDisabled}></input>
                </div>
                <br />
                <div id="date">Search by date:
                    <DatePicker
                        id="datepicker"
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        disabled={this.state.dateDisabled}
                    />
                </div>
                <br />
                <Table studentID={this.state.studentID} rows={this.state.tableRows}/>
            </div>
        );
    }
}
export {HomePage}