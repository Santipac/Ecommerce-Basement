import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

import { ProductsMock } from '../../components/products/mock';
import { Header } from '../../components/ui/Header';
import { increment } from '../../store/cart/cartSlice';

interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
}

interface Props {
  product: Product;
}

const ProductPage: NextPage<Props> = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="h-screen w-full bg-black overflow-hidden">
      <Head>
        <title>Basement | Product</title>
      </Head>
      <Header />
      <div className="flex justify-center items-center w-full h-[92vh] ">
        <div className="w-[70%] h-[80%] bg-zinc-800 rounded-lg grid grid-cols-2">
          <div className="flex justify-center">
            <Image
              src={product.image}
              alt="product"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col pt-20 space-y-6">
            <h2 className="text-6xl text-slate-300">{product.title}</h2>
            <h2 className="text-4xl text-slate-300">{product.price}</h2>
            <h2 className="text-4xl text-slate-300 ">Size:</h2>
            <div className="flex space-x-2">
              <button className="border-zinc-600 border-2 rounded-full text-white px-4 py-2 focus:border-blue-600">
                S
              </button>
              <button className="border-zinc-600 border-2 rounded-full text-white px-4 py-2 focus:border-blue-600">
                M
              </button>
              <button className="border-zinc-600 border-2 rounded-full text-white px-4 py-2 focus:border-blue-600">
                L
              </button>
              <button className="border-zinc-600 border-2 rounded-full text-white px-4 py-2 focus:border-blue-600">
                XL
              </button>
            </div>
            <div>
              <button
                className="bg-blue-800 text-white px-16 py-2 rounded-md text-xl"
                onClick={() => dispatch(increment())}
              >
                Add to Cart
              </button>
            </div>
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
