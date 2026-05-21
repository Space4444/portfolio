import Images from '../../components/Images';
import LinkExternal from '../../components/LinkExternal';
import screen1 from '../../assets/gb_screen1.png';
import screen2 from '../../assets/gb_screen2.png';
import screen3 from '../../assets/gb_screen3.png';
import screen4 from '../../assets/gb_screen4.png';
import screen5 from '../../assets/gb_screen5.png';
import screen6 from '../../assets/gb_screen6.png';


export default function GalacticBattles() {
    return (<>
        <div className='text-3xl'>Galactic Battles</div>

        <div className='my-2'>
            This is multiplayer 2D space shooter made with JavaScript. Currently there is only web version for PC.
        </div>

        <a className='text-lg leading-loose inline-flex' href='https://blasterworld.alexkach99.workers.dev' target='_blank'>
            <div className='underline'>Game website</div>
            <LinkExternal />
        </a>

        <br/>

        <a className='text-lg leading-loose inline-flex' href='https://github.com/Space4444/blasterworld' target='_blank'>
            <div className='underline'>GitHub repository</div>
            <LinkExternal />
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
            {src: screen6}
        ]}/>
        
        <div className='my-2'>
            This game was made around 2017. Originally it was hosted on Heroku and was working on NodeJS
            with Electron and headless Chromium on the server. This was made in order to use WebRTC to reduce latency.
            But recently I moved it to Cloudflare Workers and noticed that even without WebRTC the latency is very small.
            So now it uses only simple WebSockets without WebRTC.
        </div>

        <div className='my-2'>
            In this game almost all of the textures are procedurally generated, including space background with stars and nebulae, planets, main star in the star system, spaceships and equipment (weapons, engines and repair robots).
        </div>

        <div className='my-2'>
            Players can battle with each other or with NPC. There are infinite number of different NPC enemy spaceships.
            The more far away you are from the space station, the stronger are NPC around you.
            NPC can drop parts of equipment that you can use to craft new equipment at the space station.
            There are also infinite number of equipment with different sprites.
            Also you can earn money by killing enemies or selling items and use that money to buy new ships.
        </div>

        <div className='my-2'>
            You can register an account and your progress will be saved in the database or play as guest without saving.
        </div>

    </>);
}