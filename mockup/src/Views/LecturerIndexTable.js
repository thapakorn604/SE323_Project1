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
                <th>First Name</th>
                <th>Last Name</th>
                <th>Points</th>
                <th>Credit</th>
                <th></th>
            </tr>
            <tr>
                <td>John</td>
                <td>Smith</td>
                <td>50</td>
                <td><input class="input" type="text" placeholder="Text input"></input></td>
                <td><input class="button" type="submit" value="Save"></input></td>
            </tr>
            <tr>
                <td>Jill</td>
                <td>Smiths</td>
                <td>50</td>
                <td><input class="input" type="text" placeholder="Text input"></input></td>
                <td><input class="button" type="submit" value="Save"></input></td>
            </tr>
            <tr>
                <td>Jane</td>
                <td>Samith</td>
                <td>50</td>
                <td><input class="input" type="text" placeholder="Text input"></input></td>
                <td><input class="button" type="submit" value="Save"></input></td>
            </tr>
            <tr>
                <td>Jessica</td>
                <td>Smithy</td>
                <td>50</td>
                <td><input class="input" type="text" placeholder="Text input"></input></td>
                <td><input class="button" type="submit" value="Save"></input></td>
            </tr>
            <tr>
                <td>Jojo</td>
                <td>Samithy</td>
                <td>50</td>
                <td><input class="input" type="text" placeholder="Text input"></input></td>
                <td><input class="button" type="submit" value="Save"></input></td>
            </tr>
            <tr>
                <td>Jammy</td>
                <td>Wrong</td>
                <td>60</td>
                <td><input class="input" type="text" placeholder="Text input"></input></td>
                <td><input class="button" type="submit" value="Save"></input></td>
            </tr>
        </table>
    </div>
  }
}

export default LecturerIndexTable;
