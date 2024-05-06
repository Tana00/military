import React from 'react'

const About = () => {
  return (
    <div id='target-section' className='min-h-screen w-full flex flex-col justify-center items-center text-center text-7xl bg-white text-white'>

          <h2 className="text-4xl md:text-7xl font-bold my-4 text-black">About Us</h2>
       <div className="container mx-auto px-4 w-11/12 md:w-4/5 h-[70vh] rounded-3xl  bg-neutral-900 flex flex-col mt-4 md:mt-0 py-4 md:p-5">

        <div className=" mx-auto  flex flex-col gap-4 justify-center items-center w-full h-full">
          <div className="flex flex-col w-full md:w-4/5 gap-4 justify-center items-start md:items-center">

          <p className="text-base md:text-lg text-slate-200">
            ArmedForcesLoan is a dedicated lending platform designed to provide financial support and assistance to military personnel and paramilitary forces in Nigeria. 
          </p>
          <p className="mt-4 text-base md:text-lg text-slate-200">
            With ArmedForcesLoan, military personnel and paramilitary forces can access a range of loan products, including asset financing, fixed loans, salary advances, and loan buyback options. 
          </p>
          <p className="mt-4 text-base md:text-lg text-slate-200">
            At ArmedForcesLoan, we are committed to serving those who serve our nation. Join us in our mission to provide financial empowerment and support to our heroes in uniform.
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About