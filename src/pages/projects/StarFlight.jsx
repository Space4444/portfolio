import { useContext } from 'react';
import { ThemeContext } from '../../context';


export default function StarFlight() {
    const { isDark } = useContext(ThemeContext);
    const codeBg = isDark ? '#333' : '#BBB';
    const codeColor = isDark ? '#CCC' : '#222';

    return (<>
        <div className='text-3xl'>Star Flight</div>

        <div className='my-2'>
            This is simple space game where you control a spacecraft and dodge asteroids.
        </div>
        
        <a className='text-xl' href='https://github.com/Space4444/StarFlight'>
            GitHub repository
        </a>

        <img
            alt='screenshot'
            src='https://github.com/user-attachments/assets/c871b1d0-6f03-43c9-94e2-267ff886ddbd'
            className='my-2'
        />

        <div className='my-2'>
            It is made with Unity and C# and can be played on Android, Windows or Web. The latest version is
            currently built only for Android and Web. 
            To play on Windows or Android simply open "Space Action.exe" or "StarFlight.apk" file.
            On Android you can turn either by tapping on screen or by using accelerometer. 
        </div>

        <div className='my-2'>
            To run in web browser you may need to open "index.html" in folder "WebBuild" in Chrome with disabled web security
            or create a web server with this page so that it will work in any browser.
        </div>

        <div className='mt-2'>
            You can launch Chrome with disabled web security by executing these commands in windows cmd
            (replace {'<'}PATH TO CHROME.EXE{'>'} with actual path):
        </div>
        <div className='p-3 font-semibold font-monospace' style={{
            backgroundColor: codeBg,
            color: codeColor
        }}>
            cd {'<'}PATH TO CHROME.EXE{'>'}
            <br/>
            chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
        </div>

    </>);
}