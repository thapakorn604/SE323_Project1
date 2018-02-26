import React, {Component} from 'react';
import { Field } from "reactbulma";
import Style from './style.css';

class Database extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>
        <h1 className="has-text-centered is-size-4">953212 2/60<br/> ADT and Problem solving</h1>
        <hr />
        <table className="table is-fullwidth center-table">
            <tr>
                <th>No.</th>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Total Score</th>
                <th>Credit(s)</th>
                <th></th>
            </tr>
            <tr>
                <td>1</td>
                <td>582115001</td>
                <td>Thanawat Lukuan</td>
                <td><input className="input" type="text" placeholder="Score Here"></input></td>
                <td></td>
                <td><button className="button is-link">Save</button></td>
            </tr>
            <tr>
                <td>2</td>
                <td>582115015</td>
                <td>Thapakorn K. Oat</td>
                <td><input className="input" type="text" placeholder="Score Here"></input></td>
                <td></td>
                <td><button className="button is-link">Save</button></td>
            </tr>
            <tr>
                <td>3</td>
                <td>582115045</td>
                <td>Hathaichanok Dumrongsiri</td>
                <td><input className="input" type="text" placeholder="Score Here"></input></td>
                <td></td>
                <td><button className="button is-link">Save</button></td>
            </tr>
            <tr>
                <td>4</td>
                <td>582115505</td>
                <td>De Wang</td>
                <td><input className="input" type="text" placeholder="Score Here"></input></td>
                <td></td>
                <td><button className="button is-link">Save</button></td>
            </tr>
        </table>
        <Field groupedCentered>
        <button className="button is-primary">Save All</button>
        </Field>
    </div>
  }
}

export default Database;
