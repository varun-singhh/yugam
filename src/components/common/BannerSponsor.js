import React from "react";
import Link from "next/link";
import Image from "next/image";

import brand_2 from "@/assets/images/paytm.png";
import brand_3 from "@/assets/images/avighna-logo.png";
const BannerSponsor = ({ parentClass }) => {
  return (
    <div className={`${parentClass}`}>
      <h3 className="fst-italic fw-semibold text-white">Powered by</h3>
      <div className="d-flex flex-md-wrap align-items-center gap-20 gap-md-5 gap-lg-50">
        {/* <Link href="#" aria-label="brand-image">
          <Image src={brand_3} className="img-fluid" alt="img" width={80} />
        </Link> */}
        <Link
          href="https://insider.in/yugam-2024-nov17-2024/event"
          aria-label="brand-image"
        >
          <Image src={brand_2} className="img-fluid" alt="img" width={300} />
        </Link>
        {/* <Link href="#" aria-label="brand-image">
                    <Image src={brand_3}   className="img-fluid" alt="img" />
                </Link> */}
      </div>
    </div>
  );
};

export default BannerSponsor;
