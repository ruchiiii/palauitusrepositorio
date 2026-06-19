const Total = ({parts}) => {

    return(
        <p>total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</p>
        
    )
}


export default Total