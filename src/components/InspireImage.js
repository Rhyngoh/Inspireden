"use client";

import Image from "next/image";

export default function InspireImage(props) {
  const { image } = props;
  if (!image) return null;
  const { image_resource_url } = image;
  return (
    <Image
      src={`${image_resource_url}`}
      // src="https://d14uq1pz7dzsdq.cloudfront.net/13b99970-0b1c-4878-bd0d-3b2fe8b0bfd1_.png?Expires=1692736029&Signature=TBLcb3BjbnA6rR-4Nfb-MMMcAnrR4qAAY8EZXd4scvgGhA1-H4dXe53SjG69HJWpn3s2T3~okqGAKXJbQFBL9JbA7TBPswqoeeKBxnbadNE1CalTIB-gc6rLXoqrtUfxAPTFgdvO3P5pLg~Mk4zaI3qLmXV6PP~O~ij7KX1pM9AdPteinv8mqxLS-IeWKv5Dd9Mo4oTwcSU5AvIFrImRUCp-1oGPv7qEHQXlLBMJSBGpj8y3ePKzlNcaYxWDz1AVCCuRni1EJNeC~De~sRW-4XoKJnUNa2IOLJYcoM-1iE-HwJSy3f-Nzad-WnePr54CTMO4CQ98d5pwGOugz3qsZQ__&Key-Pair-Id=K1F55BTI9AHGIK"
      alt="Inspire Image 2"
      className="dark:invert"
      width={512}
      height={512}
      priority
    />
  );
}
