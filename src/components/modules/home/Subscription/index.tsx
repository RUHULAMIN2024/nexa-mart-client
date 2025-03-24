import { Button } from "@/components/ui/button";
import styles from "./Subscription.module.css";
import Image from "next/image";
import subscription from "@/assets/subscription.png";
import NMContainer from "@/components/ui/core/NMContainer";

const Subscription = () => {
  return (
    <NMContainer>
      <div
        className={`${styles.banner} border-2 border-white rounded-3xl  mb-36`}
      >
        <div className="grid  grid-cols-2 items-center gap-4">
          <div className="pl-12">
            <h1 className="text-4xl font-bold leading-normal">
              Stay Update with Exclusive Offers
            </h1>
            <p className="my-5">
              Save big this Black Friday with unbeatable deals on tech, home
              essentials, fashion, and more! Limited stock.
            </p>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-full max-w-6xl border border-gray-300 rounded-full py-2 px-5"
              />
              <Button size="lg" className="ml-5 rounded-full">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="flex items-center  justify-center">
            <Image className="mt-12" src={subscription} alt="Subscription" />
          </div>
        </div>
      </div>
    </NMContainer>
  );
};

export default Subscription;
