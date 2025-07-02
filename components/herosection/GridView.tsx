import Image from "next/image";

const images = [
  { src: "/images/img1.jpg", span: "col-span-3 row-span-2" },
  { src: "/images/img2.jpg", span: "col-span-1 row-span-1" },
  { src: "/images/img3.jpg", span: "col-span-1 row-span-1" },
  { src: "/images/img4.jpg", span: "col-span-1 row-span-1" },
  { src: "/images/img5.jpg", span: "col-span-1 row-span-1" },
  { src: "/images/img6.jpg", span: "col-span-1" },
  { src: "/images/img7.jpg", span: "col-span-1" },
  { src: "/images/img8.jpg", span: "col-span-1" },
  { src: "/images/img9.jpg", span: "col-span-1" },
  { src: "/images/img10.jpg", span: "col-span-1" },
];

export default function ImageGrid() {
  return (
    <div className="grid grid-cols-5 grid-rows-3 gap-2 w-full  mx-auto rounded-lg overflow-hidden">
      {images.map((img, i) => (
        <div
          key={i}
          className={`relative aspect-video ${img.span}`}
        >
          <Image
            src={img.src}
            alt={`Image ${i + 1}`}
            layout="fill"
            objectFit="cover" 
            className="rounded-md hover:opacity-80 transition-opacity duration-300"
          />
        </div>
      ))}
    </div>
  );
}
