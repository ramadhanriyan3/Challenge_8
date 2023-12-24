"use client";

import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Image } from "react-bootstrap";
import styles from "./../filterItem.module.css";
import { format } from "date-fns";

interface PickDateProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

function PickDate({ selectedDate, onDateChange }: PickDateProps) {
  const formattedDate = format(selectedDate, "dd-MM-yyyy");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const inputParentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (
        inputParentRef.current &&
        !inputParentRef.current.contains(e.target)
      ) {
        closeCalendar();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [inputParentRef]);

  const openCalendar = () => {
    setIsCalendarOpen(true);
  };

  const closeCalendar = () => {
    setIsCalendarOpen(false);
  };

  const handlerCalendar = (date: Date) => {
    onDateChange(date); // Memanggil fungsi onDateChange dari properti
    closeCalendar();
  };

  return (
    <div className={`${styles.inputTitle}`}>
      <p className="mb-1">Tanggal</p>
      <div
        id="datePicker"
        className={`${styles.inputBox} m-0 padding-5`}
        ref={inputParentRef}
      >
        <DatePicker
          selected={selectedDate}
          onChange={handlerCalendar}
          customInput={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                cursor: "pointer",
              }}
            >
              <input
                type="text"
                value={formattedDate}
                readOnly
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  margin: "0 15px",
                  padding: 0,
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "18px",
                }}
                onClick={openCalendar}
              />
              <Image
                src="/fi_calendar.svg"
                alt="calendar-icon"
                onClick={openCalendar}
                style={{ cursor: "pointer", marginLeft: "8px" }}
              />
            </div>
          }
          open={isCalendarOpen}
        />
      </div>
    </div>
  );
}

export default PickDate;
