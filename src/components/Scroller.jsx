import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

const Scroller = ({ data, speed }) => {
  return (
    <Splide
      options={{
        type: "loop", // Loop back to the beginning when reaching the end
        autoScroll: {
          pauseOnHover: true, // Do not pause scrolling when hovering over the carousel
          pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
          rewind: true, // Rewind to start when the end is reached
          speed: Number(speed), // Scrolling speed
        },
        arrows: false, // Hide navigation arrows
        pagination: false, // Hide pagination dots
        fixedWidth: "445px", // Fixed width for each slide
        gap: "12px", // Gap between slides
      }}
      extensions={{ AutoScroll }} // Use the AutoScroll extension
    >
      {data.map(({ id, src }) => (
        <SplideSlide key={id}>
          <img
            src={src}
            alt="image not found"
            className="h-64 w-full rounded-md object-contain "
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Scroller;
