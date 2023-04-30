"use client";
import Link from "next/link";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import React from "react";
import ReactPlayer from "react-player";
import { Modal, Button } from "antd";
import { IoArrowBackCircleSharp } from "react-icons/io5";

function level1() {
  const [questionNo, setQuestionNo] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [hideQuiz, setHideQuiz] = useState(false);
  const [rightAnswers, setRightAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [url, setUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  //   const [duration, setDuration] = useState(4);
  //   console.log(questionNo, rightAnswers, wrongAnswers, url);

  const questions = [
    {
      no: 1,
      question: "How many people live in India",
      options: ["1B", "2B", "1.2B", "10M"],
      rightAnswer: 2,
    },
    {
      no: 2,
      question: "How many people live in China",
      options: ["1B", "2B", "1.2B", "10M"],
      rightAnswer: 1,
    },
    {
      no: 3,
      question: "How many people live in EU",
      options: ["1B", "2B", "1.2B", "10M"],
      rightAnswer: 3,
    },
    {
      no: 4,
      question: "How many people live in Africa",
      options: ["1B", "2B", "1.2B", "10M"],
      rightAnswer: 1,
    },
    {
      no: 5,
      question: "2+2 = ?",
      options: ["4", "5", "6", "7"],
      rightAnswer: 0,
    },
    {
      no: 6,
      question: "How many people live in India",
      options: ["1B", "2B", "1.2B", "10M"],
      rightAnswer: 2,
    },
    {
      no: 7,
      question: "How many people live in China",
      options: ["1B", "2B", "1.2B", "10M"],
      rightAnswer: 1,
    },
    {
      no: 8,
      question: "How many people live in EU",
      options: ["1B", "2B", "1.2B", "10M"],
      rightAnswer: 3,
    },
    {
      no: 9,
      question: "How many people live in Africa",
      options: ["1B", "2B", "1.2B", "10M"],
      rightAnswer: 1,
    },
    {
      no: 10,
      question: "2+2 = ?",
      options: ["4", "5", "6", "7"],
      rightAnswer: 0,
    },
  ];

  const buttonClick = async (e) => {
    setShowVideo(true);
    setTimeout(() => setHideQuiz((hideQuiz) => !hideQuiz), 300);
    if (
      questions[questionNo].options[questions[questionNo].rightAnswer] ===
      e.target.textContent
    ) {
      setRightAnswers((rightAnswers) => [
        ...rightAnswers,
        e.target.textContent,
      ]);
      if (questionNo >= 9) {
        setQuestionNo((questionNo) => questionNo + 1);
      } else {
        setUrl(`level1/rights/${questionNo + 1}.mp4`);
        setTimeout(() => {
          setShowVideo(false);
          setHideQuiz(false);
          setQuestionNo((questionNo) => questionNo + 1);
        }, 4500);
      }
    } else {
      setWrongAnswers((wrongAnswers) => [
        ...wrongAnswers,
        e.target.textContent,
      ]);
      setUrl(`level1/wrongs/${wrongAnswers.length}.mp4`);
      setTimeout(() => {
        setShowVideo(false);
        setHideQuiz(false);
        setQuestionNo((questionNo) => questionNo + 1);
      }, 6000);
    }
  };

  //   const handleDuration = (duration) => {
  //     setDuration(duration);
  //   };

  return (
    <div>
      <div className="container p-10 sm:hidden">
        <Link href="/" replace>
          <Button
            type="default"
            shape="round"
            size="default"
            className="flex w-max justify-around items-center text-center pr-2 shadow"
          >
            <IoArrowBackCircleSharp className="w-6 h-6" />
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
          >
            <h1>5 Correct Answers to clear the level 🎖️</h1>
            <h1>5 wrong answers === Game Over 💀</h1>
          </Modal>
          <h1 className="text-center font-bold text-2xl mt-5">Level 1</h1>
        </div>
        {questionNo <= 9 && wrongAnswers.length <= 4 ? (
          <>
            <div className="flex flex-col justify-center text-center items-center sm:flex-row">
              {!hideQuiz ? (
                <div>
                  <h1 className="font-medium text-lg mt-3">
                    <span>{questionNo + 1}. </span>
                    {questions[questionNo].question}
                  </h1>
                  <ul className="mt-4">
                    {questions[questionNo].options.map((every, index) => (
                      <li className="mb-1" key={every}>
                        <button
                          className="bg-white border-black border-2 w-64 h-12 rounded-2xl font-medium mb-2"
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
                  <div className="font-semibold text-base mt-4">
                    Score : {rightAnswers.length}
                  </div>
                </div>
              ) : (
                <></>
              )}
              <div>
                {showVideo ? (
                  <div className="h-max w-[100%]">
                    {/* <ReactPlayer url={url} playing onDuration={handleDuration} /> */}
                    <ReactPlayer url={url} playing width={370} height={250} />
                    <div className="font-semibold text-base mt-4">
                      Score : {rightAnswers.length}
                    </div>
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
            <div className="w-full mt-5">
              <ul className="flex justify-evenly">
                {wrongAnswers.map((every) => (
                  <li key={every}>
                    <AiFillCloseCircle className="w-8 h-8" />
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-center mt-4">
            <h1 className="font-medium text-base text-center mb-4">
              {wrongAnswers.length > 4
                ? "Game Over 💀 : More than 5 Wrong Answers"
                : "🎉 🎖️ Level 1 Finished 🎖️ 🎉 "}
            </h1>
            <h1 className="font-medium text-lg text-center mb-4">
              Total Score : {rightAnswers.length}
            </h1>
            <div>
              <ReactPlayer
                url={
                  wrongAnswers.length > 4
                    ? "level1/wrongs/end.mp4"
                    : "level1/rights/end.mp4"
                }
                width={370}
                height={200}
                playing
              />
            </div>
            <button
              onClick={() => {
                setQuestionNo(0);
                setRightAnswers([]);
                setWrongAnswers([]);
                setShowVideo(false);
                setHideQuiz(false);
              }}
              className="font-bold text-xl text-center mt-5 border-2 border-black rounded-2xl p-3 pl-5 pr-5"
            >
              {wrongAnswers.length > 4 ? "Retry" : "Play Again"}
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center items-center font-medium text-xl text-center invisible sm:visible pt-32">
        <h1>This is a Mobile-First Game</h1>
        <h1>Coming Soon to Other Devices</h1>
      </div>
    </div>
  );
}

export default level1;
