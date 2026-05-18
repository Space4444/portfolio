import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Layout, Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { ThemeContext } from '../context';
import ProjectsMenu from '../components/ProjectsMenu';
import GalacticBattles from './projects/GalacticBattles';
import BattleShapes from './projects/BattleShapes';
import GravityLens from './projects/GravityLens';
import StarFlight from './projects/StarFlight';
import SpaceAction2D from './projects/SpaceAction2D';
import Tradesim from './projects/Tradesim';
import PulseGenerator from './projects/PulseGenerator';


const { Sider, Content, Header } = Layout;


export default function Projects() {
    const [collapsed, setCollapsed] = useState(false);
    const { isDark } = useContext(ThemeContext);
    const siderBg = isDark ? 'rgb(19, 19, 19)' : 'rgb(255, 255, 255)';

    const handlers = useSwipeable({
        onSwipedLeft: event => setCollapsed(true),
        onSwipedRight: event => setCollapsed(false)
    });

    return (<>
        <Sider
            {...handlers}
            collapsed={collapsed}
            trigger={null}
            breakpoint='sm'
            collapsedWidth='0'
            onCollapse={setCollapsed}
            style={{
                backgroundColor: siderBg,
                color: isDark ? '#FFF' : '#000',
                borderRightWidth: '1px',
                borderRightColor: isDark ? 'rgb(55, 55, 55)' : 'rgb(225, 225, 225)'
            }}
        >
            <Header style={{height: '40px', backgroundColor: siderBg}}></Header>
            <ProjectsMenu onClick={() => (innerWidth < 575) && setCollapsed(true)} />
        </Sider>

        <Button
            className={isDark ? 'sider-toggle-dark' : 'sider-toggle-light'}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
                position: 'absolute',
                left: '0px',
                borderWidth: '1px',
                borderColor: isDark ? '#FFF' : '#000'
            }}
        >
            {collapsed ? 'Show project list' : 'Collapse'}
        </Button>

        <Content
            {...handlers}
            style={{
                paddingLeft:'10px',
                paddingRight:'10px',
                paddingBottom:'10px'
            }}
        >
            <Header style={{
                height: '40px',
                backgroundColor: isDark ? '#000' : '#F4F4F4'
            }}></Header>

            <Routes>
                <Route path='/' element={<Navigate to='/projects/galacticbattles' />} />
                <Route path='/galacticbattles' element={<GalacticBattles />} />
                <Route path='/battleshapes' element={<BattleShapes />} />
                <Route path='/gravitylens' element={<GravityLens />} />
                <Route path='/starflight' element={<StarFlight />} />
                <Route path='/spaceaction2d' element={<SpaceAction2D />} />
                <Route path='/tradesim' element={<Tradesim />} />
                <Route path='/pulsegenerator' element={<PulseGenerator />} />
            </Routes>
        </Content>
    </>);
}