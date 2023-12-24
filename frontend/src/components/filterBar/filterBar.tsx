"use client";
// Import statements
import React, { useState, useEffect, Suspense } from "react";
import { Container } from "react-bootstrap";
import DriverType from "./filterItem/driver/driverType";
import styles from "./filterItem/filterItem.module.css";
import Time from "./filterItem/time/time";
import Passenger from "./filterItem/passenger/passenger";
import MyButton from "../button/button";
import { format } from "date-fns";
import axios from "axios";
import CarsWrapper from "../carsWraper/carsWrapper";
import PickDate from "./filterItem/datePick/datePick";

const url = "https://binar-rent-backend.fly.dev/cars";

function FilterBar() {
  const [cars, setCars] = useState<any>({});
  const [filteredCars, setFilteredCars] = useState<any>({});
  const [selectedDriver, setSelectedDriver] = useState({
    label: "Pilih Driver",
    value: "Driver",
  });
  const [selectedTime, setSelectedTime] = useState({
    label: "Pilih Waktu",
    value: "waktu",
  });
  const [passengerValue, setPassengerValue] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formattedDate = format(selectedDate, "dd-MM-yyyy");

  const handleDriverTypeChange = (selectedOption: any) => {
    setSelectedDriver(selectedOption);
  };

  const handleTimeChange = (selectedOption: any) => {
    setSelectedTime(selectedOption);
  };

  const handlePassengerChange = (e: any) => {
    setPassengerValue(e.target.value);
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const filterPayload = {
      driver: selectedDriver.value,
      date: selectedDate,
      pickUpTime: selectedTime.value,
      passenger: passengerValue,
    };

    try {
      const response = await axios.get(url);
      const allCars = response.data;

      const noPassengerFill = allCars
        .filter((item: any) => item.driverType === filterPayload.driver)
        .filter(
          (item: any) =>
            new Date(item.availableAt) < new Date(filterPayload.date)
        )
        .filter(
          (item: any) =>
            parseInt(filterPayload.pickUpTime.split(":")[0], 10) >=
            new Date(item.availableAt).getUTCHours()
        );

      const filteredData = noPassengerFill.filter(
        (item: any) => item.capacity >= parseInt(filterPayload.passenger, 10)
      );
      if (!filterPayload.passenger) {
        setFilteredCars(noPassengerFill);
      } else {
        setFilteredCars(filteredData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Container className="mx-auto">
        <div
          className={`${styles.filterForm} mx-auto p-3 d-flex justify-content-around align-items-end`}
        >
          <form
            className={`${styles.inputBox} align-items-end border-0`}
            onSubmit={handleSubmit}
          >
            <DriverType
              selectedOption={selectedDriver}
              driverChange={handleDriverTypeChange}
            />
            <PickDate
              selectedDate={selectedDate}
              onDateChange={handleDateChange}
            />
            <Time timeChange={handleTimeChange} selectedOption={selectedTime} />
            <Passenger
              passengerValue={passengerValue}
              handlerPassanger={handlePassengerChange}
            />
            <MyButton value={"Cari Mobil"} handlerOnClick={handleSubmit} />
          </form>
        </div>
      </Container>
      <CarsWrapper filteredData={filteredCars} />
    </>
  );
}

export default FilterBar;
