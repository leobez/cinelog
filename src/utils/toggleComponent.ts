// This function is passed to onClick events, and it toggle the componentRef that was passed

export const toggleComponent = (componentRef:any):void => {

    const classNames = componentRef.current.className.split(' ')

    if (classNames.includes('hidden')) {
        // Make it visible
        componentRef.current.classList.remove('hidden')
        componentRef.current.classList.add('block')

    } else if (classNames.includes('block')) {
        // Make it invisible
        componentRef.current.classList.remove('block')
        componentRef.current.classList.add('hidden')
    }
    
}
