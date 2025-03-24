"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { IProduct } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";

const ProductInfo = ({ product }: { product: IProduct }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mt-5 border rounded-md bg-white p-4">
      <div className="flex border-b">
        {[
          { key: "description", label: "Description" },
          { key: "keyFeatures", label: "Key Features" },
          { key: "specification", label: "Specification" },
          { key: "shipping", label: "Shipping Info" },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === key ? "border-b-2 border-black" : "text-gray-500"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="p-4 text-gray-600 text-sm">
        {activeTab === "description" && <p>{product?.description}</p>}
        {activeTab === "keyFeatures" && (
          <ul className="list-disc list-inside">
            {product?.keyFeatures.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        )}
        {activeTab === "specification" && (
          <ul className="list-disc list-inside">
            <li>Processor: {product.specification.processor}</li>
            <li>RAM: {product.specification.ram}</li>
            <li>Storage: {product.specification.storage}</li>
            <li>Display: {product.specification.display}</li>
          </ul>
        )}
        {activeTab === "shipping" && (
          <p>Shipping information will be added soon.</p>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
