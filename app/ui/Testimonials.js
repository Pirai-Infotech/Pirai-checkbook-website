import { Carousel } from "antd";
import { useState } from "react";
import styles from "../Slideshow.module.css";

const items = [
  { content: "Testimonial 1" },
  { content: "Testimonial 2" },
  { content: "Testimonial 3" },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBeforeChange = (from, to) => {
    setCurrentIndex(to);
  };

  return (
    <Carousel beforeChange={handleBeforeChange} centerMode>
      {items.map((item, index) => (
        <div key={index} className={styles.carouselItem}>
          <div
            className={
              index === currentIndex ? styles.highlighted : styles.blurred
            }
          >
            {item.content}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Testimonials;
