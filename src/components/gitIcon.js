//seperate reuseable component for every time I add gitIcon 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function GitIcon({ url }) {
  return (

    <a id="gitIcon" href={url}>
    
      <FontAwesomeIcon id="gitIcon" icon={faGithub} color="#A4A6B3" />
   
    </a>

  );
}
