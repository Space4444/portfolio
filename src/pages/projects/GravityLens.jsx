import Images from '../../components/Images';
import LinkExternal from '../../components/LinkExternal';
import screen1 from '../../assets/gl_screen1.png';
import screen2 from '../../assets/gl_screen2.png';
import screen3 from '../../assets/gl_screen3.png';
import screen4 from '../../assets/gl_screen4.png';
import screen5 from '../../assets/gl_screen5.png';
import screen6 from '../../assets/gl_screen6.png';


export default function GravityLens() {
    return (<>
        <div className='text-3xl'>Gravity Lens</div>

        <div className='my-2'>
            This is 2D space game made with C# and Unity for Android. It can also be run on Windows.
        </div>
        
        <a className='text-lg leading-loose inline-flex' href='https://github.com/Space4444/Gravity-Lens' target='_blank'>
            <div className='underline'>GitHub repository</div>
            <LinkExternal />
        </a>

        <a className='text-lg leading-loose' href='https://raw.githubusercontent.com/Space4444/Gravity-Lens/refs/heads/master/Gravity.apk'>
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
            {src: screen6}
        ]}/>

        <div className='my-2'>
            You control a black hole and "eat" surrounding asteroids, planets, stars and other black holes.
            But stay away from bigger black holes!
        </div>

        <div className='my-2'>
            All game objects and background are generated procedurally.
            There are shaders that simulate "gravitational lens" and "gravitational redshift" effects.
        </div>
    </>);
}