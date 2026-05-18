import { Link } from 'react-router-dom';
import { Layout, Button, Space } from 'antd';
import { YoutubeFilled, GithubFilled } from '@ant-design/icons';
import Icon from '@ant-design/icons';
import telegramLogo from '/telegram.svg';
import youtubeLogo from '/youtube.svg';
import githubLogo from '/github.svg';


const { Content } = Layout;


export default function Contacts() {
    return (
        <Content style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Space orientation='vertical'>
                <Link to='https://www.youtube.com/@space_games'>
                    <Button
                        size='large'
                        type='link'
                        icon={<Icon style={{width:'32px'}} component={() => <img src={youtubeLogo} />} />}
                    >
                        YouTube
                    </Button>
                </Link>
                <Link to='https://github.com/Space4444'>
                    <Button
                        size='large'
                        type='link'
                        icon={<Icon style={{width:'32px'}} component={() => <img src={githubLogo} />} />}
                    >
                        GitHub
                    </Button>
                </Link>
                <Link to='https://t.me/AlexKD99'>
                    <Button
                        size='large'
                        type='link'
                        icon={<Icon style={{width:'32px'}} component={() => <img src={telegramLogo} />} />}
                    >
                        Telegram
                    </Button>
                </Link>
            </Space>
        </Content>
    );
}