"use client";
import { Button, Image, Spacer } from "@nextui-org/react";

export default function Home() {
  const images = [
    "https://placehold.co/300x200",
    "https://placehold.co/300x200",
    "https://placehold.co/300x200"
    // Add more image URLs as needed
  ];
  return (
    <main className="min-h-full">
      <div id="first-section" className="h-screen flex flex-col justify-center items-center bg-black bg-opacity-50">
        <h1 className=" text-6xl font-bold">KENKO BEAUTY & MASSAGE</h1>
        <Spacer y={4} />
        <Button radius="full" size="lg" className=" bg-[#5C7042]">
          จองเลย
        </Button>
      </div>
      <div id="second-section" className="min-h-screen h-fit flex flex-col justify-center items-center bg-[#f4f4f5] text-black px-8 md:px-14 lg:px-32 xl:px-96 w-full">
        <Spacer y={2} />
        <h1 className="text-6xl font-bold">เกี่ยวกับ</h1>
        <Spacer y={4} />

        <span className="">
          <span className="font-semibold ">
            🌿 Welcome to KENKO BEAUTY & MASSAGE - Your Sanctuary of Relaxation
            🌿
          </span>{" "}
          Step into a world of tranquility and rejuvenation at{" "}
          <span className="font-semibold ">KENKO BEAUTY & MASSAGE</span>. We are
          thrilled to have you here, and we invite you to embark on a journey of
          blissful relaxation and self-care.
        </span>
        <span>
          <span className="font-semibold ">
            🌺 Indulge in the Healing Touch 🌺
          </span>{" "}
          Our skilled therapists are dedicated to providing you with a
          personalized and therapeutic massage experience. Whether you seek
          relief from stress, tension, or simply want to treat yourself to a
          moment of pure relaxation, we have a range of soothing treatments
          designed to cater to your unique needs.
        </span>
        <Spacer y={4} />

        <div className="flex flex-row">
          {images.map((url: string, key: number) => {
            return (
              <Image
                key={key}
                width={300}
                height={200}
                alt={url}
                src={url}
              ></Image>
            );
          })}
        </div>

        <Spacer y={2} />
      </div>
      <div className="h-screen flex flex-col justify-center items-center bg-black opacity-50 text-black px-20 md:px-32 lg:px-56 xl:px-96 w-full">
        {/* <Form /> */}
      </div>
      <div className="h-screen flex flex-col justify-center items-center bg-[#f4f4f5] text-black w-full">
        <iframe
          className=" h-1/3 w-1/3"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1615.5563516321872!2d100.57831499060538!3d13.724555297229026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f5c3a54aceb%3A0x7d01d010fec4c2bc!2sKenko%20Beauty%20%26%20Massage!5e0!3m2!1sen!2sth!4v1702661761673!5m2!1sen!2sth"
          loading="lazy"
        ></iframe>
      </div>
    </main>
  );
}
