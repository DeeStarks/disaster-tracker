import spinner from './spinner.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="loading" />
            <h3>Fetching data...</h3>
        </div>

    )
}

export default Loader