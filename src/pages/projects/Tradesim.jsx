import Images from '../../components/Images';
import LinkExternal from '../../components/LinkExternal';
import screen1 from '../../assets/ts_screen1.png';


export default function Tradesim() {
    return (<>
        <div className='text-3xl'>Tradesim</div>

        <div className='my-2'>
            This is forex trading simulator written in JavaScript. It was made to help learning intraday trading.
        </div>
    
        <a className='text-lg leading-loose inline-flex' href='https://space4444.github.io/tradesim' target='_blank'>
            <div className='underline'>Live demo</div>
            <LinkExternal />
        </a>

        <br/>
    
        <a className='text-lg leading-loose inline-flex' href='https://github.com/Space4444/tradesim' target='_blank'>
            <div className='underline'>GitHub repository</div>
            <LinkExternal />
        </a>

        <div className='text-lg my-2'>
            Screenshot:
        </div>

        <Images items={[
            {src: screen1}
        ]}/>

        <div className='mt-2'>
            Firstly, it downloads 100 days of 1m historical data
            of random forex pair and random time range from Dukascopy. Then it adds a random number to all dates displayed on the chart.
            This is done in order to make charts more difficult to remember.
        </div>

        <div className='mt-2'>
            Then price candlesticks are displayed on the chart and you can start simulated trading.
        </div>

        <div className='mt-2'>
            At the top left corner you can pause/resume and adjust speed of the simulation.
        </div>

        <div className='mt-2'>
            Chart zooming is done by scrolling mouse wheel. The candlestick time interval is automatically adjusted if the scale is too large or too small.
        </div>

        <div className='mt-2'>
            Right-click on any place at the chart to open context menu. By default, order price will be equal to the one where you clicked on the chart.
            At the context menu you can input order price and volume, change the volume by moving slider, select between limit or stop order and
            place horizontal lines on the chart to mark price levels.
        </div>

        <div className='mt-2'>
            You can modify prices and volumes of pending orders in the control panel. Prices can also be changed by dragging orders on the chart.
        </div>

        <div className='mt-2'>
            Informaion about opened position is displayed at the bottom left section.
        </div>

        <div className='mt-2'>
            Also you can withdraw virtual money by clicking on the green button at the top right corner.
        </div>

        <div className='mt-2'>
            You trading summary is saved and displayed at the main page.
        </div>
    </>);
}