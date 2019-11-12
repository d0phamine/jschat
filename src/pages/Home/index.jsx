import React from 'react';

import {Message} from 'components';



import './Home.scss'

const Home = () => (
    <section className="home">
        <Message 
        avatar="https://sun9-8.userapi.com/c854528/v854528097/123e96/N4Gg333hyZ4.jpg?ava=1" 
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝" 
        date="Sun Nov 10 2019 21:55:32 "
        attachments={[
            {
                filename: 'image.jpg',
                url: 'https://source.unsplash.com/100x100/?random-1&nature,water',
            },
            {
                filename: 'image.jpg',
                url: 'https://source.unsplash.com/100x100/?random-2&nature,water',
            },
            {
                filename: 'image.jpg',
                url: 'https://source.unsplash.com/100x100/?random-3&nature,water',
            },
        ]}
        
        />
        <Message 
        avatar="https://sun9-24.userapi.com/c854220/v854220647/155f29/oI-XOS1gijU.jpg?ava=1" 
        text="ну че дарова ебать" 
        date="Sun Nov 10 2019 21:55:32 "
        IsMe={true}
        IsReaded={true}
        
        />
    </section>
);




export default Home;
