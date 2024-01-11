import React from 'react'
import Button from '../ButtonComponent/Button'

const RegisterSection = () => {
  return (
    <section className="flex flex-col gap-4 text-center px-32 py-12 items-center ">
        <p className="text-2xl ">Register now to start collaborating for free</p>
        <Button btnText="Get Started For Free" />
    </section>
  )
}

export default RegisterSection