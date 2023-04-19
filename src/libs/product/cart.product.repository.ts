import ProductRepository from "./product.repository";

export default interface CartProductRepository extends ProductRepository {
  amount: number;
}
