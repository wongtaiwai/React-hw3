import products from '../Json/products.json';
import { Row, Col } from 'antd';

export default function ProductList({ IMAGES }) {
  return (
    <div className="image__layout">
      <Row gutter={[8, 10]} justify="center">
        <Col>
          <h1 className="text-center">{IMAGES}</h1>
        </Col>
        <Col span={24}>
          <hr className="divider--dark" />
        </Col>
      </Row>
      <Row gutter={[8, 10]}>
        {products.map((product) => (
          <Col key={product.id} xs={12} lg={8} xl={6} xxl={4}>
            <div className="image">
              <a href="#" className="image__link">
                <img src={product.image} alt={product.image_title} className="image__style" />
              </a>
              <p className="image_title">{product.image_title}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
