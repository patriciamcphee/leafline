import React, { useState } from 'react';
import { Row, Col } from 'antd';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './BeforeAfterGallery.css';



const imageData = {
  Pruning:  [
      { url: '/images/pruning/weeping-waterfall-japanese-maple_before-2.jpg', alt: 'Pruning before - Overgrown branches blocking pathway', caption: 'BEFORE - Trees blocking the pathway' },
      { url: '/images/pruning/weeping-waterfall-japanese-maple_before-3.jpg', alt: 'Pruning before - garden needs pruning', caption: 'BEFORE - The garden is in need of pruning' },
      { url: '/images/pruning/weeping-waterfall-japanese-maple_after-1.jpg', alt: 'Pruning after - bushes pruned', caption: 'AFTER - Bushes pruned nicely' },
      { url: '/images/pruning/weeping-waterfall-japanese-maple_after-4.jpg', alt: 'Pruning before - bush overgrown', caption: 'AFTER - ' },
      { url: '/images/pruning/weeping-waterfall-japanese-maple_after-5.jpg', alt: 'Pruning before - bush overgrown', caption: 'AFTER - ' },
      { url: '/images/pruning/weeping-waterfall-japanese-maple_after-6.jpg', alt: 'Pruning before - bush overgrown', caption: 'AFTER - ' },
      { url: '/images/pruning/weeping-waterfall-japanese-maple_after-7.jpg', alt: 'Pruning before - bush overgrown', caption: 'AFTER - ' },
    ],

  // Additional categories follow the same structure...
  Edging: [
      { url: 'images/bed-edge/bed-edge-before.jpg', alt: 'Edging before', caption: 'BEFORE - Overgrown grass over bed edging' },
      { url: 'images/bed-edge/bed-edge-after.jpg', alt: 'Edging after', caption: 'AFTER - Overgrown grass after cleanup' },
      { url: 'images/bed-edge/bed-edge-after-1.jpg', alt: 'Edging after', caption: 'AFTER - Overgrown grass after cleanup' },
    ],
};

function BeforeAfterGallery() {
  const [category, setCategory] = useState('Pruning');
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const images = imageData[category];
  const currentImage = images[photoIndex];


  return (
    <div className="gallery-container" id="photo-gallery">
    <Row justify="space-around" align="top">
      <Col span={24}>
      <h1 className="galleryHeading">Before/After Photo Gallery</h1>
      
      <div className="buttons">
        {Object.keys(imageData).map(key => (
          <button key={key}
                  onClick={() => { setCategory(key); setPhotoIndex(0); }}
                  className={category === key ? 'active' : ''}
                  disabled={category === key}>
            {key}
          </button>
        ))}
      </div>
      </Col>
    </Row>
    <Row>
    <Col span={24}>
          <h2>{category}</h2>

          <div className="image-preview">
            <button onClick={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)} disabled={photoIndex === 0}><LeftOutlined /></button>
            <img className="image-container" src={currentImage.url} alt={currentImage.alt} onClick={() => setIsOpen(true)} />
            <button onClick={() => setPhotoIndex((photoIndex + 1) % images.length)} disabled={photoIndex === images.length - 1}><RightOutlined /></button>
          </div>
        </Col>
    </Row>
      
    <Row>
    <Col span={24}>
      <p className="image-caption">{currentImage.caption}</p>
      {isOpen && (
        <Lightbox
          mainSrc={currentImage.url}
          nextSrc={images[(photoIndex + 1) % images.length].url}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].url}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          imageCaption={currentImage.caption}
        />
      )}
      </Col>
    </Row>

      
    </div>
  );
}

export default BeforeAfterGallery;
