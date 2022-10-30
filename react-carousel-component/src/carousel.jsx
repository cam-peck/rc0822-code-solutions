import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: Math.floor(images.length / 2)
    };
    this.handleForwardClick = this.handleForwardClick.bind(this);
    this.handleBackwardClick = this.handleBackwardClick.bind(this);
    this.handleCircleClick = this.handleCircleClick.bind(this);
  }

  handleForwardClick() {
    if (this.state.currentImageIndex !== images.length - 1) {
      this.setState({
        currentImageIndex: this.state.currentImageIndex + 1
      });
    } else {
      this.setState({
        currentImageIndex: 0
      });
    }
  }

  handleBackwardClick() {
    if (this.state.currentImageIndex !== 0) {
      this.setState({
        currentImageIndex: this.state.currentImageIndex - 1
      });
    } else {
      this.setState({
        currentImageIndex: images.length - 1
      });
    }
  }

  handleCircleClick() {

  }

  render() {
    const activeImageIndex = this.state.currentImageIndex;
    return (
      <div className="container">
        <i className="fa-solid fa-angle-left fa-xl" onClick={this.handleBackwardClick}></i>
        <div className="image-wrapper">
          < ImageList imageArray={images} activeImage={activeImageIndex}/>
          < CircleList imageArray={images} activeCircle={activeImageIndex} />
        </div>
        <i className="fa-solid fa-angle-right fa-xl" onClick={this.handleForwardClick}></i>
      </div>
    );
  }
}

class ImageList extends React.Component {
  render() {
    const imageArray = this.props.imageArray;
    const activeImageIndex = this.props.activeImage;
    const itemToRender = imageArray[activeImageIndex];
    return (
      <ImageItem key={itemToRender.id.toString()}
                imageUrl={itemToRender.url} />
    );
  }
}

class ImageItem extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.imageUrl} alt="pokemon-img" className="carousel-image image-active"/>
      </div>
    );
  }
}

class CircleList extends React.Component {
  render() {
    const imageArray = this.props.imageArray;
    const activeCircleIndex = this.props.activeCircle;
    const circleItems = imageArray.map((image, index) => {
      if (activeCircleIndex === index) {
        return < CircleItem key={image.id.toString()} active={true} />;
      } else {
        return < CircleItem key={image.id.toString()} active={false} />;
      }
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
    let circleState;
    if (this.props.active) {
      circleState = 'fa-solid';
    } else {
      circleState = 'fa-regular';
    }
    return (
      <i className={`${circleState} fa-circle`}></i>
    );
  }
}

const images = [
  {
    id: '001',
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
  },
  {
    id: '004',
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
  },
  {
    id: '007',
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'
  },
  {
    id: '025',
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
  },
  {
    id: '030',
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png'
  }
];
