import React from 'react';
import Slider from 'react-slick';
import FoodCard from './FoodCard';

const Home = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const recipes = [
    {
      title: 'Yemek 1',
      description: 'Açıklama 1',
      src: 'https://cdn.yemek.com/mnresize/1250/833/uploads/2017/03/yaglama-yeni-one-cikan.jpg',
    },
    {
      title: 'Yemek 2',
      description: 'Açıklama 2',
      src: 'https://cdn.yemek.com/mncrop/620/388/uploads/2021/06/adana-kebap-one-cikan-2022.jpg',
    },
    {
      title: 'Yemek 3',
      description: 'Açıklama 3',
      src: 'https://cdn.yemek.com/mncrop/620/388/uploads/2024/09/biber-pestolu-makarna-yemekcom.jpg',
    },
    {
      title: 'Yemek 4',
      description: 'Açıklama 4',
      src: 'https://cdn.yemek.com/mncrop/620/388/uploads/2024/10/susam-ezmesi-yemekcom.jpg',
    },
    {
      title: 'Yemek 5',
      description: 'Açıklama 5',
      src: 'https://cdn.yemek.com/mncrop/620/388/uploads/2024/10/sarimsakli-peynirli-ekmek-yemekcom.jpg',
    },
    {
      title: 'Yemek 6',
      description: 'Açıklama 6',
      src: 'https://cdn.yemek.com/mncrop/620/388/uploads/2024/10/karnabahar-pizza-yemekcom.jpg',
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sol taraftaki reklam */}
      <div className="w-full lg:w-1/6 bg-gray-300 p-4 lg:h-screen">
        <div className="text-center">
          <h2 className="text-xl font-bold">Reklam Alanı</h2>
          <p className="mt-2">Bu alana reklam yerleştirilebilir.</p>
        </div>
      </div>

      {/* Ana içerik */}
      <div className="w-full lg:w-4/6 px-4 py-8 lg:py-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-center">
          Lezzet Durağına Hoş Geldiniz!
        </h1>
        <p className="mt-4 text-lg text-center">
          En lezzetli yemek tariflerine buradan ulaşabilirsiniz.
        </p>

        {/* Slider Bölümü */}
        <div className="mt-8 lg:mt-12">
          <Slider {...settings}>
            {recipes.map((recipe, index) => (
              <div
                className="w-full h-[200px] xl:h-[400px] sm:h-[250px] md:h-[300px]"
                key={index}
              >
                <img
                  src={recipe.src}
                  alt={`Yemek ${index + 1}`}
                  className="w-full  xl:object-fill xl:h-[400px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex flex-wrap justify-center mt-8 lg:mt-10 gap-4">
          <FoodCard
            title="Mercimek Çorbası"
            description="Anne yapımı çorba"
            image="https://cdn.yemek.com/mncrop/620/388/uploads/2014/06/mercimek-corbasi-yemekcom.jpg"
          />
          <FoodCard
            title="Adana Kebap"
            description="Restorana gitmenize gerek kalmadı"
            image="https://cdn.yemek.com/mncrop/620/388/uploads/2021/06/adana-kebap-one-cikan-2022.jpg"
          />
          <FoodCard
            title="Karnabahar Pizza"
            description="Sağlıklı pizzayı denediniz mi ?"
            image="https://cdn.yemek.com/mncrop/620/388/uploads/2024/10/karnabahar-pizza-yemekcom.jpg"
          />
        </div>
      </div>

      {/* Sağ taraftaki reklam */}
      <div className="w-full lg:w-1/6 bg-gray-300 p-4 lg:h-screen">
        <div className="text-center">
          <h2 className="text-xl font-bold">Reklam Alanı</h2>
          <p className="mt-2">Bu alana reklam yerleştirilebilir.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
