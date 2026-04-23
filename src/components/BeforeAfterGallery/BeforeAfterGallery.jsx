import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { GALLERY_MANIFEST_URL } from '../../config';
import { SEED_IMAGES } from './seed';
import './BeforeAfterGallery.css';

function groupByCategory(images) {
  const grouped = {};
  for (const img of images) {
    if (!grouped[img.category]) grouped[img.category] = [];
    grouped[img.category].push(img);
  }
  return grouped;
}

function orderedCategories(images) {
  const seen = new Set();
  const order = [];
  for (const img of images) {
    if (!seen.has(img.category)) {
      seen.add(img.category);
      order.push(img.category);
    }
  }
  return order;
}

function BeforeAfterGallery() {
  const [dynamicImages, setDynamicImages] = useState([]);
  const [category, setCategory] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!GALLERY_MANIFEST_URL) return;
    fetch(`${GALLERY_MANIFEST_URL}?t=${Date.now()}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data && Array.isArray(data.images)) setDynamicImages(data.images);
      })
      .catch(() => {
        // Fallback silently to seed-only if the manifest isn't reachable.
      });
  }, []);

  const allImages = [...SEED_IMAGES, ...dynamicImages];
  const categories = orderedCategories(allImages);

  useEffect(() => {
    if (!category && categories.length) setCategory(categories[0]);
  }, [category, categories]);

  if (!category || categories.length === 0) {
    return <div className="gallery-container"><p>Gallery is currently empty.</p></div>;
  }

  const grouped = groupByCategory(allImages);
  const images = grouped[category] || [];
  const currentImage = images[photoIndex];

  if (!currentImage) {
    return (
      <div className="gallery-container" id="photo-gallery">
        <Row justify="space-around" align="top">
          <Col span={24}>
            <div className="buttons">
              {categories.map((key) => (
                <button
                  key={key}
                  onClick={() => { setCategory(key); setPhotoIndex(0); }}
                  className={category === key ? 'active' : ''}
                  disabled={category === key}
                >
                  {key}
                </button>
              ))}
            </div>
          </Col>
        </Row>
        <p className="image-caption">No images in this category yet.</p>
      </div>
    );
  }

  const captionText = currentImage.caption
    ? `${currentImage.type.toUpperCase()} - ${currentImage.caption}`
    : currentImage.type.toUpperCase();

  return (
    <div className="gallery-container" id="photo-gallery">
      <Row justify="space-around" align="top">
        <Col span={24}>
          <div className="buttons">
            {categories.map((key) => (
              <button
                key={key}
                onClick={() => { setCategory(key); setPhotoIndex(0); }}
                className={category === key ? 'active' : ''}
                disabled={category === key}
              >
                {key}
              </button>
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="image-preview">
            <button
              onClick={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
              disabled={photoIndex === 0}
            >
              <LeftOutlined />
            </button>
            <img
              className="image-container"
              src={currentImage.url}
              alt={currentImage.alt}
              loading="lazy"
              onClick={() => setIsOpen(true)}
            />
            <button
              onClick={() => setPhotoIndex((photoIndex + 1) % images.length)}
              disabled={photoIndex === images.length - 1}
            >
              <RightOutlined />
            </button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <p className="image-caption">{captionText}</p>
          {isOpen && (
            <Lightbox
              mainSrc={currentImage.url}
              nextSrc={images[(photoIndex + 1) % images.length].url}
              prevSrc={images[(photoIndex + images.length - 1) % images.length].url}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
              onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
              imageCaption={captionText}
            />
          )}
        </Col>
      </Row>
    </div>
  );
}

export default BeforeAfterGallery;
