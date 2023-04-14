import React from 'react'
import bg from "../assets/2.web.png";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"
const Home = () => {
    return (
        <>
            <div className='home' id ="home">
                <main>
                    <h1>Star_tech</h1>
                    <p>Solution to all your  Tech problems</p>
                </main>
            </div>
            <div className='home2'>
                <img src={bg} alt="Graphics" />
                <div>
                    <p>
                        we are your one and only Solution to the tech problems you face every day.
                        we are leading tech company whose aim is to increase the problem solving ability in children..
                    </p>
                </div>
            </div>
            <div className='home3' id ="about">
                <div>
                    <h1>who we are ?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi assumenda nesciunt perspiciatis doloribus delectus dolor enim hic quae, velit fugit odio natus corrupti esse nobis dignissimos. At incidunt non eius.
                        Quod, repudiandae ipsa. Ad vero aspernatur sequi impedit ab consequuntur corrupti doloribus ratione itaque temporibus accusamus similique a tenetur aliquid, eius accusantium nisi provident maiores omnis minima saepe cumque in.
                        Amet corrupti tempore ullam, ratione deleniti blanditiis impedit fugit ipsum soluta consequatur placeat quod natus praesentium, reprehenderit quasi quidem. Alias, sed? Assumenda cum magnam, optio fuga animi neque fugiat odio.
                        Enim quaerat eveniet voluptate hic cupiditate impedit minima quidem. Vel saepe quisquam ut dolorem magni. Incidunt placeat, nisi quo repellat dicta debitis quos cum similique ea nulla quisquam adipisci eos!
                        Alias ipsa architecto maiores quibusdam rerum quia magni ipsum cum saepe non eius illum eum tenetur ab, itaque iure odit eligendi dolorem corrupti iste vero libero? Saepe doloremque deserunt reiciendis.</p>

                </div>

            </div>
            <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;