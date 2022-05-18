import React from 'react'

export default class Starwars extends React.Component{
    constructor(){
        super()

        this.state = {
            name: null,
            height: null,
            mass: null,
            gender: null, 
            image: null,
            homeworld: null, 
            birthday : null,
            load: false
        }
    }

    getCharacters(){
        const random = Math.round(Math.random() * 88)

        const url = `https://akabab.github.io/starwars-api/api/id/${random}.json`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    name: data.name,
                    height: data.height,
                    mass: data.mass,
                    gender: data.gender,
                    image: data.image,
                    homeworld: data.homeworld,
                    birthday: data.born,
                    load: true
                })
            })
    }

    render(){
        return(
            <>
                <button type='button' className='btn' onClick={() => this.getCharacters()}>Random Characters</button>
                {
                    this.state.load &&
                    <div className='data'>
                        <p className='details'><span className="keys">Name: </span>{this.state.name}</p>
                        <p className='details'><span className='keys'>Height: </span>{this.state.height}</p>
                        <p className='details'><span className='keys'>Weight: </span>{this.state.mass}</p>
                        <p className='details'><span className='keys'>Gender: </span>{this.state.gender}</p>
                        <img src={this.state.image} alt="img" className='details'/>
                        <p className='details'><span className='keys'>Homeworld: </span>{this.state.homeworld}</p>
                        <p className='details'><span className='keys'>Birth Day: </span>{this.state.birthday}</p>
                    </div>
                }
            </>
        )
    }
}