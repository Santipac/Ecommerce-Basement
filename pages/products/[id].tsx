import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { ProductsMock } from '../../components/products';
import { Header } from '../../components/ui';
import { useUserStore } from '../../hooks';
import { addProduct, CartProducts } from '../../store/cart/cartSlice';

interface Props {
  product: CartProducts;
}

const ProductPage: NextPage<Props> = ({ product }) => {
  const { status } = useUserStore();
  const dispatch = useDispatch();

  useEffect(() => {
    status !== 'authenticated'
      ? toast('👉 Sign in before purchasing 👈', {
          position: 'top-center',
        })
      : null;
  }, []);

  return (
    <div className="h-screen w-full bg-black overflow-hidden animate__animated animate__fadeIn animate__faster">
      <Head>
        <title>Basement | Product</title>
      </Head>
      <Header />
      <Toaster />
      <div className="flex justify-center items-center w-full h-[92vh] p-2 ">
        <div className="w-full sm:w-[70%] min-h-min sm:min-h-[80%]  rounded-lg grid auto-rows-auto lg:grid-cols-2 bg-gray-900 p-4">
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
              <h3 className="text-zinc-400 text-3xl lg:text-5xl text-white">
                {product.title}
              </h3>
              <h3 className="text-zinc-400 text-3xl lg:text-5xl text-white">
                ${product.price}
              </h3>
            </div>
            {status !== 'authenticated' ? (
              <button
                className="cursor-not-allowed bg-indigo-800 text-gray-600 font-medium p-2.5 rounded-md hover:bg-indigo-900 "
                onClick={() => dispatch(addProduct(product))}
                disabled
              >
                Add to Cart
              </button>
            ) : (
              <button
                className=" bg-indigo-600 text-gray-300 font-medium p-2.5 rounded-md hover:bg-indigo-700"
                onClick={() => dispatch(addProduct(product))}
              >
                Add to Cart
              </button>
            )}
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
