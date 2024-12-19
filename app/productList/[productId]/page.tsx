export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  console.log("params", params);

  return (
    <div>
      <h1>Product Details==={params?.productId}</h1>
    </div>
  );
}
