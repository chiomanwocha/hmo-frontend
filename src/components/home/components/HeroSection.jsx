/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import arrowRight from "../../../assets/svgs/arrow-right.svg";
import people from "../../../assets/images/people.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const captureUserMedia = () => {
    let mediaRecorder;
    let recordedChunks = [];
  
    navigator.mediaDevices
      .getDisplayMedia({ video: true, audio: true })
      .then((stream) => {
        mediaRecorder = new MediaRecorder(stream);
  
        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            recordedChunks.push(event.data); // Push the data chunk into the array
          }
        };
  
        mediaRecorder.onstop = () => {
          alert("Recording stopped!", recordedChunks);
          clearInterval(chunkInterval);
  
          // Create a Blob from the recorded chunks
          const fullBlob = new Blob(recordedChunks, { type: 'video/webm' });
  
          // Now you can use the 'fullBlob' as needed. For example, you can create a download link:
          // const downloadLink = document.createElement('a');
          // downloadLink.href = window.URL.createObjectURL(fullBlob);
          console.log('fullBlob', fullBlob)

          // downloadLink.download = 'recorded-video.webm';
          // downloadLink.textContent = 'Download recorded video';
          // document.body.appendChild(downloadLink);
          // downloadLink.click();
        };
  
        mediaRecorder.start();
      })
      .catch((error) => {
        console.error("Error accessing user media:", error);
      });
  
    // Create an interval to push data every second
    const chunkInterval = setInterval(() => {
      if (mediaRecorder && mediaRecorder.state === "recording") {
        recordedChunks = [];
      }
    }, 1000);
  };
  
  const startRecordingIfNeeded = () => {
    const recordString = localStorage.getItem("record");
    const recordBoolean = recordString === "true";
    if (recordString === "true") {
      captureUserMedia();
      localStorage.setItem("record", false);
    }
    
    console.log("recordBoolean", recordBoolean);
  };
  
  useEffect(() => {
    // Define a function to fetch the value from localStorage using a Promise
    const fetchData = () => {
      return new Promise((resolve) => {
        const recordString = localStorage.getItem("record");
        resolve(recordString);
      });
    };

    // Use the Promise to fetch the value and call startRecordingIfNeeded
    fetchData().then((recordString) => {
      if (recordString === "true") {
        startRecordingIfNeeded();
      }
    });
  }, []);
  return (
    <div className="flex flex-col lg:flex-row items-center pt-12 md:pt-28 px-8 md:px-24 bg-white-100 pb-20">
      <div className="text-center md:text-start">
        <h2 className="font-bold text-[30px] md:text-[56px] lg:text-[64px] leading-[32px] md:leading-[64px] text-black-100 mb-5">
          Show Them Don’t Just Tell
        </h2>
        <p className="text-[18px] md:text-[20px] leading-[28px] mb-12">
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <button className="w-full lg:w-fit px-6 justify-center bg-primary-dark-blue  text-white-100 flex gap-3 items-center rounded-[8px] py-3 md:py-5">
          <p>Install HelpMeOut</p>
          <img src={arrowRight} alt="right arrow icon" />
        </button>
      </div>
      <div className="lg:max-w-[50vw] mt-12 lg:mt-0">
        <img src={people} alt="group of people communicating, hero section" />
      </div>
    </div>
  );
};

export default HeroSection;
