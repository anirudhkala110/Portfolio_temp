import React, { useEffect } from 'react'
import code from './code.svg'
import folder from './folder.svg'
import settings from './settings.svg'
import './Services.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <>
            <div className='services pt-5' id='services'>
                <div className='myservicesText pt-5'>
                    <h1 className='text-uppercase'>MY <span>Services</span></h1><br />
                    <hr />
                </div>
                <div className="container text-center mt-5">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 p-3" data-aos="fade-right">
                            <div className="border service p-4" >
                                <p className="border rounded rounded-3 bg-dark shadow p-2">
                                    <span className=''>
                                        <img className="p-2 img1" src={code} style={{ filter: "invert(1)" }} />
                                    </span>
                                </p>
                                <h3 className='mt-4'>Web Development Mastery</h3>
                                <p>Ruby's prowess in web development is evident
                                    through his ability to craft visually appealing
                                    and user-friendly websites. He has a deep
                                    understanding of HTML, CSS, and JavaScript,
                                    allowing him to create dynamic and interactive web experiences.
                                    His responsive designs ensure that websites function seamlessly
                                    across various devices and screen sizes, enhancing
                                    user engagement.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 p-3" data-aos="zoom-in">
                            <div className="border service p-4" >
                                <p className="border rounded rounded-3 bg-dark shadow p-2">
                                    <span className=''>
                                        <img className="p-2 img2" src={folder} style={{ filter: "invert(1)" }} />
                                    </span>
                                </p>
                                <h3 className='mt-4'>Software Development Excellence</h3>
                                <p>In the realm of software development,
                                    Ruby is renowned for his proficiency
                                    in designing and building robust applications.
                                    His strong grasp of programming languages
                                    such as Python, Java, and C# empowers him
                                    to develop software that meets complex
                                    requirements while maintaining clean and maintainable code.
                                    Ruby's attention to detail ensures that his
                                    software solutions are not only functional but
                                    also user-focused.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 p-3" data-aos="fade-left">
                            <div className="border service p-4" >
                                <p className="border rounded rounded-3 bg-dark shadow p-2">
                                    <span className=''>
                                        <img className="p-2 img3" src={settings} style={{ filter: "invert(1)" }} />
                                    </span>
                                </p>
                                <h3 className='mt-4'>Backend Development Expertise</h3>
                                <p>Ruby's backend development skills are unparalleled.
                                    He excels in creating the backbone of applications,
                                    ensuring smooth data management, security, and efficient
                                    communication between various components.
                                    He is well-versed in technologies like Node.js,
                                    Django, and Ruby on Rails, enabling him to architect scalable
                                    and high-performance backend systems.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services