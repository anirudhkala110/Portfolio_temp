import React, { useEffect } from 'react'
import pic from './sidepic.jpeg'
import './About.css'
import aos from 'aos'
import 'aos/dist/aos.css'
import Services from '../Services/Services'
const About = () => {
    useEffect(() => {
        aos.init({ duration: 3000 })
    }, [])
    return (
        <><div className='w-100 about d-flex align-items-center' id='about'>
            <div className='container'>
                <div className='fs-1 fw-bold btn pb-3 w-100 text-uppercase' style={{color:"rgb(211,23,111)"}}>
                    About
                    <hr className='-webkit-linear-gradient(right,black,white,white,black)'style={{height:"8px"}}/>
                </div>
                <div className='row pt-2  px-5'>
                    <div className="col-12 col-md-6 col-lg-6 aboutImagePart rounded rounded-5" data-aos="fade-right">
                        <img src={pic} alt="Here is the developer's Image" className="col-12 col-md-4 col-lg-12 aboutImagePart rounded rounded-3 mb-2" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 aboutTextPart" data-aos="fade-left">
                        <div>
                            <h3>Hello ,  I am Ruby Rose</h3>
                            <p>Ruby Rose is a highly skilled and versatile developer known for his expertise in web development, software development, and backend development.
                                With a passion for creating innovative and efficient solutions,
                                Ruby has established himself as a go-to professional in the tech industry.
                            </p>
                            <table className=''>
                                <tbody>
                                    <tr>
                                        <td className='pe-5'>Name</td>
                                        <td>: Ruby Rose</td>
                                    </tr>
                                    <tr>
                                        <td className='pe-5'>Age</td>
                                        <td>: 23</td>
                                    </tr>
                                    <tr>
                                        <td className='pe-5'>Address</td>
                                        <td>: Chharba, Shaspur Dehradun</td>
                                    </tr>
                                    <tr>
                                        <td className='pe-5'>Phone  Number</td>
                                        <td>: 7668490213</td>
                                    </tr>
                                    <tr>
                                        <td className='pe-5'>Email</td>
                                        <td>: RubyRose110@gmail.com</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button className='downloadbtn'>Download Resume</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About