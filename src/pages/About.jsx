import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Layout, Card } from 'antd';
import { ThemeContext } from '../context';


const { Content, Header } = Layout;


export default function About() {
    const { isDark } = useContext(ThemeContext);

    return (
        <Content style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Card title='About me' style={{ maxWidth: 700 }}>
                <p className='my-2'>
                    I'm Alex. Full-stack web and mobile app developer, and amateur electronics experimentalist.
                </p>
                <p className='my-2'>
                    At school I made several video games for PC and mobile with JavaScript, C++ and C#.
                </p>
                <p className='my-2'>
                    After that I made some trading tools and bots, assembled few electronic devices with microcontrollers
                    and did some experiments with Tesla coils and other high voltage things.
                </p>
                <p className='my-2'>
                    Corrently I'm working on trading software using JS, Python, C++ and Cuda.
                </p>
                <p className='my-2'>
                    <Link to='/projects'>
                        See more about my projects
                    </Link>
                </p>
            </Card>
        </Content>
    );
}