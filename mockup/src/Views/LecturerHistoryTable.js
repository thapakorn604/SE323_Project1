import React from 'react';

class LecturerHistoryTable extends React.Component {
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
                <th>Date</th>
                <th>Time</th>
                <th>Credit(s)</th>
                <th>Semester</th>
            </tr>
            <tr>
                <td>1</td>
                <td>953102</td>
                <td>ADT and Problem solving</td>
                <td>Monday, Thursday</td>
                <td>09.30-12.00</td>
                <td>3</td> 
                <td>2/60</td>
            </tr>
            <tr>
                <td>2</td>
                <td>953212</td>
                <td>Database system and design</td>
                <td>Tuesday, Friday</td>
                <td>12.30-14.30</td>
                <td>3</td> 
                <td>2/60</td>
            </tr>
        </table>
    </div>
  }
}

export default LecturerHistoryTable;
