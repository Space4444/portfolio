import { useContext } from 'react';
import { ThemeContext } from '../../context';


export default function Tradesim() {
    const { isDark } = useContext(ThemeContext);
    const codeBg = isDark ? '#333' : '#BBB';
    const codeColor = isDark ? '#CCC' : '#222';

    return (<>
        <div className='text-3xl'>Tradesim</div>

        <div className='my-2'>
            This is forex trading simulator written in JavaScript. It was made to help learning intraday trading.
        </div>
    
        <a className='text-xl' href='https://github.com/Space4444/tradesim'>
            GitHub repository
        </a>

        <img
            alt='screenshot'
            src='https://github.com/user-attachments/assets/12cc695b-f64f-4434-b059-2a35416e98f1'
            className='mt-2'
        />

        <div className='mt-2'>
            Firstly, it downloads 100 days of 1m historical data
            of random forex pair and random time range from Dukascopy. Then it adds a random number to all dates displayed on the chart.
            This is done in order to make remembering charts more difficult.
        </div>

        <div className='mt-2'>
            Then price candles are displayed on the chart and you can start simulated trading.
            Chart zooming automatically adjusts candles timeframe. Also you can place horisontal levels at the chart.
        </div>

        <div className='mt-2'>
            To place order, right-click on a chart at the desired price level, specify order volume and choose between limit and stop order types.
            You can modify pending orders' prices and volumes in the control panel or just drag them on the chart to change price.
        </div>

        <div className='mt-2'>
            Also you can withdraw virtual money to prevent accidental liquidation of all balance.
            You trading summary is saved and displayed at the main page.
        </div>

        <div className='mt-2'>
            To run, you must have NodeJS installed. Download the repo and run this command in command line to start the server:
        </div>
        
        <div className='p-3 font-semibold font-monospace' style={{
            backgroundColor: codeBg,
            color: codeColor
        }}>
            node serv.js
        </div>

        <div className='mt-2'>
            Then go to <span className='p-1 font-semibold font-monospace' style={{
                backgroundColor: codeBg,
                color: codeColor
            }}>localhost:2222</span> in your browser.
        </div>
    </>);
}