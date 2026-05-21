import { Layout, Space, Card } from 'antd';
import { YoutubeFilled, GithubFilled } from '@ant-design/icons';
import telegramLogo from '../assets/telegram.svg';
import youtubeLogo from '../assets/youtube.svg';
import githubLogo from '../assets/github.svg';
import LinkExternal from "../components/LinkExternal";


const { Content } = Layout;


export default function Contacts() {
    return (
        <Content style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Card title='My contacts' style={{ maxWidth: 700 }}>
                <p>
                <a className='text-lg leading-loose inline-flex' href='https://www.youtube.com/@space_games' target='_blank'>
                    <img src={youtubeLogo} width={32} className='mr-2' />
                    <span className='underline'>YouTube</span>
                    <LinkExternal />
                </a>
                </p>
                <p>
                <a className='text-lg leading-loose inline-flex' href='https://github.com/Space4444' target='_blank'>
                    <img src={githubLogo} width={32} className='mr-2' />
                    <span className='underline'>GitHub</span>
                    <LinkExternal />
                </a>
                </p>
                <p>
                <a className='text-lg leading-loose inline-flex' href='https://t.me/AlexKD99' target='_blank'>
                    <img src={telegramLogo} width={32} className='mr-2' />
                    <span className='underline'>Telegram</span>
                    <LinkExternal />
                </a>
                </p>
            </Card>
        </Content>
    );
}