import Image from "next/image";
import Button from "../(components)/button/button";
import Header from "../(components)/header/header";

export default function About() {
  return (
    <>
    {/* Header Section */}
      <Header title='About Us' />

      {/* About Section */}
      <section class="about-us">
        <div class="row">
          <div class="about-col">
            `<h1>We are the world's largest University</h1>`
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              cumque in accusantium molestias maiores fuga vitae eos, ducimus
              officiis repudiandae voluptatem error. Laboriosam, numquam
              blanditiis aspernatur, nobis tempora consequatur id aliquam
              asperiores voluptatum iste animi voluptatem fugiat totam excepturi
              dolor.
            </p>
            <Button btnType='button' btnName='Explore Now' />
          </div>
          <div class="about-col">
            <Image
              src="/img/about.png"
              alt="Picture of the author"
              width={500}
              height={390}
            />
          </div>
        </div>
      </section>
    </>
  );
}
