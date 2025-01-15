'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Step_1, Step_2, Step_3, Step_4, Step_5, Step_6, Step_7, Step_8, Step_9, Step_10, Step_11, Step_12, Step_13, ClubRoom } from '../../utils/clubRoom';

const steps: ClubRoom[] = [
  Step_1, Step_2, Step_3, Step_4, Step_5, Step_6, Step_7,
  Step_8, Step_9, Step_10, Step_11, Step_12, Step_13,
];

const ClubRoomList = () => {
  const router = useRouter();

  const handleRoomClick = (roomNumber: number) => {
    router.push(`/clubroom/${roomNumber}`);
  };

  return (
    <div className="mt-48 px-4">
      <h1 className="text-center mb-8 text-4xl font-bold leading-tight">
        Directions
      </h1>
      <p className="text-center mb-24 text-sm text-gray-600">
        To find the Brooklyn Computer Science Club Room, go to Room 0317 on Ingersoll Hall Basement, and follow the signs.
      </p>

      {/* Swiper Component */}
      <div className="flex justify-center">
        <div className="max-w-2xl w-full px-2">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            className="p-5 rounded-xl shadow-lg bg-gray-50 swiper-container"
          >
            {steps.map((step, index) => (
              <SwiperSlide key={index}>
                <div className="text-center p-5">
                  <img
                    src={step.image}
                    alt={step.imageDescription || `Step ${index + 1}`}
                    className="w-full object-cover rounded-lg"
                  />
                  <p className="my-3 text-lg font-bold text-gray-800 max-w-[90%] mx-auto">
                    {step.imageDescription || `Step ${index + 1}`}
                  </p>
                  <p className="my-3 text-sm text-gray-600 leading-relaxed px-5">
                    {step.steps.description || 'No description provided.'}
                  </p>
                  <button
                    onClick={() => handleRoomClick(index + 1)}
                    className="mt-8 mb-12 px-6 py-3 text-sm text-white bg-blue-600 rounded-lg transition-colors duration-300 hover:bg-blue-700"
                  >
                    View Room {index + 1}
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        /* Default visibility of navigation buttons */
        .swiper-button-next,
        .swiper-button-prev {
          display: block;
        }

        /* Hide navigation buttons on small screens */
        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
        }
      `}</style>

      {/* Accordion Section Below Swiper */}
      <div className="mt-12">
        <Accordion className="border border-gray-300 rounded-xl mb-3 shadow-sm">
          <AccordionSummary
            expandIcon={<AddIcon style={{ color: '#333' }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="bg-gray-50 px-5 py-3 rounded-t-xl"
          >
            <Typography className="font-semibold text-sm">
              <strong>Room Details</strong>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-white p-5 rounded-b-xl">
            <div className="list-disc pl-5">
              <ul>
                <li>The Brooklyn College Computer Science Club is located in Ingersoll Hall, Room 0317, situated in the basement of the building.</li>
                <li>The club room is open to anyone interested in computer science, providing a space to engage with the executive board and learn about upcoming events, technical interview preparation seminars, and hackathons.</li>
                <li>Additionally, the club hosts study sessions and other activities in this room.</li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion className="border border-gray-300 rounded-xl mb-3 shadow-sm">
          <AccordionSummary
            expandIcon={<AddIcon style={{ color: '#333' }} />}
            aria-controls="panel2-content"
            id="panel2-header"
            className="bg-gray-50 px-5 py-3 rounded-t-xl"
          >
            <Typography className="font-semibold text-sm">
              Opening Hours
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-white p-5 rounded-b-xl">
            <div className="list-disc pl-5">
              <ul>
                <li>Tuesdays at 1:00pm-3:30pm</li>
                <li>Wednesdays at 12:00pm-2:00pm</li>
                <li><strong>Note:</strong> Club hours are subjected to change and will be announced on Discord.</li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion className="border border-gray-300 rounded-xl mb-3 shadow-sm">
          <AccordionSummary
            expandIcon={<AddIcon style={{ color: '#333' }} />}
            aria-controls="panel3-content"
            id="panel3-header"
            className="bg-gray-50 px-5 py-3 rounded-t-xl"
          >
            <Typography className="font-semibold text-sm">
              Contact Information
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-white p-5 rounded-b-xl">
            <div className="list-disc pl-5">
              <ul>
                <li>For any inquiries regarding the club, please email at <a href="mailto:bc.cis.club@gmail.com" className="text-blue-500 hover:underline">bc.cis.club@gmail.com</a></li>
                <li>Our mission at the Computer Science Club is to empower students to explore, innovate, and grow as they develop skills in programming, problem-solving, and technology. By fostering a collaborative environment, we are committed to building the future, one line of code at a time.</li>
                <li><strong>Note:</strong> Club hours are subject to change and will be announced on Discord.</li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default ClubRoomList;
