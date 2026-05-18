import { useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'antd';


const items = [
    {
        key: 'games',
        label: 'Games',
        type: 'group',
        children: [
            { key: '/galacticbattles', label: 'Galactic Battles' },
            { key: '/battleshapes', label: 'Battle Shapes' },
            { key: '/gravitylens', label: 'Gravity Lens' },
            { key: '/starflight', label: 'Star Flight' },
            { key: '/spaceaction2d', label: 'Space Action 2D' },
        ],
    },
    {
        key: 'trading',
        label: 'Trading tools',
        type: 'group',
        children: [
            { key: '/tradesim', label: 'Tradesim' },
        ],
    },
    {
        key: 'electronics',
        label: 'Electronics',
        type: 'group',
        children: [
            { key: '/pulsegenerator', label: 'Pulse generator' },
        ],
    }
];


export default function ProjectsMenu(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const key = location.pathname.replace('/projects', '');
    
    function onClick(e) {
        navigate('/projects' + e.key);
        props.onClick?.();
    }

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[key]}
            mode='inline'
            items={items}
            style={{borderWidth: '0px'}}
        />
    );
}
