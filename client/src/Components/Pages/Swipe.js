import React, {Component} from "react";
import Swipeable from "react-swipy"
import {FaTimes,FaCheck} from 'react-icons/fa'
import Card from "../Components/Cards";
import Button from "../Components/Button";

const wrapperStyles = {position: "relative", width: "360px", height: "640px" , backgroundColor : "#ececec"};
const actionsStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12,
};



class Swipe extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }
  // state = {
  //   cards: [
  //     "https://wallpapercave.com/wp/wp7155490.jpg",
  //      "https://i.pinimg.com/736x/de/d2/73/ded27345448e1d40dad5384d7977e089.jpg",
  //       "https://i.pinimg.com/564x/42/fa/6b/42fa6b120be5ee4a3d605c760997ee21.jpg"
  //   ],
  // };
  state = {
    cards: this.props.cardsData,
  };

  remove = () =>
    this.setState(({cards}) => ({
      cards: cards.slice(1, cards.length),
    }));

  render() {
    const {cards} = this.state;

 
    return (
      <div >
        <div style={wrapperStyles}>
          {cards.length > 0 ? (
            <div style={wrapperStyles}>
             
              <Swipeable
            
                buttons={({left, right}) => (
                  <div style={actionsStyles}>
                    {this.props.btn?
                    (<><Button onClick={left}><FaTimes/></Button>
                    <Button onClick={right}><FaCheck/></Button></>):(<></>)}
                  </div>
                )}
                onAfterSwipe={this.remove}
              >
                <Card imageURL={cards[0].dpImage} name={cards[0].name} bio={cards[0].bio} degreeText={cards[0].degree}></Card>
              </Swipeable>
              
              {/* {cards.length > 1 && <Card zIndex={-1}>{cards[1]}</Card>} */}
            </div>
          ) : (
            <Card zIndex={2}>Time to go outside</Card>
          )}
        </div>
      </div>
    );
  }
}

export default Swipe;