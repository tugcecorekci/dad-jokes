const getJoke = async () => {
    const joke = document.querySelector('.joke')
    const currentJoke = document.querySelector('p')
    if (currentJoke) {
        joke.removeChild(currentJoke)

    }
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    const newJokeSection = document.createElement('p')
    const newJoke = document.createTextNode(res.data.joke)
    newJokeSection.appendChild(newJoke)
    joke.appendChild(newJokeSection)
}

const button = document.querySelector('button')
button.addEventListener('click', getJoke)
