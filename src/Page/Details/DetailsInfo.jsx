import img1 from '../../assets/images/team/1.jpg'
import img2 from '../../assets/images/team/2.jpg'

const DetailsInfo = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-[80%] mx-auto'>
    <div>

    <div className='flex items-center  space-x-5'>
        <img className='w-[60px] h-[60px] rounded-full' src={img1} alt="" />
        <div>
            <h1 className='text-3xl font-semibold'>Awlad Hossain</h1>
            <p className='text-rose-500'>Businessman</p>
        </div>
      </div>
      <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Consectetur illo numquam recusandae tempore vero assumenda <br /> repellendus nesciunt  ducimus? Corporis atque qui nostrum aspernatur <br /> laborum quidem ad asperiores nesciunt beatae eius.</p>

    </div>
    <div>

    <div className='flex items-center space-x-5'>
        <img className='w-[60px] h-[60px] rounded-full' src={img2} alt="" />
        <div>
            <h1 className='text-3xl font-semibold'>Shakil Islam</h1>
            <p className='text-rose-500'>Businessman</p>
        </div>
      </div>
      <p  className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Consectetur illo numquam recusandae tempore vero assumenda <br /> repellendus nesciunt  ducimus? Corporis atque qui nostrum aspernatur <br /> laborum quidem ad asperiores nesciunt beatae eius.</p>

    </div>
    </section>
  );
};

export default DetailsInfo;
