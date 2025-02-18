import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Socials from "../components/Socials";
import Github from "../icons/Github";
import musica from "../videos/musica copy.mov";
import artsy from "../videos/artsy copy.mov";
// import artsy from "../images/artsy-v2.png";
import { motion } from "framer-motion";

export default function Projects({ darkMode }) {
  return (
    <div
      className={`${
        !darkMode ? "bg-[#fefdfc]" : "dark:bg-[#020a13]"
      } min-h-[87.5vh] box-border lg:py-5 lg:px-10 p-5 flex justify-center`}
    >
      <div className="lg:w-[80%] w-[100%]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col gap-10"
        >
          <h3
            className={`${
              !darkMode ? "text-[#020a13]" : "dark:text-[#e1e1e1]"
            } font-quicksand lg:text-[2.5rem] text-[1.5rem]`}
          >
            Projects.
          </h3>

          <div className="flex lg:flex-row-reverse flex-col items-center box-border py-5">
            <motion.a
              animate={{ x: 0 }}
              initial={{ x: 1000 }}
              transition={{ delay: 0.7 }}
              href="https://artsy-v3.vercel.app/"
              className="lg:w-[60%] w-full bg-blend-darken bg-[#000000] lg:rounded-xl"
            >
              {/* <img
                src={artsy}
                className="w-full opacity-30 hover:opacity-100 lg:rounded-xl duration-300"
              /> */}
              <video
                className="w-full opacity-30 hover:opacity-100 lg:rounded-xl duration-300"
                muted
                autoPlay
                loop
              >
                <source src={artsy} type="video/mp4" />
                <source src={artsy} type="video/ogg" />
              </video>
            </motion.a>
            <motion.div
              animate={{ x: 0 }}
              initial={{ x: -1000 }}
              transition={{ delay: 0.7 }}
              className="lg:w-[40%] w-full h-[70%] flex flex-col justify-evenly lg:items-start"
            >
              <a href="https://artsy-v3.vercel.app/">
                <div
                  className={`${
                    !darkMode
                      ? "lg:text-[#020a13] text-[#e1e1e1]"
                      : "dark:text-[#e1e1e1]"
                  } font-sourceSP text-[1.5rem] lg:mt-0 lg:ml-0 mt-[-35%] ml-[37.5%] flex items-center gap-3`}
                >
                  <h5>ARTSY</h5>
                  <FontAwesomeIcon
                    className="lg:hidden flex"
                    icon={faArrowRight}
                  />
                </div>
              </a>
              <div
                className={`${
                  !darkMode ? "dark:bg-[#020a13e6]" : "bg-[#fefdfce6]"
                } lg:min-w-[600px] w-full box-border p-5 lg:rounded-xl z-10`}
              >
                <p
                  className={`${
                    !darkMode ? "dark:text-[#e1e1e1]" : "text-[#020a13]"
                  } font-sourceSP lg:text-left`}
                >
                  An E-commerce Art Store with features such as a search bar,
                  product categories and filters, a shopping cart and checkout
                  process. It also includes a responsive design for optimal
                  viewing on different devices such as desktop computers and
                  smartphones.
                </p>
              </div>
              <div className="flex gap-3 flex-wrap mt-3">
                <p
                  className={`${
                    !darkMode ? "text-[#020a1380]" : "dark:text-[#e1e1e180]"
                  }  font-sourceSP`}
                >
                  ReactJS
                </p>
                <p
                  className={`${
                    !darkMode ? "text-[#020a1380]" : "dark:text-[#e1e1e180]"
                  }  font-sourceSP`}
                >
                  CSS
                </p>
                <p
                  className={`${
                    !darkMode ? "text-[#020a1380]" : "dark:text-[#e1e1e180]"
                  }  font-sourceSP`}
                >
                  ContextAPI
                </p>
                <p
                  className={`${
                    !darkMode ? "text-[#020a1380]" : "dark:text-[#e1e1e180]"
                  }  font-sourceSP`}
                >
                  JSON
                </p>
              </div>
              <div className="flex gap-3 items-center mt-3">
                <a href="https://github.com/BasitDevelops/ARTSY">
                  <div className="w-[20px]">
                    <Github
                      width="20px"
                      height="20px"
                      fill={!darkMode ? "black" : "white"}
                    />
                  </div>
                </a>
                <a href="https://artsy-v3.vercel.app/">
                  <div>
                    <FontAwesomeIcon
                      className={
                        !darkMode ? "text-[#000000b3]" : "text-[#ffffffb3]"
                      }
                      icon={faLink}
                    />
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
          <div className="flex lg:flex-row flex-col items-center box-border py-5">
            <motion.a
              animate={{ x: 0 }}
              initial={{ x: -1000 }}
              transition={{ delay: 0.7 }}
              href="https://basitdevelops.github.io/Musica-log-in/"
              className="lg:w-[60%] w-full bg-blend-darken bg-[#000000] lg:rounded-xl"
            >
              <video
                className="w-full opacity-30 hover:opacity-100 lg:rounded-xl duration-300"
                muted
                autoPlay
                loop
              >
                <source src={musica} type="video/mp4" />
                <source src={musica} type="video/ogg" />
              </video>
            </motion.a>
            <motion.div
              animate={{ x: 0 }}
              initial={{ x: 1000 }}
              transition={{ delay: 0.7 }}
              className="lg:w-[40%] w-full h-[70%] flex flex-col justify-evenly lg:items-end"
            >
              <a href="https://basitdevelops.github.io/Musica-log-in/">
                <div
                  className={`${
                    !darkMode
                      ? "lg:text-[#020a13] text-[#e1e1e1]"
                      : "dark:text-[#e1e1e1]"
                  } font-sourceSP text-[1.5rem] lg:mt-0 lg:ml-0 mt-[-35%] ml-[35%] flex items-center gap-3`}
                >
                  <h5>B.MUSICA</h5>
                  <FontAwesomeIcon
                    className="lg:hidden flex"
                    icon={faArrowRight}
                  />
                </div>
              </a>
              <div
                className={`${
                  !darkMode ? "dark:bg-[#020a13e6]" : "bg-[#fefdfce6]"
                } lg:min-w-[600px] w-full box-border p-5 lg:rounded-xl z-10`}
              >
                <p
                  className={`${
                    !darkMode ? "dark:text-[#e1e1e1]" : "text-[#020a13]"
                  } font-sourceSP lg:text-right`}
                >
                  A Music Web Application with a playlist feature to organize
                  and browse music, playback controls such as play, pause, skip,
                  and shuffle and an add to / remove from collections feature.
                </p>
              </div>
              <div className="flex gap-3 flex-wrap mt-3">
                <p
                  className={`${
                    !darkMode ? "text-[#020a1380]" : "dark:text-[#e1e1e180]"
                  }  font-sourceSP`}
                >
                  HTML
                </p>
                <p
                  className={`${
                    !darkMode ? "text-[#020a1380]" : "dark:text-[#e1e1e180]"
                  }  font-sourceSP`}
                >
                  CSS
                </p>
                <p
                  className={`${
                    !darkMode ? "text-[#020a1380]" : "dark:text-[#e1e1e180]"
                  }  font-sourceSP`}
                >
                  JavaScript
                </p>
                <p
                  className={`${
                    !darkMode ? "text-[#020a1380]" : "dark:text-[#e1e1e180]"
                  }  font-sourceSP`}
                >
                  REST
                </p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <a href="https://github.com/BasitDevelops/Musica">
                  <div className="w-[20px]">
                    <Github
                      width="20px"
                      height="20px"
                      fill={!darkMode ? "black" : "white"}
                    />
                  </div>
                </a>
                <a href="https://basitdevelops.github.io/Musica-log-in/">
                  <div>
                    <FontAwesomeIcon
                      className={
                        !darkMode ? "text-[#000000b3]" : "text-[#ffffffb3]"
                      }
                      icon={faLink}
                    />
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
          <Link
            to="/resume"
            className="mt-10 flex items-center gap-3 hover:underline underline-offset-4 max-w-max"
          >
            <a
              className={`${
                !darkMode ? "text-[#020a1380]" : "dark:text-[#e1e1e180]"
              } font-sourceSP`}
            >
              See my experiences
            </a>
            <FontAwesomeIcon
              icon={faAnglesRight}
              fade
              className={`${
                !darkMode ? "text-[#020a13]" : "dark:text-[#e1e1e1]"
              }`}
            />
          </Link>
        </motion.div>
        <Socials fill={!darkMode ? "#020a13" : "#e1e1e1"} />
      </div>
    </div>
  );
}
