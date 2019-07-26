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
    reward: {},
    rewardsArr: [],
    claimedRewardsArr: [],
    choreName: "",
    cheddarReward: null,
    rewardName: "",
    rewardAmount: null
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
          console.log(data)
        })
        .catch(e => console.log(e));
    }).catch(e => console.log(e));
  };

  choreState.assignReward = event => {
    console.log(event.target.id);
    console.log(event.target.getAttribute('rewardid'))

    const updateRewardInfo = {
      isClaimed: true,
      child: event.target.id
    }

    Chores.updateReward(event.target.getAttribute('rewardid'), updateRewardInfo)
      .then(_ => {
        Chores.getAllRewards()
          .then(({ data }) => {
            const claimedRewards = data.filter(reward => reward.isClaimed === true)
            //  console.log(claimedRewards)
            setChoreState({ ...choreState, rewardsArr: data, claimedRewardsArr: claimedRewards })
          }).catch(e => console.log(e))
      }).catch(e => console.log(e))
  };

  choreState.addChore = event => {
    event.preventDefault();
    const chore = {
      name: choreState.choreName,
      points: parseInt(choreState.cheddarReward),
      child: choreState.child._id,
      isCompleted: false
    };

    Chores.addChore(chore).then(_ => {
      Chores.getAllChildren()
        .then(({ data }) => {
          const childUpdate = data.filter(
            child => child._id === chore.child
          )[0];
          // console.log(childUpdate)
          setChoreState({
            ...choreState,
            choreName: "",
            cheddarReward: null,
            childArr: data,
            child: childUpdate
          });
          // console.log(choreState.childArr)
        })
        .catch(e => console.log(e));
    }).catch(e => console.log(e));
  };



  choreState.deleteAChore = data => {
    console.log(data);
    Chores.deleteChore(data.id)
      .then(_ => {
        window.location.reload()

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
          // localStorage.setItem('id', data._id)
          setUserState({
            ...userState,
            isLoggedIn: data.isLoggedIn,
            userName: data.user
          });
          window.location.href = "/childrenform";
          // console.log(userState.isLoggedIn);
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
        console.log(data);
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
    Chores.getAllChildren()
      .then(({ data }) => {
        // console.log(data);
        Chores.getAllRewards()
          .then(({ data: data1 }) => {
            console.log(data1);
            setChoreState({ ...choreState, childArr: data, rewardsArr: data1 });
          })
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <>
      <Router>
        <Route exact path="/" render={_ => <Home />} />

        <ChoresContext.Provider value={choreState}>
          <Route exact path="/dashboard" render={_ => <Dashboard />} />
        </ChoresContext.Provider>

        <ChoresContext.Provider value={choreState}>
          <Route exact path="/chorespage" render={_ => <Chorespage />} />
        </ChoresContext.Provider>

        <ChoresContext.Provider value={choreState}>
          <Route exact path="/rewardspage" render={_ => <Rewards />} />
          <Route exact path="/profilepage" render={_ => <ProfilePage />} />
        </ChoresContext.Provider>

        <ChoresContext.Provider value={userState}>
          <Route exact path="/signin" render={_ => <SignUpPage />} />
        </ChoresContext.Provider>

        <ChoresContext.Provider value={choreState}>
          <Route
            exact
            path="/childrenform"
            render={_ => <ChildrenFormPage />}
          />
        </ChoresContext.Provider>
      </Router>
    </>
  );
};

export default App;
