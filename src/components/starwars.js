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
                        <h1>{this.state.name}</h1>
                        <p className='details'>{this.state.height}</p>
                        <p className='details'>{this.state.mass}</p>
                        <p className='details'>{this.state.gender}</p>
                        <img src={this.state.image} alt="img" className='details'/>
                        <p className='details'>{this.state.homeworld}</p>
                        <p className='details'>{this.state.birthday}</p>
                    </div>
                }
            </>
        )
    }
}