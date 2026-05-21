export default function YoutubeEmbed(props) {
    return <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <div style={{ maxWidth: '600px', width: '100%' }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe
                    src={props.src}
                    title='YouTube Video Player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope'//; picture-in-picture'
                    allowFullScreen
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        maxWidth: 600,
                        maxHeight: 400
                    }}
                />
            </div>
        </div>
    </div>
}
