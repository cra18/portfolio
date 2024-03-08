"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    // fills in appropriate data based on selected tab
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>Next.js</li>
                <li>React</li>
                <li>Python</li>
                <li>SQL</li>
                <li>C/C++</li>
                <li>Java</li>
                <li>JavaScript/HTML/CSS</li>
                <li>C#</li>
                <li>Angular CI</li>
                <li>.NET Framework</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Computer Science BS from Florida State University</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>CPR/First Aid certified</li>
                <li>Food Manager License</li>
                <li>NAUI Scuba/Nitrox Certified</li>
                <li>Master Captain&apos;s License</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    // used for tab changes in About Me section
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const tabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        })
    }


    return (
        <section id="about" className="text-black">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">

                <Image src="/images/AboutMe.jpg" alt="About photo" width={200} height={200} />

                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl text-purple-500 font-bold mb-4">About Me</h2>
                    <p className="text-base text-black lg:text-lg">
                        a passionate computer scientist with a knack for adventure! Armed with a degree in Computer Science, 
                        I thrive on the challenges of coding and crafting innovative programs.
                    </p>

                    <p className="text-base text-black lg:text-lg">
                        When I&apos;m not immersed in the world of code, you&apos;ll often find me indulging in my love for 
                        sports—whether it&apos;s cheering for my favorite team or getting active on the field myself. 
                        I&apos;m also an avid angler, finding joy in the art of fishing, and a thrill-seeker who&apos;s 
                        always up for an adrenaline-pumping skydiving or scuba diving experience.
                    </p>

                    
                    {/* tab options */}
                    <div className="flex flex-row mt-8">
                        <TabButton selectTab={() => tabChange("skills")} active={tab === "skills"}>
                            Skills
                        </TabButton>

                        <TabButton selectTab={() => tabChange("certifications")} active={tab === "certifications"}>
                            Certifications
                        </TabButton>

                        <TabButton selectTab={() => tabChange("education")} active={tab === "education"}>
                            Education
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab)?.content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;