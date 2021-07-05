import { useState, useEffect } from 'react'

import Box from '../components/box'
import Emote from '../components/emote'
import Head from '../components/head'

const Index = () => {
    const [logoText, setLogoText] = useState('Louk Hin')

    const resizeHandler = () => {
        if (window.innerWidth >= 640) return setLogoText('Louk Hin')
        setLogoText('LkH')
    }

    useEffect(() => {
        window.addEventListener('resize', resizeHandler)

        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    }, [])

    return (
        <>
            <Head title='LoukHin'>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://cdn.jsdelivr.net' />
                <link rel='preconnect' href='https://use.fontawesome.com' />
                <link
                    rel='preload'
                    as='style'
                    onLoad="this.onload=null; this.rel='stylesheet'"
                    href='https://fonts.googleapis.com/css?family=Bai+Jamjuree&display=swap&subset=thai'
                />
                <link
                    rel='preload'
                    as='style'
                    onLoad="this.onload=null; this.rel='stylesheet'"
                    href='https://use.fontawesome.com/releases/v5.0.4/css/all.css'
                />
            </Head>
            <div className='container mx-auto my-20 xl:w-2/3 flex flex-row flex-wrap p-2'>
                <Box color='white' width='square' className='text-5xl sm:text-8xl font-bold flex flex-wrap content-end'>
                    <span className='transparent'>{logoText} <Emote name='rabbitFoot' /></span>
                </Box>
                {/* <div className='flex flex-grow justify-end w-full md:w-auto'>
                    <div className='flex flex-row flex-wrap w-full md:w-56 lg:w-full justify-end md:content-end'>
                        <Box color='white' size='small' width='square' className='justify-center flex-col flex text-center'>Facebook</Box>
                        <Box color='white' size='small' width='square' className='justify-center flex-col flex text-center'>2</Box>
                        <Box color='white' size='small' width='square' className='justify-center flex-col flex text-center'>3</Box>
                        <Box color='white' size='small' width='square' className='justify-center flex-col flex text-center'>4</Box>
                    </div>
                </div>
                <Box color='white' width='full'>มีหัวไหม</Box>
                <Box color='white' width='1/2'>aaa</Box>
                <Box color='white' width='1/2'>aaa</Box> */}
            </div>
            <style jsx global>{`
                span.transparent {
                    background-color: #fabc05;
                    background-image: url('/background.svg');
                    background-attachment: fixed;
                    color: #0000;
                    background-clip: text;
                    -webkit-background-clip: text;
                }
                body {
                    font-family: 'Bai Jamjuree';
                    background-color: #fabc05;
                    background-image: url('/background.svg');
                    background-attachment: fixed;
                    overflow: hidden;
                }
                #__next {
                    height: 100vh;
                    overflow-y: auto;
                }
            `}</style>
        </>
    )
}

export default Index
