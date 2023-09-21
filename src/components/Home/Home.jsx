import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategoryList from "../JobCategoryList/JobCategoryList";

const Home = () => {
 
  return (
    <div>
      <Banner></Banner>
      <JobCategoryList></JobCategoryList>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
