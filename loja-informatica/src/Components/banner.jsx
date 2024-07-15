const Banner = ()=> {
  const bannerStyle = {
    background:'url("https://fastly.picsum.photos/id/866/1200/400.jpg?hmac=V0hqejFNTg6y8iVymlNIBWVbLrbAyc4hxrT8jWrcfbE")',
    backgroundSize: 'cover',
    color: 'red',
    padding: '100px 0',
    textAlign: 'center'
  }



    return (
        <div style={bannerStyle}>
            <div className="container">
                <h1 className="display-4">Lóttus Joalheria</h1>
                <p className="lead">lorem lorem lorem lorem</p>
            </div>
        </div>
    )
}

export default Banner