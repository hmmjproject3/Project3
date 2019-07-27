import React, { useEffect, useState } from "react";
import Chores from "./utils/Chores.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chorespage from "./pages/Chores";
import Rewards from "./pages/Reward";
import Dashboard from "./pages/Dashboard";
import ChoresContext from "./utils/ChoresContext";
import SignUpPage from "./pages/SignUp";
import ChildrenFormPage from "./pages/ChildrenFormPage";
import ProfilePage from "./pages/ProfilePage";
// import { object } from 'prop-types';

const App = _ => {
  //Chore State and its functions
  const [choreState, setChoreState] = useState({
    chore: {},
    choresArr: [],
    child: {},
    childArr: [],
    profileArr: {},
    kidChoresArr: [],
    reward: {},
    rewardsArr: [],
    claimedRewardsArr: [],
    choreName: "",
    cheddarReward: null,
    rewardName: "",
    rewardAmount: null,
    updatingTracker: false,
    bonusChoreName: '',
    bonusChoreCheddar: null
  });


  choreState.handleInputChange = event => {
    setChoreState({ ...choreState, [event.target.id]: event.target.value });
  };

  choreState.addReward = event => {
    event.preventDefault();
    const reward = {
      name: choreState.rewardName,
      points: parseInt(choreState.rewardAmount),
      isClaimed: false
    };
    // console.log(reward)

    Chores.addReward(reward).then(_ => {
      Chores.getAllRewards()
        .then(({ data }) => {
          setChoreState({
            ...choreState,
            rewardName: "",
            rewardAmount: null,
            rewardsArr: data,
          });
        })
        .catch(e => console.log(e));
    }).catch(e => console.log(e));
  };

  choreState.assignReward = event => {

    const rewardId = event.target.getAttribute('rewardid')
    const childId = event.target.id
    let difference

    const updateRewardInfo = {
      isClaimed: true,
      child: event.target.id
    }


    Chores.updateReward(event.target.getAttribute('rewardid'), updateRewardInfo)
      .then(_ => {

        Chores.getOneChild(childId)
          .then(({ data }) => {


            Chores.getAllRewards()
              .then(({ data: dataRewards }) => {
                const claimedReward = dataRewards.filter(reward => reward._id === rewardId)[0]
                difference = data.totalPoints - claimedReward.points
                Chores.updateChild(childId, {
                  totalPoints: difference //dataRewards.filter(reward => reward._id === rewardId)[0].points
                }).then(_ => {
                  Chores.getAllChildren()
                    .then(({ data: myKids }) => {
                      setChoreState({ ...choreState, childArr: myKids, rewardsArr: dataRewards, reward: claimedReward, child: data })
                    })
                    .catch(e => console.log(e));
                })
                  .catch(e => console.log(e));
              })
              .catch(e => console.log(e))
          }).catch(e => console.log(e))
      }).catch(e => console.log(e))
  }


  choreState.addChore = event => {
    event.preventDefault();
    const chore = {
      name: choreState.choreName,
      points: parseInt(choreState.cheddarReward),
      child: choreState.child._id,
      isCompleted: false,
      isBonus: false,
      isClaimed: true,
    };

    Chores.addChore(chore).then(_ => {
      Chores.getAllChildren()
        .then(({ data }) => {
          const childUpdate = data.filter(
            child => child._id === chore.child
          )[0];
          setChoreState({
            ...choreState,
            choreName: "",
            cheddarReward: null,
            childArr: data,
            child: childUpdate
          });
        })
        .catch(e => console.log(e));
    }).catch(e => console.log(e));
  };


  choreState.addBonusChore = event => {
    event.preventDefault();
    const chore = {
      name: choreState.choreName,
      points: parseInt(choreState.cheddarReward),
      isCompleted: false,
      isBonus: true,
      isClaimed: false
    };

    Chores.addChore(chore).then(_ => {
      Chores.getAllChores()
        .then(({data})=>{ 
          setChoreState({...choreState, choresArr:data,
            choreName: "",
            cheddarReward: null})
        })
        .catch(e => console.log(e));
    }).catch(e => console.log(e));
  };



  choreState.handleGetProfile = _id => {
    setChoreState({...choreState, profileArr: {}, kidChoresArr: []})
    const childId = _id
    const profileArr = {}
    const kidChoresArr = []
    Chores.getOneChild(childId)
    .then(({ data }) => {
      kidChoresArr.push(data.chores)
      setChoreState({...choreState, profileArr: data, kidChoresArr: data.chores})
      console.log(kidChoresArr)
    })
    .catch(e => console.log(e))
  }


  choreState.assignBonusChore = event => {

    const choreId = event.target.getAttribute('choreid')
    const childId = event.target.id
    // let difference

    const updateChoreInfo = {
      child: childId,
      isClaimed: true
    }

    Chores.updateBonusChore(event.target.getAttribute('choreid'), updateChoreInfo)
    .then(_ => {

      Chores.getOneChild(childId)
        .then(({ data }) => {


          Chores.getAllChores()
            .then(({ data: dataChores }) => {
              // console.log(dataChores)
                Chores.getAllChildren()
                  .then(({ data: myKids }) => {
                    setChoreState({ ...choreState, childArr: myKids, choresArr: dataChores, child: data })
                    // console.log(myKids)
                  })
                  .catch(e => console.log(e));
              // })
              //   .catch(e => console.log(e));
            })
            .catch(e => console.log(e))
        }).catch(e => console.log(e))
    }).catch(e => console.log(e))
}

  choreState.deleteAChore = data => {
    Chores.deleteChore(data.id)
      .then(_ => {
        // if (!data.isBonus){
          
          window.location.reload()
        // } 
        // Chores.getAllChildren()
        //   .then(({data}) =>  {
        //     setChoreState({...choreState, childArr: data, updatingTracker: choreState.updatingTracker ? true : false})


        // Chores.getAllChildren()
        //   .then(({ data }) => {
        //     setChoreState(prev => {
        //       return { ...prev, childArr: data }
        //     })
        //   })
        //   .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  };

  choreState.addChildren = arr => {
    if (arr.length) {
      Chores.addManyChildren({
        childArr: arr
      }).then(_ => {
        setChoreState({ ...choreState, childArr: arr });
      });
      window.location.href = '/chorespage'
    } else {
      alert("Please add children to continue");
    }
  };

  choreState.selectChild = child => {
    setChoreState({ ...choreState, child });
  };

  //User State and its functions
  const [userState, setUserState] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
    _userName: "",
    _userPassword: "",
    isLoggedIn: false
  });

  userState.handleInputChange = event => {
    setUserState({ ...userState, [event.target.id]: event.target.value });
  };

  userState.registerUser = event => {
    event.preventDefault();

    const user = {
      name: userState.name,
      username: userState.userName,
      email: userState.email,
      password: userState.password
    };

    Chores.addUser(user)
      .then(({ data }) => {
        console.log(data);
        if (data.isLoggedIn) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", data.user);
          setUserState({
            ...userState,
            isLoggedIn: data.isLoggedIn,
            userName: data.user
          });
          window.location.href = "/childrenform";
        }
      })
      .catch(e => console.error(e));
  };

  userState.loginUser = event => {
    event.preventDefault();

    const loginUser = {
      username: userState._userName,
      password: userState._userPassword
    };

    Chores.loginUser(loginUser)
      .then(({ data }) => {
        if (data.isLoggedIn) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", data.user);
          setUserState({
            ...userState,
            isLoggedIn: data.isLoggedIn,
            userName: data.user
          });
          window.location.href = "/dashboard";
        } else {
          alert("Invalid username or password");
        }
      })
      .catch(e => console.error(e));
  };

  //USE EFFECT
  //When navigating to the login/signup page if we fail to verify, we should try using this in the future
  //https://stackoverflow.com/questions/47476186/when-user-is-not-logged-in-redirect-to-login-reactjs
  //I don't think what I have right now is idea but it works!
  useEffect(_ => {

    Chores.verifyUser()
      .then(_ => {
        if (window.location.pathname === '/signin') {
          window.location.href = '/dashboard'
        }

        Chores.getAllChildren()
          .then(({ data }) => {
            const firstChild = data[0]
            // console.log(data);
            Chores.getAllRewards()
              .then(({ data: data1 }) => {

                Chores.getAllChores()
                  .then(({ data: allChores}) => {

                setChoreState({ ...choreState, choresArr: allChores, childArr: data, rewardsArr: data1, child: firstChild, profileArr: firstChild });


                  }).catch(e => console.log(e));
                
   
              })
              .catch(e => console.log(e));
          })
          .catch(e => console.log(e));
      }).catch(e => {
        if (window.location.pathname !== '/signin') {
          window.location.href = '/signin'
        }
      })

  }, []);

  return (
    <>
      <Router>

        <ChoresContext.Provider value={userState}>
          <Route exact path="/signin" render={_ => <SignUpPage />} />
        </ChoresContext.Provider>

        <ChoresContext.Provider value={choreState}>
          <Route exact path="/" render={_ => Chores.verifyUser() ? <Dashboard /> : <SignUpPage />} />

          <Route exact path="/dashboard" render={_ => <Dashboard />} />

          <Route exact path="/chorespage" render={_ => <Chorespage />} />

          <Route exact path="/rewardspage" render={_ => <Rewards />} />

          <Route exact path="/profilepage" render={_ => <ProfilePage />} />

          <Route exact path="/childrenform" render={_ => <ChildrenFormPage />} />
        </ChoresContext.Provider>
      </Router>
    </>
  );
};

export default App;
