import CampusImage from "./(components)/campusimg/campusImage";
import HomeHeader from "./(components)/homeheader/homeHeader";
import HomeTitle from "./(components)/hometitle/homeTitle";
import StudentCard from "./(components)/studentcard/studentCard";
import ImageCard from "./courses/(components)/imgcard/imagecard";
import TextCard from "./courses/(components)/textcard/textcard";

export default function Home() {
  return (
    <>
    {/* Header Section */}
      <HomeHeader />

      {/* course Section */}
      <section class="course">
        <HomeTitle title={`EXPLORE OUR 60+ \n MAJOR PROGRAMS`} />

        <div class="row">
          <TextCard title="Undergraduate Programs" />
          <TextCard title="Graduate Programs" />
          <TextCard title="Adult Learning & Degree Completion" />
        </div>
      </section>
        
        {/* Campus Section */}

      <section class="campus">

        <HomeTitle title="TAKE OUR VIRTUAL TOUR"/>

        <div class="row">
          <CampusImage source="/img/campus1.png" />
          <CampusImage source="/img/campus2.png" />
          <CampusImage source="/img/campus3.png" /> 
        </div> 
    </section>
    {/* Facilities section */}

    <section class="facilities">
        <HomeTitle title="OUR FACILITIES"/>

        <div className="row">
         <ImageCard source="/img/libary.png" title="Best Library" />
         <ImageCard source='/img/playground.png' title="Athletics" />
         <ImageCard source='/img/food.png' title="Tasty and Healthy Food" />
        </div>
    </section>
      
      {/* Testimonials section */}

    <section class="testimonials">
    
      <HomeTitle title="WHAT OUR STUDENTS SAY"/>
      
      <div className="row">
      <StudentCard/>
      <StudentCard/>
      </div>
    </section>
      
      {/* contact section */}

    <section class="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <a href="contact.html" class="hero_btn">CONTACT US</a>
    </section>
    </>
  );
}
