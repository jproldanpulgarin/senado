import React,{Fragment} from 'react';
import footer from "../img/footer diplomado.jpg"
import senado from "../img/senado.jpg"
import "../css/slides.css"
const Slides = () => {
  return ( 
    <Fragment>

      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={footer} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Diplomado Iu Digital</h5>
              <p>Proyecto diplomado de programacion web en la IU digital.</p>
            </div>
          </div>
          <div class="carousel-item active">
            <img src={senado} class="d-block w-100" alt="..."  / >
            <div class="carousel-caption d-none d-md-block">
              <h5>Proyecto sobre el senado</h5>
              <p>Estudiantes de la IU Digital realizan diplomado acerca del senado.</p>
            </div>
          </div>
          
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

  </Fragment> );
}
 
export default Slides;