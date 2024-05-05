import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {RiLinkedinFill} from 'react-icons/ri'
import {AiOutlineGithub,AiOutlineLinkedin,AiOutlineInstagram} from 'react-icons/ai'

const socialLinks = [
  {
    path : "",
    icon : <AiOutlineGithub className="group-hover:text-white w-4"h-5 />
  },
  {
    path : "",
    icon : <AiOutlineInstagram className="group-hover:text-white w-4"h-5 />
  },
  {
    path : "",
    icon : <AiOutlineLinkedin className="group-hover:text-white w-4"h-5 />
  },
]

const quickLinks01 = [
  {
    path : "/home",
    display : "Home"
  },
  {
    path : "/",
    display : "About Us"
  },
  {
    path : "/services",
    display : "Services"
  },
  {
    path : "/",
    display : "Blog"
  },
]

const quickLinks02 = [
  {
    path : "/find-a-doctor",
    display : "Find a Doctor"
  },
  {
    path : '/',
    display : "Request and Appointment"
  },
  {
    path : '/',
    display : "Find a Location"
  },
  {
    path : '/',
    display : "Get a Opinion"
  }
]

const quickLinks03 = [
  {
    path : '/',
    display : "Donate"
  },
  {
    path : '/contact',
    display : "Contact Us",
  }
]

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
        <div>
          <img src={logo} alt=''/>
          <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">Copyright @ {year} developed by Nishant Bhujbal </p>

          <div className="flex items-center gap-3 mt-4"> 
            {socialLinks.map((link,index) =><Link to={link.path} key={index} className="w-9 h-9 border border-solid border-{#181A1E} rounded-full flex items-center justify-center hover:border-none hover:bg-primaryColor group">{link.icon}</Link> )}
          </div>

        </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Quick Links</h2>
            <ul>
              {quickLinks01.map((item,index)=> <li key={index} className="mb-4"><Link to={item.path} className="text-textColor text-[16px] leading-7">{item.display}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">I Want to : </h2>
            <ul>
              {quickLinks02.map((item,index)=> <li key={index} className="mb-4"><Link to={item.path} className="text-textColor text-[16px] leading-7">{item.display}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Support</h2>
            <ul>
              {quickLinks03.map((item,index)=> <li key={index} className="mb-4"><Link to={item.path} className="text-textColor text-[16px] leading-7">{item.display}</Link></li>)}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer