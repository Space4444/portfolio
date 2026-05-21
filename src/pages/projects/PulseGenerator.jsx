import { useEffect, useState } from 'react';
import { Space } from 'antd';
import LinkExternal from '../../components/LinkExternal';
import Images from '../../components/Images';
import YoutubeEmbed from '../../components/YoutubeEmbed';
import circuit from '../../assets/pg_circuit.png';
import photo from '../../assets/pg_photo.png';


export default function PulseGenerator() {
    return (<>
        <div className='text-3xl'>Pulse generator</div>

        <div className='my-2'>
            This is 3-channel pulse generator made on stm32 with STM32CubeMX and Keil µVision. It generates square pulses with configurable frequency,
            duty cycle and phase shift between channels. Frequency ranges from less than 1 Hz up to 10 MHz.
        </div>

        <div className='my-2'>
            It provides automatic synchronization between channels.
            If you change the period of the 1-st channel, then periods of other channels will automatically change to the nearest values that divide
            or are divisible by the period of the 1-st channel.
            But if you don't need synchronization, you can just change frequency of 2-nd or 3-rd channel and it will not affect other channels.
        </div>

        <div className='my-2'>
            Also it memorizes it's configuration and loads it on restart.
        </div>

        <div className='my-2'>
            This version is built on the board stm32f103c8t6 and ST-LINK programmer was used to install the code.
            It has no display and output signals are configured by 6 buttons, rotary encoder and 3 LEDs.
        </div>

        <div className='mt-4 mb-2'>
            You can get the sourse code and program installation guide from GitHub if you want to build it yourself:
        </div>
        
        <a className='mb-4 text-lg leading-loose inline-flex' href='https://github.com/Space4444/Stm32Generator' target='_blank'>
            <div className='underline'>GitHub repository</div>
            <LinkExternal />
        </a>
                
        <Images items={[
            {src: circuit, alt: 'Circuit diagram'},
            {src: photo, alt: 'Photo'}
        ]}/>

        <YoutubeEmbed src='https://youtube.com/embed/u5IdKObk2uI' />
    </>);
}