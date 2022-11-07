import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

import { ProductsMock } from '../../components/products/mock';
import { Header } from '../../components/ui/Header';
import { addProduct, CartProducts } from '../../store/cart/cartSlice';

interface Props {
  product: CartProducts;
}

const ProductPage: NextPage<Props> = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="h-screen w-full bg-black overflow-hidden">
      <Head>
        <title>Basement | Product</title>
      </Head>
      <Header />
      <div className="flex justify-center items-center w-full h-[92vh] p-2">
        <div className="w-full sm:w-[70%] min-h-min sm:min-h-[80%] bg-zinc-800 rounded-lg grid auto-rows-auto lg:grid-cols-2  p-4">
          <div className="h-full w-full flex items-center justify-center ">
            <Image
              src={product.image}
              className=" object-contain"
              width={320}
              alt="Product Image"
            />
          </div>
          <div className="flex flex-col lg:block lg:mt-[7rem] space-y-4">
            <div className="w-full flex items-center justify-between lg:flex-col lg:items-start py-4 lg:space-y-10">
              <h3 className="text-zinc-400 text-3xl lg:text-5xl">
                {product.title}
              </h3>
              <h3 className="text-zinc-400 text-3xl lg:text-5xl">
                ${product.price}
              </h3>
            </div>
            <button
              className="bg-blue-700 text-white font-semibold p-2.5 rounded-md"
              onClick={() => dispatch(addProduct(product))}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = ctx => {
  const products = ProductsMock.map(el => el.id.toString());

  return {
    paths: products.map(id => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { id } = params as { id: string };
  const trueID = Number(id) - 1;
  return {
    props: {
      product: ProductsMock[trueID],
    },
  };
};

export default ProductPage;
