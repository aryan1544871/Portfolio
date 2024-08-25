import React from 'react'

export default function Footer() {
  return (
    <div id = "contacts">
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
            </a>
            <span className="mb-3 mb-md-0 text-body-secondary">
              © Aryan's Portfolio
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-body-secondary" href="https://www.linkedin.com/in/aryan-kushwaha-62b871165?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <img className="bi" width="24" height="24" src = "https://www.svgrepo.com/show/452051/linkedin.svg">
                    
                </img>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="https://www.instagram.com/aryankushwaha173?utm_source=qr&igsh=MXI0NGc0MjFnY2g1">
              <img className="bi" width="24" height="24" src = "https://www.svgrepo.com/show/452231/instagram.svg">
                    
                </img>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="https://github.com/aryan1544871">
              <img className="bi" width="24" height="20" src = "https://www.svgrepo.com/show/475654/github-color.svg">
                    
              </img>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
