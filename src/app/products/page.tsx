import React, { useState } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import Image, { StaticImageData } from 'next/image';
import { carsData } from '../../assets/cars';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Car {
  id: number;
  name: string;
  image: StaticImageData;
  description: string;
}

export default function Products() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>();

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  function openModal(car: Car) {
    setSelectedCar(car);
    setModalIsOpen(true);
  };

  function closeModal() {
    setSelectedCar(null);
    setModalIsOpen(false);
  };

  return (
    <section className="bg-gray-100 py-16 rounded-xl" id='products'>
      <div className="lg:max-w-5xl mx-auto px-4 sm:px-6 md:max-w-2xl sm:max-w-xl max-w-96">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-8 text-center">Veja nossos produtos</h2>
        <Slider {...carouselSettings}>
          {carsData.map((car) => (
            <div key={car.id} className="relative">
              <Image src={car.image} alt={car.name} className='rounded-md' />
              <button onClick={() => openModal(car)} className="absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 sm:px-4 sm:py-2 px-2 py-1 text-white rounded">
                Saber mais
              </button>
            </div>
          ))}
        </Slider>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className='bg-white border-gray-400 border p-10 rounded-lg left-1/2 absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          {selectedCar && (
            <div>
              <h2 className='text-center font-bold mb-2 text-blue-500'>{selectedCar.name}</h2>
              <Image src={selectedCar.image} alt={selectedCar.name} className='rounded-md' />
              <p className='text-gray-700 mt-2'>{selectedCar.description}</p>
              <button onClick={closeModal} className='absolute right-3 top-1 text-red-500 font-bold'>Fechar</button>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};
