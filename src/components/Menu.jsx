import { useNavigate, useLocation } from 'react-router-dom';
import { Menu as AntMenu } from 'antd';


const items = [
    {
        label: 'Projects',
        key: '/projects'
    },
    {
        label: 'About Me',
        key: '/about'
    },
    {
        label: 'Contacts',
        key: '/contacts'
    }
];


export default function Menu() {
    const location = useLocation();
    const navigate = useNavigate();
    const key = '/' + location.pathname.split('/')[1];
    
    function onClick(e) {
        navigate(e.key);
    }

    return (
        <AntMenu onClick={onClick} selectedKeys={[key]} mode='horizontal' items={items} style={{ justifyContent: 'center' }}/>
    );
}
