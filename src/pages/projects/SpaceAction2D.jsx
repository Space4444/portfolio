import Images from '../../components/Images';
import LinkExternal from '../../components/LinkExternal';
import YoutubeEmbed from '../../components/YoutubeEmbed';
import screen1 from '../../assets/sa_screen1.png';


export default function SpaceAction2D() {
    return (<>
        <div className='text-3xl'>Space Action 2D</div>

        <div className='my-2'>
            This is simple 2D space shooter I've made with C++ and Visual Studio 2013 in childhood.
        </div>
        
        <a className='text-lg leading-loose inline-flex' href='https://github.com/Space4444/SpaceAction2D' target='_blank'>
            <div className='underline'>GitHub repository</div>
            <LinkExternal />
        </a>

        <div className='text-lg my-2'>
            Screenshot:
        </div>
                
        <Images items={[
            {src: screen1}
        ]}/>
        
        <YoutubeEmbed src='https://youtube.com/embed/fQhSZqSGUKE' />

        <div className='my-2'>
            You control a spaceship and fight against alien spaceships.
            Also you can teleport between planets and use minimap to navigate the star system. 
        </div>

        <div className='my-2'>
            This version works only on Windows. To run the game, open SpaceAction2.exe in "Debug" folder.
            You may need to download all .dll files in that folder and place them near the SpaceAction2.exe file.
        </div>
    </>);
}