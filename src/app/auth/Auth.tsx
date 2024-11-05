import React, { FC } from "react";
import s from "./Auth.module.scss";
const Auth: FC = () => {
  return (
    <div>
      <div className={s.header}>
        <div className="container">
          <div className={s.head}>
            <h1>YumeDream</h1>
          </div>
          <div className={s.cont}>
            <div className={s.image}>
              <button>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
