import { useContext } from 'react';
import { ThemeContext } from '../../context';
import Images from '../../components/Images';
import LinkExternal from '../../components/LinkExternal';
import screen1 from '../../assets/sf_screen1.png';


export default function StarFlight() {
    const { isDark } = useContext(ThemeContext);
    const codeBg = isDark ? '#333' : '#BBB';
    const codeColor = isDark ? '#CCC' : '#222';

    return (<>
        <div className='text-3xl'>Star Flight</div>

        <div className='my-2'>
            This is simple space game where you control a spacecraft and dodge asteroids. It is made with Unity and C# and can be played on Android, Windows or Web. The latest version is
            currently built only for Android and Web.
        </div>
        
        <a className='text-lg leading-loose inline-flex' href='https://space4444.github.io/StarFlight' target='_blank'>
            <div className='underline'>Play web version</div>
            <LinkExternal />
        </a>

        <br/>
        
        <a className='text-lg leading-loose inline-flex' href='https://github.com/Space4444/StarFlight' target='_blank'>
            <div className='underline'>GitHub repository</div>
            <LinkExternal />
        </a>

        <a className='text-lg leading-loose' href='https://raw.githubusercontent.com/Space4444/StarFlight/refs/heads/master/StarFlight.apk'>
            <div className='underline'>Download for Android</div>
        </a>

        <div className='text-lg my-2'>
            Screenshot:
        </div>
        
        <Images items={[
            {src: screen1}
        ]}/>

        <div className='my-2'>
            Fly through endless space, collect energy and dodge asteroids. In the settings you can choose whether the camera will rotate following the player or not.
            On Android the movement direction is controlled either by tapping on screen or by using accelerometer.
        </div>

    </>);
}