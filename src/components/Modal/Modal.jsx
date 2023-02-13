import propTypes from 'prop-types';
import css from './Modal.module.css';

import { Component } from 'react';

export default class Modal extends Component {

      componentDidMount() {
    document.addEventListener('keydown', this.closeImage);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeImage);
  }
  closeImage = e => {
    
    if (e.target === e.currentTarget || e.code === 'Escape') {
      this.props.closeImage();
    }
  };

  render() {
    const { src, alt} = this.props;

    return (
       <div className={css.Overlay} onClose={this.closeImage}>
       <div className={css.Modal}>
      <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
}
 

Modal.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  closeImage: propTypes.func.isRequired,
};