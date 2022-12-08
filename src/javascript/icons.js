let svgPlaceholder = document.createElement('div')
svgPlaceholder.style.position = 'absolute'
svgPlaceholder.style.width = '0'
svgPlaceholder.style.height = '0'
svgPlaceholder.style.overflow = 'hidden'

document.body.appendChild(svgPlaceholder)
svgPlaceholder.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
    <symbol id="like-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#f5f5f5"
        d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8Z"
        data-follow-stroke="#f5f5f5" />
    </symbol>
    <symbol id="download-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#f5f5f5"
            d="M24 29 12 17h8V6h8v11h8L24 29Z" clip-rule="evenodd" data-follow-stroke="#f5f5f5" />
        <path stroke-linecap="round" stroke-width="4" stroke="#f5f5f5" d="M42 37H6M34 44H14" data-follow-stroke="#f5f5f5" />
    </symbol>
    <symbol id="share-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
        <path stroke-linejoin="round" stroke-width="4" stroke="#f5f5f5"
            d="M35 16a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM13 29a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" data-follow-stroke="#f5f5f5" />
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#f5f5f5"
            d="m30 13.575-12.66 7.67M17.338 26.564l13.34 7.883" data-follow-stroke="#f5f5f5" />
        <path stroke-linejoin="round" stroke-width="4" stroke="#f5f5f5" d="M35 32a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"
            data-follow-stroke="#f5f5f5" />
    </symbol>
    <symbol id="comment-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#f5f5f5"
            d="M44 6H4v30h9v5l10-5h21V6ZM14 21h20" data-follow-stroke="#f5f5f5" />
    </symbol>
    <symbol id="more-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
        <path stroke-linejoin="round" stroke-width="4" stroke="#f5f5f5"
            d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z" data-follow-stroke="#f5f5f5" />
        <circle fill="#f5f5f5" r="3" cy="24" cx="14" data-follow-fill="#f5f5f5" />
        <circle fill="#f5f5f5" r="3" cy="24" cx="24" data-follow-fill="#f5f5f5" />
        <circle fill="#f5f5f5" r="3" cy="24" cx="34" data-follow-fill="#f5f5f5" />
    </symbol>
    <symbol id="pre-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
        <path stroke-linejoin="round" stroke-width="4" stroke="#f5f5f5"
            d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z" data-follow-stroke="#f5f5f5" />
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#f5f5f5"
            d="m22 31-7-7 7-7M31 31l-7-7 7-7" data-follow-stroke="#f5f5f5" />
    </symbol>
    <symbol id="play-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
        <path stroke-linejoin="round" stroke-width="4" stroke="#f5f5f5"
            d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z" data-follow-stroke="#f5f5f5" />
        <path stroke-linejoin="round" stroke-width="4" stroke="#f5f5f5" d="M20 24v-6.928l6 3.464L32 24l-6 3.464-6 3.464V24Z"
            data-follow-stroke="#f5f5f5" />
    </symbol>
    <symbol id="next-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
        <path stroke-linejoin="round" stroke-width="4" stroke="#f5f5f5"
            d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z" data-follow-stroke="#f5f5f5" />
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#f5f5f5"
            d="m17 31 7-7-7-7M26 31l7-7-7-7" data-follow-stroke="#f5f5f5" />
    </symbol>
    <symbol id="list-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#f5f5f5"
            d="M7.95 11.95h32M7.95 23.95h32M7.95 35.95h32" data-follow-stroke="#f5f5f5" />
    </symbol>
    <symbol id="pause-icon""  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
        <path stroke-linejoin="round" stroke-width="4" stroke="#f5f5f5"
            d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z" data-follow-stroke="#f5f5f5" />
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#f5f5f5" d="M19 18v12M29 18v12"
            data-follow-stroke="#f5f5f5" />
    </symbol>
    <symbol id="order-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#f5f5f5"
            d="M4 25c0-6.65 5.396-12 12-12h28" data-follow-stroke="#f5f5f5" />
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#f5f5f5"
            d="m38 7 6 6-6 6M44 23c0 6.65-5.396 12-12 12H4" data-follow-stroke="#f5f5f5" />
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#f5f5f5" d="m10 41-6-6 6-6"
            data-follow-stroke="#f5f5f5" />
    </symbol>
    <symbol id="unordered-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#f5f5f5"
            d="m40 33 4 4-4 4M40 7l4 4-4 4" data-follow-stroke="#f5f5f5" />
        <path stroke-linecap="round" stroke-width="4" stroke="#f5f5f5"
            d="M44 11h-7c-7.18 0-13 5.82-13 13s5.82 13 13 13h7M4 37h7c7.18 0 13-5.82 13-13s-5.82-13-13-13H4"
            data-follow-stroke="#f5f5f5" />
    </symbol>
    <symbol id="loop-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#f5f5f5"
            d="M43.823 25.23a13.965 13.965 0 0 1-2.837 6.448A13.975 13.975 0 0 1 30 37H16C9.397 37 4 31.678 4 25c0-6.65 5.396-12 12-12h28"
            data-follow-stroke="#f5f5f5" />
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#f5f5f5"
            d="m38 7 6 6-6 6M24 19v12M24 19l-3 3-1.5 1.5" data-follow-stroke="#f5f5f5" />
    </symbol>
    <symbol id="hidden-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#73A4B9"
            d="M36 12 24 24 12 12M36 24 24 36 12 24" data-follow-stroke="#73A4B9" />
    </symbol>  
</svg>
`
