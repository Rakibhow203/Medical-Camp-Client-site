import Banner from "../Banner/Banner";
import Feedback from "../Feedback/Feedback";
import ParticipantProfile from "../Feedback/ParticipantProfile";

import CampDetails from "../PopularCamps/CampDetails/CampDetails";
import ShowCampData from "../PopularCamps/ShowCampData";


const HomePageLayout = () => {
  return (
    <div>
      <div><Banner></Banner></div>
      <div className="mt-8">  <ShowCampData></ShowCampData> </div>

      <div className="mt-8"> <CampDetails></CampDetails> </div>

      <div className="mt-8">
        <Feedback></Feedback>
      </div>
      <ParticipantProfile></ParticipantProfile>
    </div>
  );
};

export default HomePageLayout;