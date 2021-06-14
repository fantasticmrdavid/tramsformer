import React from "react";
import { Link } from "gatsby";

export default {
  aboutMain: (
    <>
      <p>
        {"Project Tramsformation is a passion project by "}
        <Link href="https://fantasticmrdavid.com.au" target="_blank">David Li</Link>
        {` started during Melbourne’s 2020 COVID-19 lockdown. It is the culmination of 
        years of development fueled by a love for all things transforming and 
        robotic, and growing up in the wonderful city that is Melbourne.`}
      </p>
      <p>
        {`The project started in 2008 as a failed entry into an art competition that missed its
        submission deadline. From its original Z-Class form, the Tramsformer's journey has evolved
        from a piece of character artwork, to 3D model, to fully transformable 3D printed prototype,
        and then all over again in W-Class tram form. It's been a long road.`}
      </p>
      <p>
        {`This blog aims to journal some of the thoughts and ideas driving the development
        journey and provide some insight into some of the creative decisions and execution that have
        brought it to where it is today.`}
      </p>
      <p>
        Many cups of coffee were required.
      </p>
    </>
  ),
};
