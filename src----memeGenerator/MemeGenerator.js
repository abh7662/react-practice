import React from "react"

/**
 * Initialize state to save the following data:
 *      top text
 *      bottom text
 *      random image (intialize with "http://i.imgflip.com/1bij.jpg")
 */

class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSumbit = this.handleSumbit.bind(this)
    }
    async componentDidMount(){
            /**
     * We'll be using an API that provides a bunch of meme images.
     * 
     * Your task:
     * make an API call to "https://api.imgflip.com/get_memes" and save the 
     * data that comes back (`response.data.memes`) to a new state property
     * called `allMemeImgs`. (The data that comes back is an array)
     */

            await fetch("https://api.imgflip.com/get_memes")
                .then(response => response.json())
                .then(data => 
                    this.setState({
                    allMemeImgs: data.data.memes
                }
                )
                )
    }
    handleChange(e){
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }
    handleSumbit(e){
        e.preventDefault()
        const random_nmuber = Math.round(Math.random()*100)
        // console.log(random_nmuber)
        this.setState({
            randomImage: this.state.allMemeImgs[random_nmuber].url
        })
    }
    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSumbit}>
                    <input 
                        type="text" 
                        name="topText" 
                        value={this.state.topText} 
                        placeholder="Top Text" 
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text" 
                        name="bottomText" 
                        value={this.state.bottomText} 
                        placeholder="Bottom Text" 
                        onChange={this.handleChange}
                    />
                    <button>Gen</button>
                </form>
                <div className="meme">
                    {/* {console.log(this.state.topText)} */}
                    <img src={this.state.randomImage} alt="random image" />
                    <h2 className ="top">{this.state.topText}</h2>
                    <h2 className ="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator

/**
 * Other modern/advanced React features/topics to learn:
 * 
 * Official React Context API - https://reactjs.org/docs/context.html
 * Error Boundaries - https://reactjs.org/docs/error-boundaries.html
 * render props - https://reactjs.org/docs/render-props.html
 * Higher Order Components - https://reactjs.org/docs/higher-order-components.html
 * React Router - https://reacttraining.com/react-router/core/guides/philosophy
 * React Hooks - https://reactjs.org/docs/hooks-intro.html
 * React lazy, memo, and Suspense - https://reactjs.org/blog/2018/10/23/react-v-16-6.html
 */