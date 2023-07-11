import React from "react";

export class ClassCompo extends React.Component {
  render() {
    return (
      <>
        <h3>This is demo of StateFul Class Components</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Faizal</td>
              <td>Basu</td>
            </tr>
            <tr>
              <td>Mariya</td>
              <td>Vapi</td>
            </tr>
            <tr>
              <td>Arif</td>
              <td>Mumbai</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export class ClassCompo2 extends React.Component {
  render() {
    return (
      <>
        <h1>This is Class Compo 2</h1>
        <p>You can export more than 1 classes not function from the file.</p>
        <p>for import write in curly braceses  comma seprated classes "comp1, comp2 "</p>
      </>
    );
  }
}

// If you dont want to use here you can also use before the Class name
// export default ClassCompo;
