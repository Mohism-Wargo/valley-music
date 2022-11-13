import './icons'

const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

class Player {
    constructor(node) {
        this.root = typeof node === 'string' ? $(node) : node
        this.songList = []
        this.currentIndex = 0
        this.start()
        // https://github.com/Mohism-Wargo/Simulate-data/blob/main/music-list.json
    }
    start() {
        fetch('https://github.com/Mohism-Wargo/Simulate-data/blob/main/music-list.json', { mode: 'no-cors' })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.songList = data
            })
    }
    bind() {

    }
}

new Player('#player')