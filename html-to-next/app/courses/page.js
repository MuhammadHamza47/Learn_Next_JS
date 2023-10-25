import Header from "../(components)/header/header";
import TextCard from "./(components)/textcard/textcard";
import ImageCard from "./(components)/imgcard/imagecard";
export default function Courses() {
  return (
    <>
      <Header title="Our Courses" />

      <section class="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
          <TextCard title="Undergraduate Programs" />
          <TextCard title="Graduate Programs" />
          <TextCard title="Adult Learning & Degree Completion" />
        </div>
      </section>

      <section class="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
          <ImageCard source="/img/course1.png" title="Web Development" />
          <ImageCard source="/img/course2.png" title="Artificial Intelligence"/>
          <ImageCard source="/img/course3.png" title="Data Science" />
        </div>
      </section>
    </>
  );
}
