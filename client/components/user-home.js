import React from 'react'
import {Ingredients} from './ingredients'
import {Quotes} from './quotes'
import {WhyCBD} from './whyCBD'
/**
 * COMPONENT
 */
export const UserHome = props => {
  return (
    <div className="wrapper">
      <div className="topImg"></div>
      <div id="aboutUs">
        <div className="middleImg">
          <div className="middleContent">
            <h2>What's Zenya?</h2>
            <p>
              Zenya is a special blend of organic hemp extract with CBD,
              medicinal herbs and mood-enhancing ingredients that help you feel
              like the best you. Have one and bring a bit of calm to your crazy
              day, without any buzz or caffeine jitters. Zenya is for whenever
              you need a moment of relaxation and focus, but your day’s not done
              yet.
            </p>
          </div>
        </div>
        <div>
          <div className="whyZenya">
            <h2>Why Zenya?</h2>
            <p>
              Zenya was built for New York City – with the whole world in mind.
              We love New York, but it can be hectic AF. Stress and anxiety
              shouldn’t ruin your day. That’s why we created Zenya – a healthy
              way to help you relax, improve focus and simplify your life.
            </p>
          </div>
        </div>
      </div>
      <Ingredients />
      <Quotes />
      <WhyCBD />
    </div>
  )
}

export default UserHome
