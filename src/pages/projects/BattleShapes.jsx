export default function BattleShapes() {
    return (<>
        <div className='text-3xl'>Battle Shapes</div>

        <div className='my-2'>
            This is 2D game where you control a triangular spaceship and fight against alien geometric shapes.
        </div>
        
        <a className='text-xl' href='https://github.com/Space4444/Battle-shapes/'>
            GitHub repository
        </a>

        <br/>

        <a className='text-xl' href='https://youtu.be/IeJ7vSicGfo'>
            Game trailer
        </a>

        <img
            alt='screenshot'
            src='https://raw.githubusercontent.com/Space4444/Battle-shapes/refs/heads/master/Screenshots/screen3.png'
            className='my-2'
        />

        <div className='my-2'>
            There are infinite number of levels with increasing difficulty.
            You can earn money, buy upgrades at the shop and fight against bosses.
            Also enemies drop unique upgrades that you can't buy at the shop.
        </div>

        <div className='my-2'>
            It is made with Unity and C# for Android. To play it, open file "BattleShapes.apk". You can also open "BattleShapes.exe" on Windows,
            but controls are designed only for Android.
        </div>
    </>);
}