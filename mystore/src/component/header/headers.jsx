import "./header.css"
const Headers = () => {
    return (
        <>
            <header>
                <h1>  MyStore</h1>
                <label className="search">
                    <input id="search" placeholder="apps,games..." />
                    <i className="fa fa-search"></i>
                </label>
            </header>
        </>
    )
}
export default Headers;