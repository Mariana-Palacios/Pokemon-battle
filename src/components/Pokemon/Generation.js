const Generation = () =>{
    const imageNames = [1,2,3,4,5]
    return (
        <div className="generations .simple-pixel-border-with-out-hover">
            <h1>Choose the generation</h1>
            <div className='flex flex-j-c '>
                {imageNames.map((image, i) => 
                <section key={i}  className='generation flex flex-f-w '>
                    <img src={require(`../../img/trainer/${image}.png`)} alt={`generation ${image}`}/>
                    <h2>G{image}</h2>
                </section>)}
            </div>
        </div>
    )
}

export default Generation;