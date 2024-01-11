import React from 'react'

const PoolOfTalents = () => {
  return (
    <section className="py-[6.5rem] px-32 flex flex-col gap-12 items-center text-center " >
        <div className="text-[#3A3A3A] ">
            <h2 className="text-6xl font-bold mb-4 ">Pool of Talents</h2>
            <p className="text-2xl ">Here you will find a lot of Talented people like you in different level and tracks.</p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-y-12 text-[#F9F5FF] ">
            <p className="p-6 rounded-lg bg-[#EC7B7B] w-[20rem] text-2xl font-bold ">UI/UX Design</p>
            <p className="p-6 rounded-lg bg-[#D1760C] w-[20rem] text-2xl font-bold ">Frontend Development</p>
            <p className="p-6 rounded-lg bg-[#A071DB] w-[20rem] text-2xl font-bold ">Cloud Computing</p>
            <p className="p-6 rounded-lg bg-[#068113] w-[20rem] text-2xl font-bold ">Content Creation</p>
            <p className="p-6 rounded-lg bg-[#7BC683] w-[20rem] text-2xl font-bold ">Content Writing</p>
            <p className="p-6 rounded-lg bg-[#518EF8] w-[20rem] text-2xl font-bold ">Graphics Design</p>
            <p className="p-6 rounded-lg bg-[#FBBB00] w-[20rem] text-2xl font-bold ">Backend Development</p>
            <p className="p-6 rounded-lg bg-[#6F26CC] w-[20rem] text-2xl font-bold ">Cyber Security</p>
            <p className="p-6 rounded-lg bg-[#E32DA5] w-[20rem] text-2xl font-bold ">Mobile Developer</p>
        </div>
    </section>
  )
}

export default PoolOfTalents