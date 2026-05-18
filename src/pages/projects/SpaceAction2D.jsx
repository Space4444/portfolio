export default function SpaceAction2D() {
    return (<>
        <div className='text-3xl'>Space Action 2D</div>

        <div className='my-2'>
            This is simple 2D space shooter I've made with C++ and Visual Studio 2013 in childhood.
        </div>
        
        <a className='text-xl' href='https://github.com/Space4444/SpaceAction2D'>
            GitHub repository
        </a>

        <img
            alt='screenshot'
            src='https://github.com/user-attachments/assets/2a13765b-d1c2-4f23-9056-86498e14c4a2'
            className='my-2'
        />

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