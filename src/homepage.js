import React from "react";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import '../node_modules/react-datepicker/dist/react-datepicker.css';
import {Table} from './table';
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
            status: '',
            rows:[]
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
        this.setState({showInput: true});
    }
    setStudentID(e) {
        this.setState({showInput: false});
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
                {this.state.showInput && <Table studentID={this.state.studentID}/>}
            </div>
        );
    }
}
export {HomePage}