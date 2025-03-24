import ProductBanner from "@/components/modules/products/banner";
import ProductDetails from "@/components/modules/products/productDetails";
import ProductInfo from "@/components/modules/products/productDetails/ProductInfo";
import OthersCard from "@/components/shared/others/OthersCard";
import NMContainer from "@/components/ui/core/NMContainer";
import { getSingleProduct } from "@/services/Product";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  const { data: product } = await getSingleProduct(productId);

  return (
    <NMContainer>
      <ProductBanner
        title="Product Details"
        path="Home - Products - Product Details"
      />
      <ProductDetails product={product} />
      <ProductInfo product={product} />
      <OthersCard />
    </NMContainer>
  );
};

export default ProductDetailsPage;
