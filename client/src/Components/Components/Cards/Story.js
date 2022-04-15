
import React, { Component } from 'react';

import Stories from '@reactrondev/react-stories';

class Story extends Component {
    render() {
        return (
            <Stories
                stories={stories}
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
        url: 'https://picsum.photos/1080/1920', seeMore: <span>hello world</span>,
        header: { heading: 'Mohit Karekar', subheading: 'Posted 5h ago', profileImage: 'https://picsum.photos/1000/1000' }
    }
    , {
        url: 'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN',
        header: { heading: 'Mohit Karekar', subheading: 'Posted 32m ago', profileImage: 'https://picsum.photos/1080/1920' }
    },
    {
        url: 'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg',
        header: { heading: 'reactrondev/@reactrondev/react-stories', subheading: 'Posted 32m ago', profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4' }
    },
];

export default Story;