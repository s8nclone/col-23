import React from 'react'

const PoolOfTalents = () => {
  return (
    <section className=" bg-[#DCD0EA] py-[3rem] sm:py-[6.5rem] px-4 sm:px-32 flex flex-col gap-6 sm:gap-12 items-center " >
        <div className="text-[#3A3A3A] ">
            <h2 className="text-center text-4xl sm:text-6xl font-bold mb-4 ">Pool of Talents</h2>
            <p className="text-xl sm:text-2xl text-left">Here you will find a lot of Talented people like you in different level and tracks.</p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-y-12 text-[#F9F5FF] ">
            <p className="p-4 sm:p-6 rounded-lg bg-[#7BC683] w-[full] text-lg text-center sm:w-[20rem] sm:text-2xl font-bold ">Content Writing</p>
            <p className="p-4 sm:p-6 rounded-lg bg-[#D1760C] w-[full] text-lg text-center sm:w-[20rem] sm:text-2xl font-bold ">Frontend Development</p>
            <p className="p-4 sm:p-6 rounded-lg bg-[#A071DB] w-[full] text-lg text-center sm:w-[20rem] sm:text-2xl font-bold ">Cloud Computing</p>
            <p className="p-4 sm:p-6 rounded-lg bg-[#068113] w-[full] text-lg text-center sm:w-[20rem] sm:text-2xl font-bold ">Content Creation</p>
            <p className="p-4 sm:p-6 rounded-lg bg-[#068113] w-[full] text-lg text-center sm:w-[20rem] sm:text-2xl font-bold ">UI/UX Design</p>
            <p className="p-4 sm:p-6 rounded-lg bg-[#B88900] w-[full] text-lg text-center sm:w-[20rem] sm:text-2xl font-bold ">Backend Development</p>
            <p className="p-4 sm:p-6 rounded-lg bg-[#518EF8] w-[full] text-lg text-center sm:w-[20rem] sm:text-2xl font-bold ">Graphics Design</p>
            <p className="p-4 sm:p-6 rounded-lg bg-[#6F26CC] w-[full] text-lg text-center sm:w-[20rem] sm:text-2xl font-bold ">Cyber Security</p>
            <p className="p-4 sm:p-6 rounded-lg bg-[#E32DA5] w-[full] text-lg text-center sm:w-[20rem] sm:text-2xl font-bold ">Mobile Development</p>
        </div>

        <h3 className="text-xl sm:text-2xl text-[#5B0BC1] font-medium underline "><a>see more...</a></h3>
    </section>
  )
}

export default PoolOfTalents