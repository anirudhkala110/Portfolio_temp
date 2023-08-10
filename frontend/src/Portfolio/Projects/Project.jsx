import React, { useEffect } from 'react'
import code from './code.jpg'
import folder from './folder.jpg'
import settings from './setting.jpg'
import './Project.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Project = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <>
            <div className='services pt-5' id='projects'>
                <div className='myservicesText pt-5'>
                    <h1 className='text-uppercase'>MY <span>Projects</span></h1><br />
                    <hr />
                </div>
                <div className="container text-center mt-5">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 p-3" data-aos="fade-right">
                            <div className="card text-dark p-3" >
                                <img src={code} className='w-100 rounded-3' style={{ border: "1px solid rgb(211,23,111)", boxShadow: "black 0px 0px 15px 1px", borderBottom: "3px solid rgb(211,23,111)" }} alt="Social Media" />
                                <div className='card-body'>
                                    <h4 className='card-title'>Social Media App</h4>
                                    <p>This is the fake online Social Media App</p>
                                    <a href='' className='btn'>More Information . . . </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 p-3" data-aos="zoom-in">
                            <div className="card text-dark p-3" >
                                <img src={folder} className='w-100 rounded-3' style={{ border: "1px solid rgb(211,23,111)", boxShadow: "black 0px 0px 15px 1px", borderBottom: "3px solid rgb(211,23,111)" }} alt="Social Media" />
                                <div className='card-body'>
                                    <h4 className='card-title'>Weather Detection Realtime App</h4>
                                    <p>This is the Working RealTime Weather Application</p>
                                    <a href='' className='btn'>More Information . . . </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 p-3" data-aos="fade-left">
                            <div className="card text-dark p-3" >
                                <img src={settings} className='w-100 rounded-3' style={{ border: "1px solid rgb(211,23,111)", boxShadow: "black 0px 0px 15px 1px", borderBottom: "3px solid rgb(211,23,111)" }} alt="Social Media" />
                                <div className='card-body'>
                                    <h4 className='card-title'>Marketing App</h4>
                                    <p>This is the fake online Marketing App</p>
                                    <a href='' className='btn'>More Information . . . </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Project