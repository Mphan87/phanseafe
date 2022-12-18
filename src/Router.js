import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import NavBar from "./NavBar";
import PhanSeaApi from "./Api";
import { Routes, Route } from "react-router-dom";
import FishList from "./SWFishList";
import CoralList from "./CoralList";
import FishDetails from "./SWFishDetails";
import FishType from "./SWFishType";
import FWFishList from "./FWFishList";
import FWFishDetails from "./FWFishDetails";
import FWFishType from "./FWFishType";
import CoralType from "./CoralType";
import Profile from "./Profile";
import CoralDetails from "./CoralDetails";
import Home from "./Home";
import SignupForm from "./auth/SignupForm";
import LoginForm from "./auth/LoginForm";
import CreateswfishForm from "./forms/CreateswfishForm";
import CreatefwfishForm from "./forms/CreatefwfishForm";
import CreatecoralForm from "./forms/CreatecoralForm";
import UserContext from "./auth/UserContext";
import jwt_decode from "jwt-decode"
export const TOKEN_STORAGE_ID = "fish-token";

function Router({ signup }) {
  const [isLoading, setIsLoading] = useState(true);
  const [fishes, setFishes] = useState([])
  const [corals, setCorals] = useState([])
  const [fwfishes, setfwFishes] = useState([])
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);


  useEffect(function loadUserInfo() {
    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt_decode(token);
          PhanSeaApi.token = token;
          let currentUser = await PhanSeaApi.getCurrentUser(username);
          setCurrentUser(currentUser);
        } catch (err) {
          setCurrentUser(null);
        }
      }
    }
    getCurrentUser();
  }, [token]);

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  useEffect(() => {
    async function getFishes() {
      let fishes = await PhanSeaApi.getfishes();
      setFishes(fishes);
      setIsLoading(false);
    }
    getFishes();
  }, []);

  useEffect(() => {
    async function getfwFishes() {
      let fishes = await PhanSeaApi.getfwfishes();
      setfwFishes(fishes);
      setIsLoading(false);
    }
    getfwFishes();
  }, []);

  useEffect(() => {
    async function getCorals() {
      let corals = await PhanSeaApi.getcorals();
      setCorals(corals);
      setIsLoading(false);
    }
    getCorals();
  }, []);

  async function createswfish(swData) {
    try {
      await PhanSeaApi.createswfish(swData);
      return { success: true };
    } catch (errors) {
      console.error("create fish fail", errors);
      return { success: false, errors };
    }
  }

  async function createfwfish(fwData) {
    try {
      await PhanSeaApi.createfwfish(fwData);
      return { success: true };
    } catch (errors) {
      console.error("create fish fail", errors);
      return { success: false, errors };
    }
  }


  async function createcoral(coralData) {
    try {
      await PhanSeaApi.createcoral(coralData);
      return { success: true };
    } catch (errors) {
      console.error("create fish fail", errors);
      return { success: false, errors };
    }
  }

  async function signup(signupData) {
    try {
      let token = await PhanSeaApi.signup(signupData);
      setToken(token);
      console.log(setToken)

      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  async function login(loginData) {
    try {
      let token = await PhanSeaApi.login(loginData);
      console.log(token)
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }



  return (
    <BrowserRouter>

      <UserContext.Provider value={{ currentUser, setCurrentUser }}>

        <NavBar logout={logout} />
        
        <Routes>
          <Route path="/profile" element={<Profile />} />
        </Routes>

        <Routes>
          <Route path="/login" element={<LoginForm login={login} />} />
        </Routes>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/signup" element={<SignupForm signup={signup} />} />
        </Routes>

        <Routes>
          <Route path="/saltwaterfish" element={<FishList fishes={fishes} />} />
        </Routes>

        <Routes>
          <Route path="/createswfish" element={<CreateswfishForm createswfish={createswfish} />} />
        </Routes>

        <Routes>
          <Route path="/saltwaterfish/:handle" element={<FishDetails fishes={fishes} cantFind="/saltwaterfish" />} />
        </Routes>

        <Routes>
          <Route path="/saltwaterfish/type/:type" element={<FishType fishes={fishes} cantFind="/saltwaterfish" />} />
        </Routes>

        <Routes>
          <Route path="/freshwaterfish" element={<FWFishList fwfishes={fwfishes} />} />
        </Routes>

        <Routes>
          <Route path="/createfwfish" element={<CreatefwfishForm createfwfish={createfwfish} />} />
        </Routes>

        <Routes>
          <Route path="/freshwaterfish/:handle" element={<FWFishDetails fwfishes={fwfishes} cantFind="/freshwaterfish" />} />
        </Routes>

        <Routes>
          <Route path="/freshwaterfish/type/:type" element={<FWFishType fwfishes={fwfishes} cantFind="/freshwaterfish" />} />
        </Routes>

        <Routes>
          <Route path="/coral" element={<CoralList corals={corals} />} />
        </Routes>

        <Routes>
          <Route path="/createcoral" element={<CreatecoralForm createcoral={createcoral} />} />
        </Routes>

        <Routes>
          <Route path="/coral/:handle" element={<CoralDetails corals={corals} cantFind="/coral" />} />
        </Routes>

        <Routes>
          <Route path="/coral/type/:type" element={<CoralType corals={corals} cantFind="/coral" />} />
        </Routes>

      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default Router;