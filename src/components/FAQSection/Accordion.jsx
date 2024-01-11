import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordion = ({ question, answers, index, activeIndex, setActiveIndex }) => {
  
  const isActive = index === activeIndex;

    const handleAccordionClick = () => {
        setActiveIndex(isActive ? null : index);
    };

  return (
    <div className="accordion-item py-6">
      <div className="accordion-title" onClick={handleAccordionClick}>
        {isActive ? <div className="active">{question}</div> : <div>{question}</div>}
        <div>{isActive ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
      </div>
      {isActive && <div className="accordion-content">{answers}</div>}
    </div>
  );
};

export default Accordion;