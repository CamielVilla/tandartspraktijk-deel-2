"use client";
import {useState} from "react";

type AppointmentSelectorProps = {
    times: string[];
};

export default function AppointmentSelector({ times }: AppointmentSelectorProps) {
    const [selectedDay, setSelectedDay] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    return (
        <div className="card-container">
            <article className="card">
                <h3>Kies een datum</h3>
                <div className="calendar-grid">
                    <span>Ma</span>
                    <span>Di</span>
                    <span>Wo</span>
                    <span>Do</span>
                    <span>Vr</span>

                    {Array.from({length: 20}, (_, index) => {
                        const day = index + 1;
                        return (
                            <span
                                key={day}
                                className={selectedDay === day ? "selected" : ""}
                                onClick={() => setSelectedDay(day)}>
                                    {day}
                            </span>
                        );
                    })} </div>
            </article>
            <article className="card">
                <h3>Kies een tijd</h3>

                {selectedDay && selectedTime && <h3> U heeft gekozen voor {selectedDay} september om {selectedTime}. </h3>}

                {selectedDay ? (
                    <div className="time-list">
                        {times.map((time) => (
                            <button
                                key={time}
                                type="button"
                                className={selectedTime === time ? "selected" : ""}
                                onClick={() => setSelectedTime(time)}>
                                {time}
                            </button>))
                        }
                    </div>) : (<p>Kies eerst een datum.</p>)
                }
            </article>
        </div>);
}