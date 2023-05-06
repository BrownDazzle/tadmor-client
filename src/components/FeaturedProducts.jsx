import React, { useState } from 'react'
import styled from "styled-components";
import { categoryName, popularProducts } from '../constants';
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ img, title, collections, index, price }) => (
  <div className={`flex flex-col p-2 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[100%] h-[134px] rounded-[1rem] ${styles.flexCenter} bg-dimBlue`}>
      <a href={`/product/${index}`}>
        <img src={img} alt="star" className="w-[100%] h-[134px] object-cover" />
      </a>
    </div>
    <div className="flex-1 flex flex-col ml-3 pt-4">
      <div className='flex flex-row justify-between align-center'>
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          ZMW {price}
        </p>
      </div>
      <div className='flex flex-row justify-between align-center pt-2'>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {collections}
        </p>
        <Button title="Add to cart" />
      </div>

    </div>
  </div>
);







function FeaturedProducts() {
  const [active, setActive] = useState("All");
  const [products, setProducts] = useState(popularProducts);

  const filter = (type) => {
    setProducts(popularProducts.filter((p, i) => p.collections === type))
    console.log(products)
  }

  const handleClick = (e) => {
    setActive(e)
    filter(e)
  }

  return (
    <section id="features" className={`${layout.section} h-auto`}>

      <div className=' flex justify-center items-start'>

        <ul className="list-none flex-col sm:flex justify-start w-[8rem] left-[30%] ">
          <li
            className={`mb-[2rem] font-poppins font-normal cursor-pointer text-[16px] ${active === 'All' ? "text-white" : "text-dimWhite"
              } `}
            onClick={() => setProducts(popularProducts)}
          >
            <a href={`#`}>All</a>
          </li>
          {categoryName.map((nav, index) => (
            <li
              key={nav.id}
              className={`mb-[2rem] font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === categoryName.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => handleClick(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

      </div>

      <div className={`${layout.sectionImg} grid grid-cols-3 gap-2 `}>
        {products.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts