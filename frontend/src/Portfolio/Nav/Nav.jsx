import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/offcanvas'
import './Nav.css'
import Home from '../../Home/Home'

const Nav = () => {
    return (
        <>
            <div className=''>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-4 mb-5" style={{ boxShadow: "rgb(255,17,180) 0px 0px 2px 1px" }}>
                    <a class="navbar-brand" href="#">Ruby Rose</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item active">
                                <a class="nav-link" href="#home">Home <span class="sr-only"></span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#services">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#projects">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#contact">Contact</a>
                            </li>
                        </ul>
                        {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
                    </div>
                </nav>
                <div class="offcanvas offcanvas-end bg-dark text-light " data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel"><a class="navbar-brand" href="#">Ruby Rose</a></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <a class="nav-link btn btn-info fw-bold border bg-info text-dark p-3 my-4" href="#home">Home</a>
                        <a class="nav-link btn btn-info fw-bold border bg-info text-dark p-3 my-4" href="#about">About</a>
                        <a class="nav-link btn btn-info fw-bold border bg-info text-dark p-3 my-4 " href="#services">Services</a>
                        <a class="nav-link btn btn-info fw-bold border bg-info text-dark p-3 my-4 " href="#projects">Projects</a>
                        <a class="nav-link btn btn-info fw-bold border bg-info text-dark p-3 my-4 " href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav