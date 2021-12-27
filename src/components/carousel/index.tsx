import { NextPage } from "next";
import React from "react";
import { Carousel } from "antd";

const CarouselComponent: NextPage = () => {
  const contentStyle: any = {
    height: "300px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <Carousel autoplay>
      <div>
        <img
          src="https://images-americanas.b2w.io/spacey/acom/2021/11/24/c85fbf2c8f4f-DESTAQUE-DESK-CND-REDFRIDAY.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images-americanas.b2w.io/spacey/acom/2021/11/19/bc27cdb3333f-DESTAQUE-01-REDFRIDAY.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images-americanas.b2w.io/spacey/acom/2021/11/19/8661d0b8e7bd-DESTAQUE-02-REDFRIDAY.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images-americanas.b2w.io/spacey/acom/2021/11/19/69d44e8e07a2-DESTAQUE-04-REDFRIDAY.png"
          alt=""
        />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
