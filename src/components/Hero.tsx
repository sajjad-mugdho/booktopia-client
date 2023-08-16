import hero from "../assets/images/books-hero.jpg";

const Hero = () => {
  return (
    <div className="hero  bg-white">
      <div className="hero-content flex-col lg:flex-row">
        <img src={hero} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">BooktoPia Best Book Directory</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
