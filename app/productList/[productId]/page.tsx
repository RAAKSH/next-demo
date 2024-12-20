import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  console.log("asddasdas", params);
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${params?.productId}`);
    }, 100);
  });

  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: Props) {
  return (
    <div>
      <h1>Product Details==={params?.productId}</h1>
    </div>
  );
}
