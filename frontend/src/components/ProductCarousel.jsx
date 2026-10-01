import { Link } from 'react-router-dom';
import { Carousel, Image,Container } from 'react-bootstrap';
import Message from './Message';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? null : error ? (
    <Message variant='danger'>{error?.data?.message || error.error}</Message>
  ) : (<Container className='caro-container'>
    <Carousel pause='hover' className='bg-primary mb-4 mt-4'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid className='caro-image'/>
            <Carousel.Caption className='carousel-caption'>
              <h4 className='text-white text-right'>
                {product.name} (${product.price})
              </h4>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
    </Container>
  );
};

export default ProductCarousel;
