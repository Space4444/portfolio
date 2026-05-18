export default function GravityLens() {
    return (<>
        <div className='text-3xl'>Gravity Lens</div>

        <div className='my-2'>
            This is 2D space game made with C# and Unity for Android. It can also be run on Windows.
        </div>
        
        <a className='text-xl' href='https://github.com/Space4444/Gravity-Lens'>
            GitHub repository
        </a>

        <img
            alt='screenshot'
            src='https://raw.githubusercontent.com/Space4444/Gravity-Lens/refs/heads/master/Screens/%D0%91%D0%B5%D0%B7%D1%8B%D0%BC%D1%8F%D0%BD%D0%BD%D1%8B%D0%B9.png'
            className='my-2'
        />

        <div className='my-2'>
            To run the game, open the file "Gravity.apk" or "gravitylens.exe".
        </div>

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