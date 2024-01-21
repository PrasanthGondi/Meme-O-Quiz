"use client";
import Link from "next/link";
import { AiFillCloseCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import React from "react";
import ReactPlayer from "react-player";
import { Modal, Button } from "antd";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Head from "next/head";

const Level1 = () => {
  const [questionNo, setQuestionNo] = useState(0);
  const [result, setResult] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const [hideQuiz, setHideQuiz] = useState(false);
  const [rightAnswers, setRightAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [url, setUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);
  let viewportWidth = window.innerWidth;

  // Set the initial quality based on the viewport width
  let initialQuality;
  if (viewportWidth <= 480) {
    // Small mobile devices
    initialQuality = "360p";
  } else if (viewportWidth <= 1000) {
    // Tablets and small laptops
    initialQuality = "480p";
  } else {
    // Large laptops/Desktops
    initialQuality = "720p";
  }
  const [quality, setQuality] = useState(initialQuality);

  <Head>
    <meta name="viewport" content="viewport-fit=cover" />
  </Head>;

  const handleOk = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if ("connection" in navigator) {
      let connection =
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection;
      let type = connection.effectiveType;
      console.log("Network Detected: ", type);

      // Get the viewport width
      let viewportWidth = window.innerWidth;

      // Set the quality based on the connection type and viewport width
      if (viewportWidth <= 600) {
        // Mobile devices
        if (type === "4g" || type === "5g") {
          setQuality("480p");
        } else {
          setQuality("360p");
        }
      } else if (viewportWidth <= 900) {
        // Tablets
        if (type === "4g" || type === "5g") {
          setQuality("720p");
        } else {
          setQuality("480p");
        }
      } else {
        // Laptops/Desktops
        if (type === "4g" || type === "5g") {
          setQuality("720p");
        } else if (type === "3g") {
          setQuality("480p");
        } else {
          setQuality("360p");
        }
      }
    }
  }, []);

  // useEffect(() => {
  //   // Get the viewport width
  //   let viewportWidth = window.innerWidth;

  //   // Set the quality based on the viewport width
  //   if (viewportWidth <= 480) {
  //     // Small mobile devices
  //     setQuality("360p");
  //   } else if (viewportWidth <= 481) {
  //     // Tablets
  //     setQuality("480p");
  //   } else if (viewportWidth <= 1200) {
  //     // Laptops/Desktops
  //     setQuality("720p");
  //   }
  //   console.log("Viewport Width: ", viewportWidth);
  // }, []);

  //   const [duration, setDuration] = useState(4);
  //   console.log(questionNo, rightAnswers, wrongAnswers, url);

  const questions = [
    {
      no: 1,
      question: "What is the most abundant gas in Earth's atmosphere?",
      options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Helium"],
      rightAnswer: 0,
    },
    {
      no: 2,
      question: "Who is credited with discovering penicillin?",
      options: [
        "Alexander Fleming",
        "Louis Pasteur",
        "Robert Koch",
        "Jonas Salk",
      ],
      rightAnswer: 0,
    },
    {
      no: 3,
      question: "What is the smallest planet in our solar system?",
      options: ["Venus", "Mars", "Mercury", "Jupiter"],
      rightAnswer: 2,
    },
    {
      no: 4,
      question: "In what year did World War II begin?",
      options: ["1914", "1939", "1945", "1941"],
      rightAnswer: 1,
    },
    {
      no: 5,
      question:
        "What was the code name for the Allied invasion of Normandy during World War II?",
      options: [
        "Operation Market Garden",
        "Operation Overlord",
        "Operation Barbarossa",
        "Operation Torch",
      ],
      rightAnswer: 1,
    },
    {
      no: 6,
      question: "What is the largest organ in the human body?",
      options: ["Liver", "Skin", "Heart", "Lungs"],
      rightAnswer: 1,
    },
    {
      no: 7,
      question: "Who is known as the father of modern physics?",
      options: [
        "Albert Einstein",
        "Isaac Newton",
        "Galileo Galilei",
        "Stephen Hawking",
      ],
      rightAnswer: 0,
    },
    {
      no: 8,
      question:
        "In what year was the first successful powered flight by the Wright Brothers?",
      options: ["1903", "1914", "1927", "1939"],
      rightAnswer: 0,
    },
    {
      no: 9,
      question: "What is the capital city of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      rightAnswer: 2,
    },
    {
      no: 10,
      question: "Who led the Soviet Union during World War II?",
      options: [
        "Vladimir Lenin",
        "Joseph Stalin",
        "Leon Trotsky",
        "Nikita Khrushchev",
      ],
      rightAnswer: 1,
    },
  ];

  const buttonClick = async (e) => {
    setShowVideo(true);
    // setTimeout(() => setHideQuiz((hideQuiz) => !hideQuiz), 300);
    setHideQuiz((hideQuiz) => !hideQuiz);
    if (
      questions[questionNo].options[questions[questionNo].rightAnswer] ===
      e.target.textContent
    ) {
      setResult("Correct Answer");
      setRightAnswers((rightAnswers) => [
        ...rightAnswers,
        e.target.textContent,
      ]);
      if (questionNo >= 9) {
        setQuestionNo((questionNo) => questionNo + 1);
      } else {
        setUrl(`level1/rights/${quality}/${questionNo + 1}.mp4`);
        setTimeout(() => {
          setShowVideo(false);
          setHideQuiz(false);
          setQuestionNo((questionNo) => questionNo + 1);
        }, 4300);
      }
    } else {
      setResult("Incorrect Answer");
      setWrongAnswers((wrongAnswers) => [
        ...wrongAnswers,
        e.target.textContent,
      ]);
      setUrl(`level1/wrongs/${quality}/${wrongAnswers.length}.mp4`);
      setTimeout(() => {
        setShowVideo(false);
        setHideQuiz(false);
        setQuestionNo((questionNo) => questionNo + 1);
      }, 5400);
    }
  };

  //   const handleDuration = (duration) => {
  //     setDuration(duration);
  //   };

  return (
    <div className="h-screen">
      <div className="p-10 sm:p-32 lg:p-52 xl:p-5 2xl:p-20 h-screen">
        <Link href="/" replace>
          <Button
            type="default"
            shape="round"
            size="large"
            className="flex w-max justify-around items-center text-center pr-2 shadow lg:border-0 lg:shadow-none"
          >
            <IoArrowBackCircleSharp className="w-6 h-6 sm:w-10 sm:h-10 lg:w-18 lg:h-18 2xl:w-24 2xl:h-24 sm:p-1 lg:p-0" />
          </Button>
        </Link>
        <div>
          <Modal
            title="Rules 📜"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleOk}
            cancelText="👍"
            cancelButtonProps={{ disabled: true }}
            okButtonProps={{ ghost: true }}
            className="font-medium text-base sm:text-lg lg:text-xl xl:text-lg 2xl:text-xl"
          >
            <h1 className="font-medium text-base sm:text-lg lg:text-xl xl:text-lg 2xl:text-xl">
              5 Correct Answers to clear the level 🎖️
            </h1>
            <h1 className="font-medium text-base sm:text-lg lg:text-xl xl:text-lg 2xl:text-xl">
              5 wrong answers === Game Over 💀
            </h1>
          </Modal>
          <h1 className="text-center font-bold text-2xl mt-5 sm:text-3xl lg:text-4xl 2xl:text-6xl">
            Level 1
          </h1>
        </div>
        {questionNo <= 9 && wrongAnswers.length <= 4 ? (
          <>
            <div className="flex flex-col justify-center text-center items-center sm:flex-row">
              {!hideQuiz ? (
                <div>
                  <h1 className="font-medium text-lg mt-3 sm:text-xl lg:text-2xl sm:mt-5 lg:mt-7 2xl:mt-20 2xl:text-4xl">
                    <span>{questionNo + 1}. </span>
                    {questions[questionNo].question}
                  </h1>
                  <ul className="mt-4 sm:mt-6 lg:mt-8 2xl:mt-20">
                    {questions[questionNo].options.map((every, index) => (
                      <li className="mb-1 sm:mb-2 lg:mb-3 2xl:mb-6" key={every}>
                        <button
                          className="bg-white border-black border-2 w-64 h-12 rounded-2xl lg:w-72 lg:h-16 2xl:w-96 2xl:h-24 font-medium mb-2 sm:text-lg lg:text-xl sm:mb-3 lg:mb-4 2xl:mb-8 2xl:text-3xl"
                          style={{
                            backgroundColor: `${
                              showVideo
                                ? index === questions[questionNo].rightAnswer
                                  ? "#32CD32"
                                  : "#F08080"
                                : "white"
                            }`,
                          }}
                          onClick={buttonClick}
                          disabled={showVideo}
                        >
                          {every}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="font-semibold text-base mt-4 sm:text-xl lg:text-2xl sm:mt-6 lg:mt-8 xl:mt-5 2xl:mt-14 2xl:text-4xl">
                    Score : {rightAnswers.length}
                  </div>
                </div>
              ) : (
                <></>
              )}
              <div className="py-5 sm:py-6 2xl:py-12">
                {showVideo ? (
                  <div className="flex flex-col items-center justify-center">
                    {/* <ReactPlayer url={url} playing onDuration={handleDuration} /> */}
                    {/* <ReactPlayer url={url} playing width={370} height={250} /> */}
                    <div className="player-wrapper w-[370px] h-[250px] sm:w-[500px] sm:h-[300px] lg:w-[700px] lg:h-[500px] rounded-2xl xl:w-[600px] xl:h-[400px] 2xl:w-[1000px] 2xl:h-[700px]">
                      <ReactPlayer
                        className="react-player"
                        playing
                        url={url}
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <div className="font-semibold text-base mt-4 sm:text-xl sm:mt-6 lg:text-2xl 2xl:text-4xl lg:mt-8 xl:mt-5 2xl:mt-14">
                      Score : {rightAnswers.length}
                    </div>
                    <p
                      className="text-center font-medium text-lg mt-4 sm:text-xl lg:text-2xl 2xl:text-4xl 2xl:mt-10"
                      style={{
                        color: `${
                          result === "Correct Answer" ? "#32CD32" : "#F08080"
                        }`,
                      }}
                    >
                      {result}
                    </p>
                  </div>
                ) : (
                  // <div className="font-semibold text-base mt-4">
                  //   Score : {rightAnswers.length}
                  // </div>
                  <></>
                )}
                {/* <div className="h-96 w-64">
                <ReactPlayer url={url} playing />
              </div>
              <div>Score : {rightAnswers.length}</div> */}
              </div>
            </div>
            <div className="w-full mt-5 flex justify-center 2xl:mt-12">
              <ul className="flex justify-evenly">
                {wrongAnswers.map((every) => (
                  <li
                    key={every}
                    className="mr-2 sm:mr-4 lg:mr-5 xl:mr-6 2xl:mr-8"
                  >
                    <AiFillCloseCircle className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 2xl:h-20 2xl:w-20 text-red-500" />
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-center mt-4 sm:mt-6 lg:mt-8 2xl:mt-14">
            <h1
              className="font-medium text-base text-center mb-4 sm:text-lg lg:text-xl 2xl:text-4xl 2xl:mb-10"
              style={{
                color: `${wrongAnswers.length < 4 ? "#32CD32" : "#F08080"}`,
              }}
            >
              {wrongAnswers.length > 4
                ? "Game Over 💀 : More than 5 Wrong Answers"
                : "🎉 🎖️ Level 1 Finished 🎖️ 🎉 "}
            </h1>
            <h1 className="font-medium text-lg text-center mb-4 sm:text-xl lg:text-2xl 2xl:text-4xl">
              Total Score : {rightAnswers.length}
            </h1>
            <div>
              <div className="player-wrapper w-[370px] h-[250px] sm:w-[500px] sm:h-[300px] lg:w-[700px] lg:h-[500px] xl:w-[600px] xl:h-[400px] 2xl:w-[1000px] 2xl:h-[700px]">
                <ReactPlayer
                  className="react-player"
                  playing
                  url={
                    wrongAnswers.length > 4
                      ? `level1/wrongs/${quality}/end.mp4`
                      : `level1/rights/${quality}/end.mp4`
                  }
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <button
              onClick={() => {
                setQuestionNo(0);
                setRightAnswers([]);
                setWrongAnswers([]);
                setShowVideo(false);
                setHideQuiz(false);
              }}
              className="font-bold text-xl text-center mt-5 border-2 border-black rounded-2xl p-3 pl-5 pr-5 2xl:text-4xl 2xl:p-8 2xl:px-14"
            >
              {wrongAnswers.length > 4 ? "Retry" : "Play Again"}
            </button>
          </div>
        )}
      </div>
      <div className="flex justify-center invisible">
        <ReactPlayer
          className="react-player"
          url={`level1/rights/${quality}/1.mp4`}
          width="1px"
          height="1px"
        />
        <ReactPlayer
          className="react-player"
          url={`level1/wrongs/${quality}/0.mp4`}
          width="1px"
          height="1px"
        />
        <ReactPlayer
          className="react-player"
          url={`level1/rights/${quality}/2.mp4`}
          width="1px"
          height="1px"
        />
        <ReactPlayer
          className="react-player"
          url={`level1/wrongs/${quality}/1.mp4`}
          width="1px"
          height="1px"
        />
        <ReactPlayer
          className="react-player"
          url={`level1/rights/${quality}/3.mp4`}
          width="1px"
          height="1px"
        />
        <ReactPlayer
          className="react-player"
          url={`level1/wrongs/${quality}/2.mp4`}
          width="1px"
          height="1px"
        />
        <ReactPlayer
          className="react-player"
          url={`level1/rights/${quality}/4.mp4`}
          width="1px"
          height="1px"
        />
        <ReactPlayer
          className="react-player"
          url={`level1/wrongs/${quality}/3.mp4`}
          width="1px"
          height="1px"
        />
        <ReactPlayer
          className="react-player"
          url={`level1/rights/${quality}/5.mp4`}
          width="1px"
          height="1px"
        />
        <ReactPlayer
          className="react-player"
          url={`level1/wrongs/${quality}/end.mp4`}
          width="1px"
          height="1px"
        />
        <ReactPlayer
          className="react-player"
          url={`level1/rights/${quality}/6.mp4`}
          width="1px"
          height="1px"
        />
        <ReactPlayer
          className="react-player"
          url={`level1/rights/${quality}/7.mp4`}
          width="1px"
          height="1px"
        />
        <ReactPlayer
          className="react-player"
          url={`level1/rights/${quality}/8.mp4`}
          width="1px"
          height="1px"
        />
        <ReactPlayer
          className="react-player"
          url={`level1/rights/${quality}/9.mp4`}
          width="1px"
          height="1px"
        />
        <ReactPlayer
          className="react-player"
          url={`level1/rights/${quality}/end.mp4`}
          width="1px"
          height="1px"
        />
      </div>
      {/* <div className="flex flex-col justify-center items-center font-medium text-xl text-center invisible sm:visible pt-32">
        <h1>This is a Mobile-First Game</h1>
        <h1>Coming Soon to Other Devices</h1>
      </div> */}
    </div>
  );
};

export default Level1;
