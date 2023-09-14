//App.js
import "./App.css";
import Rightcomp from "./Rightcomp";
function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                src="logo.jpg"
                alt="Logo"
                width="40"
                height="35"
                className="d-inline-block align-text-top"
              />
              Charts Simulator
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <p className="type">
          Select a particular chart from below dropdown below.
        </p>
      <div className="left-container"> 
        <div className="selector">
          <b className="text-primary m-3">Type</b>
          <select className="form-select" aria-label="Default select example">
            <option selected>Bar Graph</option>
            <option value="1">Pie Chart</option>
            <option value="2">Line Chart</option>
            <option value="3">Scatter Chart</option>
          </select>
          <b className="text-primary m-3">Title</b>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Title for Chart
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <br></br>
        </div>

        
        <div className="tableclass">
          <table className="table table-bordered border-primary custom-table">
            <thead>
              <tr>
                <th scope="col">Sno</th>
                <th scope="col">Group-1 (X-axis)</th>
                <th scope="col">Group-2 (Y-axis)</th>
              </tr>
            </thead>
            <tbody className="table-group-divider border-secondary">
              <tr>
                <th scope="row">1</th>
                <td contentEditable="true"> </td>
                <td contentEditable="true"> </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td contentEditable="true"> </td>
                <td contentEditable="true"> </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td contentEditable="true"> </td>
                <td contentEditable="true"> </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td contentEditable="true"> </td>
                <td contentEditable="true"> </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td contentEditable="true"> </td>
                <td contentEditable="true"> </td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td contentEditable="true"> </td>
                <td contentEditable="true"> </td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td contentEditable="true"> </td>
                <td contentEditable="true"> </td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td contentEditable="true"> </td>
                <td contentEditable="true"> </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button type="button" className="btn btn-primary mx-2 my-1">
          Calculate
        </button>
      </div>
      <Rightcomp></Rightcomp>
    </>
  );
}

export default App;
