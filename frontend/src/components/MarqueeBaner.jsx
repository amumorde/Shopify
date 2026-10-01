import Marquee from "react-fast-marquee";

const MarqueeBanner = () => {
  return (
    <div className="marquee-container">
      <Marquee
        speed={50}
        pauseOnHover={true}
        gradient={false}
      >
       
        🔥 Great Deals Available Now!&nbsp;&nbsp;
        🚚 Free Shipping on Orders Above $300 &nbsp;&nbsp;&nbsp;
        <span style={{display: "inline-flex",  textAlign: "center;"}}>
            💳 {"\u{1F4B3}"} Extra Cashbacks on selective cards
</span>
      </Marquee>
    </div>
  );
};

export default MarqueeBanner;