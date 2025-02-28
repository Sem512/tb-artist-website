import '../css/Hero.css'

export default function Hero(){
return(
    <div className='hero' id="hero">
        <div className='left'>
        <h1>Ethiopian Magic <br />Scrolls and Talisman</h1>
        <p>Discover the world of ancient ethiopian arts and own a piece of the magic.</p>
        <button>Click Here</button>
        </div>
        <div className='right'>
            <img src="https://tewoldebrehan.art/wp-content/uploads/2022/11/home_artist2_slider_img1.png" alt="photo" />
        </div>
    </div>
)
}