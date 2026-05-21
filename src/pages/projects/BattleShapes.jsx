import Images from '../../components/Images';
import LinkExternal from '../../components/LinkExternal';
import YoutubeEmbed from '../../components/YoutubeEmbed';
import screen1 from '../../assets/bs_screen1.png';
import screen2 from '../../assets/bs_screen2.png';
import screen3 from '../../assets/bs_screen3.png';
import screen4 from '../../assets/bs_screen4.png';
import screen5 from '../../assets/bs_screen5.png';
import screen6 from '../../assets/bs_screen6.png';
import screen7 from '../../assets/bs_screen7.png';
import screen8 from '../../assets/bs_screen8.png';
import screen9 from '../../assets/bs_screen9.png';
import screen10 from '../../assets/bs_screen10.png';


export default function BattleShapes() {
    return (<>
        <div className='text-3xl'>Battle Shapes</div>

        <div className='my-2'>
            This is 2D game where you control a triangular spaceship and fight against alien geometric shapes. It is made with Unity and C# for Android.
        </div>
        
        <a className='text-lg leading-loose inline-flex' href='https://github.com/Space4444/Battle-shapes/' target='_blank'>
            <div className='underline'>GitHub repository</div>
            <LinkExternal />
        </a>

        <a className='text-lg leading-loose' href='https://raw.githubusercontent.com/Space4444/Battle-Shapes/refs/heads/master/BattleShapes.apk'>
            <div className='underline'>Download for Android</div>
        </a>

        <div className='text-lg my-2'>
            Screenshots:
        </div>

        <Images items={[
            {src: screen1},
            {src: screen2},
            {src: screen3},
            {src: screen4},
            {src: screen5},
            {src: screen6},
            {src: screen7},
            {src: screen8},
            {src: screen9},
            {src: screen10}
        ]}/>

        <YoutubeEmbed src='https://youtube.com/embed/IeJ7vSicGfo' />

        <div className='my-2'>
            There are infinite number of levels with increasing difficulty.
            You can earn money, buy upgrades at the shop and fight against bosses.
            Also enemies drop unique upgrades that you can't buy at the shop.
        </div>
    </>);
}