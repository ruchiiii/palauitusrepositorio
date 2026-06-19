
const Filter = ({ filter , setFilter}) => {


    return (
        <div>
            <p>
                Filter shown with
                <input
                    placeholder="filter"
                    type="text"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
            </p>
        </div>

    )
}


export default Filter