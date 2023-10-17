import React from "react";
import "./App.css";

function Shop() {
  return (
    <div>
      <h2>This is Shopping page</h2>
      <div classNameName="m-5">
        <div className="container px-4 py-5" id="custom-cards">
          <h2 className="pb-2 border-bottom">Custom cards</h2>

          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div className="col">
              <div
                className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1450849608880-6f787542c88a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b24lMjBteSUyMHdheXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80')",
                }}
              >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Short title, long jacket
                  </h3>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src="https://github.com/twbs.png"
                        alt="Bootstrap"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      {/* <svg className="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg> */}
                      <small>Earth</small>
                    </li>
                    <li className="d-flex align-items-center">
                      {/* <svg className="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg> */}
                      <small>3d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col">
              <div
                className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80')",
                }}
              >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Much longer title that wraps to multiple lines
                  </h3>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src="https://github.com/twbs.png"
                        alt="Bootstrap"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      {/* <svg className="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg> */}
                      <small>India</small>
                    </li>
                    <li className="d-flex align-items-center">
                      {/* <svg className="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg> */}
                      <small>4d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col">
              <div
                className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1559825481-12a05cc00344?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80')",
                }}
              >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Another longer title belongs here
                  </h3>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src="https://github.com/twbs.png"
                        alt="Bootstrap"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      {/* <svg className="bi me-2" width="1em" height="1em">
                        <use xlink:href="#geo-fill"></use>
                      </svg> */}
                      <small>California</small>
                    </li>
                    <li className="d-flex align-items-center">
                      {/* <svg className="bi me-2" width="1em" height="1em">
                        <use xlink:href="#calendar3"></use>
                      </svg> */}
                      <small>5d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
