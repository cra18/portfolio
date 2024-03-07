import React from 'react'

//used for tab changes in About Me section

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-purple-500 border-b border-purple-500' : 'text-black'
    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-purple-500 ${buttonClasses}`}>
                {children}
            </p>
        </button>
    )
}

export default TabButton