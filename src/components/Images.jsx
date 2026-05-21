import { useState, useEffect, useRef, useContext } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe'
import 'photoswipe/style.css';
import { waitFor } from '../utils';
import { ThemeContext } from '../context';


export default function Images(props) {
    const items = props.items;
    const [lightbox, setLightbox] = useState();
    const [sizes, setSizes] = useState( items.map(v => ({width: 0, height: 0}) ) );
    const sizesRef = useRef( items.map(v => ({width: 0, height: 0}) ) );
    const { isDark } = useContext(ThemeContext);
    
    useEffect( () => {
        const box = new PhotoSwipeLightbox({
            gallery: '#image-gallery',
            children: 'a',
            pswpModule: () => PhotoSwipe
        });
        setLightbox(box);
        box.init();
    }, []);

    const children = items.map( ({alt, src}, i) => {
        const size = sizes[i];
        return <a
            key={i}
            data-pswp-src={src}
            data-pswp-width={size.width}
            data-pswp-height={size.height}
            style={{
                color: isDark ? '#FFF' : '#000',
                textAlign: 'center'
            }}
        >
            <img
                title='click to view'
                src={src}
                alt={alt}
                style={{maxHeight: 200, borderWidth: '1px'}}
                ref={async node => {
                    if (!node) return;
                    await waitFor( () => node.naturalWidth && node.naturalHeight);
                    if (sizesRef.current[i].width) return;
                    
                    const size = {
                        width: node.naturalWidth,
                        height: node.naturalHeight
                    };
                    sizesRef.current[i] = size;
                    setSizes([...sizesRef.current]);
                }}
            />
            {alt}
        </a>
    });
    
    return <div
        className='pswp-gallery pswp-gallery--single-column'
        id='image-gallery'
        style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px'
        }}
    >
        {children}
    </div>
}
