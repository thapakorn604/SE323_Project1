import React from 'react';

class LecturerIndexTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>
        <table className="table is-fullwidth">
            <tr className="has-text-centered">
                <th>No.</th>
                <th>Course ID</th>
                <th>Course Name</th>
                <th>Student(s)</th>
                <th>Credit(s)</th>
                <th className="has-text-centered">Grade</th>
                <th></th>
            </tr>
            <tr>
                <td>1</td>
                <td>953231</td>
                <td>Object-Oriented Programming</td>
                <td>John Smith</td>
                <td>3</td>
                <td><input className="input" type="text" placeholder="Text input"></input></td>
                <td><input className="button" type="submit" value="Save"></input></td>
            </tr>
            <tr>
                <td>2</td>
                <td>953232</td>
                <td>Object-Oriented Analysis and Design</td>
                <td>John Smith</td>
                <td>3</td>
                <td><input className="input" type="text" placeholder="Text input"></input></td>
                <td><input className="button" type="submit" value="Save"></input></td>
            </tr>
            <tr>
                <td>3</td>
                <td>953232</td>
                <td>Object-Oriented Analysis and Design</td>
                <td>Tom Smith</td>
                <td>3</td>
                <td><input className="input" type="text" placeholder="Text input"></input></td>
                <td><input className="button" type="submit" value="Save"></input></td>
            </tr>
            <tr>
                <td>4</td>
                <td>953231</td>
                <td>Object-Oriented Programming</td>
                <td>John Smith</td>
                <td>3</td>
                <td><input className="input" type="text" placeholder="Text input"></input></td>
                <td><input className="button" type="submit" value="Save"></input></td>
            </tr>
            <tr>
                <td>5</td>
                <td>953231</td>
                <td>Object-Oriented Programming</td>
                <td>John Smith</td>
                <td>3</td>
                <td><input className="input" type="text" placeholder="Text input"></input></td>
                <td><input className="button" type="submit" value="Save"></input></td>
            </tr>
            <tr>
                <td>5</td>
                <td>953231</td>
                <td>Object-Oriented Programming</td>
                <td>John Smith</td>
                <td>3</td>
                <td><input className="input" type="text" placeholder="Text input"></input></td>
                <td><input className="button" type="submit" value="Save"></input></td>
            </tr>
        </table>
        <div className="field is-grouped is-grouped-centered">
            <p className="control">
                <a className="button is-primary">Save All</a>
            </p>
            <p className="control">
                <a className="button is-light">Clear</a>
            </p>
        </div>
    </div>
  }
}

export default LecturerIndexTable;
