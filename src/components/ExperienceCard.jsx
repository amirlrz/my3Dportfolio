import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
function ExperienceCard({ experience }) {
  return (
    <div>
      <VerticalTimelineElement
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid #232631" }}
        icon={
          <div>
            <img
              src={experience.icon}
              alt={experience.name}
              className="scale-125 "
            />
          </div>
        }
      >
        <div>
          <h3 className="text-white text-[15px] font-bold">
            {experience.title}
          </h3>
          <p className="text-stone-300">{experience.pos}</p>
          <p>{experience.duration}</p>
        </div>
      </VerticalTimelineElement>
    </div>
  );
}

export default ExperienceCard;
