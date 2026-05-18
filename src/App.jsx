import { useState, useEffect, useContext } from 'react';
import { ConfigProvider, theme, Switch, Layout } from 'antd';
import { SunFilled, MoonFilled } from '@ant-design/icons';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Menu from './components/Menu';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
import { ThemeContext } from './context';


const { Header, Footer } = Layout;


function App() {
    const location = useLocation();
    const [isDark, setIsDark] = useState( () => {
        const saved = localStorage.getItem('isDark');
        return saved !== null ? JSON.parse(saved) : true;
    });

    useEffect( () => {
        localStorage.setItem('isDark', JSON.stringify(isDark) );
    }, [isDark]);

    return (<>
        <ConfigProvider
            theme={{
                algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
                components: {
                    Switch: {
                        handleBg: isDark ? '#afafaf' : '#FFF',
                    },
                },
                token: {
                    colorPrimary: isDark ? '#5efff4' : '#2d99ff'
                }
            }}
        >
            <ThemeContext.Provider value={{ isDark, setIsDark }}>

                <Layout style={{minHeight: '100vh'}}>
                
                    <Switch
                        style={{
                            backgroundColor: isDark ? 'rgb(57, 78, 93)' : 'rgb(140, 184, 215)',
                            position: 'absolute',
                            right: '10px',
                            top: '12px'
                        }}
                        onClick={() => setIsDark(!isDark)}
                        checkedChildren={<SunFilled />}
                        unCheckedChildren={<MoonFilled />}
                        defaultChecked={!isDark}
                    />

                    {/* <Header style={headerStyle}> */}
                        <Menu />
                    {/* </Header> */}

                    <Layout>
                        <Routes>
                            <Route path='/' element={<Navigate to={location.hash.slice(1) || '/projects'} />} />
                            <Route path='/about' element={<About/>} />
                            <Route path='/projects/*' element={<Projects/>} />
                            <Route path='/contacts' element={<Contacts/>} />
                            <Route path='*' element={<NotFound/>} />
                        </Routes>
                    </Layout>

                    <Footer style={{
                        textAlign: 'center',
                        backgroundColor: isDark ? '#002' : 'rgb(130, 180, 230)'
                    }}></Footer>

                </Layout>

            </ThemeContext.Provider>
        
        </ConfigProvider>
    </>)
}

export default App
