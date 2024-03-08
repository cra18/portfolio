"use client"
import React, { useState } from 'react'

const EmailSection = () => {
    return (
        <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
            <div>
                <h5 className="text-xl font-bold text-purple-500 my-2">
                    Let&apos;s Connect
                </h5>
                <p className="text-purple-800 mb-4 max-w-md">
                    {" "}
                    I am looking for new job opportunities. 
                    Feel free to send me any questions or comments you may have. 
                    I will get back to you as soon as I can!
                </p>
                
                {/* Linkedin and Github buttons */}
                <div>
                    <a href="https://github.com/cra18" target="_blank">
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-500 via-yellow-400 to-yellow-500  hover:bg-slate-200 text-black">
                                <span className="block bg-white hover:bg-gradient-to-br rounded-full px-5 py-2">GitHub</span>
                        </button>
                    </a>

                    <a href="https://www.linkedin.com/in/connor-austin-code" target="_blank">
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-yellow-500 via-red-400 to-red-500  hover:bg-slate-200 text-black mt-3">
                            <span className="block bg-white hover:bg-gradient-to-br rounded-full px-5 py-2">LinkedIn</span>
                        </button>
                    </a>
                </div>
            </div>

            {/* Emails sent through formspree */}
            <div>
                <form className="flex flex-col gap-4" action="https://formspree.io/f/mjvnrrwb" method="POST">
                    <div className="mb-1">
                        <label htmlFor="email" className="text-purple-500 font-semibold block">
                            Your Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            required placeholder="jaredsmith@gmail.com"
                            className="border border-purple-800 w-full px-1"
                        />
                    </div>

                    <div className="mb-1">
                        <label htmlFor="subject" className="text-purple-500 font-semibold block">
                            Subject
                        </label>
                        <input
                            name="subject"
                            type="text"
                            id="subject"
                            required placeholder="You're Hired"
                            className="border border-purple-800 w-full px-1"
                        />
                    </div>

                    <div className="mb-1">
                        <label htmlFor="message" className="text-purple-500 font-semibold block">
                            Message
                        </label>
                        <textarea 
                            name="message" 
                            id="message" 
                            className="border border-purple-800 w-full px-1"
                            placeholder="Come work for us!"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                    >
                        Send
                    </button>
                
                </form>
            </div>
        </section>
    )
}

export default EmailSection