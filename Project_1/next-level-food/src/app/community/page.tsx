import React from "react";
import Image from "next/image";

import { communityData } from "@/src/data/community.data";

export default function CommunityPage() {
  return (
    <React.Fragment>
      <header className="community-header">
        <h1>
          One shared passion: <span className="community-highlight">Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className="community-main">
        <h2>Community Perks</h2>
        <ul className="community-perks">
          {communityData.map((item) => (
            <li key={item.id} className={item.liStyle}>
              <div className="community-image">
                <Image
                  src={item.src}
                  alt={item.alt}
                  className={item.imageStyle}
                  fill
                />
              </div>
              <p className={item.pStyle}>{item.description}</p>
            </li>
          ))}
        </ul>
      </main>
    </React.Fragment>
  );
}

// import Image from "next/image";

// import mealIcon from "@/public/images/icons/meal.png";
// import communityIcon from "@/public/images/icons/community.png";
// import eventsIcon from "@/public/images/icons/events.png";

// export default function CommunityPage() {
//   return (
//     <>
//       <header className="community-header">
//         <h1>
//           One shared passion: <span className="community-highlight">Food</span>
//         </h1>
//         <p>Join our community and share your favorite recipes!</p>
//       </header>
//       <main className="community-main">
//         <h2>Community Perks</h2>

//         <ul className="community-perks">
//           <li>
//             <Image src={mealIcon} alt="A delicious meal" />
//             <p>Share & discover recipes</p>
//           </li>
//           <li>
//             <Image src={communityIcon} alt="A crowd of people, cooking" />
//             <p>Find new friends & like-minded people</p>
//           </li>
//           <li>
//             <Image
//               src={eventsIcon}
//               alt="A crowd of people at a cooking event"
//             />
//             <p>Participate in exclusive events</p>
//           </li>
//         </ul>
//       </main>
//     </>
//   );
// }
