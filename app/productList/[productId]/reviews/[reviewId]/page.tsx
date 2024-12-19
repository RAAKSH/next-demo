export default function ProductDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  console.log("params", params);

  return (
    <div>
      <h1>Review for {params?.productId} of review {params.reviewId} </h1>
    </div>
  );
}
