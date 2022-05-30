import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import { BROWSE } from '../constants'
import { Player } from '../components';
const Watch = ({ dataPlay }) => {
  const { img, video } = dataPlay
  const videoRef= useRef(null)
  const btnRef= useRef(null)
  const navigate = useNavigate()
  useEffect(() => {
    videoRef.current.webkitRequestFullScreen()
  }, [])
  useEffect(() => {
    const listen = videoRef.current.addEventListener('pause', () => {
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
   return (
      <Player>
         <video src={video} poster={img} controls autoPlay ref={videoRef}/>
         <button className='btn-exit' ref={btnRef} onClick={() => navigate(BROWSE)}>
           <BsArrowLeft />
         </button>
      </Player>
   );
};

export default Watch;
