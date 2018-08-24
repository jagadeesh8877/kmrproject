import React from "react";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import '../node_modules/react-datepicker/dist/react-datepicker.css';
import {Table} from './table';
import './styles/homepagestyle.css'
const filterByID = id => `http://localhost:8089/data/${id}`
const filterByDate = (startdate, enddate) => `http://localhost:8089/data/${startdate}/date/${enddate}`
class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            startDate: moment(),
            endDate: moment(),
            studentID: '',
            dateDisabled: false,
            IDDisabled: false,
            name:'',
            course:'',
            recordedtime:'',
            createddate:'',
            status: '',
            tableRows: [],
        };
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.setStudentID = this.setStudentID.bind(this);
        this.setStudentID();
    }
    handleChangeStart(date) {
        this.rows = [];
        fetch(filterByDate(date,this.state.endDate)).then(d =>d.json()).then(d => {
            d.forEach(function(row) {
                this.rows.push({name: row.RequestTime, user: row.User, zid: row.Zid});
            }.bind(this));
            this.setState({tableRows: this.rows});
        }).catch((err)=>{console.log(err)});
        this.setState({
          startDate: date,
          IDDisabled: true
        });
    }
    handleChangeEnd(date) {
        this.rows = [];
        fetch(filterByDate(this.state.startDate,date)).then(d =>d.json()).then(d => {
            d.forEach(function(row) {
                this.rows.push({name: row.RequestTime, user: row.User, zid: row.Zid});
            }.bind(this));
            this.setState({tableRows: this.rows});
        }).catch((err)=>{console.log(err)});
        this.setState({
          endDate: date,
          IDDisabled: true
        });
    }
    setStudentID(e) {
        this.rows = [];
        fetch(filterByID(e ? e.target.value : '')).then(d => d.json()).then(d => {
            d.forEach(function(row) {
                 this.rows.push({name: row.RequestTime, user:row.User, zid:row.Zid});
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
                <div id="date">Search by date:
                    <DatePicker
                        id="datepicker"
                        selected={this.state.startDate}
                        selectsStart
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.handleChangeStart}
                        disabled={this.state.dateDisabled}
                    /> TO
                    <DatePicker
                        id="datepicker"
                        selected={this.state.endDate}
                        selectsStart
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.handleChangeEnd}
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