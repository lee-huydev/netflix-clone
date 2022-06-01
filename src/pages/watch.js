import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import { BROWSE } from '../constants'
import { Player } from '../components';
import { getVideo } from '../helpers/get-content-firestore';
import { updateTimeCurrentVideo, useGetFilmName, useGetTime } from '../helpers/firebase-database';
const Watch = ({ dataPlay  }) => {
  const { img, videoModal, data, profile, uid } = dataPlay
  const [videoSlider, setvideo] = useState(null)
  useEffect(() => {
    !videoModal && getVideo(data.genre, data.title).then(e => setvideo(e))
  }, [])
  const videoRef= useRef(null)
  const btnRef= useRef(null)
  const navigate = useNavigate()
  useEffect(() => {
    videoRef.current.webkitRequestFullScreen()
  }, [])
  useEffect(() => {
    const listen = videoRef.current.addEventListener('pause', () => {
        const timeCurrent = videoRef.current.currentTime;
        updateTimeCurrentVideo(uid, data.title, timeCurrent, profile.displayName)
        btnRef.current.style.visibility='visible'
    })
    return () => videoRef.current && videoRef.current.removeEventListener('pause', listen)
  }, [])
  useEffect(() => {
    const listen = videoRef.current.addEventListener('playing', () => {
        btnRef.current.style.visibility='hidden'
    })
    return () => videoRef.current && videoRef.current.removeEventListener('playing', listen)
  }, [])
  // Continue films in second watched before
  const timeCurrentBefore = useGetTime(uid, profile.displayName, data.title)
  useEffect(() => {
    videoRef.current.currentTime = timeCurrentBefore || 0
  }, [timeCurrentBefore])
   return (
      <Player>
         <video src={videoModal ? videoModal : videoSlider} poster={img} controls autoPlay ref={videoRef}/>
         <button className='btn-exit' ref={btnRef} onClick={() => navigate(BROWSE)}>
           <BsArrowLeft />
         </button>
      </Player>
   );
};

export default Watch;
