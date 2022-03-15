import React from 'react';
import AchievementData from './achievementdata';
import Service from '../service/Service';

const Achievement = () => {
  return (
    <div className="container pb-5">
  <div className="row">
    { AchievementData ? AchievementData.map((achievement) => {
      return (
        <div className="col-sm-12 col-md-6 col-lg-4 mt-3">

                      <Service
                        key={achievement.id}
                        title={achievement.title}
                        paragraph={achievement.description}
                        image={achievement.cover_img}
                      />
                  </div>
      );
    })
  : null}
  </div>
</div>
  )
}

export default Achievement