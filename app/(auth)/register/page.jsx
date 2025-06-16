
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <section className="min-vh-100 d-flex justify-content-center align-items-center ">

    <div className="w-50 border border-1 border-black p-5 rounded-3 bg-light shadow-lg">
        <h1 className="text-center mb-5">Register</h1>
        <form  className="d-flex flex-column gap-4 ">

            <button  className="btn btn-primary mt-3">Submit</button>
          </form>
          <h6 className="text-center mt-3">already  have account? <Link href="/login">login</Link></h6>
    </div>
</section>
  )
}

export default page