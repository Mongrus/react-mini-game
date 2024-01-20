/* eslint-disable spaced-comment */
/// <reference types="react-scripts" />

import React, { useEffect, useRef, useState } from 'react';
import GameContext from './context/GameContext';
import { useHotkeys } from 'react-hotkeys-hook';
import { FaHeart } from 'react-icons/fa';
import './App.sass';
import wasd from './wasd.png';

const App: React.FC = () => {
  // Расположение игрока
  const [optionsUser, setOptionsUser] = useState({
    left: `${0}rem`,
    top: `${0}rem`,
  });
  const [Y, setY] = useState(0);
  const [X, setX] = useState(0);
  // Расположение Еды
  const [optionsPoint, setOptionsPoint] = useState({
    left: `${Math.floor(Math.random() * 58)}rem`,
    top: `${Math.floor(Math.random() * 58)}rem`,
  });
  // Расположение девочки мишки
  const [fameal, setFameal] = useState({
    left: `${60}rem`,
    top: `${60}rem`,
  });
  // Расположение Волка
  const [optionsBot, setOptionsBot] = useState({
    left: `${60}rem`,
    top: `${60}rem`,
  });
  const wolf = useRef(0);
  // Расположение Мыши
  const [optionsBot2, setOptionsBot2] = useState({
    left: `${60}rem`,
    top: `${60}rem`,
  });
  const bat = useRef(0);
  // Расположение змеи
  const [optionsBot3, setOptionsBot3] = useState({
    left: `${60}rem`,
    top: `${60}rem`,
  });
  const snake = useRef(0);
  // Расположение крокодила
  const [optionsBot4, setOptionsBot4] = useState({
    left: `${60}rem`,
    top: `${60}rem`,
  });
  const croc = useRef(0);
  // Расположение тигра
  const [optionsBot5, setOptionsBot5] = useState({
    left: `${60}rem`,
    top: `${60}rem`,
  });
  const tiger = useRef(0);

  // Пчелы атакуют за мед
  const [bee, setBee] = useState({
    left: `${60}rem`,
    top: `${60}rem`,
  });
  const [bee2, setBee2] = useState({
    left: `${60}rem`,
    top: `${60}rem`,
  });
  const [bee3, setBee3] = useState({
    left: `${60}rem`,
    top: `${60}rem`,
  });

  // Бонус: Мед
  const [optionsHoney, setOptionsHoney] = useState({
    left: `${60}rem`,
    top: `${60}rem`,
  });
  const [plusHoney, setPlusHoney] = useState(false);
  const [speed, setSpeed] = useState(1);
  //------------------------------------------------------------------------------------

  const [points, setPoints] = useState(0);
  const [eat, setEat] = useState(Math.floor(Math.random() * 6));
  const [lovePoints, setLovePoints] = useState([<></>]);
  const [lovePointsQuantity, setLovePointsQuantity] = useState(0);
  const [startGame, setStartGame] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState({
    minutes: 0,
    seconds: 0,
  });
  const [delay, setDelay] = useState(1000);

  // Злые звери
  // ------------------------------------------------------------------------------------

  const positionBot = () => {
    // Расположение по Y
    const arrFieldSizeY = Array.from({ length: 58 }, (_, index) => index + 1);
    const rollY = arrFieldSizeY.splice(Number(fameal.left.substring(0, 2)), 1);
    const rollY2 = arrFieldSizeY.splice(
      Number(optionsPoint.left.substring(0, 2)),
      1
    );
    const rollY3 = arrFieldSizeY.splice(
      Number(optionsUser.left.substring(0, 2)),
      1
    );
    const rollY4 = arrFieldSizeY.splice(
      Number(optionsHoney.left.substring(0, 2)),
      1
    );

    const botY = Number(
      optionsBot.left.substring(0, optionsBot.left.length - 3)
    );

    //Расположение по X
    const arrFieldSizeX = Array.from({ length: 58 }, (_, index) => index + 1);
    const rollX = arrFieldSizeX.splice(Number(fameal.top.substring(0, 2)), 1);
    const rollX2 = arrFieldSizeX.splice(
      Number(optionsPoint.top.substring(0, 2)),
      1
    );
    const rollX3 = arrFieldSizeX.splice(
      Number(optionsUser.top.substring(0, 2))
    );
    const rollX4 = arrFieldSizeX.splice(
      Number(optionsHoney.top.substring(0, 2))
    );
    const botX = Number(optionsBot.top.substring(0, optionsBot.top.length - 3));

    // Движение ботов

    setOptionsBot({
      left: `${
        arrFieldSizeY[Math.floor(Math.random() * arrFieldSizeY.length)]
      }rem`,
      top: `${
        arrFieldSizeX[Math.floor(Math.random() * arrFieldSizeX.length)]
      }rem`,
    });

    setOptionsBot2({
      left: `${
        arrFieldSizeY[Math.floor(Math.random() * arrFieldSizeY.length)]
      }rem`,
      top: `${
        arrFieldSizeX[Math.floor(Math.random() * arrFieldSizeX.length)]
      }rem`,
    });
    setOptionsBot3({
      left: `${
        arrFieldSizeY[Math.floor(Math.random() * arrFieldSizeY.length)]
      }rem`,
      top: `${
        arrFieldSizeX[Math.floor(Math.random() * arrFieldSizeX.length)]
      }rem`,
    });
    setOptionsBot4({
      left: `${
        arrFieldSizeY[Math.floor(Math.random() * arrFieldSizeY.length)]
      }rem`,
      top: `${
        arrFieldSizeX[Math.floor(Math.random() * arrFieldSizeX.length)]
      }rem`,
    });
    setOptionsBot5({
      left: `${
        arrFieldSizeY[Math.floor(Math.random() * arrFieldSizeY.length)]
      }rem`,
      top: `${
        arrFieldSizeX[Math.floor(Math.random() * arrFieldSizeX.length)]
      }rem`,
    });

    // Пчелы
    if (plusHoney === true) {
      setBee({
        left: `${
          arrFieldSizeY[Math.floor(Math.random() * arrFieldSizeY.length)]
        }rem`,
        top: `${
          arrFieldSizeX[Math.floor(Math.random() * arrFieldSizeX.length)]
        }rem`,
      });
      setBee2({
        left: `${
          arrFieldSizeY[Math.floor(Math.random() * arrFieldSizeY.length)]
        }rem`,
        top: `${
          arrFieldSizeX[Math.floor(Math.random() * arrFieldSizeX.length)]
        }rem`,
      });
      setBee3({
        left: `${
          arrFieldSizeY[Math.floor(Math.random() * arrFieldSizeY.length)]
        }rem`,
        top: `${
          arrFieldSizeX[Math.floor(Math.random() * arrFieldSizeX.length)]
        }rem`,
      });
    }
  };

  // useEffect(() => {
  //   let num = Number(optionsBot.left.replace('rem', ' '));
  //   setInterval(() => {
  //     return num + 1;
  //   }, 1000);
  // }, [setOptionsBot, optionsBot]);

  // ------------------------------------------------------------------------------------

  // Волк активный
  useEffect(() => {
    const interval = setInterval(
      () => {
        wolf.current++;
        // console.log(num.current < 10);
        if (wolf.current === 1) {
          setOptionsBot({
            left: `${Number(optionsBot.left.replace('rem', ' ')) + 2}rem`,
            top: optionsBot.top,
          });
        }
        if (wolf.current === 2) {
          setOptionsBot({
            left: optionsBot.left,
            top: `${Number(optionsBot.top.replace('rem', ' ')) - 2}rem`,
          });
        }
        if (wolf.current === 3) {
          setOptionsBot({
            left: `${Number(optionsBot.left.replace('rem', ' ')) - 2}rem`,
            top: optionsBot.top,
          });
        }
        if (wolf.current === 4) {
          setOptionsBot({
            left: optionsBot.left,
            top: `${Number(optionsBot.top.replace('rem', ' ')) + 2}rem`,
          });
        }
        if (wolf.current === 5) {
          wolf.current = 0;
        }

        // console.log(num);
        // console.log(optionsBot);
      },
      isRunning ? 1000 : 0
    );
    return () => clearInterval(interval);
  }, [setOptionsBot, optionsBot]);

  // Летучая мышь
  useEffect(() => {
    const interval = setInterval(
      () => {
        bat.current++;
        // console.log(num.current < 10);
        if (bat.current === 1) {
          setOptionsBot2({
            left: optionsBot2.left,
            top: `${Number(optionsBot2.top.replace('rem', ' ')) - 2}rem`,
          });
        }
        if (bat.current === 2) {
          setOptionsBot2({
            left: optionsBot2.left,
            top: `${Number(optionsBot2.top.replace('rem', ' ')) - 2}rem`,
          });
        }
        if (bat.current === 3) {
          setOptionsBot2({
            left: optionsBot2.left,
            top: `${Number(optionsBot2.top.replace('rem', ' ')) + 2}rem`,
          });
        }
        if (bat.current === 4) {
          setOptionsBot2({
            left: optionsBot2.left,
            top: `${Number(optionsBot2.top.replace('rem', ' ')) + 2}rem`,
          });
        }
        if (bat.current === 5) {
          setOptionsBot2({
            left: optionsBot2.left,
            top: `${Number(optionsBot2.top.replace('rem', ' ')) + 2}rem`,
          });
        }
        if (bat.current === 6) {
          setOptionsBot2({
            left: optionsBot2.left,
            top: `${Number(optionsBot2.top.replace('rem', ' ')) - 2}rem`,
          });
        }
        if (bat.current === 7) {
          bat.current = 0;
        }

        // console.log(num);
        // console.log(optionsBot);
      },
      isRunning ? 500 : 0
    );
    return () => clearInterval(interval);
  }, [setOptionsBot2, optionsBot2]);

  // Змея активна
  useEffect(() => {
    const interval = setInterval(
      () => {
        snake.current++;
        // console.log(num.current < 10);
        if (snake.current === 1) {
          setOptionsBot3({
            left: optionsBot3.left,
            top: `${Number(optionsBot3.top.replace('rem', ' ')) - 2}rem`,
          });
        }
        if (snake.current === 2) {
          setOptionsBot3({
            left: optionsBot3.left,
            top: `${Number(optionsBot3.top.replace('rem', ' ')) + 2}rem`,
          });
        }
        if (snake.current === 3) {
          setOptionsBot3({
            left: `${Number(optionsBot3.left.replace('rem', ' ')) - 2}rem`,
            top: optionsBot3.top,
          });
        }
        if (snake.current === 4) {
          setOptionsBot3({
            left: `${Number(optionsBot3.left.replace('rem', ' ')) + 2}rem`,
            top: optionsBot3.top,
          });
        }
        if (snake.current === 5) {
          setOptionsBot3({
            left: `${Number(optionsBot3.left.replace('rem', ' ')) + 2}rem`,
            top: optionsBot3.top,
          });
        }
        if (snake.current === 6) {
          setOptionsBot3({
            left: `${Number(optionsBot3.left.replace('rem', ' ')) - 2}rem`,
            top: optionsBot3.top,
          });
        }
        if (snake.current === 7) {
          snake.current = 0;
        }

        // console.log(num);
        // console.log(optionsBot);
      },
      isRunning ? 2000 : 0
    );
    return () => clearInterval(interval);
  }, [setOptionsBot3, optionsBot3]);

  // Управлени
  // ------------------------------------------------------------------------------------
  useHotkeys('w', () => setX(X - 1));
  useHotkeys('a', () => setY(Y - 1));
  useHotkeys('d', () => setY(Y + 1));
  useHotkeys('s', () => setX(X + 1));

  useHotkeys('w + a', () => {
    setX(X - speed);
    setY(Y - speed);
  });
  useHotkeys('w + d', () => {
    setX(X - speed);
    setY(Y + speed);
  });
  useHotkeys('s + a', () => {
    setX(X + speed);
    setY(Y - speed);
  });
  useHotkeys('s + d', () => {
    setY(Y + speed);
    setX(X + speed);
  });
  // ------------------------------------------------------------------------------------

  useEffect(() => {
    // console.log('Распооложение персонажа', Y, X);
    setOptionsUser({ left: `${Y}rem`, top: `${X}rem` });
    // Проверка собирания еды
    if (
      (optionsUser.left === optionsPoint.left &&
        optionsUser.top === optionsPoint.top) ||
      (Number(optionsUser.left.replace('rem', ' ')) + 1 ===
        Number(optionsPoint.left.replace('rem', ' ')) &&
        optionsUser.top === optionsPoint.top) ||
      (Number(optionsUser.left.replace('rem', ' ')) + 1 ===
        Number(optionsPoint.left.replace('rem', ' ')) &&
        optionsUser.top === optionsPoint.top) ||
      (optionsUser.left === optionsPoint.left &&
        Number(optionsUser.top.replace('rem', ' ')) + 1 ===
          Number(optionsPoint.top.replace('rem', ' '))) ||
      (optionsUser.left === optionsPoint.left &&
        Number(optionsUser.top.replace('rem', ' ')) - 1 ===
          Number(optionsPoint.top.replace('rem', ' ')))
    ) {
      setPoints(points + 1);
      setOptionsPoint({
        left: `${Math.floor(Math.random() * 58)}rem`,
        top: `${Math.floor(Math.random() * 58)}rem`,
      });
      setEat(Math.floor(Math.random() * 3));
      positionBot();
    }
    // Проверка встречи девочки мишки
    if (optionsUser.left === fameal.left && optionsUser.top === fameal.top) {
      setLovePoints([...lovePoints, <FaHeart />]);
      setFameal({
        left: `60rem`,
        top: `60rem`,
      });
      setPoints(points + 1);
      setLovePointsQuantity(lovePointsQuantity + 1);
    }
    // Проверка нападения зверей
    if (
      (optionsUser.left === optionsBot.left &&
        optionsUser.top === optionsBot.top) ||
      (optionsUser.left === optionsBot2.left &&
        optionsUser.top === optionsBot2.top) ||
      (optionsUser.left === optionsBot3.left &&
        optionsUser.top === optionsBot3.top) ||
      (optionsUser.left === optionsBot4.left &&
        optionsUser.top === optionsBot4.top) ||
      (optionsUser.left === optionsBot5.left &&
        optionsUser.top === optionsBot5.top) ||
      (optionsUser.left === bee.left && optionsUser.top === bee.top) ||
      (optionsUser.left === bee2.left && optionsUser.top === bee2.top) ||
      (optionsUser.left === bee3.left && optionsUser.top === bee3.top)
    ) {
      if (lovePointsQuantity === 0) {
        setPoints(0);
        setLovePoints([<></>]);
      } else {
        setLovePointsQuantity(lovePointsQuantity - 1);
        lovePoints.pop();
      }
    }

    // Уход за экран
    if (Number(optionsUser.left.replace('rem', ' ')) > 59) {
      setY(-1);
    } else if (Number(optionsUser.left.replace('rem', ' ')) < -1) {
      setY(59);
    } else if (Number(optionsUser.top.replace('rem', ' ')) > 58) {
      setX(-3);
    } else if (Number(optionsUser.top.replace('rem', ' ')) < -3) {
      setX(58);
    }

    // Увеличение скорости от меда

    if (
      optionsUser.left === optionsHoney.left &&
      optionsUser.top === optionsHoney.top
    ) {
      setPlusHoney(true);
      setOptionsHoney({
        left: `${60}rem`,
        top: `${60}rem`,
      });
    }
    if (plusHoney) {
      setSpeed(2);
    } else {
      setSpeed(1);
    }
  }, [Y, X]);

  useEffect(() => {
    if (lovePointsQuantity === 3) {
      setOptionsHoney({
        left: `${Math.floor(Math.random() * 58)}rem`,
        top: `${Math.floor(Math.random() * 58)}rem`,
      });
    }
  }, [lovePointsQuantity]);

  // Случайный спавн девочки мишки при наборе определенного количества очков
  // ------------------------------------------------------------------------------------
  useEffect(() => {
    if (points === 5 || points === 10 || points === 15) {
      setFameal({
        left: `${Math.floor(Math.random() * 58)}rem`,
        top: `${Math.floor(Math.random() * 58)}rem`,
      });
    }
  }, [points, setPoints]);
  // ------------------------------------------------------------------------------------
  //Таймер

  function useInterval(callback: any, delay: number | null) {
    const savedCallback: any = useRef();
    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, 1000);
        return () => clearInterval(delay);
      }
    }, [delay]);
  }

  useInterval(
    () => {
      // Your custom logic here
      setCount({
        minutes: count.minutes,
        seconds: count.seconds + 1,
      });
      if (count.seconds >= 59) {
        setCount({
          minutes: count.minutes + 1,
          seconds: 0,
        });
      }
    },
    isRunning ? delay : null
  );

  // Результат

  const FuncResult = () => {
    if (points <= 5) {
      return <h2>🔴 Вы могли сыграть намного лучше... 🔴</h2>;
    }
    if (points <= 10) {
      return (
        <h2>
          🔶 Это очень мало ! Но не расстраивайтесь, просто съиграйте еще разок
          ! 🔶
        </h2>
      );
    }
    if (points <= 20) {
      return <h2>🥈 Это средний результат ! Неплохо ! 🥈</h2>;
    }
    if (points <= 25) {
      return (
        <h2>
          🥇 Вы действительно постарались, молодец ! Это отличный результат ! 🥇
        </h2>
      );
    }
    if (points > 24) {
      return (
        <h2>
          🏆 Вас ничего не остановит ! Вы прошли игру на Максимум, поздравляю !
          🏆
        </h2>
      );
    }
  };

  // Перезагрузка страницы
  const newGame = () => {
    window.location.reload();
  };

  return (
    <GameContext.Provider
      value={{
        isRunning,
        setIsRunning: () => {},
        optionsBot,
        setOptionsBot: () => {},
        count,
        setCount: () => {},
      }}
    >
      <div className="border">
        {startGame ? (
          <div className="gameBody">
            {count.minutes < 2 ? (
              <div>
                <h1>{`${count.minutes}:${
                  count.seconds < 10 ? '0' + count.seconds : count.seconds
                }`}</h1>
                {/* <button onClick={() => setIsRunning(!isRunning)}>Стоп</button> */}
              </div>
            ) : (
              <></>
            )}
            <div className="gameWasdAndField">
              {count.minutes < 2 ? (
                <div className="gameWasdAndField__wasd">
                  <h2>Управление:</h2>
                  <img src={wasd} alt="" />
                  <button onClick={newGame}>Рестарт</button>
                </div>
              ) : (
                <></>
              )}
              {count.minutes < 2 ? (
                <div className="game" ref={ref}>
                  <div
                    className={points < 20 ? 'user' : 'userNight'}
                    style={optionsUser}
                  >
                    <div
                      className={
                        points < 20 ? 'user__health' : 'userNight__healthNight'
                      }
                    >
                      {lovePoints.map((el) => {
                        return el;
                      })}
                    </div>
                    <h1>🧸</h1>
                  </div>
                  <div className="point" style={optionsPoint}>
                    {(eat === 0 && <h2>🍇</h2>) ||
                      (eat === 1 && <h2>🍓</h2>) ||
                      (eat === 2 && <h2>🫐</h2>) ||
                      (eat === 3 && <h2>🍎</h2>) ||
                      (eat === 4 && <h2>🍒</h2>) ||
                      (eat === 5 && <h2>🍐</h2>)}
                  </div>
                  <div className="bot" style={optionsBot}>
                    <h1>🐺</h1>
                  </div>
                  <div className="bot" style={optionsBot2}>
                    <h1>🦇</h1>
                  </div>
                  <div className="bot" style={optionsBot3}>
                    <h1>🐍</h1>
                  </div>
                  <div className="bot" style={optionsBot4}>
                    <h1>🐊</h1>
                  </div>
                  <div className="bot" style={optionsBot5}>
                    <h1>🐅</h1>
                  </div>
                  {points === 5 || points === 10 || points === 15 ? (
                    <div className="femail" style={fameal}>
                      <h2>🧸</h2>
                    </div>
                  ) : (
                    <></>
                  )}
                  {lovePointsQuantity === 3 ? (
                    <div className="bot" style={optionsHoney}>
                      <h2>🍯</h2>
                    </div>
                  ) : (
                    <></>
                  )}
                  {plusHoney === true ? (
                    <div className="bot" style={bee}>
                      <h2>🐝</h2>
                    </div>
                  ) : (
                    <></>
                  )}
                  {plusHoney === true ? (
                    <div className="bot" style={bee2}>
                      <h2>🐝</h2>
                    </div>
                  ) : (
                    <></>
                  )}
                  {plusHoney === true ? (
                    <div className="bot" style={bee3}>
                      <h2>🐝</h2>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              ) : (
                <div className="gameOver">
                  <h2>Игра оконченна !</h2>
                  <h3>Очков набрано {points}</h3>
                  {FuncResult()}
                  <button onClick={newGame}>Начать заново</button>
                </div>
              )}
              {count.minutes < 2 ? (
                <div className="gameWasdAndField__points">
                  <div>
                    <h2>Очки: {points}</h2>
                  </div>
                  <h3>🍓 = +1</h3>
                  <h3>🧸 = +1 и ❤️</h3>
                  <h3>❤️ = 🛡️</h3>
                  <h3>3(❤️) = 🍯</h3>
                  <h3>🍯 = 🧸</h3>
                  <h3>🐺 🐊 🦇 = -1</h3>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        ) : (
          <div className="startGame">
            <div className="startGame__text">
              <h1>Привет !</h1>
              <h2>Правила очень просты:</h2>
              <h3>
                1. Собирайте еду 🍓, ищите маленького мишку 🧸 (он подарит вам
                ❤️) и конечно же мед 🍯 для ускорения.
              </h3>
              <h3>
                2. Избегайте злых зверей 🐺 они забирают драгоценные очки.
              </h3>
              <h3>
                3. Наберите как можно больше очков за 2 минуты. Максимум 25 ✅
              </h3>
              <button
                onClick={() => {
                  setStartGame(true);
                  setIsRunning(!isRunning);
                }}
              >
                Начать игру
              </button>
            </div>
          </div>
        )}
      </div>
    </GameContext.Provider>
  );
};

export default App;
