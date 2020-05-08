import brownOxfordsImg from '../../resources/images/brown-oxfords.png';
import crocoLoafersImg from '../../resources/images/croco-loafers.png';
import blackBootsImg from '../../resources/images/black-boots.png';
import flyKnitShoesImg from '../../resources/images/flyknit-shoes.png';

class ProductCardInfo {
  constructor(image, title, oldPrice, newPrice) {
    this.image = image;
    this.title = title;
    this.oldPrice = oldPrice;
    this.newPrice = newPrice;
  }
}

const products = [
  new ProductCardInfo(brownOxfordsImg, 'Brown Oxfords', 5995, 2299),
  new ProductCardInfo(crocoLoafersImg, 'Croco Loafers', 6995, 3999),
  new ProductCardInfo(blackBootsImg, 'Black Boats', 5995, 4995),
  new ProductCardInfo(flyKnitShoesImg, 'Flyknit Shoes', 4999, 1799),
];

export default products;
