import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: Math.floor(this.props.imageArray.length / 2)
    };
    this.moveForward = this.moveForward.bind(this);
    this.moveBackward = this.moveBackward.bind(this);
    this.handleCircleClick = this.handleCircleClick.bind(this);
  }

  startCarousel() { // starts carousel --> moves every 3 seconds
    this.interval = setInterval(() => this.moveForward(), 3000);
  }

  stopCarousel() { // stops carousel
    clearInterval(this.interval);
  }

  componentDidMount() { // starts carousel on screen load
    this.startCarousel();
  }

  moveForward() { // advances carousel forward one step
    this.stopCarousel();
    if (this.state.currentImageIndex !== this.props.imageArray.length - 1) {
      this.setState({
        currentImageIndex: this.state.currentImageIndex + 1
      });
    } else {
      this.setState({
        currentImageIndex: 0
      });
    }
    this.startCarousel();
  }

  moveBackward() { // moves carousel back one step
    this.stopCarousel();
    if (this.state.currentImageIndex !== 0) {
      this.setState({
        currentImageIndex: this.state.currentImageIndex - 1
      });
    } else {
      this.setState({
        currentImageIndex: this.props.imageArray.length - 1
      });
    }
    this.startCarousel();
  }

  handleCircleClick(circleIndex) { // moves carousel to clicked circle
    this.stopCarousel();
    this.setState({
      currentImageIndex: circleIndex
    });
    this.startCarousel();
  }

  render() {
    const activeImageIndex = this.state.currentImageIndex;
    return (
      <div className="container">
        <i className="fa-solid fa-angle-left fa-xl" onClick={this.moveBackward}></i>
        <div className="image-wrapper">
          < ImageItem imageArray={this.props.imageArray} activeImage={activeImageIndex}/>
          < CircleList imageArray={this.props.imageArray} activeCircle={activeImageIndex} onCircleChange={this.handleCircleClick}/>
        </div>
        <i className="fa-solid fa-angle-right fa-xl" onClick={this.moveForward}></i>
      </div>
    );
  }
}

class ImageItem extends React.Component {
  render() {
    const imageArray = this.props.imageArray;
    const activeImageIndex = this.props.activeImage;
    const itemToRender = imageArray[activeImageIndex];
    return (
      <div>
        <img src={itemToRender.url} alt="pokemon-img" className="carousel-image image-active"/>
      </div>
    );
  }
}

class CircleList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) { // pass circle clicks back up to carousel for handling (and state management)
    const circleIndex = Number(event.target.getAttribute(['circleindex']));
    this.props.onCircleChange(circleIndex);
  }

  render() {
    const imageArray = this.props.imageArray;
    const activeCircleIndex = this.props.activeCircle;
    const circleItems = imageArray.map((image, index) => {
      let isActiveBool;
      if (activeCircleIndex === index) {
        isActiveBool = true;
      } else {
        isActiveBool = false;
      }
      return < CircleItem key={image.id.toString()} circleIndex={index} active={isActiveBool} onClick={this.handleChange} />;
    });
    return (
      <div className="selectors">
        {circleItems}
      </div>
    );
  }
}

class CircleItem extends React.Component {
  render() {
    let circleType;
    if (this.props.active) {
      circleType = 'fa-solid';
    } else {
      circleType = 'fa-regular';
    }
    return (
      <i className={`${circleType} fa-circle`} circleindex={this.props.circleIndex} onClick={this.props.onClick}></i>
    );
  }
}
