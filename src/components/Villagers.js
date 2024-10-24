import { VillagersCard } from './VillagersCard';

export const Villagers = () => {
    // Villagers data
    const cardsData = [
        {
            name: 'Fauna',
            personality: 'Normal',
            image: '/icons/Fauna.png',
            url: 'https://nookipedia.com/wiki/Fauna'
        },
        {
            name: 'Molly',
            personality: 'Normal',
            image: '/icons/Molly.png',
            url: 'https://nookipedia.com/wiki/Molly'
        },
        {
            name: 'Coco',
            personality: 'Normal',
            image: 'icons/Coco.png',
            url: 'https://nookipedia.com/wiki/Coco'
        },
        {
            name: 'Zucker',
            personality: 'Lazy',
            image: 'icons/Zucker.png',
            url: 'https://nookipedia.com/wiki/Zucker'
        },
        {
            name: 'Julian',
            personality: 'Smug',
            image: 'icons/Julian.png',
            url: 'https://nookipedia.com/wiki/Julian'
        },
        {
            name: 'Judy',
            personality: 'Snooty',
            image: 'icons/Judy.png',
            url: 'https://nookipedia.com/wiki/Judy'
        },
        {
            name: 'Ione',
            personality: 'Normal',
            image: 'icons/Ione.png',
            url: 'https://nookipedia.com/wiki/Ione'
        },
        {
            name: 'Shino',
            personality: 'Peppy',
            image: 'icons/Shino.png',
            url: 'https://nookipedia.com/wiki/Shino'
        },
        {
            name: 'Merengue',
            personality: 'Normal',
            image: 'icons/Merengue.png',
            url: 'https://nookipedia.com/wiki/Merengue'
        },
        {
            name: 'Tia',
            personality: 'Normal',
            image: 'icons/Tia.png',
            url: 'https://nookipedia.com/wiki/Tia'
        }
    ]


    return (
        <div id="villagers" class="anchor">
            <h3>Current Villagers:</h3>
            {cardsData.map((card, index) => (
                <VillagersCard key={index} {...card} />
            ))}
        </div>
    );
};
