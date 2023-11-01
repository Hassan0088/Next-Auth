
import React from "react";
import dynamic from "next/dynamic";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import Image1 from "../Images/Image1.webp";
import Image2 from "../Images/Image2.webp";
import Image3 from "../Images/Image3.webp";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router"; 

const MainContent = () => {
  const { data: session } = useSession();

  const router = useRouter();

  if (session) {
    return (
      <>
      
        <div className="text">
          <Carousel>
            <Carousel.Item>
              <Image src={Image1} width={1400} height={500} alt="No Image" />
              <Carousel.Caption>
                <h3>9000$</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={Image2} width={1400} height={500} alt="No Image" />
              <Carousel.Caption>
                <h3>10000$</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={Image3}
                width={1400}
                height={500}
                objectFit="cover"
                alt="No Image"
              />
              <Carousel.Caption>
                <h3>8500$</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );
  } else {
    router.push("/Login"); 
    return null; 
  }
};

export default dynamic(() => Promise.resolve(MainContent), { ssr: false });
