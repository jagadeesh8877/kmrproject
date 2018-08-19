import React from "react";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import '../node_modules/react-datepicker/dist/react-datepicker.css';
const getstudentname = id => `http://localhost:8089/data/${id}`
class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            startDate: moment(),
            showInput: false,
            studentID: '',
            dateDisabled: false,
            IDDisabled: false,
            name:'',
            course:'',
            recordedtime:'',
            createddate:'',
            status: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.setStudentID = this.setStudentID.bind(this);
        this.displayInput = this.displayInput.bind(this);
    }
    handleChange(date) {
        this.setState({
          startDate: date,
          IDDisabled: true
        });
    }
    displayInput() {
        fetch(getstudentname(this.state.studentID)).then(d => d.json()).then(d => {
             this.setState({name: d.Name,course: d.Course, recordedtime: d.RecordedTime, createddate: d.CreatedDate, status: d.status})
         }).catch((err)=>{console.log(err)});
        this.setState({showInput: true});
    }
    setStudentID(e) {
        if (e.target.value !== '') {
            this.setState({dateDisabled: true})
        } else {
            this.setState({dateDisabled: false});
        }
        this.setState({studentID: e.target.value});
    }
    render() {
        return(
            <div>
                <div id="ID">Search by ID:<br />
                    <input type="text" name="studentID" placeholder="Type student ID here" onChange={this.setStudentID} disabled={this.state.IDDisabled}></input>
                </div>
                <br />
                <div id="date">Search by date:<br />
                    <DatePicker
                        id="datepicker"
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        disabled={this.state.dateDisabled}
                    />
                </div>
                <br />
                <button id="searchButton" onClick={this.displayInput}>Search</button> 
                {this.state.showInput &&
                    <div> 
                        <p>ID: {this.state.studentID} </p>
                        <p>Name: {this.state.name} </p>
                        <p>Course: {this.state.course}</p>
                        <p>Recorded time: {this.state.recordedtime}</p>
                        <p>Created date: {this.state.createddate}</p>
                        <p>Status: {this.state.status} </p>
                    </div>
                }
            </div>
        );
    }
}
export {HomePage}