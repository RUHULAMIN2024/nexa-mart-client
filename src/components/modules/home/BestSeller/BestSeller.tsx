import { Button } from "@/components/ui/button";
import { IProduct } from "@/types/product";
import { getTrendingProduct } from "@/services/Product";
import NMContainer from "@/components/ui/core/NMContainer";
import ProductCard from "@/components/ui/core/ProductCard";
import Link from "next/link";

const BestSeller = async () => {
  const { data: products } = await getTrendingProduct();

  return (
    <div className=" bg-white bg-opacity-50 pt-6 pb-8">
      <NMContainer className="my-16">
        <div className="flex items-center justify-between ">
          <h2 className="text-3xl font-bold">Best Seller</h2>
          <Link href="/products">
            <Button variant="outline" className="rounded-full">
              All Collection
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-5 gap-4 mt-10">
          {products?.slice(0, 5).map((product: IProduct, idx: number) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </NMContainer>
    </div>
  );
};

export default BestSeller;
