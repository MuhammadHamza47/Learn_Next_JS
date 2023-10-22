import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div>
      <section className="footer">
        <hr />
        <h4>About Us</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima
          incidunt odio nam facilis, eligendi
          <br /> Itaque fugiat cupiditate consectetur. Aliquid ab deserunt
          exercitationem, illum molestiae dolorem.
        </p>

        <div className="icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
        </div>
        <p>
          Made with <i className="fas fa-heart"></i> by{" "}
          <a href="#">Developer</a>
        </p>
        <p>
          Copyright © 2021 <Link href="/">Xplore Skill</Link>. All Rights
          Reserved
        </p>
      </section>
    </div>
  );
}
