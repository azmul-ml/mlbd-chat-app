import React from "react";
import { useParams } from "react-router-dom";
import { Button, Card } from "antd";
import cookie from "react-cookies";

import { useAppDispatch } from "../../../app/hooks";
import { AUTH_ACCESS_TOKEN } from "../../auth/constants/auth.keys";
import { lockGroup, unlockGroup } from "../redux/settings.slice";
// import { LoginCredentials } from "../types/auth.types";

export default function Settings() {
  const { id } = useParams<{ id: string }>();

  console.log("group id", id);
  const dispatch = useAppDispatch();
  // let history = useHistory();

  const handleLockGroupSubmit = async (id: string) => {
    const token = cookie.load(AUTH_ACCESS_TOKEN);
    const data = {
      group_id: id,
      token,
    };
    const res = await dispatch(lockGroup(data));
    // console.log(res.payload);
  };

  const handleUnlockGroupSubmit = async (id: string) => {
    const token = cookie.load(AUTH_ACCESS_TOKEN);
    const data = {
      group_id: id,
      token,
    };
    const res = await dispatch(unlockGroup(data));
    // console.log(res.payload);
  };

  return (
    <div className="">
      <Card title="Settings" style={{ width: 300 }}>
        <Button type="link" onClick={() => handleLockGroupSubmit(id)}>
          Lock Group
        </Button>
        <Button type="link" onClick={() => handleUnlockGroupSubmit(id)}>
          Unlock Group
        </Button>
      </Card>
    </div>
  );
}
