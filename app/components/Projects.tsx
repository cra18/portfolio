import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section id="projects">
        <h2 className="text-center text-4xl font-bold text-purple-500 mb-4">Projects</h2>
        <div className="flex flex-wrap items-center justify-center mx-auto px-4 py-2">

            <ProjectCard 
            title="Recipe Finder" 
            text="An Api that is connected to an online recipe database, 
            allowing users to create accounts, add recipes to their saved list, 
            and search based on ingredients. Demonstrates all CRUD operations and 
            Full-Stack Development. Uses .NET Framework, SSMS, and Angular." 
            image="/images/ingredients.jpg"
            />

            <ProjectCard 
            title="Maze Solver" 
            text="Generates a random Maze using Depth First Search algorithm.
            Can be solved by user&apos;s choice of Depth First Search, Breadth First Search, 
            or Dijkstra&apos;s algorithm and can be viewed in real time.
            Built using Python, specifically Pygame module." 
            image="/images/maze.gif"
            />

            <ProjectCard 
            title="Sorting Algorithm Visualizer" 
            text="Bar graphs of variable sizes can be generated and sorted in real 
            time using selected sorting algorithms. Showcases algorithms such as Quick Sort, 
            Merge Sort, Bubble Sort, Insert Sort, and more. Uses SQL database to store 
            pseudocode and time complexities of each algorithm, which can be viewed by the user.
            Built using tkinter module in Python." 
            image="/images/visualizer.png"
            />

            <ProjectCard 
            title="Basic Shell" 
            text="Aims to implement a basic shell program, providing a command-line 
            interface through which users can interact with the operating system.
            Demonstrates concepts such as forking processes and assigning child and 
            parent processes with process IDs (pid). Built using C." 
            image="/images/command.png"
            />

            <ProjectCard 
            title="Simplified Encryption" 
            text="Uses Simplified IDEA algorithm to encrypt user-inputted string.
            Showcases knowledge of bit manipulation. Coded using C++." 
            image="/images/encryption-hero.jpg"
            />

        </div>
    </section>
  )
}

export default Projects