import { Card, CardContent, CardHeader } from "@/components/ui/card";
import NMContainer from "@/components/ui/core/NMContainer";
import Image from "next/image";
import React from "react";
import whatIcon from "@/assets/icons/what.png";
import callIcon from "@/assets/icons/call.png";
import locationIcon from "@/assets/icons/location.png";

const OthersCard = () => {
  return (
    <div className="my-36 grid grid-cols-3 gap-2">
      <Card>
        <CardHeader>
          <Image src={whatIcon} width={64} height={64} alt="icon"></Image>
        </CardHeader>
        <CardContent>
          <h2 className="text-xl mb-3 font-bold">Having Quires?</h2>
          <p className="text-sm font-light">
            Save big this Black Friday with unbeatable deals on tech, home
            essentials
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <Image src={callIcon} width={64} height={64} alt="icon"></Image>
        </CardHeader>
        <CardContent>
          <h2 className="text-xl mb-3 font-bold">Call Us Today</h2>
          <p className="text-sm font-light">
            Save big this Black Friday with unbeatable deals on tech, home
            essentials
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <Image src={locationIcon} width={64} height={64} alt="icon"></Image>
        </CardHeader>
        <CardContent>
          <h2 className="text-xl mb-3 font-bold">Locate Us</h2>
          <p className="text-sm font-light">
            Save big this Black Friday with unbeatable deals on tech, home
            essentials,{" "}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default OthersCard;
