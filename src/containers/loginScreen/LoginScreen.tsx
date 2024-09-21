import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { routesPath } from "../../constants/common";

const LoginScreen = () => {
  const [username, setUsername] = useState("fetestuser@example.com");
  const [password, setPassword] = useState("fetest1234");

  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };


  const handleSubmit = async () => {
    // Todo
    navigate(`/${routesPath.HOME}`);
    
  };

  const handleForgotPassword = async () => {
    // Todo
  };

  return (
    <div className="flex flex-row w-screen">
      <div
        style={{ backgroundImage: `url(/src/assets/login-left-bg.svg)` }}
        className="w-1/2 bg-primary-color h-screen flex-col align-middle p-20 bg-cover bg-blend-darken"
      >
        <div className="flex flex-row justify-center align-middle h-fit"></div>
        <div className="w-full flex justify-center pt-20 pb-16">
        </div>
        <div className="w-full flex justify-center">
          <h1 className="text-white text-4xl text-center text-wrap max-w-96">
            Online Community For Front-end Developers
          </h1>
        </div>
        <div className="w-full flex justify-center pt-8">
          <h6 className="text-slate-100 text-xs text-center text-wrap max-w-96">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididun.
          </h6>
        </div>
      </div>
      <div className="w-1/2 flex justify-center align-middle">
        <div className="w-96 flex flex-col self-center">
          <h1 className="text-3xl text-slate-900 text-center">
            {t("sign_in")}
          </h1>
          {
            <div className="flex flex-col pt-4">
              <p className="text-gray-400 text-xs">{t("email")}</p>
              <input
                type="text"
                placeholder="username"
                value={username}
                className="border-b border-border-color focus:outline-none focus:border-primary-color text-xs pt-4"
                onChange={handleUsernameChange}
              />
              <p className="text-gray-400 text-xs mt-8">{t("password")}</p>
              <input
                type="password"
                value={password}
                placeholder="Password"
                className="border-b border-border-color focus:outline-none focus:border-primary-color pt-4 text-xs"
                onChange={handlePasswordChange}
              />
              <div className="flex flex-row justify-between pt-8">
                <div className="flex flex-row">
                  <input
                    type="checkbox"
                    className="h-4 w-4 checked:bg-blue-100"
                  />
                  <p className="text-xs pl-2 text-gray-400">
                    {t("accept_terms")}
                  </p>
                </div>
              </div>
              <button
                className="bg-gradient-to-br from-primary-color to-tertiary-color text-white text-lg py-2 mt-8 rounded-xl focus:outline-none"
                onClick={handleSubmit}
              >
                {t("sign_in")}
              </button>
            </div>
          }
          {
            <div className="flex flex-row justify-center pt-8">
              <p className="text-xs">
                <a
                  onClick={handleForgotPassword}
                  className="text-primaryfrom-primary-color underline cursor-pointer"
                >
                  {t("forgot_password")}
                </a>
              </p>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
