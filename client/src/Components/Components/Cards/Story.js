
import React, { Component } from 'react';

import Stories from '@reactrondev/react-stories';

class Story extends Component {
    constructor(props) {
        super(props);
        console.log(props);
      }

    render() {
        return (
            <Stories
                stories={this.props.stories}
                defaultInterval={1500}
                width={380}
                height={700}
                loop={true}
            />
        );
    }
}

const stories = [
    {
        url: 'https://static.toiimg.com/thumb/msid-46565281,width-800,height-600,resizemode-75/46565281.jpg', seeMore: <span>hello world</span>,
        header: { heading: 'Jimmy Mishra', subheading: 'Posted 5h ago', profileImage: 'https://picsum.photos/1000/1000' }
    }
    , {
        url: 'https://news.microsoft.com/wp-content/uploads/prod/sites/45/2019/07/Teamshacking@Microsoft2019hackathon_-960x630.jpg',
        header: { heading: 'Coding Club', subheading: 'Posted 32m ago', profileImage: 'https://picsum.photos/1080/1920' }
    },
    {
        url: 'https://static.vecteezy.com/system/resources/previews/000/191/138/non_2x/vector-holi-festival-poster.png',
        header: { heading: 'Holi Function', subheading: 'Posted 32m ago', profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4' }
    },
];

export default Story;