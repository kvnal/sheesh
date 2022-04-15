import Cards, { Card } from 'react-swipe-card';

const data = ['Alexandre', 'Thomas', 'Lucien'];

const TinderSwipe = () => {
    return (
        <div>
            <Cards onEnd={()=>console.log('end')} className='master-root'>
                {data.map(item =>
                    <Card
                        onSwipeLeft={()=>console.log('swipe left')}
                        onSwipeRight={()=>console.log('swipe right')}>
                        <h2>{item}</h2>
                    </Card>
                )}
            </Cards>
        </div>
    );
};

export default TinderSwipe;