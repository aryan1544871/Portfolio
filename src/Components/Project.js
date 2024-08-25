import React from 'react'

export default function Project(props) {
  return (
    <div id = "projects">
      <div
        class="album py-5 container rounded col-xxl-8 px-4  transition "
        style={props.Style}
      >
        <h2 className="display-6 fw-bold text-body-emphasis text-center">Projects</h2>
        <div class="container rounded py-5 my-2">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
            <div class="col">
              <div class="card shadow-sm">
              <img
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  src = "https://cdn.pixabay.com/photo/2020/11/15/06/18/instagram-logo-5744708_1280.png"
                  role="img"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                </img>
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
              <img
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  src = "https://th.bing.com/th/id/OIP.Sbs-M2-y31gNoj9n-IIeowAAAA?rs=1&pid=ImgDetMain"
                  role="img"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                </img>
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  src = "https://th.bing.com/th/id/OIP.NxyLclsor8leyoMpVgDqMgHaDk?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  role="img"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                </img>
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
