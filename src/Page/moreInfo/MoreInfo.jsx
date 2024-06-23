import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const MoreInfo = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
         <div className='relative'>
         <img
            src={person}
            className="w-3/4 rounded-lg shadow-2xl"
          />
          <img src={parts} className="w-1/2 absolute right-8 top-1/2 border-8 border-slate-100" />
         </div>
          <div>
            <h3 className='text-orange-500 font-semibold mb-10'>About Us</h3>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field!</h1>
            <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            <br />
            <br />
            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <button className="btn btn-error">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
