import React, { useState } from 'react'
import avatar from '../../assets/images/avatar-icon.png'
import { FormatedDate } from '../../utils/FormatedDate'
import {AiFillStar} from 'react-icons/ai'
import FeedbackForm from './FeedbackForm'

const DoctorFeedback = () => {
    const [showFeedbackForm,setShowFeedbackForm] = useState(false);
  return (
    <div>
        <div className="mb-[50px]">
            <h4 className="text-[20px] leading-3 font-bold text-headingColor mb-[30px]">All reviews (272)</h4>
           
            <div className="flex justify-between gap-10 mb-[30px]">
            <div className="flex gap-3">
                <figure className="w-10 h-10 rounded-full ">
                    <img  className="w-full" src={avatar} alt='' />
                </figure>
                <div>
                    <h5 className="text-[16px] leading-6 text-primaryColor font-bold"> Omkar</h5>
                    <p className="text-[14px] leading-6 text-textColor">{FormatedDate('02-14-23')}</p>
                    <p className="text__para mt-3 font-medium text-[15px]">Good service, highly recommend.</p>
                </div>
            </div>

            <div className="flex fap-1">
                {[...Array(5).keys().map((_,index)=> (
                    <AiFillStar key={index} color="#0067FF" />
                ))]}
            </div>
            </div>
        </div>

               {!showFeedbackForm && <div className="text-center">
                    <button onClick={()=> setShowFeedbackForm(true)} className="btn">Give Feedback</button>
                </div>
               }
               {
                showFeedbackForm && <FeedbackForm />
               }
    </div>
  )
}

export default DoctorFeedback