import LinkExternal from "../../components/LinkExternal";


export default function Electricity() {
    return (<>
        <div className='text-3xl'>Electrical experiments</div>

        <div className='mt-8 mb-2'>
            Solid state Tesla coil:
        </div>

        <a className='text-lg leading-loose inline-flex' href='https://youtu.be/2J_Jde7yMhM' target='_blank'>
            <div className='underline'>https://youtu.be/2J_Jde7yMhM</div>
            <LinkExternal />
        </a>

        <br/>

        <a className='text-lg leading-loose inline-flex' href='https://www.youtube.com/shorts/8LuWYBgxhOo' target='_blank'>
            <div className='underline'>https://www.youtube.com/shorts/8LuWYBgxhOo</div>
            <LinkExternal />
        </a>

        <div className='mt-8 mb-2'>
            Spinning plasm in magnetic field:
        </div>

        <a className='text-lg leading-loose inline-flex' href='https://youtu.be/Skd7r6a4W-Y' target='_blank'>
            <div className='underline'>https://youtu.be/Skd7r6a4W-Y</div>
            <LinkExternal />
        </a>

        <br/>

        <a className='text-lg leading-loose inline-flex' href='https://youtu.be/-89gN2JQ_ws' target='_blank'>
            <div className='underline'>https://youtu.be/-89gN2JQ_ws</div>
            <LinkExternal />
        </a>
        
        <br/>

        <a className='text-lg leading-loose inline-flex' href='https://youtu.be/4NedGWXh0TU' target='_blank'>
            <div className='underline'>https://youtu.be/4NedGWXh0TU</div>
            <LinkExternal />
        </a>

        <div className='my-2'>
            A HV capacitor was placed in series with the arc.
            I haven't found a generally accepted explanation why is it spinning in one direction, despite that there is
            alternating current without any DC component. Rotation direction depends only on the orientation of the magnet.
        </div>
    </>);
}