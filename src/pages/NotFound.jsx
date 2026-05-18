import { useContext } from 'react';
import { ThemeContext } from '../context';


export default function NotFound() {
    const { isDark } = useContext(ThemeContext);
    
    
    return (
        <div className="text-9xl" style={{
            color: isDark ? '#FFF' : '#000'
        }}>404 Not found</div>
    );
}