import React from "react"
import "./Main.sass"


export default function Main() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        memeUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const [memesArray, setMemesArray] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemesArray(data.data.memes))
    }, [])

    function handleMeme(event) {
        const name = event.target.name
        const value = event.target.value
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    function handleClick() {
        const randomNumber = Math.floor(Math.random() * memesArray.length - 1)
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                memeUrl: memesArray[randomNumber].url
            }
        })
    } 

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <main>
            <div className="outter-container">
                <form className="form-container" onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        className="top-input"
                        placeholder="Texto de cima"
                        name="topText"
                        value={meme.topText}
                        onChange={handleMeme}
                    />
                    <input 
                        type="text"
                        className="bottom-input"
                        placeholder="Texto de baixo"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleMeme}
                    />
                    <button className="form-button" type="submit" onClick={handleClick}>Mudar a imagem do meme</button>
                </form>
            </div>
            <div className="meme-container">
                <img src={meme.memeUrl}/>
                <h2 className="memeText top">{meme.topText}</h2>
                <h2 className="memeText bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}