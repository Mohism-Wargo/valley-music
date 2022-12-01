import './icons'
import Swiper from './Swiper.js'

// 可选的播放模式
const avaliablePlayModeList = ['order', 'unordered', 'loop']

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

        this.setUpPlayMode()
        this.start()
        this.bind()
        // this.animationPlayState()
        // https://mohism-wargo.github.io/Simulate-data/music-list.json
    }

    // 设置模式按钮的UI
    setPlayModeButton() {
        const button = this.$('.btn-play-mode')
        button.classList = []
        button.classList.add('btn-play-mode')
        button.classList.add(this.playMode)
        button.querySelector('use').setAttribute('xlink:href', `#${this.playMode}-icon`)
    }
    // 初始化播放模式
    setUpPlayMode() {
        // 从本地读取模式
        const modeFromStore = window.localStorage.getItem('playMode')
        // 校验
        if (avaliablePlayModeList.includes(modeFromStore)) {
            this.playMode = modeFromStore
        } else {
            // 不是有效的就使用默认模式
            this.playMode = avaliablePlayModeList[0]
        }
        this.setPlayModeButton()
    }

    // 切换模式
    changePlayMode() {
        // 按顺序切换模式
        const nextPlayModeIndex = (avaliablePlayModeList.indexOf(this.playMode) + 1) % avaliablePlayModeList.length
        this.playMode = avaliablePlayModeList[nextPlayModeIndex]
        // 记录到本地
        window.localStorage.setItem('playMode', this.playMode)
        // 设置ui
        this.setPlayModeButton()
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
                self.animationPlayState.call(self)
                this.classList.remove('pause')
                this.classList.add('playing')
                this.querySelector('use').setAttribute('xlink:href', '#pause-icon')
            } else if (this.classList.contains('playing')) {
                self.audio.pause()
                self.animationPlayState.call(self)
                this.classList.remove('playing')
                this.classList.add('pause')
                this.querySelector('use').setAttribute('xlink:href', '#play-icon')
            }
        }

        // 统一播放上一首的逻辑
        this.$('.btn-pre').onclick = this.preSong.bind(this)
        this.audio.addEventListener('ended', this.preSong.bind(this))
        this.$('.btn-play-mode').onclick = this.changePlayMode.bind(this)

        // 统一播放下一首的逻辑
        this.$('.btn-next').onclick = this.nextSong.bind(this)
        this.audio.addEventListener('ended', this.nextSong.bind(this))
        this.$('.btn-play-mode').onclick = this.changePlayMode.bind(this)

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

    // 播放上一首歌
    preSong() {
        // 根据不同的模式进行不同的处理
        switch (this.playMode) {
            case 'order': {
                this.currentIndex = this.currentIndex = (this.songList.length + this.currentIndex - 1) % this.songList.length
                this.loadSong()
                break;
            }
            case 'unordered': {
                this.currentIndex = Math.floor(Math.random() * this.songList.length)
                console.log('当前歌曲的下标：', this.currentIndex)
                this.loadSong()
                break;
            }
            case 'loop': {
                this.audio.currentTime = 0
                break;
            }
            default: {
                return console.error('不是有效的播放模式')
            }
        }
        this.playSong()
    }

    // 播放下一首歌
    nextSong() {
        // 根据不同的模式进行不同的处理
        switch (this.playMode) {
            case 'order': {
                this.currentIndex = (this.currentIndex + 1) % this.songList.length
                this.loadSong()
                break;
            }
            case 'unordered': {
                this.currentIndex = Math.floor(Math.random() * this.songList.length)
                this.loadSong()
                break;
            }
            case 'loop': {
                this.audio.currentTime = 0
                break;
            }
            default: {
                return console.error('不是有效的播放模式')
            }
        }
        console.log('当前歌曲的下标：', this.currentIndex)
        this.playSong()
    }
    //  动效播放的逻辑
    animationPlayState() {
      const frame = this.$('.frame')
      if (frame.classList.contains('pause')) {
          frame.classList.remove('pause')
          frame.classList.add('running')
      } else if (frame.classList.contains('running')) {
          frame.classList.remove('running')
          frame.classList.add('pause')
      }
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
