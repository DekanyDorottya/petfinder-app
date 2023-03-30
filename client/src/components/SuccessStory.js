import StorySlider from './StorySlider';

function SuccessStory() {
    const slides = [
        {
            url: 'https://www.cesarsway.com/wp-content/uploads/2020/04/20-before-after-photos-of-dogs-after-adoption-that-show-the-true-face-of-happiness-34.jpg',
            title: 'beach',
        },
        {
            url: 'https://i.insider.com/5c3cb1ca01c0ea10483086e6?width=1000&format=jpeg&auto=webp',
            title: 'boat',
        },
        {
            url: 'https://twistedsifter.com/wp-content/uploads/2014/12/two-dogs-adoption-happiness-then-and-now-sad-happy.jpg',
            title: 'forest',
        },
        {
            url: 'https://www.rd.com/wp-content/uploads/2018/04/Sherlock-Courtesy-Richard-McSweeney.jpg',
            title: 'city',
        },
        {
            url: 'https://images.hellomagazine.com/imagenes/healthandbeauty/mother-and-baby/20211022124602/dog-adoption-stories-sylvie-rescue/0-601-514/dogs-trust-adoption-story-sylvie-t.jpg',
            title: 'italy',
        },
    ];
    const containerStyles = {
        width: '600px',
        height: '380px',
        margin: '0 auto',
    };
    return (
        <div className='success'>
            <h2>Success Story</h2>
            <div style={containerStyles}>
                <StorySlider slides={slides} />
            </div>
            {/* <img
                alt='Butterball'
                src='https://i-cdn.embed.ly/1/display?key=fd92ebbc52fc43fb98f69e50e7893c13&url=https%3A%2F%2Fi.redd.it%2F3vtt5znf9l661.jpg'
                width='200'
                className='successImg'
            ></img> */}
            <p>
                Butterball was found as a stray in Louisiana, severely
                emaciated, with every inch of her tiny body covered in thick
                clumps of fleas. At 4 months old, she was just skin and bones,
                weighing a measly 5lbs. Thankfully, she was a resilient little
                girl who took to treatment quickly and was making incredible
                progress in just a few weeks time. She put on some weight and it
                wasn’t long before she was acting like a puppy again! It wasn’t
                long before this sweet girl charmed her way into the heart of
                one of Animal Haven’s volunteers and the rest was history!
            </p>
        </div>
    );
}

export default SuccessStory;
