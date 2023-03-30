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

        </div>
    );
}

export default SuccessStory;
