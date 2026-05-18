import { Button } from 'antd';


export default function GalacticBattles() {
    return (<>
        <div className='text-3xl'>Galactic Battles</div>

        <div className='my-2'>
            This is multiplayer 2D space shooter made with JavaScript. Currently there is only web version for PC.
        </div>

        <a className='text-xl' href='https://blasterworld.alexkach99.workers.dev'>
            Game website
        </a>

        <br/>
        
        <a className='text-xl' href='https://github.com/Space4444/blasterworld'>
            GitHub repository
        </a>

        <img
            alt='screenshot'
            src='https://github.com/user-attachments/assets/29ac1b1a-963d-4cc5-be14-5164532fc676'
            className='my-2'
        />

        <div className='my-2'>
            In this game almost all of the textures are procedurally generated, including those of: space background
            with stars and nebulae; planets; main star in the star system; spaceships; equipment (weapons, engines and repair robots).
        </div>

        <div className='my-2'>
            Players can battle with each other or with NPC. There are infinite number of different NPC enemy spaceships.
            The more far away you are from the space station, the stronger are NPC around you.
            NPC can drop parts of equipment that you can use to craft new equipment at the space station.
            There are also infinite number of equipment with different sprites.
            Also you can earn money by killing enemies or selling items and use that money to buy new ships.
        </div>

        <div className='my-2'>
            You can register an account and your progress will be saved in the database or play as guest without saving progress.
        </div>

        <div className='my-2'>
            This game was made around 2017. Originally it was hosted on Heroku and was working on NodeJS
            with Electron and headless Chromium on the server. This was made in order to use WebRTC to reduce latency.
            But recently I moved it to Cloudflare Workers and noticed that even without WebRTC the latency is very small.
            So now it uses only simple WebSockets without WebRTC.
        </div>

    </>);
}