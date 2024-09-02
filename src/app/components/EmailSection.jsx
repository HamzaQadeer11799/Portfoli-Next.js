"use client"
import React,{useState} from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const handleSubmit=async (e)=>{
e.preventDefault();
const data ={
  email: e.target.email.value,
  subject: e.target.subject.value,
  message: e.target.message.value,
}
console.log('submitting data', data)
const JSONdata = JSON.stringify(data)
const endPoint = "/api/send";

const options={
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSONdata,
}
const response = await fetch(endPoint, options)
console.log('response from server', response)
const resData = await response.json();
console.log(resData)
if(response.ok){
  console.log('Message sent,')
  setEmailSubmitted(true)
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message')
  email.value=""
  subject.value=''
  message.value=''
}
}
  return (
    <section className="grid md:grid-cols-2 my-12 py-24 gap-4 relative " id='contact'>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2  -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always open.
          Whether you have a question, suggestion or feedback, I&apos;ll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/HamzaQadeer11799/mern-blog">
            <Image
              src={GithubIcon}
              alt="github-icon"
              height="20px"
              width="20px"
            />
          </Link>
          <Link href="linkedin.com/in/hamza-qadeer-080110244">
            <Image
              src={LinkedinIcon}
              alt="linkedin-icon"
              height="20px"
              width="20px"
            />
          </Link>
        </div>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="email"
            type="email"
            className="text-white block text-sm font-medium mb-2"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name='email'
            required
            placeholder="youremail@google.com"
            className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9]
text-gray-100 text-sm rounded-lg block w-full p-2.5"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="subject"
            type="text"
            className="text-white block  text-sm font-medium mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name='subject'
            required
            placeholder="Enter Subject"
            className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9]
text-gray-100 text-sm rounded-lg block w-full p-2.5"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            type="text"
            className="text-white block mb-2 text-sm font-medium"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9]
text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Let talk about..."
          />
        </div>
        <button type='submit' className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full ">
          Send Message
        </button>
        {emailSubmitted && (
          <p className='text-green-500 text-medium mt-2'>Email sent successfully!</p>
        )}
      </form>
    </section>
  );
};

export default EmailSection;
