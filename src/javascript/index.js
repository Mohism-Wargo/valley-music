import './icons'
import Swiper from './Swiper.js'

class Player {
    constructor(node) {
        this.root = typeof node === 'string' ? document.querySelector(node) : node
        this.$ = selector => this.root.querySelector(selector)
        this.$$ = selector => this.root.querySelectorAll(selector)
        this.songList = []
        this.currentIndex = 0
        this.audio = new Audio()
        this.lyricsArr = []
        this.lyricIndex = -1

        this.start()
        this.bind()
        // https://mohism-wargo.github.io/Simulate-data/music-list.json
    }
    start() {
        fetch('https://mohism-wargo.github.io/Simulate-data/music-list.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.songList = data
                this.loadSong()
            })
    }
    bind() {
        let self = this
        this.$('.btn-play').onclick = function () {
            if (this.classList.contains('pause')) {
                self.audio.play()
                this.classList.remove('pause')
                this.classList.add('playing')
                this.querySelector('use').setAttribute('xlink:href', '#pause-icon')
            } else if (this.classList.contains('playing')) {
                self.audio.pause()
                this.classList.remove('playing')
                this.classList.add('pause')
                this.querySelector('use').setAttribute('xlink:href', '#play-icon')
            }
        }

        this.$('.btn-pre').onclick = function () {
            self.currentIndex = (self.songList.length + self.currentIndex - 1) % self.songList.length
            self.loadSong()
            self.playSong()
        }
        this.$('.btn-next').onclick = function () {
            self.currentIndex = (self.currentIndex + 1) % self.songList.length
            self.loadSong()
            self.playSong()
        }
        this.$('.btn-play-mode').onclick = function () {
            if (this.classList.contains('order')) {
                this.classList.remove('order')
                this.classList.add('unordered')
                this.querySelector('use').setAttribute('xlink:href', '#unordered-icon')
            } else if (this.classList.contains('unordered')) {
                this.classList.remove('unordered')
                this.classList.add('loop')
                this.querySelector('use').setAttribute('xlink:href', '#loop-icon')
            } else if (this.classList.contains('loop')) {
                this.classList.remove('loop')
                this.classList.add('order')
                this.querySelector('use').setAttribute('xlink:href', '#order-icon')
            }
        }
        this.audio.addEventListener('ended', () => {
            if (self.$('btn-play-mode').classList.contains('order')) {
                self.audio.currentIndex++
                self.playSong()
            } else if (self.$('btn-play-mode').classList.contains('unordered')) {
                self.audio.currentIndex = Math.floor(Math.random() * lyricsArr.length + 1)
                self.playSong()
            } else if (self.$('btn-play-mode').classList.contains('loop')) {
                self.audio.currentTime = 0
                self.playSong()
            }
            console.log(self.audio.currentIndex)
        })
        this.audio.ontimeupdate = function () {
            self.locateLyric()
            self.setProgressBar()
        }

        let swiper = new Swiper(this.$('.show-area'))
        swiper.on('swipeLeft', function () {
            this.classList.remove('home')
            this.classList.add('all-lyrics')
        })
        swiper.on('swipeRight', function () {
            this.classList.remove('all-lyrics')
            this.classList.add('home')
        })
    }
    loadSong() {
        let songObj = this.songList[this.currentIndex]
        this.$('.header h1').innerText = songObj.title
        this.$('.header p').innerText = songObj.author + '-' + songObj.album
        this.audio.src = songObj.url
        this.audio.onloadedmetadata = () => this.$('.time-end').innerText = this.formatTime(this.audio.duration)

        this.loadLyrics()
    }

    playSong() {
        this.audio.oncanplaythrough = () => this.audio.play()
    }

    // playSongMode() {
    //     this.$('.btn-play-mode').addAttrListener('class', 'order') = function () {
    //         if (this.audio.ended === true) {
    //             this.audio.currentIndex++
    //         }
    //     }
    // }
    loadLyrics() {
        fetch(this.songList[this.currentIndex].lyric)
            .then(res => res.json())
            .then(data => {
                console.log(data.lrc.lyric)
                this.setLyrics(data.lrc.lyric)
                window.lyrics = data.lrc.lyric
            })
    }
    locateLyric() {
        if (this.lyricIndex === this.lyricsArr.length - 1) return
        let currentTime = this.audio.currentTime * 1000
        let nextLineTime = this.lyricsArr[this.lyricIndex + 1][0]
        if (currentTime > nextLineTime && this.lyricIndex < this.lyricsArr.length - 1) {
            this.lyricIndex++
            let node = this.$('[data-time="' + this.lyricsArr[this.lyricIndex][0] + '"]')
            if (node) this.setLyricToCenter(node)
            this.$$('.show-area .lyrics p')[0].innerText = this.lyricsArr[this.lyricIndex][1]
            this.$$('.show-area .lyrics p')[1].innerText = this.lyricsArr[this.lyricIndex + 1] ? this.lyricsArr[this.lyricIndex + 1][1] : ''
        }
    }

    setLyrics(lyrics) {
        this.lyricIndex = 0
        let fragment = document.createDocumentFragment()
        let lyricsArr = []
        this.lyricsArr = lyricsArr
        lyrics.split(/\n/)
            .filter(str => str.match(/\[.+?\]/))
            .forEach(line => {
                let str = line.replace(/\[.+?\]/g, '')
                line.match(/\[.+?\]/g).forEach(t => {
                    t = t.replace(/[\[\]]/g, '')
                    let milliseconds = parseInt(t.slice(0, 2)) * 60 * 1000 + parseInt(t.slice(3, 5)) * 1000 + parseInt(t.slice(6))
                    if (str !== '')
                        lyricsArr.push([milliseconds, str])
                })
            })

        this.lyricsArr.filter(line => line[1].trim() !== '')
        this.lyricsArr.sort((v1, v2) => {
            if (v1[0] > v2[0]) {
                return 1
            } else {
                return -1
            }
        }).forEach(line => {
            let node = document.createElement('p')
            node.setAttribute('data-time', line[0])
            node.innerText = line[1]
            fragment.appendChild(node)
        })
        this.$('.show-lyrics .container').innerHTML = ''
        this.$('.show-lyrics .container').appendChild(fragment)
    }
    setLyricToCenter(node) {
        let translateY = node.offsetTop - this.$('.show-lyrics').offsetHeight / 2
        translateY = translateY > 0 ? translateY : 0
        this.$('.show-lyrics .container').style.transform = `translateY(-${translateY}px)`
        this.$$('.show-lyrics p').forEach(node => node.classList.remove('current'))
        node.classList.add('current')
    }

    setProgressBar() {
        let percent = (this.audio.currentTime / this.audio.duration) * 100 + '%'
        this.$('.bar .progress').style.width = percent
        this.$('.time-start').innerText = this.formatTime(this.audio.currentTime)
    }
    formatTime(secondsTotal) {
        let minutes = parseInt(secondsTotal / 60)
        minutes = minutes >= 10 ? '' + minutes : '0' + minutes
        let seconds = parseInt(secondsTotal % 60)
        seconds = seconds >= 10 ? '' + seconds : '0' + seconds
        return minutes + ':' + seconds
    }
}

window.p = new Player('#player')