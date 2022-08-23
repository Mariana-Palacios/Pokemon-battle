const Generation = () =>{
    const imageNames = [1,2,3,4,5]
    return (
        <div className="generations">
            <h1>Choose the generation</h1>
            <div className='flex flex-j-c'>
                {imageNames.map((image, i) => 
                <section key={i}  className='generation flex'>
                    <img src={require(`../../img/trainer/${image}.png`)} alt={`generation ${image}`}/>
                    <h2>Generation {image}</h2>
                </section>)}
            </div>
        </div>
    )
}

export default Generation;