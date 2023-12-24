"use client";
import { Container } from "react-bootstrap";
import CmsCard from "../cmsCard";
import axios from "axios";
import { css, cx } from "@emotion/css";
import { useState, useEffect, ReactNode } from "react";
import BasicButton from "../basicbutton";
import { ButtonTypeContext } from "@/components/buttonTypeContext";
import { useContext } from "react";

const cardsContainer = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1101px;
`;
const url = "https://binar-rent-backend.fly.dev/cars";

interface CardContainerProp {
  children: React.ReactNode;
}

function CardContainer({ children }: CardContainerProp) {
  const [data, setData] = useState<any>([]);
  const buttonType = useContext(ButtonTypeContext);
  const getResult = async () => {
    try {
      const result = await axios.get(url);
      setData(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getResult();
  }, [data]);

  return (
    <Container fluid className="mt-4 p-0">
      <div className="d-flex my-4 gap-3">{children}</div>
      <div data-testid="cardContainer" className={cx(cardsContainer)}>
        {data.map((item: any) => {
          return (
            <CmsCard
              id={item.id}
              key={item.id}
              imagePath={item.image}
              price={item.rentPerDay}
              transmission={item.transmission}
              capacity={item.capacity}
              year={item.year}
              model={item.model}
            />
          );
        })}
      </div>
    </Container>
  );
}

export default CardContainer;
